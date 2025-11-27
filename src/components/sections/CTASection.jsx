
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center scroll-animate relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
          Ready to Transform Your Career?
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers who've mastered web development through project-based learning. Start your journey today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button onClick={() => window.open(`${import.meta.env.VITE_APP_URL}`, '_blank')} className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg text-xs font-semibold hover:opacity-90 transition-all hover:gap-3 cursor-pointer ">
            Start Free Today
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => window.open(`${import.meta.env.VITE_APP_URL}/courses`, '_blank')} className="px-6 py-2.5 border border-border bg-background text-foreground rounded-lg text-xs font-semibold hover:bg-card hover:border-accent/30 transition-colors cursor-pointer ">
            Brows Courses
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Lifetime Free</span>
          </div>
        </div>
      </div>
    </section>
  )
}
