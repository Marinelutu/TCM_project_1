# IMPLEMENTATION_UPDATE_VISUALS: Nature-Inspired Immersive Experience

This plan outlines the steps to transform the current "demo-style" TCM website into a stunning, premium, nature-inspired digital experience.

## 1. Design Vision
*   **Aesthetic**: "Organic Zen" - Combining ancient wisdom with modern high-end design.
*   **Palette**: Deep Forest Greens, Soft Mist Off-Whites, Muted Earth Browns, and Subtle Gold accents.
*   **Motion**: Slow, breathing-like transitions, parallax botanical layers, and glassmorphic panels.

## 2. Phase 1: Foundation & The "Breath" System
**Goal**: Establish the global atmospheric effects.

*   **[MODIFY] `tailwind.config.js`**: 
    *   Define a custom palette: `emerald-950` (Forest), `stone-50` (Alabaster), `amber-200/20` (Soft Gold).
    *   Add custom animation keyframes for `pulse-slow` (breathing), `float` (leaves/elements), and `fog-move`.
*   **[MODIFY] `src/index.css`**:
    *   Implement a **Grain/Noise Overlay**: A subtle CSS noise texture over the entire site for a tactile "handmade paper" feel.
    *   Add **Glassmorphism Utilities**: Custom classes for backgrounds with `backdrop-filter: blur()`.
    *   Define **Organic Dividers**: SVG mask patterns for non-linear section transitions (waves/mountain shapes).

## 3. Phase 2: The "Portal" Hero Section
**Goal**: Make the first impression stunning.

*   **[MODIFY] `src/components/Hero.tsx`**:
    *   **Background**: Transition from a static image to a layered parallax setup.
        *   Layer 1: Deep misty mountain/forest (Static/Generated).
        *   Layer 2: Animated mist/fog (CSS/SVG).
    *   **Typography**: Use `Playfair Display` with much larger tracking and varied weights.
    *   **Interaction**: Implement a "light-follow" effect where a soft glow follows the cursor, illuminating the nature background.

## 4. Phase 3: "Living" Layouts & Components
**Goal**: Break the "boxy" grid.

*   **[MODIFY] Section Dividers**: Inject SVG "torn paper" or "soft wave" dividers between `Hero`, `Services`, and `About`.
*   **[MODIFY] `src/components/Services.tsx`**:
    *   Replace sharp cards with **Glassmorphism Panels**.
    *   Add **Bloom Hover Effects**: Cards gently expand and gain a soft inner glow when hovered, mimicking "Qi" energy.
*   **[MODIFY] Imagery**: Update practitioner and service photos with soft-focus, nature-integrated shots (e.g., herbal tea with steam, morning light in a clinic).

## 5. Phase 4: Interaction & Micro-Details
**Goal**: Enhance engagement.

*   **[ADD] Nature Interactions**: 
    *   Subtle "floating leaves" or petals that drift slowly across sections.
    *   Soft scroll-triggered reveals where text emerges from "mist" (opacity + blur + slide).
*   **[MODIFY] `src/components/BookingModal.tsx`**:
    *   Ensure the modal feels like an extension of the space (blurred background, rounded organic corners).

## 6. Verification Plan
*   **Visual Review**: Check for smooth animations (no stutter).
*   **Readability Check**: Ensure the "stunning" effects don't compromise text legibility.
*   **Device Testing**: Verify that organic shapes and parallax effects scale correctly on mobile.
