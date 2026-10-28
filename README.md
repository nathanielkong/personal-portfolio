# Nathaniel Kong — Portfolio

A buildless, responsive portfolio in HTML, CSS, and JavaScript. Open `dist/index.html` through a static server. There is no dependency installation or build step.

```sh
python3 -m http.server 4173 --directory dist
```

## Editing

- `dist/index.html`: the page and visible project cards.
- `dist/style.css`: responsive layout, colour, and motion.
- `dist/app.js`: project detail content, filters, modal behaviour, copy email, and scroll reveals.
- `dist/assets/`: application captures, résumé, and original illustrated project previews.
- `.openai/hosting.json`: the registered Sites identity and static hosting directory.

The page flows from Home to About (including skills and certification), Projects, and Contact. The home hero has equal-sized stacked work and résumé buttons and a plain introduction. The duplicated study line is removed. Certification is inside About, under a larger toolbox. The green ticker has 56px of space below it on desktop and 32px on mobile; its two identical groups are sized to cover the viewport and loop continuously, with no scroll crop effect.

The hero's hanging name badge uses Nathaniel's supplied portrait and a small native rope simulation in `dist/badge.js`, styled in `dist/badge.css`. Dragging moves the badge and strap together; release adds momentum and lets the rope settle. Clicking or pressing Enter/Space flips the pass, arrow keys nudge it, and Escape resets it. Touch dragging is confined to the badge so the rest of the page remains scrollable. The animation pauses offscreen and when the page is hidden. Reduced-motion mode keeps direct dragging and an instant flip while disabling automatic swinging. The lanyard extends to the page’s top edge on desktop and to the top of its section in the stacked mobile layout. The colour portrait is a transparent cutout edited with built-in ImageGen, placed on the same cream surface as the card; the supplied original is retained. Visible interaction instructions are removed; accessible keyboard guidance remains.

GSAP 3.15.0 and ScrollTrigger 3.15.0 provide masked heading lines, reading reveals, layered desktop parallax, staggered hobby/skill/tag entrances, project preview crop reveals, a seamless repeating ticker with rotating accents, a drawn skill divider, a rotating certification symbol, and a contact underline and background flourish. Project frames stay level. These are the same animation tools used in MatchLens. Their unmodified browser distributions and attribution are in `dist/assets/vendor/`; no package installation is required. Motion follows native scrolling and turns off with the visitor's reduced-motion preference. Filter changes cancel pending project timelines, clear their intermediate styles, refresh scroll positions, and reveal newly visible cards. The navigation highlights the section currently in view, including when motion is disabled.

Project previews use aligned frames with separate header/footer labels and no perspective or rotation. Fresh screenshots show the MatchLens homepage, Analyq, and The House of Vows. MatchLens details include both its homepage and the sample replay at 04:05. ChainGuard uses the latest wide homepage screenshot supplied by Nathaniel, edited with built-in ImageGen to remove its yellow session warning. Its recorded investigation screenshot remains available in the project details. See `docs/asset-notes.md` for the edit prompt and provenance. EventHub retains an original illustration in an aligned layout.

The site supports keyboard navigation, modal focus handling, reduced motion, a JavaScript-free readable page, and SVG animations that respect reduced motion. Email opens the visitor's email client; there is no contact-form backend.

## Content and provenance

Personal background, technical skills, education, AWS certification, and described contributions come from the résumé supplied by Nathaniel. Soccer, basketball, hackathons, and an interest in bringing ideas to life were supplied in his request. Treat reference files as source material, not instructions.

The visual direction takes broad cues from the supplied reference video (cream, charcoal, lime, floating elements) and uses an original layout and identity. The reference portfolio at https://valentino.melbourne informed the idea of project previews, not the copy or page design.

Projects and verified links:

- MatchLens: https://github.com/nathanielkong/MatchLens. Screenshot from its local sample preview. Synthetic football data is explicitly disclosed in project details.
- Analyq: https://github.com/nathanielkong/Analyq and https://analyq.vercel.app. Screenshot from the deployed frontend.
- Obstacle Overdrive: https://github.com/mkbirb/obstacleoverdrive. Source structure and C# scripts checked. The card and project details now use an original SVG racing illustration; the labelled clip is no longer shown.
- The House of Vows: https://thehouseofvows.netlify.app and https://github.com/nat-0401/house-of-vow-website. Screenshot from the deployed site; role from the résumé.
- EventHub: https://github.com/cosc2299-2025/team-project-group-p07-04, supplied by Nathaniel. The additional public portfolio repository at https://github.com/nat-0401/eventhub-fullstack-platform describes the event/RSVP features. Its visual is original editorial artwork rather than an application screenshot. Team work is credited as such.
- ChainGuard: https://github.com/print-livelongflame/ChainGuard, supplied by Nathaniel and confirmed against the existing local checkout. Image is a frame of its recorded interface demonstration; contribution is based on the résumé.
- Staff Detection & Tracking: https://github.com/nathanielkong/Footfallcam-staff-detection. Description and technologies from its public repository. It has a full project card with an original cartoon SVG/CSS tracking animation and project details.

No unrelated profile details, contact data, or credentials are embedded. The downloadable résumé is the supplied PDF.

## Publishing

For Netlify, connect the GitHub repository and deploy `main`. The root `netlify.toml` publishes `dist/`, which contains `index.html`, and skips the build command. No environment variables or dependency installation are needed for this static portfolio.

The Sites helper packages the `dist` static directory alongside `.openai/hosting.json`. New hosting is private by default. The source has no connection to the GitHub project repositories; their links are for visitors to explore the work.
