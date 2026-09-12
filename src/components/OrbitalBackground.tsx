import React, { useEffect, useRef } from 'react';

export const OrbitalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false, antialias: false, depth: false, preserveDrawingBuffer: false
    });
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    const VS = `
      attribute vec2 aPos;
      varying vec2 vUV;
      void main() {
        vUV = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;

    const FS = `
      precision highp float;
      varying vec2 vUV;

      uniform float uTime;
      uniform vec2  uRes;
      uniform vec3  uC1, uC2, uC3, uC4, uC5, uC6, uC7;
      uniform float uA1, uA2, uA3, uA4, uA5, uA6, uA7;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1,0)), u.x),
          mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
          u.y
        );
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUV;
        float t = uTime * 0.25;

        vec2 q = vec2(fbm(uv + t * 0.3), fbm(uv + vec2(1.7, 9.2)));
        vec2 r = vec2(fbm(uv + 1.7 * q + vec2(1.7, 9.2) + t * 0.2),
                      fbm(uv + 1.7 * q + vec2(8.3, 2.8) + t * 0.1));
        float f = fbm(uv + 2.0 * r);

        float band = f * 6.0;
        vec3 col = vec3(0.0);
        if      (band < 1.0) col = mix(uC1, uC2, band);
        else if (band < 2.0) col = mix(uC2, uC3, band - 1.0);
        else if (band < 3.0) col = mix(uC3, uC4, band - 2.0);
        else if (band < 4.0) col = mix(uC4, uC5, band - 3.0);
        else if (band < 5.0) col = mix(uC5, uC6, band - 4.0);
        else                 col = mix(uC6, uC7, band - 5.0);

        vec2 vign = (uv - 0.5) * 2.0;
        float vignette = 1.0 - dot(vign, vign) * 0.3;
        col *= vignette;

        float alpha = mix(uA1, uA7, f);
        gl_FragColor = vec4(col, alpha);
      }
    `;

    const compileShader = (src: string, type: number) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(s));
      }
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(VS, gl.VERTEX_SHADER));
    gl.attachShader(prog, compileShader(FS, gl.FRAGMENT_SHADER));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
    const aPosLoc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uRes  = gl.getUniformLocation(prog, 'uRes');
    const uLocs = [1,2,3,4,5,6,7].map(i => ({
      c: gl.getUniformLocation(prog, `uC${i}`),
      a: gl.getUniformLocation(prog, `uA${i}`)
    }));

    // Scheme Engine style exact palette
    const defaultColors = [
      { h:276, s:75, l:9,  a:100 }, 
      { h:14,  s:44, l:52, a:100 }, 
      { h:276, s:75, l:9,  a:100 }, 
      { h:285, s:69, l:5,  a:100 }, 
      { h:276, s:75, l:9,  a:100 }, 
      { h:271, s:63, l:28, a:100 }, 
      { h:284, s:72, l:18, a:100 }, 
    ];

    const hslToRgb = (h: number, s: number, l: number) => {
      s /= 100; l /= 100;
      const k = (n: number) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [f(0), f(8), f(4)];
    };

    let timeVal = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const render = (ts: number) => {
      animationFrameId = requestAnimationFrame(render);
      const dt = (ts - lastTime) / 1000;
      timeVal += dt;
      lastTime = ts;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uTime, timeVal);
      gl.uniform2f(uRes, canvas.width, canvas.height);

      defaultColors.forEach((c, i) => {
        const rgb = hslToRgb(c.h, c.s, c.l);
        gl.uniform3f(uLocs[i].c!, rgb[0], rgb[1], rgb[2]);
        gl.uniform1f(uLocs[i].a!, c.a / 100);
      });

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="schemeengine-gl-canvas"
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
