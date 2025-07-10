"use client";

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return;
    const createParticles = () =>
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      }))

    setParticles(createParticles())

    const handleResize = () => setParticles(createParticles())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 shadow-lg"
          style={{
            width: p.size,
            height: p.size,
          }}
          initial={{ x: p.x, y: p.y }}
          animate={{
            x: [
              p.x,
              p.x + Math.sin(Date.now() * 0.001 + p.delay) * 100,
              p.x + Math.cos(Date.now() * 0.001 + p.delay) * 100,
              p.x,
            ],
            y: [
              p.y,
              p.y + Math.cos(Date.now() * 0.001 + p.delay) * 100,
              p.y + Math.sin(Date.now() * 0.001 + p.delay) * 100,
              p.y,
            ],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced grid pattern with mouse interaction */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            `${mousePosition.x * 0.01}px ${mousePosition.y * 0.01}px`,
          ],
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/10 dark:to-pink-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-cyan-400/10 dark:to-blue-400/10 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}