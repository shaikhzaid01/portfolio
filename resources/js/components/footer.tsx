import React from 'react';
import { 
  Brain, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#03050c] dark:via-[#050814] dark:to-[#0b1020] pt-24 pb-12 overflow-hidden border-t border-gray-200/50 dark:border-neutral-900/30">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-cyan-500/5 dark:via-purple-500/5 dark:to-blue-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-7xl mx-auto">
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Brain className="h-5 w-5" />
              </div>
              <span className="ml-3 text-lg font-bold tracking-tight bg-gradient-to-r from-black via-gray-800 to-gray-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
                Zaid
              </span>
            </div>
            <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
              Helping startups and businesses transform complex technical challenges into premium, production-ready systems.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-9 h-9 rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white dark:hover:text-white hover:border-transparent transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">Services</h4>
            <ul className="space-y-3.5 text-sm">
              {[
                "MVP Development",
                "Full-Stack Development",
                "AI Solutions",
                "LLM Applications",
                "Data Engineering"
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 dark:text-neutral-450 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">Navigation</h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Home", href: "#" },
                { label: "Systems I Build", href: "#systems" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Architecture", href: "#architecture" },
                { label: "Working Process", href: "#process" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-gray-600 dark:text-neutral-450 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-600 dark:text-neutral-450 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400 dark:text-neutral-500" />
                India
              </li>
              <li>
                <a href="mailto:your-email@example.com" className="text-gray-600 dark:text-neutral-450 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center group">
                  <Mail className="w-4 h-4 mr-2 text-gray-400 dark:text-neutral-500" />
                  your-email@example.com
                </a>
              </li>
              <li>
                <a href="tel:+91XXXXXXXXXX" className="text-gray-600 dark:text-neutral-450 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center group">
                  <Phone className="w-4 h-4 mr-2 text-gray-400 dark:text-neutral-500" />
                  +91 XXXXX XXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 dark:border-neutral-900/60 text-center">
          <p className="text-gray-500 dark:text-neutral-500 text-xs font-medium">
            © {new Date().getFullYear()} Shaikh Zaid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
