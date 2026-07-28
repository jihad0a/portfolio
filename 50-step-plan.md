# 50-Step Animation Fix Plan — Portfolio Website

## Current Issues Found
1. Section headings (`.reveal`) not animated in Services, Work, Reviews, Blog
2. No scroll-scrubbed animations — all are viewport entrances (`toggleActions`)
3. Mobile has no parallax/movement on hero (100% static)
4. Mobile gets only simple fades, not real scroll animations
5. GSAP `fromTo` for sections but NO `scrub: true` anywhere
6. Alpine `.visible` class observer conflicts with GSAP fromTo (flash of visible then hidden)
7. Counter animation works but might conflict with GSAP
8. `.section-rise` CSS class defined but never used
9. `group` and `group-hover` classes might be leftovers
10. `reveal-scale`, `reveal-left` etc. CSS classes exist but unused
11. About clip-path not available on mobile (only desktop gets it)
12. Work cards desktop timeline uses complex direction-aware but no scrub
13. No mobile-first scroll animation design
14. prefers-reduced-motion might need GSAP-level respect
15. ScrollTrigger.refresh() called once but may need re-trigger

## 50 Steps (5 min each = ~4 hours total)

### PHASE 1: Foundation Fixes (Steps 1-10)
Step 1: Remove unused CSS classes (`.section-rise`, `group` leftovers)
Step 2: Add CSS for all reveal variants (`.reveal-scale.visible`, `.reveal-left.visible`, etc.)
Step 3: Remove Alpine `.visible` IntersectionObserver — let GSAP fully control reveals
Step 4: Remove Alpine counter IntersectionObserver threshold (keep as-is, it's fine)
Step 5: Verify Alpine `init()` no longer conflicts with GSAP
Step 6: Add `will-change` GSAP-friendly hints in CSS
Step 7: Ensure prefers-reduced-motion disables GSAP properly
Step 8: Ensure ScrollTrigger.refresh() runs after load complete
Step 9: Test desktop loads with zero console errors
Step 10: Test mobile loads with zero console errors

### PHASE 2: Hero Section (Steps 11-16)
Step 11: Add scroll-scrubbed hero text parallax on mobile (y drift, subtle)
Step 12: Add scroll-scrubbed hero image movement on mobile (tiny)
Step 13: Add scroll-scrubbed hero blobs on mobile (parallax at low speed)
Step 14: Tweak desktop hero parallax values (make more noticeable)
Step 15: Make hero "Available for work" badge drift at different speed
Step 16: Test hero on desktop + mobile, verify smooth animation

### PHASE 3: Services Section (Steps 17-21)
Step 17: Animate Services section heading (`.reveal`) with scrollTrigger scrub
Step 18: Convert Services cards from `fromTo` entrance to scroll-scrubbed
Step 19: Add stagger with scrub for Services cards
Step 20: Tweak Services animation values for mobile
Step 21: Test Services on desktop + mobile

### PHASE 4: Work Section (Steps 22-26)
Step 22: Animate Work section heading with scrollTrigger scrub
Step 23: Convert Work cards to scroll-scrubbed instead of timeline entrance
Step 24: Add direction-aware animation with scrub on desktop
Step 25: Simplify Work animation for mobile (stagger with scrub)
Step 26: Test Work on desktop + mobile

### PHASE 5: About Section (Steps 27-31)
Step 27: Add clip-path reveal for About image on mobile too
Step 28: Convert About clip-path from entrance to scroll-scrubbed
Step 29: Add scroll-scrubbed About text animation
Step 30: About stack/tools list stagger animation
Step 31: Test About on desktop + mobile

### PHASE 6: Reviews Section (Steps 32-36)
Step 32: Animate Reviews section heading with scrollTrigger scrub
Step 33: Convert Reviews cards to scroll-scrubbed
Step 34: Add stagger with scrub for Reviews
Step 35: Tweak Reviews animation for mobile
Step 36: Test Reviews on desktop + mobile

### PHASE 7: Blog Section (Steps 37-41)
Step 37: Animate Blog section heading with scrollTrigger scrub
Step 38: Convert Blog cards to scroll-scrubbed
Step 39: Add stagger with scrub for Blog
Step 40: Tweak Blog animation for mobile
Step 41: Test Blog on desktop + mobile

### PHASE 8: Contact Section (Steps 42-46)
Step 42: Animate Contact heading with scrollTrigger scrub
Step 43: Convert Contact form/links to scroll-scrubbed stagger
Step 44: Add interest to Contact section (maybe map or subtle background)
Step 45: Tweak Contact for mobile
Step 46: Test Contact on desktop + mobile

### PHASE 9: Polish & Cross-check (Steps 47-50)
Step 47: Scroll through entire site — check every animation fires
Step 48: Check mobile — every section has animation
Step 49: Verify zero console errors on both viewports
Step 50: Final scroll-through verification + commit
