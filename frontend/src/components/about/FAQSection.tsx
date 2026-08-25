import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  GraduationCap, 
  ArrowRight,
  X
} from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';
import { ABOUT_FAQS, FAQ_CATEGORIES, FAQItem } from '../../data/faqData';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(ABOUT_FAQS[0]?.id || null);

  const filteredFaqs = useMemo(() => {
    return ABOUT_FAQS.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q || 
        faq.question.toLowerCase().includes(q) || 
        faq.answer.toLowerCase().includes(q) ||
        faq.tags.some(tag => tag.toLowerCase().includes(q));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'ecosystem': return Building2;
      case 'partnerships': return Sparkles;
      case 'pedagogy': return GraduationCap;
      case 'governance': return ShieldCheck;
      default: return HelpCircle;
    }
  };

  return (
    <section className="space-y-10" id="faqs">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D96725]/10 text-[#D96725] text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172940] tracking-tight">
          Ecosystem Insights & Partner Opportunities
        </h2>
        <p className="text-sm sm:text-base text-[#344257] leading-relaxed">
          Clear answers on our organizational architecture, pedagogy standards, hiring pipelines, and institutional governance.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {/* Search Bar with Glassmorphic Accent */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs by keyword, wing (Academy, Nexus, Optivio), or topic..."
            className="w-full pl-10 pr-10 py-3 text-sm rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 text-[#172940] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D96725]/30 focus:border-[#D96725] transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-[#172940]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-[#172940] text-white border-[#172940] shadow-sm'
                    : 'bg-white/70 text-[#344257] border-slate-200 hover:bg-white hover:text-[#172940]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="max-w-4xl mx-auto space-y-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq: FAQItem, idx) => {
            const isExpanded = expandedId === faq.id;
            const CategoryIcon = getCategoryIcon(faq.category);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white/95 backdrop-blur-xl border-[#D96725]/40 shadow-md ring-1 ring-[#D96725]/20'
                    : 'bg-white/70 backdrop-blur-md border-slate-200/80 hover:bg-white/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D96725]"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isExpanded
                          ? 'bg-[#D96725] text-white'
                          : 'bg-[#172940]/5 text-[#172940]'
                      }`}
                    >
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#172940] leading-snug">
                        {faq.question}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {faq.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#172940] text-white border-[#172940] rotate-180'
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-[#344257] leading-relaxed border-t border-slate-100/80 ml-11 sm:ml-12">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        ) : (
          <GlassCard variant="light" padding="lg" className="text-center py-12 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-[#172940]">No matching questions found</h3>
            <p className="text-xs text-[#344257] max-w-sm mx-auto">
              We couldn't find any FAQs matching "{searchQuery}". Try a different keyword or reset your filter.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Search Filters
              </Button>
            </div>
          </GlassCard>
        )}
      </div>

      {/* Partner Opportunities Direct Callout Card */}
      <div className="max-w-4xl mx-auto">
        <GlassCard
          variant="light"
          padding="lg"
          className="bg-gradient-to-br from-white/90 via-slate-50/80 to-[#F2A97E]/10 border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#D96725]/10 text-[#D96725]">
              <Sparkles className="w-3 h-3" />
              <span>Custom Inquiries & Institutional Proposals</span>
            </div>
            <h3 className="text-lg font-bold text-[#172940]">
              Looking to partner with Algorithmist?
            </h3>
            <p className="text-xs sm:text-sm text-[#344257] max-w-xl leading-relaxed">
              Whether you are an academic dean exploring curriculum modernization, an engineering VP seeking vetted talent, or an enterprise needing advisory, our Directorate is ready to collaborate.
            </p>
          </div>

          <Link to="/contact" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" icon={ArrowRight} fullWidth>
              Submit Proposal
            </Button>
          </Link>
        </GlassCard>
      </div>
    </section>
  );
};
