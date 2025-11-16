'use client'

import { Sparkles, Code, Brain, Zap, Trophy, Users, Shield, Rocket } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Designed for Tier-3 Students',
      description: 'Built specifically for students from tier-3 colleges and self-learners.',
    },
    {
      icon: Code,
      title: 'Learn by Building',
      description: 'Mini projects in every module to learn by doing, not just watching.',
    },
    {
      icon: Zap,
      title: 'In-Browser IDE',
      description: 'Write code directly in browser with test cases and instant feedback.',
    },
    {
      icon: Brain,
      title: 'AI Doubt Solver',
      description: 'Get answers 24x7 from our AI assistant whenever you get stuck.',
    },
    {
      icon: Trophy,
      title: 'Gamified Progress',
      description: 'Earn badges, climb leaderboards, and track your learning journey.',
    },
    {
      icon: Users,
      title: 'Real Interview Prep',
      description: 'Practice with real interview questions to ace your coding interviews.',
    },
    {
      icon: Shield,
      title: 'All-in-One Platform',
      description: 'Everything you need in one place - no need for multiple subscriptions.',
    },
    {
      icon: Rocket,
      title: '100% Free, No Paywalls',
      description: 'Built by developers for students. Zero cost, maximum value.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">Why Choose Abhyasi?</h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to become a professional developer, completely free
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="scroll-animate p-4 border border-border rounded-lg hover:border-accent hover:bg-card/50 transition-all group bg-card/30 backdrop-blur"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start gap-2.5 mb-3">
                  <div className="p-1.5 bg-accent/10 rounded-md group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <h3 className="text-xs font-bold text-foreground leading-tight">{feature.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed ml-7">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
