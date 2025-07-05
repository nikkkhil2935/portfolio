"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Safe to access window here
    const createParticles = () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))

    setParticles(createParticles())

    // Optional: recompute on resize
    const handleResize = () => setParticles(createParticles())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          initial={{ x: p.x, y: p.y }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 0),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0),
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  )
}
