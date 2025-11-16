'use client'

import { Check, X } from 'lucide-react'

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
    <section className="py-24 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">Compare With Others</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            See why Abhyasi is the best choice for students—completely free with premium features
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card/50 backdrop-blur scroll-animate mb-10">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-5 py-4 text-left font-bold text-foreground w-40">Feature</th>
                {comparisonData.map((platform, i) => (
                  <th
                    key={i}
                    className={`px-5 py-4 text-center font-bold transition-colors ${platform.highlighted
                      ? 'bg-accent/20 text-accent border-r border-accent/50'
                      : 'text-foreground border-r border-border/50'
                      }`}
                  >
                    <div className="font-black text-xs">{platform.platform}</div>
                    <div className={`text-xs font-bold mt-1.5 ${platform.highlighted ? 'text-accent' : 'text-muted-foreground'}`}>
                      {platform.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableFeatures.map((feature, i) => (
                <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-background/30' : ''}`}>
                  <td className="px-5 py-4 font-semibold text-foreground text-xs">{feature}</td>
                  {comparisonData.map((platform, j) => (
                    <td
                      key={j}
                      className={`px-5 py-4 text-center ${platform.highlighted ? 'bg-accent/10 border-r border-accent/50' : 'border-r border-border/50'
                        }`}
                    >
                      {platform.platform === 'Abhyasi.com' ? (
                        <Check className="w-4 h-4 text-accent mx-auto" />
                      ) : (
                        <span className="text-muted-foreground text-xs">–</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key advantages cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="scroll-animate p-6 border border-accent/50 rounded-lg bg-accent/5 hover:border-accent transition-colors">
            <h3 className="text-sm font-bold text-foreground mb-4">Why Abhyasi Wins</h3>
            <ul className="space-y-2.5">
              {[
                'Completely FREE - No hidden costs',
                'Built specifically for Tier-3 students',
                '24/7 AI Doubt Solver included',
                'In-browser IDE with test cases',
                'Gamification keeps you motivated'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-foreground">
                  <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
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
                'Abhyasi: 100% FREE, Forever'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-foreground">
                  <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/30 flex-shrink-0 mt-0.5" />
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
