import { useRef } from 'react';
import { 
  Users, 
  Leaf, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Briefcase,
  Trophy,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OFFERS = [
  {
    title: "Corporate Experiences",
    icon: Briefcase,
    content: "Upgrade your offsite from a boardroom to an experience. Custom team-building modules, outdoor leadership programs, and fully managed event setups. Ideal for startups, corporates, and leadership teams."
  },
  {
    title: "Weekend Getaways",
    icon: Coffee,
    content: "Family-friendly experiences, kids engagement activities, and relaxed countryside brunches. A refreshing escape where you can unwind and reconnect."
  },
  {
    title: "Celebrations & Events",
    icon: Trophy,
    content: "Birthday parties, cultural events like Ramleela and festivals, and private gatherings or themed evenings in a unique outdoor setting."
  }
];

export default function Experiences() {
  return (
    <div className="bg-zinc-950 pt-40 pb-32">
       <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-4">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Services</span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white">Curated Packages</h1>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {OFFERS.map((offer, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center">
                  <offer.icon size={32} />
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-white">{offer.title}</h2>
                <p className="text-zinc-400 text-xl font-light leading-relaxed">
                  {offer.content}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-4 bg-zinc-900 text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors border border-zinc-800">
                  Enquire Now <ArrowRight size={14} />
                </Link>
              </div>
              <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={`https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&sig=${i}`} 
                  className="w-full h-full object-cover" 
                  alt={offer.title} 
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
