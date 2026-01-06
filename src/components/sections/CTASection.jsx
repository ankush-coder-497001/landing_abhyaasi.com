
import { ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200"
          >
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold text-blue-700">Limited Time: Join for Free</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-foreground leading-tight">
              Start Your Structured
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-transparent bg-clip-text">
                Learning Journey Today
              </span>
            </h2>

            <p className="text-lg text-foreground/75 max-w-3xl mx-auto leading-relaxed">
              Join students from Tier-3 colleges and self-learners who are building careers through practical, structured learning. Get free access to modular courses, real projects, AI guidance, and interview prep—everything you need to become industry-ready.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-4"
          >
            <button
              onClick={() => window.open(`${import.meta.env.VITE_APP_URL}`, '_blank')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-sm shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.open(`${import.meta.env.VITE_APP_URL}/courses`, '_blank')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground rounded-lg font-bold text-sm hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Browse Courses
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 pt-6 border-t border-border/30 mt-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-foreground/70">✓ No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-foreground/70">✓ Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-foreground/70">✓ Lifetime free</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-foreground/60"
          >
            <p className="text-xs mb-2">Trusted by developers from across India</p>
            <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-foreground/50">
              <div>10,000+ Active Students</div>
              <div className="w-1 h-1 rounded-full bg-foreground/30" />
              <div>50+ Courses</div>
              <div className="w-1 h-1 rounded-full bg-foreground/30" />
              <div>99.9% Uptime</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
