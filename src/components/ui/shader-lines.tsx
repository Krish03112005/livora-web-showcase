"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ""
    delete container.dataset.shaderFallback

    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2(1, 1) },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec2 resolution;
        uniform float time;

        float random(float x) {
          return fract(sin(x) * 1e4);
        }

        void main(void) {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
          vec2 mosaicScale = vec2(4.0, 2.0);
          vec2 screenSize = vec2(256.0, 256.0);
          uv.x = floor(uv.x * screenSize.x / mosaicScale.x) / (screenSize.x / mosaicScale.x);
          uv.y = floor(uv.y * screenSize.y / mosaicScale.y) / (screenSize.y / mosaicScale.y);

          float t = time * 0.06 + random(uv.x) * 0.4;
          float lineWidth = 0.0008;
          vec3 color = vec3(0.0);

          for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 5; i++) {
              color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) - length(uv));
            }
          }

          gl_FragColor = vec4(color[2] * 1.16, color[1] * 1.06, color[0] * 0.96, 1.0);
        }
      `,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let renderer: THREE.WebGLRenderer

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      })
    } catch {
      container.dataset.shaderFallback = "true"
      return () => {
        delete container.dataset.shaderFallback
        material.dispose()
        geometry.dispose()
      }
    }

    renderer.setClearColor(0x000000, 0)
    renderer.domElement.className = "h-full w-full"
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const rect = container.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(width, height, false)
      uniforms.resolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio())
    }

    let animationId = 0
    const animate = () => {
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    onResize()
    animate()
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", onResize)
      scene.remove(mesh)
      material.dispose()
      geometry.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={containerRef} className="shader-lines-root absolute inset-0 h-full w-full" />
}
