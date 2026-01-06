"use client"

import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function StepperSection() {
  const steps = [
    {
      number: 1,
      title: "Learn Theory",
      description: "Clear, concise explanations of core concepts with visual aids and expert guidance.",
      icon: "📖",
      details: ["Structured modules", "Visual learning", "Progressive difficulty"],
    },
    {
      number: 2,
      title: "Build Projects",
      description: "Apply your knowledge with hands-on mini-projects validated by automated test cases.",
      icon: "🛠️",
      details: [
        "Real-world projects",
        "Live code feedback",
        "Portfolio pieces",
      ],
    },
    {
      number: 3,
      title: "Master Assessments",
      description: "Test your knowledge with MCQs and interview questions to solidify concepts.",
      icon: "✅",
      details: ["MCQs & tests", "Interview prep", "Progress tracking"],
    },
    {
      number: 4,
      title: "Achieve & Grow",
      description: "Earn badges, climb leaderboards, and get certified to showcase your skills.",
      icon: "🏆",
      details: ["Gamification", "Certificates", "Job readiness"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        velocity: 1.2,
        damping: 16,
        mass: 1,
        stiffness: 70,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  }

  const numberVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        velocity: 2,
        damping: 10,
        mass: 0.7,
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-5">
            <span className="text-xs font-bold text-blue-700">4-Step Learning Path</span>
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4" variants={itemVariants}>
            Your Journey to Mastery
          </motion.h2>
          <motion.p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
            A proven path designed to transform you from curious learner to confident developer ready for professional challenges
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <motion.div
            className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent hidden md:block"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
                  y: -8,
                  transition: {
                    type: "spring",
                    velocity: 2,
                    damping: 14,
                  },
                }}
                className="flex flex-col relative"
              >
                {/* Decorative arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                  </div>
                )}

                {/* Step number */}
                <div className="relative mb-8 flex flex-col items-center">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-600/40 relative z-10 border-4 border-white"
                    variants={numberVariants}
                  >
                    {step.number}
                  </motion.div>
                  {/* Line connector on desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-blue-600 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className="text-center flex-1 space-y-4 px-2"
                  variants={containerVariants}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-4xl"
                    variants={itemVariants}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-foreground"
                    variants={itemVariants}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-foreground/60 leading-relaxed"
                    variants={itemVariants}
                  >
                    {step.description}
                  </motion.p>

                  {/* Details */}
                  <motion.div className="space-y-3 pt-4 border-t border-border/30" variants={containerVariants}>
                    {step.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center justify-center gap-2 text-sm"
                        variants={itemVariants}
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-foreground/70">{detail}</span>
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
