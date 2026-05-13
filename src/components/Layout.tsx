import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ArrowRight, Instagram, Facebook } from 'lucide-react';
import SmoothScroll from './SmoothScroll';
import BookingForm from './BookingForm';
import Navbar from './Navbar';
import { cn } from '../lib/utils';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Global parallax: elements with data-parallax-depth attribute
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax-depth]'));
    const instances: ScrollTrigger[] = [];

    targets.forEach((el) => {
      const depth = parseFloat(el.dataset.parallaxDepth ?? '0.2');
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
        onUpdate: (self) => {
          const move = (self.progress - 0.5) * -100 * depth;
          gsap.to(el, { y: move, overwrite: true, ease: 'none' });
        }
      });
      instances.push(st as any);
    });

    return () => {
      instances.forEach((i) => i.kill && i.kill());
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow nav-fixed-offset">
          {children}
        </main>

        {/* Footer with Booking Form */}
        <footer className="bg-zinc-950 pt-32 pb-12 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Plan Your Trip</span>
                  <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter text-white">
                    Start Your<br />Adventure
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400">
                   <div className="space-y-4">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Location</p>
                      <p className="text-lg">Sector 135, Noida,<br />Uttar Pradesh 201304</p>
                   </div>
                   <div className="space-y-4">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Contact</p>
                      <a href="tel:91818026483" className="text-lg hover:text-white block">+91 98180 26483</a>
                      <a href="mailto:info@ikigaifarm.in" className="text-lg hover:text-white block">info@ikigaifarm.in</a>
                   </div>
                </div>
                <div className="flex gap-6">
                   <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all">
                      <Instagram size={20} />
                   </a>
                   <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all">
                      <Facebook size={20} />
                   </a>
                </div>
              </div>
              <div id="booking">
                <BookingForm />
              </div>
            </div>

            <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              <div className="flex items-center gap-2">
                IKIGAI<span className="text-zinc-800">FARM</span> © 2026
              </div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                <a href="#" className="hover:text-zinc-400">Terms of Use</a>
                <a href="#" className="hover:text-zinc-400">Cookies</a>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Globe size={12} /> DELHI NCR · NOIDA
              </div>
            </div>
          </div>
        </footer>

      </div>
    </SmoothScroll>
  );
}
