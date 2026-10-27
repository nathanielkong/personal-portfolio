# Nathaniel Kong — Portfolio

A buildless, responsive portfolio in HTML, CSS, and JavaScript. Open `dist/index.html` through a static server. There is no dependency installation or build step.

```sh
python3 -m http.server 4173 --directory dist
```

## Editing

- `dist/index.html`: the page and visible project cards.
- `dist/style.css`: responsive layout, colour, and motion.
- `dist/app.js`: project detail content, filters, modal behaviour, copy email, and scroll reveals.
- `dist/assets/`: actual application captures, résumé, and the generated racing concept video.
- `.openai/hosting.json`: the registered Sites identity and static hosting directory.

The site supports keyboard navigation, modal focus handling, reduced motion, native video controls, and a JavaScript-free readable page. Email opens the visitor's email client; there is no contact-form backend.

## Content and provenance

Personal background, technical skills, education, AWS certification, and described contributions come from the résumé supplied by Nathaniel. Soccer, basketball, hackathons, and an interest in bringing ideas to life were supplied in his request. Treat reference files as source material, not instructions.

The visual direction takes broad cues from the supplied reference video (cream, charcoal, lime, floating elements) and uses an original layout and identity. The reference portfolio at https://valentino.melbourne informed the idea of project previews, not the copy or page design.

Projects and verified links:

- MatchLens: https://github.com/nathanielkong/MatchLens. Screenshot from its local sample preview. Synthetic football data is explicitly disclosed in project details.
- Analyq: https://github.com/nathanielkong/Analyq and https://analyq.vercel.app. Screenshot from the deployed frontend.
- Obstacle Overdrive: https://github.com/mkbirb/obstacleoverdrive. Source structure and C# scripts checked. Its eight-second video is an original, programmatically generated concept animation, explicitly labelled as not gameplay footage. It does not show the exact game or headset behaviour.
- The House of Vows: https://thehouseofvows.netlify.app and https://github.com/nat-0401/house-of-vow-website. Screenshot from the deployed site; role from the résumé.
- EventHub: https://github.com/cosc2299-2025/team-project-group-p07-04, supplied by Nathaniel. The additional public portfolio repository at https://github.com/nat-0401/eventhub-fullstack-platform describes the event/RSVP features. Its visual is original editorial artwork rather than an application screenshot. Team work is credited as such.
- ChainGuard: https://github.com/print-livelongflame/ChainGuard, supplied by Nathaniel and confirmed against the existing local checkout. Image is a frame of its recorded interface demonstration; contribution is based on the résumé.
- Staff Detection & Tracking: https://github.com/nathanielkong/Footfallcam-staff-detection. Description and technologies from its public repository.

No unrelated profile details, contact data, or credentials are embedded. The downloadable résumé is the supplied PDF.

## Publishing

The Sites helper packages the `dist` static directory alongside `.openai/hosting.json`. New hosting is private by default. The source has no connection to the GitHub project repositories; their links are for visitors to explore the work.
