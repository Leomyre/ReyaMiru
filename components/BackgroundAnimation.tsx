'use client'

import React, { useEffect, useRef } from 'react'

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    updateCanvasSize()

    const particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      angle: number
    }> = []

    const mouse = { x: 0, y: 0 }

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        radius: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        angle: Math.random() * Math.PI * 2
      })
    }

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(10, 25, 50, 0.1)'
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      particles.forEach(particle => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        )
        gradient.addColorStop(0, 'rgba(100, 200, 255, 1)')
        gradient.addColorStop(1, 'rgba(50, 100, 200, 0)')
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Rotation
        particle.angle += 0.02
        particle.x += Math.cos(particle.angle) * 0.2
        particle.y += Math.sin(particle.angle) * 0.2

        // Update particle position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width / dpr) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height / dpr) particle.vy *= -1

        // Mouse interaction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          particle.x += dx * 0.03
          particle.y += dy * 0.03
        }

        // Connect nearby particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 100})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      /* // Draw "Expert Developer" text
      ctx.font = 'bold 24px Arial'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.fillText('Developer Léomyre', mouse.x + 20, mouse.y - 20)
 */
      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      updateCanvasSize()
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}

export default BackgroundAnimation

