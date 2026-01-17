// ============================================
// ShoeFit.run - Recommendation Engine
// Powered by Enroute.run Inventory
// ============================================

// Shoe database from Enroute.run
const shoeDatabase = [
    {
        "id": 1,
        "brand": "Adidas",
        "name": "Adidas Adizero Adios Pro 4",
        "fullName": "Adidas Adizero Adios Pro 4",
        "handle": "mens-adidas-adizero-adios-pro-4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Adidas-Adizero-Adios-Pro-4.png?v=1762274375"
    },
    {
        "id": 2,
        "brand": "Adidas",
        "name": "Adidas Adizero Adios Pro Evo 2",
        "fullName": "Adidas Adizero Adios Pro Evo 2",
        "handle": "adidas-adizero-adios-pro-4-copy",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 650.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AdizeroAdiosProEvo2_2.png?v=1757104873"
    },
    {
        "id": 3,
        "brand": "Adidas",
        "name": "Adidas Adizero EVO SL Woven",
        "fullName": "Adidas Adizero EVO SL Woven",
        "handle": "adidas-adizero-evo-sl-woven",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Yellow_Plum_Plu_6.png?v=1764365863"
    },
    {
        "id": 4,
        "brand": "Adidas",
        "name": "Adidas Adizero Evo SL",
        "fullName": "Adidas Adizero Evo SL",
        "handle": "mens-adidas-adizero-evo-sl",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Adidas-Adizero-Evo-SL.png?v=1762274375"
    },
    {
        "id": 5,
        "brand": "Adidas",
        "name": "Adidas Supernova Rise 2",
        "fullName": "Adidas Supernova Rise 2",
        "handle": "mens-adidas-supernova-rise-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 110.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Adidas-Supernova-Rise-2.png?v=1762274374"
    },
    {
        "id": 6,
        "brand": "Adidas",
        "name": "Adizero Boston 13",
        "fullName": "Adizero Boston 13",
        "handle": "adizero-boston-13",
        "category": "tempo",
        "surface": [
            "road"
        ],
        "price": 145.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/CloudWhite_CoreBlack_LucidRed_1.png?v=1762479498"
    },
    {
        "id": 7,
        "brand": "Adidas",
        "name": "Adizero Takumi Sen 11",
        "fullName": "Adizero Takumi Sen 11",
        "handle": "adidas-adizero-takumi-sen-11",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/TakumiSen11.png?v=1761180911"
    },
    {
        "id": 8,
        "brand": "Adidas",
        "name": "Adidas Supernova Rise 2",
        "fullName": "Women's Adidas Supernova Rise 2",
        "handle": "womens-adidas-supernova-rise-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 110.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Adidas-Supernova-Rise-2.png?v=1762274374"
    },
    {
        "id": 9,
        "brand": "Adidas",
        "name": "Adizero Adios Pro 4",
        "fullName": "Women's Adizero Adios Pro 4",
        "handle": "womens-adidas-adizero-adios-pro-4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 200.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Adizero-Adios-Pro-4.png?v=1762274373"
    },
    {
        "id": 10,
        "brand": "Adidas",
        "name": "Adizero Boston 13",
        "fullName": "Women's Adizero Boston 13",
        "handle": "womens-adizero-boston-13",
        "category": "tempo",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/CloudWhite_MatteSilver_DashGrey.png?v=1757105817"
    },
    {
        "id": 11,
        "brand": "Adidas",
        "name": "Adizero Evo SL",
        "fullName": "Women's Adizero Evo SL",
        "handle": "womens-adidas-adizero-evo-sl",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Adizero-Evo-SL.png?v=1762274373"
    },
    {
        "id": 12,
        "brand": "Altra",
        "name": "Olympus 6",
        "fullName": "Olympus 6",
        "handle": "olympus-6",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 210.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Black_3_ed003a47-59c5-4889-b0a7-8c6215901382.png?v=1764809537"
    },
    {
        "id": 13,
        "brand": "Altra",
        "name": "Olympus 6 Hike Low GTX",
        "fullName": "Olympus 6 Hike Low GTX",
        "handle": "olympus-6-hike-low-gtx",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 240.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Black_3_27629b7e-c173-4ed4-a365-0faab12df55b.png?v=1764810088"
    },
    {
        "id": 14,
        "brand": "Arc'teryx",
        "name": "Norvan LD 4",
        "fullName": "Norvan LD 4",
        "handle": "mens-norvan-ld-4",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 140.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Norvan-LD-4.png?v=1762274046"
    },
    {
        "id": 15,
        "brand": "Arc'teryx",
        "name": "Sylan GTX",
        "fullName": "Sylan GTX",
        "handle": "arcteryx-mens-sylan-gtx",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 280.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Sylan-GTX.png?v=1762272738"
    },
    {
        "id": 16,
        "brand": "Arc'teryx",
        "name": "Norvan LD 3",
        "fullName": "Women's Norvan LD 3",
        "handle": "arcteryx-womens-norvan-ld-3",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 200.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Norvan-LD-3.png?v=1762272730"
    },
    {
        "id": 17,
        "brand": "Arc'teryx",
        "name": "Norvan LD 4",
        "fullName": "Women's Norvan LD 4",
        "handle": "womens-norvan-ld-4",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 140.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Norvan-LD-4.png?v=1762274045"
    },
    {
        "id": 18,
        "brand": "Arc'teryx",
        "name": "Norvan LD 4 GTX",
        "fullName": "Women's Norvan LD 4 GTX",
        "handle": "womens-norvan-ld-4-gtx",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 240.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Norvan-LD-4-GTX.png?v=1762274047"
    },
    {
        "id": 19,
        "brand": "Arc'teryx",
        "name": "Sylan Pro",
        "fullName": "Women's Sylan Pro",
        "handle": "womens-sylan-pro",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 156.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Sylan-Pro.webp?v=1762274319"
    },
    {
        "id": 20,
        "brand": "Asics",
        "name": "Gel Kayano 32",
        "fullName": "Gel Kayano 32",
        "handle": "mens-gel-kayano-32",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 220.0,
        "cushion": "max",
        "support": "stability",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Gel-Kayano-32.png?v=1753496673"
    },
    {
        "id": 21,
        "brand": "Asics",
        "name": "Gel Nimbus 27",
        "fullName": "Gel Nimbus 27",
        "handle": "mens-nimbus-27",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 185.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Gel-Nimbus-27.png?v=1762273521"
    },
    {
        "id": 22,
        "brand": "Asics",
        "name": "Gel Nimbus 28",
        "fullName": "Gel Nimbus 28",
        "handle": "gel-nimbus-28",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 209.99,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/white_white_505679bf-9019-49f7-a362-137a218bf79e.png?v=1767485860"
    },
    {
        "id": 23,
        "brand": "Asics",
        "name": "Magic Speed 4",
        "fullName": "Magic Speed 4",
        "handle": "mens-magic-speed-4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 187.95,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Magic-Speed-4.png?v=1762273524"
    },
    {
        "id": 24,
        "brand": "Asics",
        "name": "Magic Speed 5",
        "fullName": "Magic Speed 5",
        "handle": "magic-speed-5",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/vitalgreen_7c5365e5-eeab-4917-9bb6-6bbddbb3be79.png?v=1766000501"
    },
    {
        "id": 25,
        "brand": "Asics",
        "name": "Megablast",
        "fullName": "Megablast",
        "handle": "megablast-1",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 290.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/White_PiedmontGrey.png?v=1765999391"
    },
    {
        "id": 26,
        "brand": "Asics",
        "name": "Megablast Ekiden",
        "fullName": "Megablast Ekiden",
        "handle": "megablast",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 290.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "unisex",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/VitalGreen_70dbf578-6e63-4d43-84c5-d3b6757576c4.png?v=1763582379"
    },
    {
        "id": 27,
        "brand": "Asics",
        "name": "MetaSpeed Edge Tokyo",
        "fullName": "MetaSpeed Edge Tokyo",
        "handle": "mens-metaspeed-edge-tokyo",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 350.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/FlashRed_Black_b621430e-0743-46ed-a1f9-304a058aaafc.png?v=1753902533"
    },
    {
        "id": 28,
        "brand": "Asics",
        "name": "MetaSpeed Sky Tokyo",
        "fullName": "MetaSpeed Sky Tokyo",
        "handle": "mens-metaspeed-sky-tokyo",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 350.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/FlashRed_Black.png?v=1753833681"
    },
    {
        "id": 29,
        "brand": "Asics",
        "name": "Metaspeed Sky Tokyo Ekiden",
        "fullName": "Metaspeed Sky Tokyo Ekiden",
        "handle": "metaspeed-sky-tokyo",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 350.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "unisex",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/ekiden.png?v=1764115387"
    },
    {
        "id": 30,
        "brand": "Asics",
        "name": "Novablast 5",
        "fullName": "Novablast 5",
        "handle": "mens-novablast-5",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Novablast-5.png?v=1762273518"
    },
    {
        "id": 31,
        "brand": "Asics",
        "name": "Novablast 5 ATC",
        "fullName": "Novablast 5 ATC",
        "handle": "mens-novablast-5-atc",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Novablast-5-ATC.png?v=1753496695"
    },
    {
        "id": 32,
        "brand": "Asics",
        "name": "Novablast 5 Ekiden",
        "fullName": "Novablast 5 Ekiden",
        "handle": "novablast-5-ekiden",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/VitalGreen_c101c4b5-5d3a-4aba-9e8e-c9d23b63abcc.png?v=1763582804"
    },
    {
        "id": 33,
        "brand": "Asics",
        "name": "Novablast 5 Tokyo",
        "fullName": "Novablast 5 Tokyo",
        "handle": "novablast-5-tokyo",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/BlueFade_EdoPurple.png?v=1759443353"
    },
    {
        "id": 34,
        "brand": "Asics",
        "name": "Sonicblast",
        "fullName": "Sonicblast",
        "handle": "sonicblast",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cream_BlueFade.png?v=1759619832"
    },
    {
        "id": 35,
        "brand": "Asics",
        "name": "Superblast 2",
        "fullName": "Superblast 2",
        "handle": "mens-superblast-2",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 260.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Superblast-2.png?v=1753496736"
    },
    {
        "id": 36,
        "brand": "Asics",
        "name": "Superblast 2 Ekiden",
        "fullName": "Superblast 2 Ekiden",
        "handle": "superblast-2-ekiden",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 260.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/VitalGreen.png?v=1763581878"
    },
    {
        "id": 37,
        "brand": "Asics",
        "name": "Trabuco Max 4",
        "fullName": "Trabuco Max 4",
        "handle": "mens-trabuco-max-4",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 178.9,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Trabuco-Max-4.png?v=1762273522"
    },
    {
        "id": 38,
        "brand": "Asics",
        "name": "Gel Kayano 32",
        "fullName": "Women's Gel Kayano 32",
        "handle": "womens-gel-kayano-32",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 220.0,
        "cushion": "max",
        "support": "stability",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Gel-Kayano-32.png?v=1753496650"
    },
    {
        "id": 39,
        "brand": "Asics",
        "name": "Gel Nimbus 27",
        "fullName": "Women's Gel Nimbus 27",
        "handle": "womens-gel-nimbus-27",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 185.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Gel-Nimbus-27.png?v=1762273531"
    },
    {
        "id": 40,
        "brand": "Asics",
        "name": "Gel Nimbus 28",
        "fullName": "Women's Gel Nimbus 28",
        "handle": "womens-gel-nimbus-28",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 209.99,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/ArcticBlue_VelvetPurple.png?v=1767487067"
    },
    {
        "id": 41,
        "brand": "Asics",
        "name": "Magic Speed 4",
        "fullName": "Women's Magic Speed 4",
        "handle": "womens-magic-speed-4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 187.95,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Magic-Speed-4.png?v=1762273767"
    },
    {
        "id": 42,
        "brand": "Asics",
        "name": "Novablast 5",
        "fullName": "Women's Novablast 5",
        "handle": "womens-novablast-5",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Novablast-5.png?v=1762273525"
    },
    {
        "id": 43,
        "brand": "Asics",
        "name": "Novablast 5 ATC",
        "fullName": "Women's Novablast 5 ATC",
        "handle": "womens-novablast-5-atc",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Novablast-5-ATC.png?v=1753496695"
    },
    {
        "id": 44,
        "brand": "Asics",
        "name": "Novablast 5 Ekiden",
        "fullName": "Women's Novablast 5 Ekiden",
        "handle": "womens-novablast-5-ekiden",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/VitalGreen_c101c4b5-5d3a-4aba-9e8e-c9d23b63abcc.png?v=1763582804"
    },
    {
        "id": 45,
        "brand": "Asics",
        "name": "Novablast 5 Tokyo",
        "fullName": "Women's Novablast 5 Tokyo",
        "handle": "womens-novablast-5-tokyo",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Vapor_EdoPurple_93bc36e5-c33f-4134-a6c8-2273a32627e6.png?v=1759453648"
    },
    {
        "id": 46,
        "brand": "Asics",
        "name": "Sonicblast",
        "fullName": "Women's Sonicblast",
        "handle": "womens-sonicblast",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cream_BlueFade_485ad109-5748-47c4-80b3-f6012630f32d.png?v=1759619928"
    },
    {
        "id": 47,
        "brand": "Hoka",
        "name": "Bondi 9",
        "fullName": "Bondi 9",
        "handle": "mens-bondi-9",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 200.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Bondi-9.png?v=1762273761"
    },
    {
        "id": 48,
        "brand": "Hoka",
        "name": "Bondi SR",
        "fullName": "Bondi SR",
        "handle": "mens-bondi-sr",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 200.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Bondi-SR.png?v=1762273785"
    },
    {
        "id": 49,
        "brand": "Hoka",
        "name": "Clifton 10",
        "fullName": "Clifton 10",
        "handle": "mens-clifton-10",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Clifton-10.png?v=1762274363"
    },
    {
        "id": 50,
        "brand": "Hoka",
        "name": "Clifton 9 GTX",
        "fullName": "Clifton 9 GTX",
        "handle": "mens-clifton-9-gtx",
        "category": "daily-trainer",
        "surface": [
            "trail",
            "mixed"
        ],
        "price": 200.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Clifton-9-GTX.png?v=1762273412"
    },
    {
        "id": 51,
        "brand": "Hoka",
        "name": "Elite Terrain System Stinson EVO OG",
        "fullName": "Elite Terrain System Stinson EVO OG",
        "handle": "elite-terrain-system-stinson-evo-og",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 196.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/black_Black_1_5f32448d-4b5b-4f63-b749-01b1ff54d19d.png?v=1768088895"
    },
    {
        "id": 52,
        "brand": "Hoka",
        "name": "Hoka Rocket X 2 - Unisex",
        "fullName": "Hoka Rocket X 2 - Unisex",
        "handle": "hoka-rocket-x-2-unisex",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 165.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "unisex",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Hoka-Rocket-X-2-Unisex.png?v=1762274036"
    },
    {
        "id": 53,
        "brand": "Hoka",
        "name": "Hopara 2",
        "fullName": "Hopara 2",
        "handle": "hoka-mens-hopara-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 150.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Hopara-2.png?v=1762274601"
    },
    {
        "id": 54,
        "brand": "Hoka",
        "name": "Mach 6",
        "fullName": "Mach 6",
        "handle": "mens-mach-6",
        "category": "tempo",
        "surface": [
            "road"
        ],
        "price": 123.75,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mach-6.png?v=1762272957"
    },
    {
        "id": 55,
        "brand": "Hoka",
        "name": "Mach X 2",
        "fullName": "Mach X 2",
        "handle": "mens-mach-x-2",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Mach-X-2.png?v=1762272957"
    },
    {
        "id": 56,
        "brand": "Hoka",
        "name": "Mach X 3",
        "fullName": "Mach X 3",
        "handle": "mach-x-3",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 250.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/NEONHOKACITRUS.png?v=1766604290"
    },
    {
        "id": 57,
        "brand": "Hoka",
        "name": "Mafate X",
        "fullName": "Mafate X",
        "handle": "mens-mafate-x",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 300.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mafate-X.png?v=1753496723"
    },
    {
        "id": 58,
        "brand": "Hoka",
        "name": "Rocket X 3 - Unisex",
        "fullName": "Rocket X 3 - Unisex",
        "handle": "hoka-rocket-x-3-unisex",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 300.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "unisex",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Rocket-X-3-Unisex.png?v=1762274607"
    },
    {
        "id": 59,
        "brand": "Hoka",
        "name": "Skyward X",
        "fullName": "Skyward X",
        "handle": "mens-skyward-x",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 280.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Skyward-X.png?v=1762272958"
    },
    {
        "id": 60,
        "brand": "Hoka",
        "name": "Speedgoat 2 Unna",
        "fullName": "Speedgoat 2 Unna",
        "handle": "hoka-speedgoat-2-unna",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 225.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Metallic2.png?v=1757102819"
    },
    {
        "id": 61,
        "brand": "Hoka",
        "name": "Speedgoat 5 GTX Spike",
        "fullName": "Speedgoat 5 GTX Spike",
        "handle": "mens-speedgoat-5-gtx-spike",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Speedgoat-5-GTX-Spike.png?v=1762273788"
    },
    {
        "id": 62,
        "brand": "Hoka",
        "name": "Speedgoat 6",
        "fullName": "Speedgoat 6",
        "handle": "speedgoat-6",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 152.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Speedgoat-6.png?v=1762273785"
    },
    {
        "id": 63,
        "brand": "Hoka",
        "name": "Speedgoat 6 GTX",
        "fullName": "Speedgoat 6 GTX",
        "handle": "mens-speedgoat-6-gtx",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 220.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Speedgoat-6-GTX.png?v=1762272958"
    },
    {
        "id": 64,
        "brand": "Hoka",
        "name": "Tecton X 2 TS",
        "fullName": "Tecton X 2 TS",
        "handle": "tecton-x-2-ts",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 260.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Tecton-X-2-TS.png?v=1753496683"
    },
    {
        "id": 65,
        "brand": "Hoka",
        "name": "Bondi 9",
        "fullName": "Women's Bondi 9",
        "handle": "womens-bondi-9",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 200.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Bondi-9.png?v=1762273763"
    },
    {
        "id": 66,
        "brand": "Hoka",
        "name": "Clifton 10",
        "fullName": "Women's Clifton 10",
        "handle": "womens-clifton-10",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Clifton-10.png?v=1762274363"
    },
    {
        "id": 67,
        "brand": "Hoka",
        "name": "Clifton 9 GTX",
        "fullName": "Women's Clifton 9 GTX",
        "handle": "womens-clifton-9-gtx",
        "category": "daily-trainer",
        "surface": [
            "trail",
            "mixed"
        ],
        "price": 200.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Clifton-9-GTX.png?v=1762273762"
    },
    {
        "id": 68,
        "brand": "Hoka",
        "name": "Hopara 2",
        "fullName": "Women's Hopara 2",
        "handle": "womens-hopara-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 150.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Hopara-2.png?v=1762274603"
    },
    {
        "id": 70,
        "brand": "Hoka",
        "name": "Mach X 2",
        "fullName": "Women's Mach X 2",
        "handle": "womens-hoka-mach-x-2",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 155.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Mach-X-2.webp?v=1762272961"
    },
    {
        "id": 71,
        "brand": "Hoka",
        "name": "Skyward X",
        "fullName": "Women's Skyward X",
        "handle": "womens-skyward-x",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 280.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Skyward-X.png?v=1762272962"
    },
    {
        "id": 72,
        "brand": "Hoka",
        "name": "Speedgoat 5 GTX Spike",
        "fullName": "Women's Speedgoat 5 GTX Spike",
        "handle": "womens-speedgoat-5-gtx-spike",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Speedgoat-5-GTX-Spike.png?v=1762273788"
    },
    {
        "id": 73,
        "brand": "Hoka",
        "name": "Speedgoat 6",
        "fullName": "Women's Speedgoat 6",
        "handle": "womens-speedgoat-6",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 152.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Speedgoat-6.png?v=1762272962"
    },
    {
        "id": 74,
        "brand": "Hoka",
        "name": "Speedgoat 6 GTX",
        "fullName": "Women's Speedgoat 6 GTX",
        "handle": "womens-speedgoat-6-gtx",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 220.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Speedgoat-6-GTX.png?v=1762272961"
    },
    {
        "id": 75,
        "brand": "New Balance",
        "name": "Fresh Foam X 840v1 - WIDE",
        "fullName": "Fresh Foam X 840v1 - WIDE",
        "handle": "mens-fresh-foam-x-840v1",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 99.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Fresh-Foam-X-840v1-WIDE.webp?v=1762272913"
    },
    {
        "id": 76,
        "brand": "New Balance",
        "name": "FuelCell SuperComp Pacer v2",
        "fullName": "FuelCell SuperComp Pacer v2",
        "handle": "new-balance-mens-fuelcell-supercomp-pacer-v2",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 150.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-FuelCell-SuperComp-Pacer-v2.png?v=1762272618"
    },
    {
        "id": 77,
        "brand": "New Balance",
        "name": "Fresh Foam X 840v1 Wide",
        "fullName": "Women's Fresh Foam X 840v1 Wide",
        "handle": "womens-fresh-foam-x-840v1",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 99.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Fresh-Foam-X-840v1-Wide.webp?v=1762272914"
    },
    {
        "id": 78,
        "brand": "New Balance",
        "name": "Fresh Foam X 880v14",
        "fullName": "Women's Fresh Foam X 880v14",
        "handle": "new-balance-womens-fresh-foam-x-880v14",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 95.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Fresh-Foam-X-880v14.png?v=1762272624"
    },
    {
        "id": 79,
        "brand": "New Balance",
        "name": "Fresh Foam X Hierro v8 Gore-Tex\u00ae",
        "fullName": "Women's Fresh Foam X Hierro v8 Gore-Tex\u00ae",
        "handle": "new-balance-womens-fresh-foam-x-hierro-v8-gore-tex",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 115.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Fresh-Foam-X-Hierro-v8-Gore-Texr.png?v=1762272629"
    },
    {
        "id": 80,
        "brand": "New Balance",
        "name": "Fresh Foam X Hierro v9",
        "fullName": "Women's Fresh Foam X Hierro v9",
        "handle": "womens-fresh-foam-x-hierro-v9",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 190.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Fresh-Foam-X-Hierro-v9.png?v=1762274013"
    },
    {
        "id": 81,
        "brand": "New Balance",
        "name": "Fresh Foam X More v5",
        "fullName": "Women's Fresh Foam X More v5",
        "handle": "new-balance-womens-fresh-foam-x-more-v5",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 99.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Fresh-Foam-X-More-v5.png?v=1762272675"
    },
    {
        "id": 82,
        "brand": "New Balance",
        "name": "FuelCell Rebel v4",
        "fullName": "Women's FuelCell Rebel v4",
        "handle": "new-balance-womens-fuelcell-rebel-v4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 90.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-FuelCell-Rebel-v4.png?v=1762272626"
    },
    {
        "id": 83,
        "brand": "New Balance",
        "name": "FuelCell SuperComp Elite v4",
        "fullName": "Women's FuelCell SuperComp Elite v4",
        "handle": "new-balance-womens-fuelcell-supercomp-elite-v4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 160.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-FuelCell-SuperComp-Elite-v4.png?v=1762272627"
    },
    {
        "id": 84,
        "brand": "New Balance",
        "name": "Minimus TR v2",
        "fullName": "Women's Minimus TR v2",
        "handle": "new-balance-womens-minimus-tr-v2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 95.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Minimus-TR-v2.png?v=1762272629"
    },
    {
        "id": 85,
        "brand": "Nike",
        "name": "Air Zoom Alphafly 3",
        "fullName": "Air Zoom Alphafly 3",
        "handle": "mens-nike-air-zoom-alphafly-3",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 375.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Air-Zoom-Alphafly-3.png?v=1762273748"
    },
    {
        "id": 86,
        "brand": "Nike",
        "name": "Air Zoom Pegasus 41",
        "fullName": "Air Zoom Pegasus 41",
        "handle": "mens-air-zoom-pegasus-42",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Air-Zoom-Pegasus-41.png?v=1762273461"
    },
    {
        "id": 87,
        "brand": "Nike",
        "name": "Air Zoom Pegasus 41 EK - LTD Edition",
        "fullName": "Air Zoom Pegasus 41 EK - LTD Edition",
        "handle": "mens-air-zoom-pegasus-41-ek-ltd-edition",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Air-Zoom-Pegasus-41-EK-LTD-Edition.png?v=1762273444"
    },
    {
        "id": 88,
        "brand": "Nike",
        "name": "Nike Alphafly 3 'Eliud Kipchoge'",
        "fullName": "Nike Alphafly 3 'Eliud Kipchoge'",
        "handle": "nike-alphafly-3-eliud-kipchoge1",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 264.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_HJ7041-600_PHSRH000-2000.png?v=1762383912"
    },
    {
        "id": 89,
        "brand": "Nike",
        "name": "Pegasus 41 'Eliud Kipchoge'",
        "fullName": "Pegasus 41 'Eliud Kipchoge'",
        "handle": "pegasus-41-eliud-kipchoge",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 144.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_HJ7037-600_PHSRH000-2000.png?v=1762390164"
    },
    {
        "id": 90,
        "brand": "Nike",
        "name": "Pegasus Plus",
        "fullName": "Pegasus Plus",
        "handle": "pegasus-plus",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 235.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Pegasus-Plus.png?v=1762273557"
    },
    {
        "id": 91,
        "brand": "Nike",
        "name": "Pegasus Trail 5 GORETEX",
        "fullName": "Pegasus Trail 5 GORETEX",
        "handle": "mens-pegasus-trail-5-goretex",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 170.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Pegasus-Trail-5-GORETEX.png?v=1762273563"
    },
    {
        "id": 92,
        "brand": "Nike",
        "name": "Vaporfly 3",
        "fullName": "Vaporfly 3",
        "handle": "mens-nike-vaporfly-3",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 235.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Vaporfly-3.png?v=1762273972"
    },
    {
        "id": 93,
        "brand": "Nike",
        "name": "Vaporfly 4 'Eliud Kipchoge'",
        "fullName": "Vaporfly 4 'Eliud Kipchoge'",
        "handle": "vaporfly-4-eliud-kipchoge",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 239.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_IH0869-605_PHSRH000-2000.png?v=1762388310"
    },
    {
        "id": 94,
        "brand": "Nike",
        "name": "Vomero 18",
        "fullName": "Vomero 18",
        "handle": "vomero-18",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_HM6803-101_PHSRH000-2000.png?v=1762378874"
    },
    {
        "id": 95,
        "brand": "Nike",
        "name": "Vomero Premium",
        "fullName": "Vomero Premium",
        "handle": "vomero-premium",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 285.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_IQ4035-100_PHSRH000-2000.png?v=1762374619"
    },
    {
        "id": 96,
        "brand": "Nike",
        "name": "Air Zoom Alphafly 3",
        "fullName": "Women's Air Zoom Alphafly 3",
        "handle": "womens-nike-air-zoom-alphafly-3",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 260.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Air-Zoom-Alphafly-3.png?v=1762273746"
    },
    {
        "id": 97,
        "brand": "Nike",
        "name": "Air Zoom Pegasus 41",
        "fullName": "Women's Air Zoom Pegasus 41",
        "handle": "womens-air-zoom-pegasus-41",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Air-Zoom-Pegasus-41.png?v=1762273560"
    },
    {
        "id": 98,
        "brand": "Nike",
        "name": "Air Zoom Pegasus 41 GTX",
        "fullName": "Women's Air Zoom Pegasus 41 GTX",
        "handle": "womens-air-zoom-pegasus-41-gtx",
        "category": "daily-trainer",
        "surface": [
            "trail",
            "mixed"
        ],
        "price": 170.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Air-Zoom-Pegasus-41-GTX.png?v=1762273560"
    },
    {
        "id": 99,
        "brand": "Nike",
        "name": "Air Zoom Pegasus 41 PRM",
        "fullName": "Women's Air Zoom Pegasus 41 PRM",
        "handle": "womens-air-zoom-pegasus-41-prm",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Air-Zoom-Pegasus-41-PRM.png?v=1762273992"
    },
    {
        "id": 100,
        "brand": "Nike",
        "name": "Infinity Run 4",
        "fullName": "Women's Infinity Run 4",
        "handle": "womens-reactx-infinity-run-4",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 160.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Infinity-Run-4.png?v=1762273566"
    },
    {
        "id": 101,
        "brand": "Nike",
        "name": "Nike Alphafly 3 'Eliud Kipchoge'",
        "fullName": "Women's Nike Alphafly 3 'Eliud Kipchoge'",
        "handle": "womens-nike-alphafly-3-eliud-kipchoge",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 264.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_HJ7041-600_PHSRH000-2000.png?v=1762383912"
    },
    {
        "id": 102,
        "brand": "Nike",
        "name": "Pegasus Plus",
        "fullName": "Women's Pegasus Plus",
        "handle": "womens-pegasus-plus",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 235.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Pegasus-Plus.png?v=1762273564"
    },
    {
        "id": 103,
        "brand": "Nike",
        "name": "Pegasus Trail 5 GoreTex",
        "fullName": "Women's Pegasus Trail 5 GoreTex",
        "handle": "womens-pegasus-trail-5-goretex",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 170.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "waterproof"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Pegasus-Trail-5-GoreTex.png?v=1762273564"
    },
    {
        "id": 104,
        "brand": "Nike",
        "name": "Vaporfly 4",
        "fullName": "Women's Vaporfly 4",
        "handle": "womens-nike-vaporfly-4",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 239.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Vaporfly-4.png?v=1762274566"
    },
    {
        "id": 105,
        "brand": "Nike",
        "name": "Vaporfly 4 'Eliud Kipchoge'",
        "fullName": "Women's Vaporfly 4 'Eliud Kipchoge'",
        "handle": "womens-vaporfly-4-eliud-kipchoge",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 340.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_IH0869-605_PHSRH000-2000.png?v=1762388310"
    },
    {
        "id": 106,
        "brand": "Nike",
        "name": "Vomero 18",
        "fullName": "Women's Vomero 18",
        "handle": "womens-vomero-18",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 285.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_HM6804-101_PHSRH001-2000.png?v=1765927829"
    },
    {
        "id": 107,
        "brand": "Nike",
        "name": "Zoom Fly 6",
        "fullName": "Women's Zoom Fly 6",
        "handle": "women-zoom-fly-6",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 225.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_FN8455-503_PHSRH000-2000.png?v=1765921983"
    },
    {
        "id": 108,
        "brand": "Nike",
        "name": "Zoom Fly 6",
        "fullName": "Zoom Fly 6",
        "handle": "zoom-fly-6",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 225.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AURORA_FN8454-004_PHSRH000-2000.png?v=1765925986"
    },
    {
        "id": 109,
        "brand": "Nike",
        "name": "ZoomX Vaporfly 3 FK PRM",
        "fullName": "ZoomX Vaporfly 3 FK PRM",
        "handle": "mens-nike-zoomx-vaporfly-3-fk-prm",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 220.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "carbon-plate"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/ZoomX-Vaporfly-3-FK-PRM.png?v=1762273778"
    },
    {
        "id": 110,
        "brand": "Norda",
        "name": "Norda 002 - Lichen",
        "fullName": "Women's Norda 002 - Lichen",
        "handle": "womens-norda-002-lichen",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 160.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/002-w-lichen-shoes_enroute.run.png?v=1762272940"
    },
    {
        "id": 111,
        "brand": "On Running",
        "name": "Cloudaway 2",
        "fullName": "Cloudaway 2",
        "handle": "on-running-mens-cloudaway-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudaway-2.png?v=1762272646"
    },
    {
        "id": 112,
        "brand": "On Running",
        "name": "Cloudboom Max",
        "fullName": "Cloudboom Max",
        "handle": "cloudboom-max",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 290.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/White_Black.png?v=1755289728"
    },
    {
        "id": 113,
        "brand": "On Running",
        "name": "Cloudeclipse",
        "fullName": "Cloudeclipse",
        "handle": "mens-cloudeclipse-white-sand",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 138.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudeclipse.png?v=1762272927"
    },
    {
        "id": 114,
        "brand": "On Running",
        "name": "Cloudflow 4",
        "fullName": "Cloudflow 4",
        "handle": "on-running-mens-cloudflow-4",
        "category": "tempo",
        "surface": [
            "road"
        ],
        "price": 120.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudflow-4.png?v=1762272648"
    },
    {
        "id": 115,
        "brand": "On Running",
        "name": "Cloudflow 5",
        "fullName": "Cloudflow 5",
        "handle": "cloudflow-5",
        "category": "tempo",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/AlloyRock_d34b8fcc-4d73-4146-b741-5ffebf4bc405.png?v=1754603577"
    },
    {
        "id": 116,
        "brand": "On Running",
        "name": "Cloudmonster 2",
        "fullName": "Cloudmonster 2",
        "handle": "on-running-mens-cloudmonster-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 230.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudmonster-2.png?v=1762272648"
    },
    {
        "id": 117,
        "brand": "On Running",
        "name": "Cloudmonster Hyper",
        "fullName": "Cloudmonster Hyper",
        "handle": "on-running-mens-cloudmonster-hyper",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 280.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudmonster-Hyper.webp?v=1762272649"
    },
    {
        "id": 118,
        "brand": "On Running",
        "name": "Cloudmonster Hyper PAF",
        "fullName": "Cloudmonster Hyper PAF",
        "handle": "cloudmonster-hyper-paf",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 360.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Phantom_Apollo.png?v=1767228487"
    },
    {
        "id": 119,
        "brand": "On Running",
        "name": "Cloudmonster Void",
        "fullName": "Cloudmonster Void",
        "handle": "mens-cloudmonster-void",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 220.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudmonster-Void.png?v=1762274357"
    },
    {
        "id": 120,
        "brand": "On Running",
        "name": "Cloudrunner 2",
        "fullName": "Cloudrunner 2",
        "handle": "on-running-mens-cloudrunner-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudrunner-2.webp?v=1762272649"
    },
    {
        "id": 121,
        "brand": "On Running",
        "name": "Cloudstratus 3",
        "fullName": "Cloudstratus 3",
        "handle": "mens-cloudstratus-3",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 180.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cloudstratus-3.png?v=1762274149"
    },
    {
        "id": 122,
        "brand": "On Running",
        "name": "Cloudsurfer",
        "fullName": "Cloudsurfer",
        "handle": "on-running-mens-cloudsurfer",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 125.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cloudsurfer.png?v=1762272655"
    },
    {
        "id": 123,
        "brand": "On Running",
        "name": "Cloudsurfer 2",
        "fullName": "Cloudsurfer 2",
        "handle": "mens-cloudsurfer-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 200.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cloudsurfer-2_c9b4b24d.png?v=1762274003"
    },
    {
        "id": 124,
        "brand": "On Running",
        "name": "Cloudsurfer Max",
        "fullName": "Cloudsurfer Max",
        "handle": "cloudsurfer-max",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 175.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Ivory_Salmon.png?v=1754594712"
    },
    {
        "id": 125,
        "brand": "On Running",
        "name": "Cloudsurfer Next",
        "fullName": "Cloudsurfer Next",
        "handle": "on-running-mens-cloudsurfer-next",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudsurfer-Next.webp?v=1762272656"
    },
    {
        "id": 126,
        "brand": "On Running",
        "name": "Cloudswift 4",
        "fullName": "Cloudswift 4",
        "handle": "mens-cloudswift-4",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 160.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cloudswift-4.png?v=1762274147"
    },
    {
        "id": 127,
        "brand": "On Running",
        "name": "Cloudultra 3",
        "fullName": "Cloudultra 3",
        "handle": "mens-cloudultra-3",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 200.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Cloudultra-3.png?v=1762274640"
    },
    {
        "id": 128,
        "brand": "On Running",
        "name": "Cloudultra Pro",
        "fullName": "Cloudultra Pro",
        "handle": "cloudultra-pro",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 330.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "responsive"
        ],
        "gender": "mens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Ivory_Iceberg.png?v=1768526292"
    },
    {
        "id": 129,
        "brand": "On Running",
        "name": "Cloudaway 2",
        "fullName": "Women's Cloudaway 2",
        "handle": "on-running-womens-cloudaway-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 190.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Mens-Cloudaway-2-7.png?v=1762272630"
    },
    {
        "id": 130,
        "brand": "On Running",
        "name": "Cloudboom Max",
        "fullName": "Women's Cloudboom Max",
        "handle": "womens-cloudboom-max",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 290.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "light",
            "light-medium",
            "medium"
        ],
        "tags": [
            "fast",
            "race-day",
            "responsive"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/White_Black_18904a64-d40b-45b4-bb73-305521c181ef.png?v=1755297062"
    },
    {
        "id": 131,
        "brand": "On Running",
        "name": "Cloudeclipse",
        "fullName": "Women's Cloudeclipse",
        "handle": "womens-cloudeclipse-flame-ivory",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 138.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudeclipse.png?v=1762272585"
    },
    {
        "id": 132,
        "brand": "On Running",
        "name": "Cloudflow 4",
        "fullName": "Women's Cloudflow 4",
        "handle": "cloudflow-4-w-quartz-flame",
        "category": "tempo",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "responsive",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudflow-4.png?v=1762272613"
    },
    {
        "id": 133,
        "brand": "On Running",
        "name": "Cloudmonster Hyper",
        "fullName": "Women's Cloudmonster Hyper",
        "handle": "womens-cloudmonster-hyper",
        "category": "racing",
        "surface": [
            "road"
        ],
        "price": 280.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "fast",
            "race-day",
            "max-cushion"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudmonster-Hyper.webp?v=1762272633"
    },
    {
        "id": 134,
        "brand": "On Running",
        "name": "Cloudmonster Void",
        "fullName": "Women's Cloudmonster Void",
        "handle": "womens-cloudmonster-void",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 175.0,
        "cushion": "max",
        "support": "neutral",
        "bestFor": [
            "half",
            "marathon",
            "fitness"
        ],
        "weightRange": [
            "medium",
            "medium-heavy",
            "heavy"
        ],
        "tags": [
            "versatile",
            "max-cushion",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudmonster-Void.png?v=1762274626"
    },
    {
        "id": 135,
        "brand": "On Running",
        "name": "Cloudsurfer 2",
        "fullName": "Women's Cloudsurfer 2",
        "handle": "womens-cloudsurfer-2",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 200.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudsurfer-2_5d8eade5.png?v=1762274005"
    },
    {
        "id": 136,
        "brand": "On Running",
        "name": "Cloudsurfer Max",
        "fullName": "Women's Cloudsurfer Max",
        "handle": "womens-cloudsurfer-max",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 220.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile",
            "lightweight"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Ivory_Salmon_17f2cd40-87d3-4a34-afc5-7d2eb7444571.png?v=1754596402"
    },
    {
        "id": 137,
        "brand": "On Running",
        "name": "Cloudsurfer Next",
        "fullName": "Women's Cloudsurfer Next",
        "handle": "womens-cloudsurfer-next",
        "category": "daily-trainer",
        "surface": [
            "road"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "5k",
            "10k",
            "half",
            "fitness"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "versatile"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudsurfer-Next.webp?v=1762272968"
    },
    {
        "id": 138,
        "brand": "On Running",
        "name": "Cloudsurfer Trail",
        "fullName": "Women's Cloudsurfer Trail",
        "handle": "on-running-womens-cloudsurfer-trail",
        "category": "trail",
        "surface": [
            "trail"
        ],
        "price": 135.0,
        "cushion": "moderate",
        "support": "neutral",
        "bestFor": [
            "10k",
            "half",
            "marathon",
            "ultra"
        ],
        "weightRange": [
            "light-medium",
            "medium",
            "medium-heavy"
        ],
        "tags": [
            "grip",
            "protection"
        ],
        "gender": "womens",
        "image": "https://cdn.shopify.com/s/files/1/0633/1649/2459/files/Womens-Cloudsurfer-Trail.png?v=1762272635"
    }
];

// Store URL base
const STORE_URL = "https://enroute.run/products/";

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
        budget: { 'budget': 'Under $150', 'mid': '$150-250', 'premium': '$250+' }
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
        tagsHTML += `<span class="profile-tag">${labels.budget[answers.budget]} CAD</span>`;
    }
    
    container.innerHTML = tagsHTML;
}

