'use client'

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PricingSection() {
  const comparisonData = [
    {
      platform: 'Abhyasi.com',
      price: 'FREE',
      highlighted: true,
      features: {
        'Structured Course Path': { abhyasi: true, other: 'Partial' },
        'Hands-On Mini Projects': { abhyasi: true, other: 'Some' },
        'MCQs + Coding Tests': { abhyasi: true, other: 'Limited' },
        'In-browser IDE': { abhyasi: true, other: false },
        'AI Doubt Assistant': { abhyasi: true, other: 'Limited' },
        'Interview Questions': { abhyasi: true, other: true },
        'Gamification': { abhyasi: true, other: false },
        'Tier-3 Focused': { abhyasi: true, other: false },
      }
    },
    {
      platform: 'Coursera',
      price: '₹3,000–10,000+',
      highlighted: false,
    },
    {
      platform: 'Udemy',
      price: '₹500–2,000',
      highlighted: false,
    },
    {
      platform: 'Scaler',
      price: '₹50,000–1,50,000',
      highlighted: false,
    },
    {
      platform: 'Coding Ninjas',
      price: '₹20,000–80,000',
      highlighted: false,
    },
  ]

  const tableFeatures = [
    'Structured Course Path',
    'Hands-On Mini Projects',
    'MCQs + Coding Tests',
    'In-browser IDE',
    'AI Doubt Assistant',
    'Interview Questions',
    'Gamification',
    'Tier-3 Focused',
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-linear-to-b from-blue-50/50 via-white to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-30" />
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
            <span className="text-xs font-bold text-blue-700">Unbeatable Value</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3">
            Compare With Others
          </h2>
          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto">
            See why Abhyasi is the best choice for students—completely free with premium features competitors charge for
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border/30 bg-white shadow-lg overflow-hidden backdrop-blur-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30 bg-linear-to-r from-white to-blue-50">
                  <th className="px-6 py-6 text-left font-bold text-foreground w-48">Feature</th>
                  {comparisonData.map((platform, i) => (
                    <th
                      key={i}
                      className={`px-6 py-6 text-center border-l border-border/20 ${platform.highlighted
                        ? 'bg-linear-to-b from-blue-50 to-blue-100/50'
                        : 'bg-white'
                        }`}
                    >
                      <div className="font-black text-base text-foreground mb-2">
                        {platform.platform}
                      </div>
                      <div className={`text-base font-black ${platform.highlighted
                        ? 'text-blue-600'
                        : 'text-foreground/60'
                        }`}>
                        {platform.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((feature, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border/20 transition-colors duration-200 hover:bg-blue-50/30 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                  >
                    <td className="px-6 py-5 font-semibold text-foreground text-sm">
                      {feature}
                    </td>
                    {comparisonData.map((platform, j) => (
                      <td
                        key={j}
                        className={`px-6 py-5 text-center border-l border-border/20 ${platform.highlighted ? 'bg-blue-50/50' : ''
                          }`}
                      >
                        {platform.platform === 'Abhyasi.com' ? (
                          <motion.div
                            whileInView={{ scale: 1.1 }}
                            transition={{ type: 'spring', damping: 12 }}
                            className="flex justify-center"
                          >
                            <Check className="w-5 h-5 text-blue-600 font-bold" />
                          </motion.div>
                        ) : (
                          <span className="text-foreground/40 text-sm font-medium">–</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/60 mb-8">
            Start your free learning journey with Abhyasi today
          </p>
          <button
            onClick={() => window.open(`${import.meta.env.VITE_APP_URL}`, '_blank')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-base shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            Get Started for Free
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
        {/* Key advantages cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="scroll-animate p-6 border border-accent/50 rounded-lg bg-accent/5 hover:border-accent transition-colors">
            <h3 className="text-sm font-bold text-foreground mb-4">Why Abhyasi Wins</h3>
            <ul className="space-y-2.5">
              {[
                'Completely FREE - No hidden costs',
                'Built specifically for Tier-3 students',
                '24/7 AI Doubt Solver included',
                'In-browser IDE with test cases',
                'Gamification keeps you motivated',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="scroll-animate p-6 border border-border rounded-lg bg-card/50 hover:border-accent/30 transition-colors">
            <h3 className="text-sm font-bold text-foreground mb-4">What Others Charge For</h3>
            <ul className="space-y-2.5">
              {[
                'Coursera: ₹3,000–10,000+ per month',
                'Udemy: ₹500–2,000 per course',
                'Scaler: ₹50,000–1,50,000 total',
                'Coding Ninjas: ₹20,000–80,000 total',
                'Abhyasi: 100% FREE, Forever',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-foreground">
                  <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/30 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
