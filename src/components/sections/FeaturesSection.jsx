'use client'

import { Sparkles, Code, Brain, Zap, Trophy, Users, Shield, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: 'Modular Learning',
      description: 'Course → Module → Topics → Sections. Clear progression path for structured skill-building.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'In-Browser IDE',
      description: 'Write, test, and deploy code directly in your browser with instant feedback.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Brain,
      title: 'AI Doubt Solver',
      description: '24/7 AI-powered chatbot to resolve doubts and guide you through coding challenges.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Earn badges, unlock achievements, and compete on leaderboards to stay motivated.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Users,
      title: 'Interview Questions',
      description: '10-15 curated interview questions per module with downloadable content.',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: Shield,
      title: 'Progress Tracking',
      description: 'Real-time dashboard showing your learning journey and skill mastery levels.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Sparkles,
      title: 'Certificates',
      description: 'Earn recognized certificates upon course completion to showcase your skills.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Rocket,
      title: '100% Free Forever',
      description: 'No hidden costs, no premium tiers. Built for students who need accessible quality education.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        type: 'spring',
        velocity: 1,
        damping: 16,
        mass: 0.8,
        stiffness: 70,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xs font-bold text-blue-700">8 Premium Features</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3">
            Why Choose Abhyaasi?
          </h2>
          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Everything you need to become a professional developer, completely free with premium features
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', velocity: 2, damping: 14 },
                }}
                className="group h-full"
              >
                <div className="relative h-full rounded-2xl border border-border/40 bg-gradient-to-br from-white to-blue-50/30 p-8 transition-all duration-300 hover:border-blue-200/60 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:to-blue-100/20 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 shadow-lg shadow-blue-600/20 group-hover:shadow-xl group-hover:shadow-blue-600/30 transition-all duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:w-12 transition-all duration-300" />
                  </div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border border-blue-600/0 group-hover:border-blue-600/20 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
