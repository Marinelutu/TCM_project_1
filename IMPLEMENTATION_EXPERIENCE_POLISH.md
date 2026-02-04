# IMPLEMENTATION_EXPERIENCE_POLISH: Performance, Polish & Production Readiness

This plan outlines the steps to upgrade the "Nature-Inspired" digital experience into a highly optimized, accessible, and functional production-ready website.

## 1. Phase 1: Performance & Motion Guardrails
**Goal**: Smooth out the experience and ensure comfort for all users.

*   **[MODIFY] `src/components/Hero.tsx`**:
    *   **Direct DOM Manipulation**: Replace `useState` for `mousePos` with `useRef`. Update the light-glow and parallax backgrounds directly via style properties in a `mousemove` listener to avoid React re-render overhead (60fps target).
    *   **Reduced Motion**: Add logic to detect `prefers-reduced-motion` and disable parallax/fog if the user prefers stability.
*   **[MODIFY] `src/index.css`**:
    *   Implement smooth scroll defaults for all browsers.
    *   Add accessibility focuses: clear focus indicators for keyboard navigation.

## 2. Phase 2: The "Qi" Energy Trail
**Goal**: Create a site-wide connective visual element.

*   **[ADD] `src/components/QiTrail.tsx`**:
    *   A high-performance interactive component that renders a soft, silk-like trail following the cursor.
    *   Uses **Canvas API** for minimal CPU impact.
    *   Visuals: A fading, golden-white mist stroke representing life energy (Qi).

## 3. Phase 3: Social Proof & Storytelling
**Goal**: Build trust through testimonials.

*   **[ADD] `src/components/Testimonials.tsx`**:
    *   **Design**: A minimalist "floating cloud" layout.
    *   **Content**: 3-4 placeholder success stories (e.g., chronic pain relief, stress management).
    *   **Motion**: Auto-rotating carousel with smooth cross-dissolve transitions.
*   **[MODIFY] `src/App.tsx`**: Integrate the new section between `Services` and `About`.

## 4. Phase 4: Foundational Integrity (A11y & SEO)
**Goal**: Ensure the site is "correct" under the hood.

*   **[MODIFY] All Components**:
    *   **ARIA Roles**: Add `aria-hidden="true"` to decorative SVGs and light gradients.
    *   **Form Labels**: Ensure `BookingModal` has explicit `htmlFor` associations.
    *   **Semantic HTML**: Audit `<section>` and `<header>` tags for proper hierarchy.
*   **[MODIFY] `src/components/BookingModal.tsx`**:
    *   Add field validation (email format, phone length).
    *   Implement a "Loading" state for the button during submission.

## 5. Phase 5: Asset & Image Hardening
**Goal**: Faster load times and sharper visuals.

*   **[MODIFY] Images**: 
    *   Implement lazy loading (`loading="lazy"`) for images below the fold.
    *   Add `object-position` fine-tuning for mobile responsiveness.

## 6. Verification
*   **Performance Audit**: Use Chrome DevTools to ensure zero "dropped frames" during Hero interaction.
*   **Keyboard Navigation**: Verify the entire site can be navigated using only the `TAB` key.
*   **Mobile Responsiveness**: Confirm the "Qi" trail doesn't interfere with touch scrolling.
