import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Users, 
  Leaf, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Calendar,
  ChefHat,
  Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACTIVITIES = [
  { name: 'Zip Line', category: 'Adventure' },
  { name: 'Climbing Wall', category: 'Adventure' },
  { name: 'Commando Net', category: 'Adventure' },
  { name: 'Burma Bridge', category: 'Adventure' },
  { name: 'Archery', category: 'Skill' },
  { name: 'Cricket', category: 'Sports' },
  { name: 'Water Zorb', category: 'Water' },
  { name: 'Camel Ride', category: 'Experience' },
  { name: 'ATV Ride', category: 'Extra' },
];

const PACKAGES = [
  {
    title: "Corporate Experiences",
    icon: Users,
    description: "Team-building, leadership offsites, and outdoor workshops designed for startups and corporates.",
    items: ["Custom Modules", "Outdoor Leadership", "Fully Managed Setup"],
    link: "/experiences"
  },
  {
    title: "Weekend Getaways",
    icon: Leaf,
    description: "A refreshing escape for families to unwind, explore, celebrate, and reconnect with nature.",
    items: ["Family Friendly", "Kids Engagement", "Countryside Brunch"],
    link: "/experiences"
  },
  {
    title: "Celebrations & Events",
    icon: Calendar,
    description: "Perfect venue for birthday parties, cultural festivals, and private gatherings.",
    items: ["Birthday Parties", "Theme Evenings", "Cultural Events"],
    link: "/experiences"
  }
];

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Parallax
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 200,
      ease: 'none'
    });

    // Fade in text
    gsap.from('.hero-text', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power4.out',
      delay: 0.5
    });

    // Hero text depth on pointer move (desktop only)
    const hero = container.current?.querySelector<HTMLElement>('.hero');
    const layers = container.current?.querySelectorAll<HTMLElement>('.hero-layer');
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hero && layers?.length && !isTouch && !reduceMotion) {
      const resetX = gsap.quickTo(layers, 'x', { duration: 0.7, ease: 'power3.out' });
      const resetY = gsap.quickTo(layers, 'y', { duration: 0.7, ease: 'power3.out' });

      const onMove = (event: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

        layers.forEach((layer) => {
          const depth = Number(layer.dataset.depth ?? 1);
          gsap.to(layer, {
            x: offsetX * 60 * depth,
            y: offsetY * 40 * depth,
            rotateY: offsetX * 8 * depth,
            rotateX: -offsetY * 6 * depth,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        });
      };

      const onLeave = () => {
        resetX(0);
        resetY(0);
        gsap.to(layers, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      };

      hero.addEventListener('mousemove', onMove);
      hero.addEventListener('mouseleave', onLeave);

      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.to('.hero-layer-title', {
            yPercent: self.progress * 16,
            duration: 0.2,
            overwrite: 'auto'
          });
          gsap.to('.hero-layer-subtitle', {
            yPercent: self.progress * 30,
            duration: 0.2,
            overwrite: 'auto'
          });
        }
      });

      return () => {
        hero.removeEventListener('mousemove', onMove);
        hero.removeEventListener('mouseleave', onLeave);
      };
    }

    // Section Reveals
    const sections = gsap.utils.toArray<HTMLElement>('.reveal-section');
    sections.forEach((section) => {
      gsap.from(section.querySelectorAll('.reveal-item'), {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });

    // Horizontal scroll gallery
    gsap.to('.activities-track', {
      scrollTrigger: {
        trigger: '.activities-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      x: -500,
      ease: 'none'
    });

    // Image parallax
    gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top'
        },
        y: -100,
        ease: 'none'
      });
    });

  }, { scope: container });

  return (
    <div ref={container}>
      {/* Hero Section */}
      <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="hero-bg absolute inset-0 z-0 h-full w-full object-cover brightness-[0.4]"
          src="/bg_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="hero-text hero-depth-wrap relative z-10 text-center px-4 max-w-5xl">
          <h1 className="hero-layer hero-layer-title hero-title-3d text-7xl md:text-[10rem] font-display font-bold leading-none tracking-tighter text-white mb-4" data-depth="1.1">
            IKIGAI FARM
          </h1>
          <p className="hero-layer hero-layer-subtitle text-xl md:text-3xl font-light tracking-[0.3em] uppercase text-zinc-400 mb-8 italic" data-depth="0.6">
              "a reason for being"
          </p>
          <div className="hero-layer flex flex-col md:flex-row items-center justify-center gap-6 text-sm tracking-widest text-zinc-300" data-depth="0.35">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> SECTOR 135, NOIDA
              </span>
              <div className="w-1 h-1 bg-zinc-600 rounded-full hidden md:block" />
              <span className="flex items-center gap-2">
                <Users size={16} /> CORPORATE & FAMILY ESCAPES
              </span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest animate-bounce">
          SCROLL TO EXPLORE
          <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* Philosophy / About Brief */}
      <section className="reveal-section py-32 px-6 flex flex-col items-center justify-center bg-zinc-950">
        <div className="max-w-4xl text-center space-y-12">
          <h2 className="reveal-item text-4xl md:text-6xl font-display font-medium tracking-tight">
            Nature, experience, and design come together to create unforgettable moments.
          </h2>
          <div className="reveal-item h-px w-24 bg-zinc-700 mx-auto" />
          <p className="reveal-item text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Inspired by the philosophy of Ikigai, our farmhouse is a curated outdoor destination designed to bring together nature, experiences, and meaningful connections.
          </p>
          <Link to="/about" className="reveal-item inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white group pt-8">
            Explore our Philosophy <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Parallax Image Divider */}
      <section className="h-[60vh] w-full overflow-hidden relative">
        <div 
          className="parallax-img absolute inset-0 w-full h-[120%] bg-cover bg-center brightness-[0.6]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop")' }}
        />
      </section>

      {/* Experiences Grid */}
      <section className="reveal-section py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Our Offerings</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium">Curated Experiences</h2>
            </div>
            <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
              Upgrade your lifestyle and escape the monotony. Whether it's a corporate offsite or a family brunch, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <Link key={i} to={pkg.link} className="reveal-item group bg-zinc-900 border border-zinc-800 p-10 hover:bg-zinc-800 transition-all duration-500">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-8">
                  <pkg.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{pkg.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {pkg.description}
                </p>
                <div className="mt-10 pt-8 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors">Details</span>
                  <ArrowRight size={16} className="text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section py-32 bg-zinc-900 overflow-hidden">
        <div className="px-6 mb-20 flex justify-between items-end">
           <div className="space-y-4">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Adventure & Fun</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium">Endless Activities</h2>
           </div>
           <Link to="/activities" className="hidden md:flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-zinc-400 hover:text-white mb-4">
              View All <ArrowRight size={14} />
           </Link>
        </div>
        
        <div className="activities-track flex gap-8 px-6">
          {ACTIVITIES.concat(ACTIVITIES).map((activity, i) => (
            <div key={i} className="flex-shrink-0 w-80 h-96 group relative overflow-hidden bg-zinc-950">
              <div 
                  className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 bg-cover bg-center"
                  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop&sig=${i}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2 block">{activity.category}</span>
                <h4 className="text-2xl font-display font-bold uppercase tracking-tighter">{activity.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dining Section */}
      <section className="reveal-section py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Culinary Journey</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium leading-none">Interactive Food Experiences</h2>
            </div>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Styled food counters and experiential dining. Chef-led presentations featuring regional, global, and fusion themed food setups with fresh, locally sourced produce.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <ChefHat size={20} className="text-zinc-400" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Live Kitchens</span>
                </div>
                <div className="flex items-center gap-3 text-white text-zinc-400">
                  <Utensils size={20} className="text-zinc-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">Farm-to-Table</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white text-zinc-400">
                  <Zap size={20} className="text-zinc-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">Global Fusion</span>
                </div>
                <div className="flex items-center gap-3  text-zinc-400">
                  <ShieldCheck size={20} className="text-zinc-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">Fresh Produce</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-80 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Organic farming" />
              </div>
              <div className="h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Fresh spice" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Market" />
              </div>
              <div className="h-80 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Thali" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Promo */}
      <section className="reveal-section py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium">Leading Organizations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50 grayscale">
            {['TCS', 'NTPC', 'Capgemini', 'JBM Global', 'DPS Noida', 'Ramagya School'].map((client) => (
              <div key={client} className="reveal-item text-xl font-display font-bold tracking-tighter text-white">
                {client}
              </div>
            ))}
          </div>
          <p className="reveal-item text-zinc-500 text-sm italic">
            "Trusted by leading organizations for meaningful outdoor experiences."
          </p>
        </div>
      </section>

       <div className="bg-white text-black py-4 px-6 overflow-hidden relative flex items-center justify-center">
        <div className="flex gap-20 whitespace-nowrap animate-infinite-scroll text-sm font-bold uppercase tracking-[0.2em]">
          <span>Exclusive Summer Promo: 10% Discount</span>
          <span>Adventure Awaits at Ikigai Farm</span>
          <span>Book Your Weekend Getaway Today</span>
          <span>Standard Package at Rs. 1500 per person</span>
          <span>Limited Slots Available</span>
          <span>Exclusive Summer Promo: 10% Discount</span>
        </div>
      </div>
    </div>
  );
}
