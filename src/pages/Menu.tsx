import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="container text-center py-40">
        <h1 className="text-5xl font-display font-bold mb-6">Evening Menu</h1>
        <p className="text-zinc-400 mb-8">Our curated menu will be available soon. For bookings, contact us.</p>
        <Link to="/contact" className="inline-block bg-[#d32f2f] px-6 py-3 rounded font-bold">Contact & Book</Link>
      </div>
    </div>
  );
}
