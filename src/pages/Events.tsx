import React from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="container text-center py-40">
        <h1 className="text-5xl font-display font-bold mb-6">Events</h1>
        <p className="text-zinc-400 mb-8">Browse Corporate Experiences, Weekend Getaways, and Celebrations.</p>
        <div className="flex justify-center gap-4">
          <Link to="/experiences" className="inline-block bg-white text-black px-6 py-3 rounded font-bold">Experiences</Link>
          <Link to="/menu" className="inline-block bg-[#d32f2f] px-6 py-3 rounded font-bold">Menu</Link>
        </div>
      </div>
    </div>
  );
}
