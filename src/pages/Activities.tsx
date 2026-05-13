import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Zap, 
  Target, 
  Gamepad2, 
  Baby, 
  Waves, 
  Bike
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = [
  {
    title: "Adventure & Obstacle",
    icon: Zap,
    items: ["Zip Line", "Climbing Wall", "Commando Net", "Commando Crawl", "Commando Bridge", "Burma Bridge", "Plank Walk", "Tyre Bridge", "Tyre Wall", "Tyre Walk", "Balance Bridge", "Balance Walk", "Beam Balance", "Vertical Bridge", "Space Walk", "Log Walk", "Cat Walk", "Hurdle Walk"]
  },
  {
    title: "Fun & Skill-Based",
    icon: Target,
    items: ["Archery", "Dart Shooting", "Velcro Dart", "Sling Shot"]
  },
  {
    title: "Kids & Light Activities",
    icon: Baby,
    items: ["Hopscotch", "Trampoline", "Camel Cart Ride"]
  },
  {
    title: "Sports & Recreation",
    icon: Gamepad2,
    items: ["Cricket", "Volleyball", "Badminton", "Table Tennis", "Carrom", "Ludo", "Cross & Zero"]
  },
  {
    title: "Water & Fun",
    icon: Waves,
    items: ["Water Zorb", "Body Zorb", "Tube Well Bath"]
  },
  {
    title: "Adventure Rides",
    icon: Bike,
    items: ["ATV Ride (Extra)", "Horse Ride (Extra)"]
  }
];

export default function Activities() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.activity-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-zinc-950 pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-4">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Full Directory</span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white">Endless Adventures</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="activity-card space-y-8 bg-zinc-900/50 p-10 border border-zinc-900 group hover:border-zinc-700 transition-all duration-500">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center">
                <cat.icon size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-zinc-500 text-sm tracking-widest uppercase hover:text-zinc-300 flex items-center gap-3">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-zinc-500 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-white text-black flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold tracking-tighter">Everything Included</h2>
              <p className="text-zinc-600 font-medium">One fixed price. Unlimited experiences. Unlimited memories.</p>
           </div>
           <div className="text-center md:text-right">
              <div className="text-6xl font-display font-bold tracking-tighter">Rs. 1500</div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Standard Experience Package</p>
           </div>
        </div>
      </div>
    </div>
  );
}
