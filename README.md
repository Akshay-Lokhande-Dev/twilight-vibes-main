# TwilightVibes 🌲🧛

**The ultimate Twilight fan portal** — Forks Washington travel guide, filming locations, character deep dives, and the full Twilight Core aesthetic.

🌐 **Live site:** [twilightvibes.com](https://twilightvibes.com)

---

## Folder Structure

```
twilightvibes/
├── index.html                  # Homepage
├── sitemap.xml                 # Full XML sitemap (all pages)
├── robots.txt                  # robots.txt (Sitemap URL included)
├── _redirects                  # Netlify clean URL redirects
├── 404.html                    # Custom 404 page
│
├── blog/                       # All blog/article pages
│   ├── forks.html              # Forks WA travel guide
│   ├── la-push.html            # La Push First Beach guide
│   ├── port-angeles.html       # Port Angeles travel guide
│   ├── st-helens.html          # St. Helens OR filming locations
│   ├── portland-twilight.html  # Portland OR filming locations
│   ├── seattle.html            # Seattle Twilight guide
│   ├── cullen-house.html       # Cullen house real location
│   ├── twilight-filming-locations.html  # Master filming locations guide
│   ├── twilight-road-trip.html # 3-day road trip itinerary
│   ├── forks-vs-st-helens.html # Book setting vs filming location
│   ├── twilight-trip-cost.html # Trip budget guide 2026
│   ├── best-time-to-visit.html # When to visit Forks
│   ├── quileute-legend.html    # Quileute real history vs fiction
│   ├── twilight-universe-guide.html     # Master hub
│   ├── vampire-rules.html      # Twilight vampire lore
│   ├── twilight-aesthetic.html # Twilight Core aesthetic guide
│   ├── team-edward-vs-jacob.html        # The great debate
│   ├── twilight-order.html     # Books & movies watch order
│   ├── twilight-cast.html      # Complete cast guide 2026
│   ├── twilight-quotes.html    # Best quotes all 5 films
│   └── twilight-soundtrack.html         # All soundtracks guide
│
├── characters/                 # Character profile pages
│   ├── bella.html
│   ├── edward.html
│   ├── jacob.html
│   ├── volturi.html
│   └── quileute.html
│
├── static/                     # Images, CSS, audio
│   ├── style.css               # Global stylesheet
│   ├── lapush.png
│   ├── swan.jpg
│   ├── cullen_house.jpg
│   ├── cafe.jpg
│   ├── school.jpg
│   ├── baseball.png
│   ├── forks-bg.jpg
│   ├── lapush-bg.jpg
│   ├── port-angeles-bg.jpg
│   ├── deer.jpg
│   ├── rain.mp3
│   └── thunder.mp3
│
├── quiz.html                   # Which coven are you?
├── quiz-result.html
├── cullen.html                 # Cullen house portal page
├── swan.html                   # Swan house portal page
├── lapush.html                 # La Push portal page
├── cafe.html                   # Carver Cafe portal page
├── school.html                 # Forks High School portal page
├── baseball.html               # Baseball scene portal page
└── vision.html                 # Alice's visions page
```

---

## Deployment (Netlify)

This site is configured for Netlify with:
- **`_redirects`** — clean URL support (no `.html` in URLs)
- **`sitemap.xml`** — submitted to Google Search Console
- **`robots.txt`** — Sitemap URL included

### Deploy steps:
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: *(none — static HTML)*
4. Publish directory: `.` (root)

---

## SEO Notes

- All canonical URLs use clean format: `https://twilightvibes.com/blog/slug` (no `.html`)
- JSON-LD structured data on homepage and all blog pages
- Open Graph and Twitter Card meta on all pages
- `sitemap.xml` includes all pages with `lastmod` dates
- `robots.txt` points to correct domain (`twilightvibes.com`)

---

## Contact

📧 twilightvibespnw@gmail.com  
☕ [ko-fi.com/twilightvibes](https://ko-fi.com/twilightvibes)
