# Portfolio Website for Sasmit Dey Sarkar

## Tech Choices

- **React + Tailwind CSS** (already in project)
- **Framer Motion** for scroll animations and micro-interactions
- **tsParticles** for interactive background particle effects
- **Contact form**: UI-only with toast on submit
- **Font**: Space Grotesk via Google Fonts

## Files to Create/Modify

### 1. Install dependencies

- `framer-motion`, `@tsparticles/react`, `@tsparticles/slim`, `react-type-animation`

### 2. Update global styles (`index.html`, `index.css`)

- Add Space Grotesk font link
- Set body background gradient (#0a0a1a → #1a0533), dark mode only
- Define glassmorphism utility classes and glow/shimmer keyframes
- Update SEO meta tags for Sasmit

### 3. Create component files


| File                                     | Purpose                                                                      |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| `src/components/Navbar.tsx`              | Sticky glassmorphism navbar with smooth scroll links and active highlighting |
| `src/components/ParticleBackground.tsx`  | tsParticles config with floating violet/cyan orbs                            |
| `src/components/HeroSection.tsx`         | Full-height hero with gradient name, typewriter effect, CTA buttons          |
| `src/components/AboutSection.tsx`        | Glass card with animated border glow                                         |
| `src/components/SkillsSection.tsx`       | 2-column grid of categorized skill chips with hover glow                     |
| `src/components/ProjectsSection.tsx`     | 3 featured project cards with accent bar, badges, hover lift + shimmer       |
| `src/components/TrainingSection.tsx`     | Training + certifications in glass cards with issuer pills                   |
| `src/components/ToolsTable.tsx`          | Glassmorphism table with hover row highlight                                 |
| `src/components/AchievementsSection.tsx` | Two side-by-side glass cards for achievement + soft skills pills             |
| `src/components/EducationSection.tsx`    | Timeline-style glass cards                                                   |
| `src/components/ContactSection.tsx`      | "Let's Connect" heading, social links with icons, contact form with toast    |
| `src/components/FloatingOrbs.tsx`        | CSS backup orbs layered behind particles                                     |


### 4. Update `src/pages/Index.tsx`

- Compose all sections in order with particle background
- Wrap in smooth-scroll container

### 5. Update `src/App.tsx`

- Remove `App.css` import (conflicts with dark theme)

## Design Details

- **Glass cards**: `bg-white/[0.07] border border-white/[0.15] backdrop-blur-xl rounded-2xl`
- **Gradient text**: `bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`
- **Animations**: Framer Motion `whileInView` with staggered children, `whileHover` lift on cards
- **Responsive**: Website first, mobile second, single column on small screens, multi-column on md+

**All links**: `target="_blank" rel="noopener noreferrer"`