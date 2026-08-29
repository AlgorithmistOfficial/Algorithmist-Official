import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { BrandIcon } from '../common/BrandIcon';
import { BrandTextLogo } from '../common/BrandTextLogo';

export const NAVBAR_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Impact', href: '/impact' },
  { name: 'Services', href: '/services' },
  { name: 'Ecosystem', href: '/ecosystem', hasSubmenu: true },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact', isCta: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemHovered, setEcosystemHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Reserve the navbar's space in document flow while the visual header stays fixed. */}
      <div aria-hidden="true" className="h-16 sm:h-[72px]" />
      <header
        id="main-header"
        className={`fixed top-0 left-0 z-40 w-full py-3 sm:py-4 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#F7F7F7]/60 backdrop-blur-xl border-b border-[#344257]/10 shadow-[0_4px_24px_rgba(23,41,64,0.04)]'
            : 'bg-[#F7F7F7]/35 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Authority Label */}
          <Link to="/" id="brand-logo" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-[#172940]/10 group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 border border-slate-200/80 overflow-hidden p-1.5">
              <BrandIcon className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <BrandTextLogo showTagline={false} className="h-6 sm:h-7" />
                <span className="text-[10px] font-mono tracking-wider font-semibold px-1.5 py-0.5 rounded bg-[#172940]/10 text-[#172940] uppercase">
                  Parent
                </span>
              </div>
              <span className="text-[11px] text-[#344257] font-medium tracking-wide">
                Engineering & Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Home */}
            <NavLink
              to="/"
              end
              id="nav-link-home"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'text-[#172940] font-semibold bg-white/80 shadow-xs'
                    : 'text-[#344257] hover:text-[#172940] hover:bg-black/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D96725] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 1. Impact */}
            <NavLink
              to="/impact"
              id="nav-link-impact"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'text-[#172940] font-semibold bg-white/80 shadow-xs'
                    : 'text-[#344257] hover:text-[#172940] hover:bg-black/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Impact</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D96725] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 2. Services */}
            <NavLink
              to="/services"
              id="nav-link-services"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'text-[#172940] font-semibold bg-white/80 shadow-xs'
                    : 'text-[#344257] hover:text-[#172940] hover:bg-black/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Services</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D96725] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 3. Ecosystem (With Sub-bodies preview flyout) */}
            <div
              className="relative"
              onMouseEnter={() => setEcosystemHovered(true)}
              onMouseLeave={() => setEcosystemHovered(false)}
            >
              <NavLink
                to="/ecosystem"
                id="nav-link-ecosystem"
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 flex items-center gap-1.5 relative ${
                    isActive
                      ? 'text-[#172940] font-semibold bg-white/80 shadow-xs'
                      : 'text-[#344257] hover:text-[#172940] hover:bg-black/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Ecosystem</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D96725]" />
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D96725] rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>

              {/* Ecosystem Sub-Bodies Preview Dropdown */}
              <AnimatePresence>
                {ecosystemHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 p-3 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl z-50 text-left"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 mb-2">
                      <p className="text-[11px] font-semibold text-[#172940] uppercase tracking-wider">
                        Connected Wings & Bodies
                      </p>
                      <p className="text-[11px] text-[#344257]">Unified under Algorithmist Parent</p>
                    </div>
                    <div className="space-y-1">
                      <Link
                        to="/ecosystem#nexus"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F7F7] transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#D96725]/10 text-[#D96725] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#D96725] group-hover:text-white transition-colors">
                          NX
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#172940] flex items-center gap-1">
                            Algorithmist Nexus
                            <ArrowUpRight className="w-3 h-3 text-[#D96725] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-[#344257] line-clamp-1">
                            Project incubation & SDLC build-to-ship wing
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/ecosystem#academy"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F7F7] transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#172940]/10 text-[#172940] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#172940] group-hover:text-white transition-colors">
                          AC
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#172940] flex items-center gap-1">
                            Algorithmist Academy
                            <ArrowUpRight className="w-3 h-3 text-[#D96725] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-[#344257] line-clamp-1">
                            DSA, placement prep & problem-solving mastery
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/ecosystem#technologies"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F7F7] transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#344257]/10 text-[#344257] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          TC
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#172940]">
                            Algorithmist Technologies
                          </div>
                          <p className="text-[11px] text-[#344257] line-clamp-1">
                            Client software engineering & delivery
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/ecosystem#optivio"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F7F7] transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#344257]/10 text-[#344257] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          OP
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#172940]">
                            Algorithmist Optivio
                          </div>
                          <p className="text-[11px] text-[#344257] line-clamp-1">
                            Enterprise business tech requirements
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 text-center">
                      <Link
                        to="/ecosystem"
                        className="text-[11px] font-semibold text-[#D96725] hover:underline inline-flex items-center gap-1"
                      >
                        View complete ecosystem map <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Blogs */}
            <NavLink
              to="/blogs"
              id="nav-link-blogs"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'text-[#172940] font-semibold bg-white/80 shadow-xs'
                    : 'text-[#344257] hover:text-[#172940] hover:bg-black/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Blogs</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D96725] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 5. About */}
            <NavLink
              to="/about"
              id="nav-link-about"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'text-[#172940] font-semibold bg-white/80 shadow-xs'
                    : 'text-[#344257] hover:text-[#172940] hover:bg-black/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>About</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D96725] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 6. Contact Us (Exact Order CTA Button) */}
            <div className="ml-2">
              <Link to="/contact" id="nav-cta-contact">
                <Button variant="primary" size="sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger Toggle with Smooth Animated Icon */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/contact" className="sm:hidden">
              <Button variant="primary" size="sm">
                Contact
              </Button>
            </Link>
            <motion.button
              type="button"
              id="mobile-menu-button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/80 border border-slate-200 text-[#172940] hover:bg-white transition-colors relative"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5 text-[#D96725]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5 text-[#172940]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Menu with Backdrop Blur & Motion Exit Transitions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#172940]/50 backdrop-blur-md z-40 md:hidden"
              aria-hidden="true"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: -14,
                scale: 0.98,
                transition: { duration: 0.2, ease: [0.32, 0.72, 0, 1] }
              }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 left-0 right-0 z-50 max-h-[calc(100vh-80px)] overflow-y-auto px-4 pb-6 sm:top-[72px] md:hidden"
            >
              <div className="rounded-3xl border border-white/80 bg-[#F7F7F7]/95 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl space-y-4">
                {/* Drawer Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center p-1 shadow-xs border border-slate-200">
                      <BrandIcon className="w-full h-full" />
                    </div>
                    <BrandTextLogo showTagline={false} className="h-5" />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1 py-0.5 rounded bg-[#172940]/10 text-[#172940]">
                      Menu
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    ESC to close
                  </span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-1">
                  <NavLink
                    to="/"
                    end
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#172940] text-white font-semibold shadow-md'
                          : 'text-[#344257] hover:bg-black/5'
                      }`
                    }
                  >
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>

                  <NavLink
                    to="/impact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#172940] text-white font-semibold shadow-md'
                          : 'text-[#344257] hover:bg-black/5'
                      }`
                    }
                  >
                    <span>1. Impact</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>

                  <NavLink
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#172940] text-white font-semibold shadow-md'
                          : 'text-[#344257] hover:bg-black/5'
                      }`
                    }
                  >
                    <span>2. Services</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>

                  <NavLink
                    to="/ecosystem"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#172940] text-white font-semibold shadow-md'
                          : 'text-[#344257] hover:bg-black/5'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span>3. Ecosystem</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D96725] text-white font-semibold">
                        Nexus & Academy
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>

                  <NavLink
                    to="/blogs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#172940] text-white font-semibold shadow-md'
                          : 'text-[#344257] hover:bg-black/5'
                      }`
                    }
                  >
                    <span>4. Blogs</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#172940] text-white font-semibold shadow-md'
                          : 'text-[#344257] hover:bg-black/5'
                      }`
                    }
                  >
                    <span>5. About</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                </nav>

                {/* Primary CTA Contact Button */}
                <div className="pt-2 border-t border-slate-200/80">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full"
                  >
                    <Button variant="primary" size="md" fullWidth>
                      6. Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Quick Coordinates in Drawer */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#344257]">
                  <span>Bangalore HQ & Remote</span>
                  <a
                    href="mailto:directorate@algorithmist.org"
                    className="text-[#D96725] hover:underline"
                  >
                    directorate@algorithmist.org
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
