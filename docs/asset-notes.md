# Portfolio preview assets

## Name badge portrait

Current asset: `/Users/nathanielkong/personal portfolio/nathaniel-portfolio/dist/assets/nathaniel-portrait-cutout.png`. Built-in ImageGen edited the prior white-background portrait into a transparent colour cutout. The image now sits directly on the card's shared cream surface (`#f5f4ec`), without a photo border. Prior assets remain available.

Current final prompt:

> Use case: background-extraction. Edit target: supplied square colour portrait. Remove ONLY the white background to actual transparency with a precise natural cutout at the hair and shoulder edges. Preserve Nathaniel's existing face, glasses, hair, skin colour, black polo shirt, pose, all photographic details and current square crop exactly as supplied. Do not repaint, beautify, relight, recolour, resize the person or change the composition. Keep original full-colour subject. Transparent background, no checkerboard drawn, no white border or halo, no new objects or text. This will sit directly on a cream portfolio card.

Previous white-background version:

- Mode: built-in ImageGen, image editing.
- Input: Nathaniel's supplied café photograph, retained as `dist/assets/nathaniel-portrait.jpg`.
- Saved asset: `/Users/nathanielkong/personal portfolio/nathaniel-portfolio/dist/assets/nathaniel-portrait-white.png`.
- Scope: colour portrait with the café replaced by white, used on the interactive badge.

Final prompt:

> Use case: identity-preserve / precise-object-edit. Edit target: the supplied colour photograph of Nathaniel sitting at a café. Create a portrait photo asset for his website name badge. Replace the entire café background, other people, chairs and table with a solid pure white (#ffffff) background. Keep Nathaniel himself unchanged: exact same face, glasses, hair, natural skin colour, expression, black polo shirt, body proportions and pose. Preserve photographic texture and original colours. No beautifying, no stylisation, no new clothing, no new facial features, no text. Frame as a clean centred head-and-shoulders/upper-torso portrait in a near-square composition, with a small white margin above hair and shoulders visible. Ensure a neat natural hair/shoulder silhouette against white. Output one edited portrait.

## ChainGuard homepage

- Mode: built-in ImageGen, image editing.
- Input: Nathaniel's screenshot, `Screenshot 2026-10-28 at 10.29.42 PM.png`.
- Saved asset: `/Users/nathanielkong/personal portfolio/nathaniel-portfolio/dist/assets/chainguard-home-clean.png`.
- Scope: remove the yellow expired-session warning and reconnect link from a portfolio screenshot. This does not change the ChainGuard application or claim to fix its session handling.

Final prompt:

> Use case: precise-object-edit. Asset type: screenshot for a software portfolio. Edit target: the supplied ChainGuard screenshot. Remove ONLY the horizontal yellow/brown notification banner near the top that says 'Your previous chat session expired. Start a new conversation.' and its Reconnect link. Fill its former area with the exact uninterrupted dark navy page background. Preserve the screenshot's original dimensions, layout, typography, logos, sidebar, top header, central homepage heading, four feature cards, composer, and all other text and UI exactly as supplied. Do not move or redesign anything; do not crop, add text, or change colors outside that banner. Output the clean screenshot.

## Staff Detection & Tracking

- Mode: original code-native SVG/CSS animation; no image-generation model.
- Saved asset: `/Users/nathanielkong/personal portfolio/nathaniel-portfolio/dist/assets/staff-tracking.svg`.
- Design: a cartoon character in a lavender top and staff badge walks across a cream and sage floor. A lime box, crosshair, and scan line follow the character. The visual is a project illustration, and the project details describe the actual pipeline. SVG motion stops under `prefers-reduced-motion`.

## Obstacle Overdrive

- Mode: original code-native SVG illustration; no image-generation model.
- Saved asset: `/Users/nathanielkong/personal portfolio/nathaniel-portfolio/dist/assets/obstacle-overdrive-art.svg`.
- Design: orange and cream circuit with a lime kart and obstacles. Replaces the labelled clip in the portfolio. The project details call it original artwork.
