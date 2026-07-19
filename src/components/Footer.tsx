import { Globe, Share2, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#0e0e0e] border-t border-white/5 z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 md:px-16 max-w-[1440px] mx-auto">
        <div className="space-y-6">
          <div className="font-sans text-2xl text-white font-bold tracking-tighter">VELOCITY</div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Pushing the boundaries of precision engineering and digital luxury. Redefining the relationship between driver and machine.
          </p>
          <div className="flex gap-4 text-white/40">
            <Globe className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Share2 className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-mono text-xs text-[#c9c6c5] uppercase tracking-widest">Inventory</h4>
          <ul className="space-y-2">
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="/inventory">New Vehicles</a></li>
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="/inventory">Pre-Owned</a></li>
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="/inventory">Electric Series</a></li>
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="/inventory">Exclusive Editions</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-mono text-xs text-[#c9c6c5] uppercase tracking-widest">Company</h4>
          <ul className="space-y-2">
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Locations</a></li>
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Careers</a></li>
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Press</a></li>
            <li><a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-mono text-xs text-[#c9c6c5] uppercase tracking-widest">Telemetry Update</h4>
          <p className="text-white/60 text-xs leading-relaxed">Join our exclusive list for early access to limited edition prototypes.</p>
          <div className="relative border-b border-white/20 pb-2">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent border-none w-full font-mono text-[10px] py-1 text-white focus:outline-none focus:ring-0 placeholder:text-white/20"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#adc6ff] hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-16 max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/5 opacity-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[9px] tracking-widest uppercase text-white">
          © 2026 VELOCITY MOTORS. PRECISION ENGINEERING. ALL RIGHTS RESERVED.
        </span>
        <span className="font-mono text-[9px] tracking-widest uppercase text-white">
          STUTTGART // CALIFORNIA
        </span>
      </div>
    </footer>
  );
}
