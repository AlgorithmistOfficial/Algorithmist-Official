import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  X, 
  ArrowRight, 
  Clock, 
  User, 
  Sparkles,
  Tag
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { TagChip } from '../components/common/TagChip';
import { SEO } from '../components/common/SEO';
import { AuroraBackground } from '../components/common/AuroraBackground';
import { MotionSection, MotionStagger, MotionStaggerItem } from '../components/common/MotionSection';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

export const BlogsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 space-y-12">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="blogs" />

      {/* Dynamic SEO Meta */}
      <SEO
        title="Blogs"
        description="Explore deep-dive technical articles from the Algorithmist Parent Directorate on software architecture, DSA pedagogy, build-to-ship frameworks, and cloud systems."
        keywords={[
          'Algorithmist Blog',
          'Software Architecture',
          'Data Structures and Algorithms',
          'Build-to-Ship Pedagogy',
          'Nexus Project Blueprints',
          'Cloud Systems Scaling'
        ]}
      />

      {/* 1. Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#344257]/15 shadow-xs text-xs font-semibold text-[#172940]">
          <BookOpen className="w-3.5 h-3.5 text-[#D96725]" />
          <span>Algorithmist Technical Dispatches</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172940] tracking-tight">
          Engineering Blueprints, Pedagogy & Architecture
        </h1>
        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          Deep-dives into systems engineering, algorithmic pedagogy, enterprise scaling patterns, and curriculum frameworks.
        </p>
      </motion.section>

      {/* 2. Search & Category Controls */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword (e.g. Nexus, DSA, Cloud)..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl bg-white/90 border border-slate-200 text-[#172940] placeholder-slate-400 focus:outline-none focus:border-[#D96725] focus:ring-1 focus:ring-[#D96725] shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#172940] p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-[#344257]">
            Showing {filteredPosts.length} of {BLOG_POSTS.length} Articles
          </div>
        </div>

        {/* Category Chips Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {BLOG_CATEGORIES.map((category) => (
            <TagChip
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryChange(category)}
              size="md"
            />
          ))}
        </div>
      </motion.section>

      {/* 3. Blog Grid */}
      <MotionSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MotionStagger className="contents">
          {filteredPosts.map((post) => (
            <MotionStaggerItem key={post.id}>
              <GlassCard
                variant="light"
                padding="lg"
                className="border-slate-200 hover:border-[#D96725]/40 flex flex-col justify-between space-y-6 group h-full transition-colors"
              >
                <div className="space-y-4">
                  {/* Header Meta */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D96725]/10 text-[#D96725]">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#172940] group-hover:text-[#D96725] transition-colors line-clamp-2">
                    <Link to={`/blogs/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#344257] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#344257]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Footer & CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#172940] text-white flex items-center justify-center text-[10px] font-bold">
                      {post.author.avatar}
                    </div>
                    <div className="text-xs font-semibold text-[#172940] truncate max-w-[120px]">
                      {post.author.name}
                    </div>
                  </div>
                  <Link to={`/blogs/${post.slug}`}>
                    <span className="text-xs font-bold text-[#D96725] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </GlassCard>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </MotionSection>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <p className="text-base text-slate-500">No articles matched your search query "{searchQuery}".</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          >
            Clear Search & Filters
          </Button>
        </div>
      )}
    </div>
  );
};
