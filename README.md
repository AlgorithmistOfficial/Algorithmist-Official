# Algorithmist — Official Parent Organization Web Application

Algorithmist is the parent technical authority bridging fundamental computational education, production-grade project development through **Algorithmist Nexus**, placement mastery through **Algorithmist Academy**, software delivery through **Algorithmist Technologies**, and enterprise technical strategy through **Algorithmist Optivio**.

---

## 🏛️ Ecosystem Architecture & The Continuous Pipeline

The core thesis of the Algorithmist parent organization is founded on a compounding sequence:
> **“Academy builds fundamentals and interview confidence → Nexus turns skills into shipped products → graduates can transition into real delivery or partner opportunities.”**

1. **Algorithmist Nexus (Education / Project Incubation):**
   Where learners ship real, end-to-end projects using industry SDLC, code quality standards, reviews, and deployment practices. Nexus focuses on transforming learning into demonstrable outcomes (portfolios, case studies, shipped features).
2. **Algorithmist Academy (Education / DSA & Placement Prep):**
   The structured training and placement-prep wing—focused on DSA, fundamentals, interview readiness, and disciplined practice systems. Academy builds problem-solving depth and consistency so learners can perform in real hiring loops.
3. **Algorithmist Technologies (Corporate / Delivery):**
   Client-facing engineering wing executing high-performance web platforms and distributed software architectures.
4. **Algorithmist Optivio (Corporate / Strategic Consultancy):**
   Enterprise advisory wing assessing business technical requirements, infrastructure efficiency, and digital transformation roadmaps.

---

## 🎨 Design System & Palette Specification

- **Primary:** `#344257` (Slate Navy)
- **Deep Navy:** `#172940` (Foundation background & High-contrast headings)
- **Accent (CTA):** `#D96725` (Call to Action & Highlight elements)
- **Accent Light:** `#F2A97E` (Peach tone for badges, glows & indicators)
- **Surface / Background:** `#F7F7F7` (Light canvas)

### Glassmorphism Rules
- Translucent panels: `background: rgba(255, 255, 255, 0.65–0.85)` with `backdrop-filter: blur(16–22px)`
- Border highlights: `1px solid rgba(255, 255, 255, 0.4–0.8)` or subtle `#344257/10`
- Form Error states: `#D96725` border, `#F2A97E` low-opacity background, `#172940` readable error text.

---

## 🚀 Installation & Running the Full-Stack Application

### Prerequisites
- Node.js (v18+)
- npm

### Development Mode (Express + Vite)
```bash
# Start backend server on port 3000 with Vite middleware
npm run dev
```

### Production Build & Launch
```bash
# Build Vite client and compile server.ts with esbuild
npm run build

# Start production server
npm run start
```

---

## ✍️ How to Add New Blog Posts

All blog posts are typed and defined in `src/data/blogData.ts`. To add a new engineering dispatch or whitepaper:

1. Open `src/data/blogData.ts`.
2. Add a new object to the `BLOG_POSTS` array following the `BlogPost` interface:

```typescript
{
  id: '4',
  slug: 'my-new-technical-article',
  title: 'Article Title Here',
  excerpt: 'A concise summary of the engineering concepts discussed.',
  category: 'Engineering', // 'Ecosystem' | 'Engineering' | 'Education' | 'Consultancy' | 'Innovation'
  tags: ['Cloud', 'React', 'DevOps'],
  date: 'August 24, 2026',
  readTime: '5 min read',
  featured: false,
  author: {
    name: 'Author Name',
    role: 'Principal Engineer',
    avatar: 'AN',
    affiliation: 'Algorithmist Parent'
  },
  tableOfContents: [
    { id: 'section-one', title: 'Section One Heading', level: 2 },
    { id: 'section-two', title: 'Section Two Heading', level: 2 }
  ],
  relatedSlugs: ['the-pipeline-from-theory-to-production-academy-to-nexus'],
  content: `
## Section One Heading

Content for the first section goes here...

## Section Two Heading

Content for the second section...
  `
}
```

3. The article will automatically appear on `/blogs` and be accessible at `/blogs/my-new-technical-article` with dynamic table-of-contents generation.

---

## 🎨 How to Adjust Colors & Theme Tokens

The design system variables are defined in `src/index.css`:

```css
:root {
  --primary: #344257;
  --navy: #172940;
  --accent: #D96725;
  --accent-light: #F2A97E;
  --surface: #F7F7F7;
}
```

To tweak button styles or glass cards, adjust `src/components/common/Button.tsx` or `src/components/common/GlassCard.tsx`.
