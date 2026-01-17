# ShoeFit.run

A running shoe recommendation engine that helps runners find their perfect shoe based on their weight, running surface, distance, budget, and more.

## Features

- 8-question quiz (4 required, 4 optional)
- Database of 50+ popular running shoes
- Smart recommendation algorithm
- Side-by-side shoe comparison
- Amazon affiliate link integration
- Mobile-responsive design
- Share results functionality

## Quick Start

1. Clone or download this repository
2. Open `index.html` in a browser to test locally
3. Deploy to any static hosting (Vercel, Netlify, GitHub Pages)

## File Structure

```
shoefit-run/
├── index.html          # Landing page & questionnaire
├── results.html        # Results & recommendations page
├── styles.css          # All styling
├── script.js           # Questionnaire logic
├── recommender.js      # Recommendation algorithm + shoe database
└── README.md           # This file
```

## Deployment to Vercel (Recommended)

### Option 1: Deploy via GitHub

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (no settings needed for static sites)
6. After deployment, go to Settings → Domains
7. Add your custom domain: `shoefit.run`
8. Follow Vercel's instructions to update your DNS records

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project folder
cd shoefit-run

# Deploy
vercel

# Follow prompts, then add custom domain in Vercel dashboard
```

## Domain Setup (shoefit.run)

After deploying to Vercel:

1. Go to your Vercel project → Settings → Domains
2. Add `shoefit.run`
3. Vercel will provide DNS records
4. Go to your domain registrar and add the records:
   - Usually an A record pointing to `76.76.21.21`
   - Or CNAME pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (usually 5-30 minutes)

## Amazon Affiliate Setup

1. Sign up for Amazon Associates: https://affiliate-program.amazon.com
2. Get your affiliate tag (format: `yourname-20`)
3. Open `recommender.js`
4. Find this line near the top:
   ```javascript
   const AFFILIATE_TAG = "shoefit-20";
   ```
5. Replace `"shoefit-20"` with your affiliate tag
6. The shoe database has placeholder Amazon IDs (`B0CX1XXXXX`, etc.)
7. Replace each `amazonId` with real ASINs from Amazon product pages

### Finding Amazon ASINs

1. Go to Amazon and find the shoe
2. Look in the URL for the ASIN (10 character code)
3. Example: `amazon.com/dp/B0CX12ABCD` → ASIN is `B0CX12ABCD`
4. Update the `amazonId` field in the shoe database

## Customization

### Adding New Shoes

In `recommender.js`, add to the `shoeDatabase` array:

```javascript
{
    id: 51,
    brand: "Brand Name",
    name: "Model Name",
    category: "daily-trainer", // or: racing, stability, trail, tempo
    surface: ["road"], // options: road, trail, mixed
    price: 150,
    weight: 280, // in grams
    drop: 10, // in mm
    cushion: "moderate", // options: low, moderate, max
    support: "neutral", // options: neutral, stability
    bestFor: ["5k", "10k", "half"], // distances this shoe excels at
    weightRange: ["light-medium", "medium"], // runner weight ranges
    tags: ["tag1", "tag2", "tag3"],
    amazonId: "BXXXXXXXXX",
    description: "Description of the shoe."
}
```

### Modifying Questions

Edit the `questions` array in `script.js` to add, remove, or modify quiz questions.

### Styling

All styles are in `styles.css`. Key CSS variables at the top:

```css
:root {
    --accent-blue: #3b82f6;   /* Primary accent color */
    --bg-primary: #0a0a0a;     /* Background color */
    /* ... other variables */
}
```

## Algorithm Overview

The recommendation algorithm scores shoes based on:

1. **Surface match** (30 points) - Most important
2. **Weight compatibility** (20 points)
3. **Distance suitability** (20 points)
4. **Budget fit** (15 points)
5. **Pronation support** (15 points)
6. **Injury considerations** (10 points)
7. **Mileage requirements** (10 points)
8. **Foot strike pattern** (5 points)

Shoes are ranked by total score and displayed as a percentage match.

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License - feel free to modify and use commercially.

---

Built with ❤️ for runners everywhere.
