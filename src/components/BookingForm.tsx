import { useState } from 'react';
import { Calendar, Users, Phone, Mail, User, Send } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', guests: '1' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12">
      <div className="mb-10">
        <h3 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-tighter">Request a Booking</h3>
        <p className="text-zinc-500 text-sm">Experience the philosophy of Ikigai. Our team will contact you shortly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <User size={12} /> Full Name
            </label>
            <input 
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="John Doe"
              className="w-full bg-zinc-950 border border-zinc-800 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Mail size={12} /> Email Address
            </label>
            <input 
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
              className="w-full bg-zinc-950 border border-zinc-800 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Phone size={12} /> Phone Number
            </label>
            <input 
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+91 00000 00000"
              className="w-full bg-zinc-950 border border-zinc-800 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Calendar size={12} /> Preferred Date
            </label>
            <input 
              required
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors appearance-none"
            />
          </div>

          {/* Guests */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Users size={12} /> Number of Guests
            </label>
            <select 
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors"
            >
              {[1, 2, 5, 10, 20, 50, 100].map(n => (
                <option key={n} value={n}>{n === 100 ? '100+' : n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>

        <button 
          disabled={status !== 'idle'}
          className={cn(
            "w-full p-5 text-xs font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3",
            status === 'success' ? "bg-green-600 text-white" : "bg-white text-black hover:bg-zinc-200"
          )}
        >
          {status === 'idle' && (
            <>
              Confirm Request <Send size={14} />
            </>
          )}
          {status === 'submitting' && "Processing..."}
          {status === 'success' && "Request Sent Successfully"}
        </button>
      </form>
    </div>
  );
}
