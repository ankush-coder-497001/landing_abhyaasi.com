
import { CheckCircle2 } from 'lucide-react'

export default function StepperSection() {
  const steps = [
    {
      number: 1,
      title: 'Choose a Course',
      description: 'Browse our structured curriculum and pick what you want to master.',
      details: ['100+ courses available', 'For all skill levels', 'Industry-focused']
    },
    {
      number: 2,
      title: 'Learn Through Modules',
      description: 'Each module combines theory with practice for deeper understanding.',
      details: ['📚 Explanation - Concept videos', '💻 Coding - Hands-on projects', '❓ MCQ - Knowledge checks', '🎤 Interview - Mock interviews']
    },
    {
      number: 3,
      title: 'Build & Practice',
      description: 'Work on real-world projects while learning industry best practices.',
      details: ['Complete assignments', 'Get code reviews', 'Build portfolio']
    },
    {
      number: 4,
      title: 'You\'re Job Ready',
      description: 'Graduate with skills employers want and a portfolio to prove it.',
      details: ['Get certificate', 'Access job board', 'Career guidance']
    },
  ]

  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">How You'll Learn</h2>
          <p className="text-sm text-muted-foreground">
            A structured path designed to take you from beginner to job-ready
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent/20 hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative mb-8">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground font-black text-base mx-auto border-2 border-background relative z-10">
                    {step.number}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{step.description}</p>

                  <div className="space-y-1.5">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-left">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
