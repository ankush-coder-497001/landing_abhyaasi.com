'use client'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-xs font-bold tracking-wider">ABHYASI</span>
            </div>
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
              Structured learning for aspiring developers from Tier-3 colleges to tech giants.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-xs text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-xs text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/70">
          <p>&copy; 2025 Abhyasi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
