import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Bookmark, 
  ArrowRight, 
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { TagChip } from '../components/common/TagChip';
import { SEO } from '../components/common/SEO';
import { MotionSection } from '../components/common/MotionSection';
import { BLOG_POSTS } from '../data/blogData';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <SEO title="Article Not Found" description="The requested technical article could not be found." />
        <h2 className="text-2xl font-bold text-[#172940]">Article Not Found</h2>
        <p className="text-sm text-[#344257]">The requested engineering dispatch could not be located.</p>
        <Link to="/blogs">
          <Button variant="primary" size="sm">
            Return to Blogs Directory
          </Button>
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug) || (p.id !== post.id && p.category === post.category));

  const scrollToHeading = (headingId: string) => {
    const el = document.getElementById(headingId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[0.125rem] sm:pt-[0.26rem] pb-10 sm:pb-16 space-y-12">
      {/* Dynamic SEO Meta for this exact blog post */}
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        ogType="article"
        author={post.author.name}
        publishedTime={post.date}
      />

      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#344257] hover:text-[#172940] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 max-w-4xl"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D96725]/10 text-[#D96725]">
            {post.category}
          </span>
          <span className="text-xs text-[#344257] flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="text-xs text-[#344257] flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172940] tracking-tight leading-[1.18]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          {post.excerpt}
        </p>

        {/* Hero Image Placeholder with modern glass geometric styling */}
        <div className="w-full h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-[#172940] via-[#344257] to-[#172940] relative overflow-hidden flex items-center justify-center text-white border border-white/20 shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="text-center p-6 space-y-2 relative z-10 max-w-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F2A97E] mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-[#F2A97E] uppercase tracking-wider">
              Algorithmist Technical Blueprint
            </div>
            <div className="text-sm font-semibold text-slate-200">
              {post.category} Focus • Continuous Pipeline
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Layout: Table of Contents Sidebar + Article Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Table of Contents (Sticky on Desktop) */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1"
        >
          <GlassCard variant="light" padding="md" className="border-slate-200 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#172940] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D96725]" />
              Table of Contents
            </h3>
            <nav className="space-y-1">
              {post.tableOfContents.map((toc) => (
                <button
                  key={toc.id}
                  type="button"
                  onClick={() => scrollToHeading(toc.id)}
                  className={`w-full text-left text-xs py-1.5 px-2 rounded-lg transition-colors hover:bg-slate-100 text-[#344257] hover:text-[#172940] ${
                    toc.level === 3 ? 'pl-5 text-[11px]' : 'font-medium'
                  }`}
                >
                  {toc.title}
                </button>
              ))}
            </nav>
          </GlassCard>

          {/* Author Dossier Box */}
          <GlassCard variant="light" padding="md" className="border-slate-200 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#344257]">
              Author Dossier
            </h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#172940] text-white flex items-center justify-center text-xs font-bold">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-[#172940]">{post.author.name}</div>
                <div className="text-xs text-[#344257]">{post.author.role}</div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-[#D96725] bg-[#D96725]/10 px-2 py-1 rounded">
              Affiliation: {post.author.affiliation}
            </div>
          </GlassCard>
        </motion.aside>

        {/* Article Body Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8 space-y-8 order-1 lg:order-2 text-[#172940] leading-relaxed"
        >
          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                const title = paragraph.replace('## ', '');
                const headingId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <h2
                    key={index}
                    id={headingId}
                    className="text-2xl font-bold text-[#172940] pt-6 pb-2 border-b border-slate-200 scroll-mt-28"
                  >
                    {title}
                  </h2>
                );
              }

              if (paragraph.startsWith('### ')) {
                const title = paragraph.replace('### ', '');
                const headingId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <h3
                    key={index}
                    id={headingId}
                    className="text-xl font-bold text-[#172940] pt-4 scroll-mt-28"
                  >
                    {title}
                  </h3>
                );
              }

              if (paragraph.startsWith('```')) {
                const code = paragraph.replace(/```[a-z]*\n?/g, '');
                return (
                  <pre
                    key={index}
                    className="p-4 rounded-2xl bg-[#172940] text-emerald-300 font-mono text-xs overflow-x-auto border border-white/10 shadow-inner"
                  >
                    <code>{code}</code>
                  </pre>
                );
              }

              if (paragraph.startsWith('> ')) {
                return (
                  <blockquote
                    key={index}
                    className="p-4 rounded-xl bg-[#D96725]/10 border-l-4 border-[#D96725] text-sm text-[#172940] font-medium"
                  >
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              }

              return (
                <p key={index} className="text-[#344257] leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#344257] mr-2">Topic Tags:</span>
            {post.tags.map((tag, idx) => (
              <TagChip key={idx} label={tag} size="sm" />
            ))}
          </div>
        </motion.article>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <MotionSection className="pt-12 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-bold text-[#172940]">
            Related Engineering Blueprints
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.slice(0, 2).map((rel) => (
              <GlassCard key={rel.id} variant="light" padding="md" className="border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#D96725]">{rel.category}</span>
                  <span className="text-slate-400">{rel.readTime}</span>
                </div>
                <h4 className="font-bold text-base text-[#172940] hover:text-[#D96725] transition-colors">
                  <Link to={`/blogs/${rel.slug}`}>{rel.title}</Link>
                </h4>
                <p className="text-xs text-[#344257] line-clamp-2">{rel.excerpt}</p>
                <Link to={`/blogs/${rel.slug}`} className="text-xs font-bold text-[#D96725] inline-flex items-center gap-1 hover:underline">
                  Read article <ArrowRight className="w-3 h-3" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </MotionSection>
      )}
    </div>
  );
};
