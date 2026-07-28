# High-Quality Scroll Animation Plan — Jihad Portfolio

## Stack
- GSAP 3.12 + ScrollTrigger (CDN)
- Lenis 1.1 (smooth scroll, CDN)
- Alpine.js (dark mode, mobile menu, nav section tracking — KEEP)

## Script Order (in head)
1. GSAP core
2. ScrollTrigger plugin
3. Lenis
4. Alpine.js (defer)

## Section-by-Section Animation Design

### Hero (Pin + Scrub Parallax)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Section pin | Fixed while content scrubs | — | start: 'top top', end: '+=80%', pin: true |
| Profile image | translateY(60px)→0 + scale(0.92)→1 | power3.out | scrub: 1, start: 'top 80%', end: 'top 20%' |
| Heading | translateY(40px)→0 + opacity 0→1 | power2.out | scrub: 1.2 |
| Paragraph | Same, delayed | power2.out | scrub: 0.8 |
| Buttons | Same, further delayed | power2.out | scrub: 0.8 |
| Stats counters | translateY(20px)→0 + opacity 0→1 | power2.out | scrub: 0.8 |
| Blobs | Parallax at diff speeds | — | scrub: 1 |

### Services (Stagger Entrance)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Section label | opacity 0→1 y:20→0 | power3.out | start: 'top 85%' |
| Section heading | Same, 0.1s delay | power3.out | start: 'top 85%' |
| Cards (×3) | opacity:0 y:40 scale:0.95→1 | power3.out | stagger: 0.12, start: 'top 82%' |

### Work/Portfolio (Direction-Aware Stagger)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Large card | x:-60→0 opacity:0→1 | power3.out | start: 'top 82%' |
| Side cards (×2) | x:40→0 opacity:0→1 | power3.out | stagger: 0.1, start: 'top 85%' |

### About (Image + Text Reveal)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Image | clip-path: inset(0 50% 0 50%)→0 + scale(1.1)→1 | power4.out | start: 'top 80%', duration: 1.2 |
| Text blocks | opacity:0 y:30→0 | power3.out | stagger: 0.12, start: 'top 80%' |
| Skills tags | stagger entrance | power3.out | stagger: 0.03 |

### Reviews (Scale Stagger)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Cards (×3) | opacity:0 scale:0.9 y:30→1 | power3.out | stagger: 0.12, start: 'top 82%' |

### Blog (Stagger)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Cards (×3) | opacity:0 y:30→1 | power3.out | stagger: 0.1, start: 'top 85%' |

### Contact (Simple Fade)
| Element | Animation | Easing | ScrollTrigger |
|---------|-----------|--------|---------------|
| Section | opacity:0 y:20→1 | power2.out | start: 'top 85%' |
| Form | Same, delayed | power2.out | — |

## Preserved Alpine.js Functions
- `dark` — dark mode toggle
- `mm` — mobile menu
- `sc` — nav background on scroll
- `s` — active section detection
- `updateSection()` — nav highlighting

## Removed (replaced by GSAP)
- IntersectionObserver for reveals
- CSS transition delays (d1-d6)
- Manual scroll progress listener (keep as fallback)
