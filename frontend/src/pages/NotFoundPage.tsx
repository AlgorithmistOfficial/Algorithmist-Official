import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Home, Mail, ArrowRight, Compass, ShieldAlert, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { BrandIcon } from '../components/common/BrandIcon';
import { AuroraBackground } from '../components/common/AuroraBackground';

export const NotFoundPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/blogs?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-[0.21rem] sm:py-[0.31rem] relative overflow-hidden">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="not-found" />

      {/* Abstract geometric background shapes matching palette */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#344257]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#D96725]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto relative z-10">
        <GlassCard variant="light" padding="xl" className="border-slate-200 shadow-2xl text-center space-y-8">
          {/* Top Brand Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96725]/10 text-xs font-mono font-bold text-[#D96725]">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>HTTP 404 — ROUTE EXCEPTION</span>
          </div>

          {/* Graphic Error Display */}
          <div className="relative flex items-center justify-center">
            <div className="text-7xl sm:text-9xl font-extrabold text-[#172940]/10 select-none tracking-widest font-mono">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-slate-200 p-2.5">
                <BrandIcon className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Heading & Explanation Text */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172940] tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#344257] max-w-md mx-auto leading-relaxed">
              The requested URI does not match any registered endpoint in the Algorithmist parent directory. The resource may have been relocated, restructured, or is currently restricted.
            </p>
          </div>

          {/* Search bar directing to blogs or system search */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search engineering papers, wings (Nexus, Academy)..."
              className="w-full pl-10 pr-24 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-200 text-[#172940] placeholder-slate-400 focus:outline-none focus:border-[#D96725]"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#172940] text-white text-xs font-semibold hover:bg-[#344257] transition-colors"
            >
              Search
            </button>
          </form>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" id="404-go-home-btn">
              <Button variant="primary" size="md" icon={Home} iconPosition="left">
                Go Home
              </Button>
            </Link>
            <Link to="/contact" id="404-contact-support-btn">
              <Button variant="outline" size="md" icon={Mail} iconPosition="left">
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Quick Helpful Links */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-[#344257]">
            <span>Explore Wings:</span>
            <Link to="/ecosystem" className="font-semibold text-[#172940] hover:text-[#D96725] underline">
              Algorithmist Nexus
            </Link>
            <span>•</span>
            <Link to="/ecosystem" className="font-semibold text-[#172940] hover:text-[#D96725] underline">
              Algorithmist Academy
            </Link>
            <span>•</span>
            <Link to="/services" className="font-semibold text-[#172940] hover:text-[#D96725] underline">
              Technical Services
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
