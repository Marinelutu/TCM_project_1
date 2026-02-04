export interface SolarTerm {
    name: string;
    translation: string;
    startDate: { month: number; day: number };
    description: string;
    recommendation: string;
}

const SOLAR_TERMS: SolarTerm[] = [
    {
        name: "Li Chun",
        translation: "Beginning of Spring",
        startDate: { month: 2, day: 4 },
        description: "The first term of the year. Wood energy is rising. Life begins to stir.",
        recommendation: "Focus on Liver health. Eat sprouts and green vegetables. Stretch to move stagnant Qi."
    },
    {
        name: "Yu Shui",
        translation: "Rain Water",
        startDate: { month: 2, day: 19 },
        description: "Rain increases, and temperatures rise. Dampness begins to emerge.",
        recommendation: "Protect the Spleen from dampness. Warm foods like ginger and congee are ideal."
    },
    {
        name: "Jing Zhe",
        translation: "Awakening of Insects",
        startDate: { month: 3, day: 5 },
        description: "Thunder wakes the insects. A time of sudden growth and activity.",
        recommendation: "Move your body. Early to bed, early to rise. Avoid heavy, greasy foods."
    },
    {
        name: "Chun Fen",
        translation: "Spring Equinox",
        startDate: { month: 3, day: 20 },
        description: "Day and night are equal. Perfect balance between Yin and Yang.",
        recommendation: "Balance is key. Practice Tai Chi or Yoga. Focus on equanimity."
    },
    {
        name: "Qing Ming",
        translation: "Pure Brightness",
        startDate: { month: 4, day: 4 },
        description: "Clear weather, new growth. A time to honor ancestors.",
        recommendation: "Spend time in nature. Eat 'cool' foods if feeling heat. Drink green tea."
    },
    // Adding a few more for the current period (Feb-March-April)
    // In a real app, we would include all 24.
];

export function getCurrentSolarTerm(): SolarTerm {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate();

    // Sort by date descending to find the latest term that has started
    const term = [...SOLAR_TERMS]
        .sort((a, b) => {
            if (a.startDate.month !== b.startDate.month) return b.startDate.month - a.startDate.month;
            return b.startDate.day - a.startDate.day;
        })
        .find(t => {
            if (month > t.startDate.month) return true;
            if (month === t.startDate.month && day >= t.startDate.day) return true;
            return false;
        });

    // Default to the last term of the previous year if none found (simplified)
    return term || SOLAR_TERMS[SOLAR_TERMS.length - 1];
}
