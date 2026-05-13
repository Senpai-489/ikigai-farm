import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.28,
          ease: 'power2.out'
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.24,
          ease: 'power2.in'
        });
      }
    }
  }, [isMobileMenuOpen]);

  const handleHoverStart = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { color: '#fff', duration: 0.18, ease: 'power2.out' });
  };

  const handleHoverEnd = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { color: '', duration: 0.18, ease: 'power2.out' });
  };

  return (
    <nav className="bg-transparent font-semibold text-white fixed top-0 left-0 w-full z-50" style={{height: 'var(--nav-height)'}}>
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto h-full">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          IKIGAI<span className="text-zinc-400">FARM</span>
        </Link>

        <div className="hidden lg:flex flex-row gap-8 items-center text-lg">
          <Link to="/" className="cursor-pointer transition-colors" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>Home</Link>

          <div className="relative">
            <button
              onClick={() => setEventsOpen((s) => !s)}
              className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95 flex items-center gap-2"
              aria-expanded={eventsOpen}
            >
              <span onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>Events</span>
              <ChevronDown className={`transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute left-0 mt-2 w-56 bg-black rounded shadow-lg border border-zinc-800 overflow-hidden transition-all ${eventsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Link to="/experiences" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Corporate Experiences</Link>
              <Link to="/experiences" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Weekend Getaways</Link>
              <Link to="/experiences" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Celebrations & Events</Link>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setActivitiesOpen((s) => !s)}
              className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95 flex items-center gap-2"
              aria-expanded={activitiesOpen}
            >
              <span onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>Activities</span>
              <ChevronDown className={`transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute left-0 mt-2 w-64 bg-black rounded shadow-lg border border-zinc-800 overflow-hidden transition-all ${activitiesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Link to="/activities" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Adventure & Obstacle Challenges</Link>
              <Link to="/activities" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Fun & Skill-based</Link>
              <Link to="/activities" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Kids & Light activities</Link>
              <Link to="/activities" className="block px-4 py-2 hover:text-[#d32f2f] transition-colors">Sports & Recreation</Link>
            </div>
          </div>

          <Link to="/menu" className="cursor-pointer transition-colors" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>Evening Menu</Link>
          <Link to="/about" className="cursor-pointer transition-colors" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>About Us</Link>
        </div>

        <Link to="/contact" className="hidden lg:inline-block bg-[#d32f2f] hover:bg-[#b71c1c] px-6 py-2 rounded font-semibold transition-all duration-300 hover:scale-105">Book Now</Link>

        <button
          onClick={() => setIsMobileMenuOpen((s) => !s)}
          className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div ref={mobileMenuRef} className="lg:hidden overflow-hidden bg-black border-t border-zinc-800" style={{ height: 0, opacity: 0 }}>
        <div className="p-4 flex flex-col gap-4">
          <Link to='/' className='py-2 hover:text-[#d32f2f] transition-colors'>Home</Link>

          <div>
            <button className='w-full text-left py-2 flex justify-between items-center hover:text-[#d32f2f] transition-colors' onClick={() => setEventsOpen((s) => !s)}>Events <ChevronDown size={18} /></button>
            {eventsOpen && (
              <div className='pl-4 flex flex-col gap-2 mt-2'>
                <Link to='/experiences' className='py-1 hover:text-[#d32f2f] transition-colors text-sm'>Corporate Experiences</Link>
                <Link to='/experiences' className='py-1 hover:text-[#d32f2f] transition-colors text-sm'>Weekend Getaways</Link>
                <Link to='/experiences' className='py-1 hover:text-[#d32f2f] transition-colors text-sm'>Celebrations & Events</Link>
              </div>
            )}
          </div>

          <div>
            <button className='w-full text-left py-2 flex justify-between items-center hover:text-[#d32f2f] transition-colors' onClick={() => setActivitiesOpen((s) => !s)}>Activities <ChevronDown size={18} /></button>
            {activitiesOpen && (
              <div className='pl-4 flex flex-col gap-2 mt-2'>
                <Link to='/activities' className='py-1 hover:text-[#d32f2f] transition-colors text-sm'>Adventure & Obstacle Challenges</Link>
                <Link to='/activities' className='py-1 hover:text-[#d32f2f] transition-colors text-sm'>Fun & Skill-based</Link>
                <Link to='/activities' className='py-1 hover:text-[#d32f2f] transition-colors text-sm'>Kids & Light activities</Link>
              </div>
            )}
          </div>

          <Link to='/menu' className='py-2 hover:text-[#d32f2f] transition-colors'>Evening Menu</Link>
          <Link to='/about' className='py-2 hover:text-[#d32f2f] transition-colors'>About Us</Link>

          <Link to='/contact' className='bg-[#d32f2f] hover:bg-[#b71c1c] w-full px-4 py-3 rounded font-semibold transition-all duration-300 mt-4 text-center'>Book Now</Link>
        </div>
      </div>
    </nav>
  );
}
