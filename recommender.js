// ============================================
// ShoeFit.run - Recommendation Engine
// ============================================

// Shoe database embedded directly (also available as separate JSON)
const shoeDatabase = [
    // ROAD RUNNING - Daily Trainers
    {
        id: 1,
        brand: "Nike",
        name: "Pegasus 41",
        category: "daily-trainer",
        surface: ["road", "mixed"],
        price: 140,
        weight: 283,
        drop: 10,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["versatile", "responsive", "breathable"],
        amazonId: "B0CX1XXXXX",
        description: "The workhorse of Nike's lineup. Great all-around trainer for daily miles."
    },
    {
        id: 2,
        brand: "Brooks",
        name: "Ghost 16",
        category: "daily-trainer",
        surface: ["road"],
        price: 140,
        weight: 280,
        drop: 12,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["smooth", "reliable", "durable"],
        amazonId: "B0CX2XXXXX",
        description: "A smooth, reliable daily trainer that works for most runners."
    },
    {
        id: 3,
        brand: "ASICS",
        name: "Gel-Nimbus 26",
        category: "daily-trainer",
        surface: ["road"],
        price: 160,
        weight: 309,
        drop: 8,
        cushion: "max",
        support: "neutral",
        bestFor: ["half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["plush", "comfortable", "long-distance"],
        amazonId: "B0CX3XXXXX",
        description: "Maximum cushioning for longer runs and heavier runners."
    },
    {
        id: 4,
        brand: "New Balance",
        name: "Fresh Foam 1080v13",
        category: "daily-trainer",
        surface: ["road"],
        price: 165,
        weight: 303,
        drop: 6,
        cushion: "max",
        support: "neutral",
        bestFor: ["10k", "half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["soft", "premium", "smooth-ride"],
        amazonId: "B0CX4XXXXX",
        description: "Plush, premium daily trainer with excellent cushioning."
    },
    {
        id: 5,
        brand: "Hoka",
        name: "Clifton 9",
        category: "daily-trainer",
        surface: ["road"],
        price: 145,
        weight: 248,
        drop: 5,
        cushion: "max",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon", "fitness"],
        weightRange: ["light", "light-medium", "medium", "medium-heavy"],
        tags: ["lightweight", "cushioned", "meta-rocker"],
        amazonId: "B0CX5XXXXX",
        description: "Light yet cushioned. The signature Hoka ride."
    },
    // ROAD RUNNING - Racing/Performance
    {
        id: 6,
        brand: "Nike",
        name: "Vaporfly 3",
        category: "racing",
        surface: ["road"],
        price: 260,
        weight: 188,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-plate", "race-day", "fast"],
        amazonId: "B0CX6XXXXX",
        description: "The gold standard in carbon-plated racing shoes."
    },
    {
        id: 7,
        brand: "Nike",
        name: "Alphafly 3",
        category: "racing",
        surface: ["road"],
        price: 285,
        weight: 215,
        drop: 4,
        cushion: "max",
        support: "neutral",
        bestFor: ["half", "marathon", "ultra"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-plate", "max-cushion", "marathon"],
        amazonId: "B0CX7XXXXX",
        description: "Maximum cushioning with carbon plate for marathons."
    },
    {
        id: 8,
        brand: "Adidas",
        name: "Adizero Adios Pro 3",
        category: "racing",
        surface: ["road"],
        price: 250,
        weight: 215,
        drop: 6.5,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-rods", "fast", "responsive"],
        amazonId: "B0CX8XXXXX",
        description: "Adidas' top racing shoe with carbon rods technology."
    },
    {
        id: 9,
        brand: "Saucony",
        name: "Endorphin Pro 4",
        category: "racing",
        surface: ["road"],
        price: 225,
        weight: 206,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-plate", "speedroll", "race-day"],
        amazonId: "B0CX9XXXXX",
        description: "Fast, efficient carbon racer at a more accessible price."
    },
    {
        id: 10,
        brand: "ASICS",
        name: "Metaspeed Sky Paris",
        category: "racing",
        surface: ["road"],
        price: 250,
        weight: 193,
        drop: 5,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium"],
        tags: ["carbon-plate", "stride-runner", "elite"],
        amazonId: "B0CX10XXXX",
        description: "ASICS' elite racer for stride runners."
    },
    // ROAD RUNNING - Stability
    {
        id: 11,
        brand: "Brooks",
        name: "Adrenaline GTS 24",
        category: "stability",
        surface: ["road"],
        price: 140,
        weight: 289,
        drop: 12,
        cushion: "moderate",
        support: "stability",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy", "heavy"],
        tags: ["guiderails", "stable", "reliable"],
        amazonId: "B0CX11XXXX",
        description: "Best-selling stability shoe with GuideRails support."
    },
    {
        id: 12,
        brand: "ASICS",
        name: "Gel-Kayano 31",
        category: "stability",
        surface: ["road"],
        price: 160,
        weight: 303,
        drop: 10,
        cushion: "max",
        support: "stability",
        bestFor: ["10k", "half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["stable", "cushioned", "supportive"],
        amazonId: "B0CX12XXXX",
        description: "Premium stability with maximum cushioning."
    },
    {
        id: 13,
        brand: "New Balance",
        name: "860v14",
        category: "stability",
        surface: ["road"],
        price: 140,
        weight: 295,
        drop: 10,
        cushion: "moderate",
        support: "stability",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["medial-post", "reliable", "daily"],
        amazonId: "B0CX13XXXX",
        description: "Reliable stability trainer for daily miles."
    },
    {
        id: 14,
        brand: "Saucony",
        name: "Guide 17",
        category: "stability",
        surface: ["road"],
        price: 140,
        weight: 272,
        drop: 8,
        cushion: "moderate",
        support: "stability",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["guidance-frame", "smooth", "balanced"],
        amazonId: "B0CX14XXXX",
        description: "Balanced stability with smooth transitions."
    },
    {
        id: 15,
        brand: "Hoka",
        name: "Arahi 7",
        category: "stability",
        surface: ["road"],
        price: 145,
        weight: 260,
        drop: 5,
        cushion: "moderate",
        support: "stability",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["j-frame", "lightweight-stability", "rocker"],
        amazonId: "B0CX15XXXX",
        description: "Lightweight stability with Hoka's signature cushioning."
    },
    // TRAIL RUNNING
    {
        id: 16,
        brand: "Salomon",
        name: "Speedcross 6",
        category: "trail",
        surface: ["trail"],
        price: 145,
        weight: 295,
        drop: 10,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["aggressive-lugs", "mud", "technical"],
        amazonId: "B0CX16XXXX",
        description: "Aggressive trail shoe for muddy, technical terrain."
    },
    {
        id: 17,
        brand: "Salomon",
        name: "Ultra Glide 2",
        category: "trail",
        surface: ["trail", "mixed"],
        price: 150,
        weight: 280,
        drop: 6,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["half", "marathon", "ultra"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["versatile", "long-distance", "comfortable"],
        amazonId: "B0CX17XXXX",
        description: "Versatile trail shoe for long distances."
    },
    {
        id: 18,
        brand: "Hoka",
        name: "Speedgoat 6",
        category: "trail",
        surface: ["trail"],
        price: 155,
        weight: 291,
        drop: 4,
        cushion: "max",
        support: "neutral",
        bestFor: ["10k", "half", "marathon", "ultra"],
        weightRange: ["light", "light-medium", "medium", "medium-heavy"],
        tags: ["vibram", "cushioned", "technical"],
        amazonId: "B0CX18XXXX",
        description: "Maximum cushioning meets aggressive traction."
    },
    {
        id: 19,
        brand: "Brooks",
        name: "Cascadia 18",
        category: "trail",
        surface: ["trail", "mixed"],
        price: 140,
        weight: 295,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["protective", "durable", "versatile"],
        amazonId: "B0CX19XXXX",
        description: "Durable, protective trail shoe for varied terrain."
    },
    {
        id: 20,
        brand: "Nike",
        name: "Pegasus Trail 5",
        category: "trail",
        surface: ["trail", "mixed"],
        price: 145,
        weight: 286,
        drop: 9,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["versatile", "road-to-trail", "react-foam"],
        amazonId: "B0CX20XXXX",
        description: "Road-to-trail versatility with React foam."
    },
    {
        id: 21,
        brand: "La Sportiva",
        name: "Bushido III",
        category: "trail",
        surface: ["trail"],
        price: 165,
        weight: 290,
        drop: 6,
        cushion: "low",
        support: "neutral",
        bestFor: ["5k", "10k", "half"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["technical", "precise", "mountain"],
        amazonId: "B0CX21XXXX",
        description: "Technical mountain running shoe for precise footwork."
    },
    {
        id: 22,
        brand: "Altra",
        name: "Lone Peak 8",
        category: "trail",
        surface: ["trail"],
        price: 150,
        weight: 295,
        drop: 0,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["half", "marathon", "ultra"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["zero-drop", "wide-toe-box", "natural"],
        amazonId: "B0CX22XXXX",
        description: "Zero-drop trail icon with room for toes to splay."
    },
    // ROAD RUNNING - Speed/Tempo
    {
        id: 23,
        brand: "Nike",
        name: "Tempo Next%",
        category: "tempo",
        surface: ["road"],
        price: 200,
        weight: 246,
        drop: 10,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["tempo", "speed-work", "react-foam"],
        amazonId: "B0CX23XXXX",
        description: "Speed trainer for tempo runs and fast workouts."
    },
    {
        id: 24,
        brand: "Saucony",
        name: "Endorphin Speed 4",
        category: "tempo",
        surface: ["road"],
        price: 170,
        weight: 215,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["nylon-plate", "versatile", "fast"],
        amazonId: "B0CX24XXXX",
        description: "Versatile speed shoe that can do it all."
    },
    {
        id: 25,
        brand: "New Balance",
        name: "FuelCell Rebel v4",
        category: "tempo",
        surface: ["road"],
        price: 140,
        weight: 224,
        drop: 6,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["bouncy", "fun", "daily-racer"],
        amazonId: "B0CX25XXXX",
        description: "Fun, bouncy shoe for fast daily training."
    },
    {
        id: 26,
        brand: "ASICS",
        name: "Magic Speed 4",
        category: "tempo",
        surface: ["road"],
        price: 180,
        weight: 210,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-plate", "training-racer", "versatile"],
        amazonId: "B0CX26XXXX",
        description: "Carbon-plated tempo trainer for speed sessions."
    },
    {
        id: 27,
        brand: "Adidas",
        name: "Adizero Boston 12",
        category: "tempo",
        surface: ["road"],
        price: 160,
        weight: 233,
        drop: 6.5,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["energyrods", "responsive", "versatile"],
        amazonId: "B0CX27XXXX",
        description: "Versatile tempo trainer with Energyrods."
    },
    // ULTRA/LONG DISTANCE
    {
        id: 31,
        brand: "Hoka",
        name: "Mach X",
        category: "tempo",
        surface: ["road"],
        price: 180,
        weight: 232,
        drop: 5,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-plate", "tempo", "versatile"],
        amazonId: "B0CX31XXXX",
        description: "Carbon-plated versatility for workouts and races."
    },
    {
        id: 32,
        brand: "Altra",
        name: "Torin 7",
        category: "daily-trainer",
        surface: ["road"],
        price: 150,
        weight: 269,
        drop: 0,
        cushion: "max",
        support: "neutral",
        bestFor: ["half", "marathon", "ultra", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["zero-drop", "wide-toe-box", "cushioned"],
        amazonId: "B0CX32XXXX",
        description: "Zero-drop road shoe with maximum cushioning."
    },
    {
        id: 33,
        brand: "Hoka",
        name: "Bondi 8",
        category: "daily-trainer",
        surface: ["road"],
        price: 165,
        weight: 307,
        drop: 4,
        cushion: "max",
        support: "neutral",
        bestFor: ["half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["max-cushion", "soft", "recovery"],
        amazonId: "B0CX33XXXX",
        description: "Maximum cushioning for easy days and heavier runners."
    },
    {
        id: 34,
        brand: "Saucony",
        name: "Triumph 22",
        category: "daily-trainer",
        surface: ["road"],
        price: 160,
        weight: 283,
        drop: 10,
        cushion: "max",
        support: "neutral",
        bestFor: ["half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["plush", "pwrrun+", "long-runs"],
        amazonId: "B0CX34XXXX",
        description: "Plush daily trainer for long runs."
    },
    // MORE TRAIL OPTIONS
    {
        id: 35,
        brand: "Hoka",
        name: "Challenger 7",
        category: "trail",
        surface: ["trail", "mixed"],
        price: 145,
        weight: 269,
        drop: 5,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["versatile", "road-to-trail", "cushioned"],
        amazonId: "B0CX35XXXX",
        description: "Versatile shoe for road and light trail."
    },
    {
        id: 36,
        brand: "Inov-8",
        name: "Trailfly G 270",
        category: "trail",
        surface: ["trail"],
        price: 165,
        weight: 270,
        drop: 6,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["half", "marathon", "ultra"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["graphene", "durable", "long-distance"],
        amazonId: "B0CX36XXXX",
        description: "Graphene-grip trail shoe for long distances."
    },
    {
        id: 37,
        brand: "Salomon",
        name: "S/Lab Ultra 3",
        category: "trail",
        surface: ["trail"],
        price: 230,
        weight: 285,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["marathon", "ultra"],
        weightRange: ["light-medium", "medium"],
        tags: ["elite", "ultra-distance", "premium"],
        amazonId: "B0CX37XXXX",
        description: "Elite ultra-distance trail racing shoe."
    },
    // SPECIALTY
    {
        id: 38,
        brand: "On",
        name: "Cloudmonster",
        category: "daily-trainer",
        surface: ["road"],
        price: 170,
        weight: 260,
        drop: 6,
        cushion: "max",
        support: "neutral",
        bestFor: ["10k", "half", "marathon", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["cloudtec", "bouncy", "max-cushion"],
        amazonId: "B0CX38XXXX",
        description: "Maximum CloudTec cushioning for long runs."
    },
    {
        id: 39,
        brand: "On",
        name: "Cloudsurfer",
        category: "daily-trainer",
        surface: ["road"],
        price: 150,
        weight: 255,
        drop: 10,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["cloudtec", "responsive", "versatile"],
        amazonId: "B0CX39XXXX",
        description: "Versatile daily trainer with CloudTec."
    },
    {
        id: 40,
        brand: "Mizuno",
        name: "Wave Rider 28",
        category: "daily-trainer",
        surface: ["road"],
        price: 140,
        weight: 280,
        drop: 12,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["wave-plate", "smooth", "reliable"],
        amazonId: "B0CX40XXXX",
        description: "Smooth ride with Mizuno's Wave plate technology."
    },
    // MORE STABILITY
    {
        id: 41,
        brand: "Hoka",
        name: "Gaviota 5",
        category: "stability",
        surface: ["road"],
        price: 175,
        weight: 303,
        drop: 5,
        cushion: "max",
        support: "stability",
        bestFor: ["half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["max-stability", "cushioned", "j-frame"],
        amazonId: "B0CX41XXXX",
        description: "Maximum cushioning with stability support."
    },
    {
        id: 42,
        brand: "Mizuno",
        name: "Wave Inspire 20",
        category: "stability",
        surface: ["road"],
        price: 150,
        weight: 289,
        drop: 12,
        cushion: "moderate",
        support: "stability",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["wave-plate", "stable", "smooth"],
        amazonId: "B0CX42XXXX",
        description: "Stability support with Mizuno Wave technology."
    },
    // RACING FLATS
    {
        id: 43,
        brand: "Nike",
        name: "Streakfly",
        category: "racing",
        surface: ["road"],
        price: 170,
        weight: 163,
        drop: 6,
        cushion: "low",
        support: "neutral",
        bestFor: ["5k", "10k"],
        weightRange: ["light", "light-medium"],
        tags: ["lightweight", "5k-10k", "fast"],
        amazonId: "B0CX43XXXX",
        description: "Ultralight racing flat for 5K and 10K."
    },
    {
        id: 44,
        brand: "Adidas",
        name: "Adizero Takumi Sen 10",
        category: "racing",
        surface: ["road"],
        price: 180,
        weight: 180,
        drop: 6,
        cushion: "low",
        support: "neutral",
        bestFor: ["5k", "10k", "half"],
        weightRange: ["light", "light-medium"],
        tags: ["lightweight", "responsive", "speed"],
        amazonId: "B0CX44XXXX",
        description: "Lightweight racer for short to mid distances."
    },
    {
        id: 45,
        brand: "New Balance",
        name: "FuelCell SuperComp Elite v4",
        category: "racing",
        surface: ["road"],
        price: 230,
        weight: 206,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["carbon-plate", "marathon", "elite"],
        amazonId: "B0CX45XXXX",
        description: "Elite carbon racer for half and full marathons."
    },
    // MORE TRAIL
    {
        id: 46,
        brand: "Nike",
        name: "Zegama 2",
        category: "trail",
        surface: ["trail"],
        price: 160,
        weight: 285,
        drop: 4,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["10k", "half", "marathon"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["technical", "aggressive", "race"],
        amazonId: "B0CX46XXXX",
        description: "Technical trail racer for aggressive terrain."
    },
    {
        id: 47,
        brand: "ASICS",
        name: "Gel-Trabuco 12",
        category: "trail",
        surface: ["trail", "mixed"],
        price: 140,
        weight: 310,
        drop: 8,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half", "fitness"],
        weightRange: ["light-medium", "medium", "medium-heavy"],
        tags: ["durable", "protective", "versatile"],
        amazonId: "B0CX47XXXX",
        description: "Durable trail shoe with rock protection."
    },
    {
        id: 48,
        brand: "Saucony",
        name: "Peregrine 14",
        category: "trail",
        surface: ["trail"],
        price: 140,
        weight: 270,
        drop: 4,
        cushion: "moderate",
        support: "neutral",
        bestFor: ["5k", "10k", "half"],
        weightRange: ["light", "light-medium", "medium"],
        tags: ["responsive", "grippy", "versatile"],
        amazonId: "B0CX48XXXX",
        description: "Versatile trail shoe with great grip."
    },
    // INJURY-SPECIFIC
    {
        id: 49,
        brand: "Brooks",
        name: "Glycerin 21",
        category: "daily-trainer",
        surface: ["road"],
        price: 160,
        weight: 290,
        drop: 10,
        cushion: "max",
        support: "neutral",
        bestFor: ["10k", "half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["plush", "soft", "dna-loft"],
        amazonId: "B0CX49XXXX",
        description: "Super soft cushioning for joint protection."
    },
    {
        id: 50,
        brand: "New Balance",
        name: "Fresh Foam More v4",
        category: "daily-trainer",
        surface: ["road"],
        price: 165,
        weight: 320,
        drop: 4,
        cushion: "max",
        support: "neutral",
        bestFor: ["half", "marathon", "fitness"],
        weightRange: ["medium", "medium-heavy", "heavy"],
        tags: ["max-cushion", "rocker", "recovery"],
        amazonId: "B0CX50XXXX",
        description: "Maximum cushioning for recovery runs and joint protection."
    }
];

// Your Amazon affiliate tag - REPLACE WITH YOUR OWN
const AFFILIATE_TAG = "shoefit-20";

// Load results when page loads
function loadResults() {
    // Get answers from URL or localStorage
    let answers = {};
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('answers')) {
        try {
            answers = JSON.parse(decodeURIComponent(urlParams.get('answers')));
        } catch (e) {
            console.error('Failed to parse URL answers');
        }
    }
    
    if (Object.keys(answers).length === 0) {
        const stored = localStorage.getItem('shoefitAnswers');
        if (stored) {
            answers = JSON.parse(stored);
        }
    }
    
    if (Object.keys(answers).length === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display user profile
    displayUserProfile(answers);
    
    // Get recommendations
    const recommendations = getRecommendations(answers);
    
    // Display results
    displayResults(recommendations, answers);
}

// Display user profile summary
function displayUserProfile(answers) {
    const container = document.getElementById('userProfile');
    const labels = {
        weight: { 'light': '<130 lbs', 'light-medium': '130-160 lbs', 'medium': '160-190 lbs', 'medium-heavy': '190-220 lbs', 'heavy': '220+ lbs' },
        surface: { 'road': 'Road', 'trail': 'Trail', 'mixed': 'Mixed' },
        distance: { '5k': '5K', '10k': '10K', 'half': 'Half Marathon', 'marathon': 'Marathon', 'ultra': 'Ultra', 'fitness': 'Fitness' },
        budget: { 'budget': 'Under $150', 'mid': '$150-200', 'premium': '$200+' }
    };
    
    let tagsHTML = '';
    
    if (answers.weight && labels.weight[answers.weight]) {
        tagsHTML += `<span class="profile-tag">${labels.weight[answers.weight]}</span>`;
    }
    if (answers.surface && labels.surface[answers.surface]) {
        tagsHTML += `<span class="profile-tag">${labels.surface[answers.surface]} runner</span>`;
    }
    if (answers.distance && labels.distance[answers.distance]) {
        tagsHTML += `<span class="profile-tag">${labels.distance[answers.distance]}</span>`;
    }
    if (answers.budget && labels.budget[answers.budget]) {
        tagsHTML += `<span class="profile-tag">${labels.budget[answers.budget]}</span>`;
    }
    
    container.innerHTML = tagsHTML;
}

// Main recommendation algorithm
function getRecommendations(answers) {
    let scoredShoes = shoeDatabase.map(shoe => {
        let score = 0;
        let reasons = [];
        
        // 1. Surface matching (most important)
        if (answers.surface) {
            if (shoe.surface.includes(answers.surface)) {
                score += 30;
                if (shoe.surface.length === 1 && shoe.surface[0] === answers.surface) {
                    score += 5; // Bonus for dedicated surface
                    reasons.push(`Designed specifically for ${answers.surface} running`);
                }
            } else {
                score -= 50; // Heavy penalty for wrong surface
            }
        }
        
        // 2. Weight matching
        if (answers.weight && shoe.weightRange) {
            if (shoe.weightRange.includes(answers.weight)) {
                score += 20;
                reasons.push('Appropriate cushioning for your weight');
            } else {
                score -= 15;
            }
        }
        
        // 3. Distance matching
        if (answers.distance && shoe.bestFor) {
            if (shoe.bestFor.includes(answers.distance)) {
                score += 20;
                reasons.push(`Great for ${formatDistance(answers.distance)} runs`);
            }
        }
        
        // 4. Budget matching
        if (answers.budget) {
            const maxBudget = answers.budget === 'budget' ? 150 : answers.budget === 'mid' ? 200 : 999;
            const minBudget = answers.budget === 'premium' ? 200 : 0;
            
            if (shoe.price <= maxBudget && shoe.price >= minBudget) {
                score += 15;
                reasons.push('Within your budget');
            } else if (shoe.price > maxBudget) {
                score -= 20;
            }
        }
        
        // 5. Pronation matching
        if (answers.pronation && answers.pronation !== 'unknown') {
            if (answers.pronation === 'over' && shoe.support === 'stability') {
                score += 15;
                reasons.push('Provides stability support for overpronation');
            } else if (answers.pronation === 'neutral' && shoe.support === 'neutral') {
                score += 10;
            } else if (answers.pronation === 'over' && shoe.support === 'neutral') {
                score -= 10;
            }
        }
        
        // 6. Injury considerations
        if (answers.injury && answers.injury !== 'none') {
            if (['knee', 'shin', 'plantar'].includes(answers.injury) && shoe.cushion === 'max') {
                score += 10;
                reasons.push('Extra cushioning helps protect joints');
            }
            if (answers.injury === 'plantar' && shoe.drop >= 8) {
                score += 5;
            }
        }
        
        // 7. Mileage considerations
        if (answers.mileage) {
            if (['very-high', 'ultra-high'].includes(answers.mileage)) {
                if (shoe.category === 'daily-trainer' && shoe.cushion === 'max') {
                    score += 10;
                    reasons.push('Durable enough for high mileage');
                }
            }
        }
        
        // 8. Foot strike
        if (answers.strike) {
            if (answers.strike === 'forefoot' && shoe.drop <= 6) {
                score += 5;
            } else if (answers.strike === 'heel' && shoe.drop >= 10) {
                score += 5;
            }
        }
        
        return {
            ...shoe,
            score: Math.max(0, score),
            reasons: reasons.slice(0, 3) // Top 3 reasons
        };
    });
    
    // Sort by score and return top results
    scoredShoes.sort((a, b) => b.score - a.score);
    
    // Calculate match percentage (normalize to 100)
    const maxScore = Math.max(...scoredShoes.map(s => s.score));
    scoredShoes = scoredShoes.map(shoe => ({
        ...shoe,
        matchPercent: maxScore > 0 ? Math.round((shoe.score / maxScore) * 100) : 0
    }));
    
    return scoredShoes.slice(0, 5); // Return top 5
}

// Display results
function displayResults(recommendations, answers) {
    const container = document.getElementById('resultsContainer');
    
    if (recommendations.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No exact matches found</h3>
                <p>Try adjusting your criteria or <a href="index.html">retake the quiz</a>.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    recommendations.slice(0, 3).forEach((shoe, index) => {
        const isTopPick = index === 0;
        const amazonUrl = `https://www.amazon.com/dp/${shoe.amazonId}?tag=${AFFILIATE_TAG}`;
        
        html += `
            <div class="shoe-result ${isTopPick ? 'top-pick' : ''}">
                <div class="result-header">
                    <div class="result-rank">
                        <div class="rank-badge">${index + 1}</div>
                        <div>
                            <div class="result-brand">${shoe.brand}</div>
                            <div class="result-name">${shoe.name}</div>
                        </div>
                    </div>
                    <div class="match-score">
                        <div class="match-label">Match</div>
                        <div class="match-value">${shoe.matchPercent}%</div>
                    </div>
                </div>
                
                <div class="shoe-details">
                    <div class="detail-item">
                        <div class="detail-label">Price</div>
                        <div class="detail-value">$${shoe.price}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Weight</div>
                        <div class="detail-value">${shoe.weight}g</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Drop</div>
                        <div class="detail-value">${shoe.drop}mm</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Cushion</div>
                        <div class="detail-value">${capitalize(shoe.cushion)}</div>
                    </div>
                </div>
                
                <div class="shoe-tags">
                    ${shoe.tags.map(tag => `<span class="shoe-tag">${tag}</span>`).join('')}
                </div>
                
                ${shoe.reasons.length > 0 ? `
                    <div class="why-section">
                        <h4>Why this shoe?</h4>
                        <p>${shoe.reasons.join('. ')}.</p>
                    </div>
                ` : ''}
                
                <a href="${amazonUrl}" target="_blank" class="buy-button">
                    Check Price on Amazon
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Show comparison section
    if (recommendations.length >= 2) {
        displayComparison(recommendations.slice(0, 3));
    }
}

// Display comparison table
function displayComparison(shoes) {
    const section = document.getElementById('compareSection');
    const grid = document.getElementById('compareGrid');
    
    const attributes = [
        { key: 'price', label: 'Price', format: v => `$${v}` },
        { key: 'weight', label: 'Weight', format: v => `${v}g` },
        { key: 'drop', label: 'Drop', format: v => `${v}mm` },
        { key: 'cushion', label: 'Cushion', format: v => capitalize(v) },
        { key: 'support', label: 'Support', format: v => capitalize(v) }
    ];
    
    let html = '<div class="compare-cell header"></div>';
    shoes.forEach(shoe => {
        html += `<div class="compare-cell header">${shoe.brand} ${shoe.name}</div>`;
    });
    
    attributes.forEach(attr => {
        html += `<div class="compare-cell label">${attr.label}</div>`;
        shoes.forEach(shoe => {
            html += `<div class="compare-cell">${attr.format(shoe[attr.key])}</div>`;
        });
    });
    
    grid.innerHTML = html;
    section.classList.remove('hidden');
}

// Helper functions
function formatDistance(dist) {
    const labels = {
        '5k': '5K',
        '10k': '10K',
        'half': 'half marathon',
        'marathon': 'marathon',
        'ultra': 'ultra',
        'fitness': 'fitness'
    };
    return labels[dist] || dist;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
