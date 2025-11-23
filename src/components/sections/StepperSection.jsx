"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function StepperSection() {
  const steps = [
    {
      number: 1,
      title: "Choose a Course",
      description: "Browse our structured curriculum and pick what you want to master.",
      details: ["10+ courses available", "For all skill levels", "Industry-focused"],
    },
    {
      number: 2,
      title: "Learn Through Modules",
      description: "Each module combines theory with practice for deeper understanding.",
      details: [
        "📚 Explanation - Text and visuals",
        "💻 Coding - Hands-on projects",
        "❓ MCQ - Knowledge checks",
        "🎤 Interview - Mock interviews questions & answers ",
      ],
    },
    {
      number: 3,
      title: "Build & Practice",
      description: "Work on real-world projects while learning industry best practices.",
      details: ["Complete assignments", "Get code reviews", "Build portfolio"],
    },
    {
      number: 4,
      title: "You're Job Ready",
      description: "Graduate with skills employers want and a portfolio to prove it.",
      details: ["Get certificate", "Access job board", "Career guidance"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        velocity: 1.5,
        damping: 15,
        mass: 1,
        stiffness: 80,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        velocity: 1.5,
        damping: 12,
        mass: 0.8,
        stiffness: 90,
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3" variants={itemVariants}>
            How You'll Learn
          </motion.h2>
          <motion.p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
            A structured path designed to take you from beginner to job-ready
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute top-8 left-0 right-0 h-0.5 bg-blue-500 hidden md:block"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ originX: 0 }}
          />

          <motion.div
            className="grid md:grid-cols-4 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    type: "spring",
                    velocity: 1.5,
                    damping: 14,
                    mass: 0.9,
                  },
                }}
                className="flex flex-col"
              >
                <div className="relative mb-6">
                  <motion.div
                    className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white font-semibold text-base mx-auto border-2 border-white shadow-sm"
                    variants={numberVariants}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <motion.div className="text-center flex-1" variants={containerVariants}>
                  <motion.h3 className="text-sm font-semibold text-foreground mb-2" variants={itemVariants}>
                    {step.title}
                  </motion.h3>
                  <motion.p className="text-xs text-muted-foreground mb-4 leading-relaxed" variants={itemVariants}>
                    {step.description}
                  </motion.p>

                  <motion.div className="space-y-2" variants={containerVariants}>
                    {step.details.map((detail, i) => (
                      <motion.div key={i} className="flex items-start gap-2 text-xs" variants={itemVariants}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-left">{detail}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