// Main recommendation algorithm
function getRecommendations(answers) {
    // Determine gender preference (default to showing all, but prefer matching)
    const showMens = !answers.gender || answers.gender === 'mens' || answers.gender === 'all';
    const showWomens = !answers.gender || answers.gender === 'womens' || answers.gender === 'all';
    
    let scoredShoes = shoeDatabase.map(shoe => {
        let score = 0;
        let reasons = [];
        
        // Gender filtering (soft filter - reduce score but don't exclude)
        if (shoe.gender === 'mens' && !showMens) {
            score -= 20;
        }
        if (shoe.gender === 'womens' && !showWomens) {
            score -= 20;
        }
        
        // 1. Surface matching (most important)
        if (answers.surface) {
            if (shoe.surface.includes(answers.surface)) {
                score += 30;
                if (shoe.surface.length === 1 && shoe.surface[0] === answers.surface) {
                    score += 5;
                    reasons.push(`Designed for ${answers.surface} running`);
                }
            } else {
                score -= 50;
            }
        }
        
        // 2. Weight matching
        if (answers.weight && shoe.weightRange) {
            if (shoe.weightRange.includes(answers.weight)) {
                score += 20;
                reasons.push('Great cushioning for your weight');
            } else {
                score -= 15;
            }
        }
        
        // 3. Distance matching
        if (answers.distance && shoe.bestFor) {
            if (shoe.bestFor.includes(answers.distance)) {
                score += 20;
                reasons.push(`Excellent for ${formatDistance(answers.distance)} runs`);
            }
        }
        
        // 4. Budget matching (CAD prices)
        if (answers.budget) {
            const maxBudget = answers.budget === 'budget' ? 150 : answers.budget === 'mid' ? 250 : 999;
            const minBudget = answers.budget === 'premium' ? 250 : 0;
            
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
                reasons.push('Provides stability support');
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
                reasons.push('Extra cushioning for joint protection');
            }
        }
        
        // 7. Mileage considerations
        if (answers.mileage) {
            if (['very-high', 'ultra-high'].includes(answers.mileage)) {
                if (shoe.category === 'daily-trainer' && shoe.cushion === 'max') {
                    score += 10;
                    reasons.push('Durable for high mileage');
                }
            }
        }
        
        return {
            ...shoe,
            score: Math.max(0, score),
            reasons: reasons.slice(0, 3)
        };
    });
    
    // Sort by score
    scoredShoes.sort((a, b) => b.score - a.score);
    
    // Calculate match percentage
    const maxScore = Math.max(...scoredShoes.map(s => s.score));
    scoredShoes = scoredShoes.map(shoe => ({
        ...shoe,
        matchPercent: maxScore > 0 ? Math.round((shoe.score / maxScore) * 100) : 0
    }));
    
    return scoredShoes.slice(0, 6);
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
        const productUrl = STORE_URL + shoe.handle;
        
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
                        <div class="detail-value">$${shoe.price.toFixed(0)} CAD</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Category</div>
                        <div class="detail-value">${capitalize(shoe.category.replace('-', ' '))}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Cushion</div>
                        <div class="detail-value">${capitalize(shoe.cushion)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Support</div>
                        <div class="detail-value">${capitalize(shoe.support)}</div>
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
                
                <div class="button-group">
                    <a href="${productUrl}" target="_blank" class="buy-button">
                        Shop at Enroute.run
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <a href="https://enroute.run/pages/our-store" target="_blank" class="fitting-button">
                        Book a Fitting
                    </a>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Show comparison
    if (recommendations.length >= 2) {
        displayComparison(recommendations.slice(0, 3));
    }
}

// Display comparison table
function displayComparison(shoes) {
    const section = document.getElementById('compareSection');
    const grid = document.getElementById('compareGrid');
    
    const attributes = [
        { key: 'price', label: 'Price (CAD)', format: v => `$${v.toFixed(0)}` },
        { key: 'category', label: 'Type', format: v => capitalize(v.replace('-', ' ')) },
        { key: 'cushion', label: 'Cushion', format: v => capitalize(v) },
        { key: 'support', label: 'Support', format: v => capitalize(v) }
    ];
    
    let html = '<div class="compare-cell header"></div>';
    shoes.forEach(shoe => {
        html += `<div class="compare-cell header">${shoe.brand}<br>${shoe.name.substring(0, 20)}</div>`;
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
