# Event Hub

A free, open-source template for listing **upcoming** and **past** community events — meetups, workshops, conferences, club nights, anything with a date attached. Fork it, swap in your own events, and ship it as a static page or wire it up to a backend later.

🔗 **[Live demo](#)** ← replace with your GitHub Pages link after deploying

![Event Hub preview](https://cdn.freecodecamp.org/curriculum/labs/past-event1.jpg)

## Features

- 🗓️ **Upcoming / Past sections** with anchor navigation
- ⏱️ **Live countdowns** ("In 3 days", "Tomorrow", "5 days ago") computed client-side from each event's date
- 🔢 **Auto-updating event counts** next to each section heading — no manual upkeep
- ⚠️ **Console warnings** if an event is sitting in the wrong section (e.g. a past event still listed under Upcoming)
- ♿ **Accessible by default** — skip link, semantic landmarks, visible focus states, `prefers-reduced-motion` support
- 📱 **Responsive** grid layout, mobile-first
- 🪶 **Zero dependencies** — plain HTML, CSS, and JavaScript, no build step, no framework

## Tech stack

| Layer | Tech |
|---|---|
| Markup | Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<time>`) |
| Styling | Vanilla CSS with custom properties (design tokens) |
| Behavior | Vanilla JavaScript (ES6+), no dependencies |
| Hosting | Works on any static host — GitHub Pages, Netlify, Vercel, S3, etc. |

## Getting started

1. **Use this template** (click the green "Use this template" button on GitHub) or clone it directly:

   ```bash
   git clone https://github.com/namish-yadav/event-hub
   cd event-hub
   ```

2. **Open it locally.** No build tools needed — just open `index.html` in a browser, or serve it:

   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

3. **Edit your events** directly in `index.html`. Each event is one `<article class="event-card">`:

   ```html
   <article class="event-card" data-event-date="2026-08-12">
       <div class="event-card-meta">
           <time datetime="2026-08-12" class="event-date">
               <span class="event-date-day">12</span>
               <span class="event-date-month">Aug</span>
           </time>
           <span class="event-countdown" data-countdown></span>
       </div>
       <div class="event-card-body">
           <h3>Your Event Title</h3>
           <p>Your event description.</p>
       </div>
   </article>
   ```

   - `data-event-date` (format `YYYY-MM-DD`) drives the live countdown and the misplaced-event check — always set it.
   - Move the whole `<article>` block from `#upcoming-events` to `#past-events` once the date has passed (or just leave it — the console warning will remind you).

4. **Customize the look** in `css/style.css`. Colors, fonts, and spacing are all defined as CSS variables at the top of the file under `:root`:

   ```css
   :root {
       --color-signal: #d65f2e; /* accent color — change this first */
       --font-display: "Fraunces", Georgia, serif;
       --font-body: "Inter", sans-serif;
   }
   ```

## Project structure

```
event-hub/
├── index.html        # Page structure & event content
├── css/
│   └── style.css      # All styling (design tokens at the top)
├── js/
│   └── script.js       # Countdowns, live counts, sanity checks
└── README.md
```

## Deploying

**GitHub Pages** (fastest path):
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to your default branch, root folder
4. Your site is live at `namish-yadav.github.io/event-hub/`

Any other static host (Netlify, Vercel, Cloudflare Pages) works by just pointing it at this folder — no build command required.

## Roadmap ideas (good first issues)

- [ ] Pull events from a JSON file or CMS instead of hardcoding HTML
- [ ] Add an `.ics` calendar download button per event
- [ ] Add filtering/search across events
- [ ] Add a dark mode toggle

Contributions welcome — open an issue or PR.

## License

MIT — see [LICENSE](LICENSE). Use it for personal projects, client work, or your own community, no attribution required (though it's appreciated).
