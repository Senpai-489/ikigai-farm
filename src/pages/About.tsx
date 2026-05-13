import { Target, Heart, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-zinc-950 pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-4">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Our Philosophy</span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white">A Reason for Being</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tighter leading-tight">
                "Ikigai Farm is where nature, experience, and design come together to create unforgettable moments."
              </h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed">
                Inspired by the Japanese concept of Ikigai, we believe in finding your "reason for being" through connection with nature and meaningful shared experiences. 
                <br /><br />
                Our 10-acre farmhouse in Sector 135, Noida, is designed to be more than just a venue—it's a destination for growth, reflection, and community.
              </p>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-zinc-900 overflow-hidden grayscale">
                   <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Farm" />
                </div>
                <div className="h-96 bg-zinc-900 overflow-hidden grayscale">
                   <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Nature" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-96 bg-zinc-900 overflow-hidden grayscale">
                   <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dining" />
                </div>
                <div className="h-64 bg-zinc-900 overflow-hidden grayscale">
                   <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Activities" />
                </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-900 pt-32">
           {[
             { title: "Purpose", icon: Target, desc: "Giving every visitor a reason to reconnect." },
             { title: "Connection", icon: Heart, desc: "Building meaningful bonds with nature and one another." },
             { title: "Energy", icon: Zap, desc: "Replenishing your spirit with adventure." },
             { title: "Safety", icon: Shield, desc: "Committed to the highest standards of safety and care." }
           ].map((item, i) => (
             <div key={i} className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-black">
                   <item.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-tighter">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
