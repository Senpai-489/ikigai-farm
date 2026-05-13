import { useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Globe,
  Clock
} from 'lucide-react';
import MapComponent from '../components/MapComponent';

export default function Contact() {
  return (
    <div className="bg-zinc-950 pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-4">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Find Us</span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white">Get in Touch</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info & Map Section */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={20} className="text-zinc-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">Office Location</span>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Sector 135, Noida,<br />Uttar Pradesh 201304
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Phone size={20} className="text-zinc-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">Booking Info</span>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  +91 98180 26483<br />
                  info@ikigaifarm.in
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Clock size={20} className="text-zinc-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">Open Hours</span>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Mon - Sun: 09:00 - 22:00<br />
                  Open on Public Holidays
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Globe size={20} className="text-zinc-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">Social Connect</span>
                </div>
                <div className="flex gap-6 pt-2">
                   <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                      <Instagram size={24} />
                   </a>
                   <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                      <Facebook size={24} />
                   </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Component */}
            <div className="h-[400px] w-full">
               <MapComponent />
            </div>
          </div>

          {/* Contact Details / Direct Contact section */}
          <div className="bg-zinc-900/50 p-12 border border-zinc-900 flex flex-col justify-center">
             <h2 className="text-4xl font-display font-medium text-white mb-8 tracking-tighter">Plan your next visit to Ikigai Farm Noida.</h2>
             <p className="text-zinc-500 text-lg leading-relaxed mb-12">
               Inspired by the Japanese concept of "Ikigai"—finding joy, fulfillment, and balance in the daily routine—our farm is more than just a destination; it's a reason for being. 
               <br /><br />
               Contact us for corporate events, school trips, or a weekend family getaway.
             </p>
             <a href="#booking" className="inline-flex items-center gap-4 bg-white text-black px-10 py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-200 transition-colors">
               Scroll to Booking Form
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
