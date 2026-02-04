# LastRefinedImprovements: The Digital Sensei & Wellness Ecosystem

This plan outlines the final strategic upgrades to transform the TCM platform into an intelligent, personality-driven wellness ecosystem. It focuses on the "Digital Sensei" experience, the Living Solar Calendar, and the B2B Practitioner architecture.

## 1. Phase 1: The "Digital Sensei" Diagnostic Funnel
**Goal**: Transition from a shop to a consultation-first experience.

*   **[NEW] `src/components/DiagnosticFunnel.tsx`**:
    *   **UX**: "Typeform" style one-question-per-screen interface.
    *   **Logic Jump Engine**: 
        *   Initial: Sleep, Energy, Digestion, Mood.
        *   Pivot: If "Sleep" -> Ask about "Night Sweats" (Yin/Yang balance) or "Racing Thoughts" (Heart Fire).
    *   **The "Tongue Analysis"**:
        *   Implement a `TongueScanner.tsx` sub-component.
        *   Interactive upload zone with a "Scanning" overlay animation.
        *   Output: Simulated diagnostic metrics (Coating, Redness, Shape) to build authority.

## 2. Phase 2: The Living Solar Calendar (Hero System)
**Goal**: Make the site feel globally seasonal and personalized.

*   **[NEW] `src/utils/solarTerms.ts`**:
    *   Logic to determine the current of the 24 Chinese Solar Terms (e.g., *Li Chun*, *Yu Shui*).
*   **[MODIFY] `src/components/Hero.tsx`**:
    *   **Dynamic Aesthetic**: Swap Hero images and greetings automatically based on the detected Solar Term.
    *   **Personalized Alerts**: For users who have completed the funnel, display a "Sensei Note": *"It is the Great Cold term; as someone with a Cold Constitution, we recommend warming Ginger moxibustion today."*

## 3. Phase 3: "Yang Sheng" Rituals & Shop-the-Look Video
**Goal**: Increase LTV (Life-Time Value) through education and immersive shopping.

*   **[NEW] `src/components/RitualVideo.tsx`**:
    *   Implementation of a "Shop the Look" player.
    *   A high-quality Gua Sha or Herbal Ritual video with floating "Add to Cart" buttons that appear over specific products used in the video.
*   **[NEW] `src/components/QiTracker.tsx`**:
    *   A gamified "Daily Ritual" button for the "Inner Circle" loyalty tier.
    *   Users earn "Qi Points" for checking in on their daily herbal routine.

## 4. Phase 4: Practitioner Portal (B2B)
**Goal**: Build a professional network "Moat" around the business.

*   **[NEW] `src/components/PractitionerDashboard.tsx`**:
    *   A restricted UI for Acupuncturists/Herbalists.
    *   **Prescription Carts**: Tools to assemble a curated product list and generate a "Patient Link."
*   **[NEW] Commission Logic Mockup**: 
    *   Visual indicators of earned commissions on patient purchases.

## 5. Verification & Final Polish
*   **Logic Flow**: Test all "Logic Jumps" in the funnel to ensure no dead ends.
*   **Date Mocking**: Verify the Solar Term logic by mocking different months.
*   **Mobile Rituals**: Ensure the video player and "Qi Tracker" are thumb-friendly.
