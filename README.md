# CHART showcase page

Static showcase page for CHART (Calibrated Human-Auditable Review Trace) — a
research prototype that organises a review's written rationale, paper evidence,
rubric constraints and submitted score into one traceable record.

CHART is not an automatic reviewer. It does not replace reviewers or ACs, and it
does not decide whether a paper is accepted.

## What is in here

Four hand-written files. No build step, no dependencies, no framework.

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, tagged for localisation; the three diagrams are inline SVG |
| `styles.css` | Single light theme, one accent, two corner radii |
| `demo.js` | Step viewer, simulated run, view and locale switching |
| `i18n.js` | zh-CN and en copy, 216 keys per locale |

The architecture diagrams are inline rather than `<img>` so they can use the
page's own tokens and Geist Mono, and so their annotations sit in the DOM where
the locale switch can reach them. They are drawn at their true label size and
scroll sideways on narrow screens instead of scaling down.

Open `index.html` directly, or serve the directory:

```bash
python -m http.server 4321
```

## About the numbers on the page

Every value shown — anchor ranges, residuals, severities, score spans, AC
attention item ids — is transcribed from one real provider run of the CHART
pipeline over four ICML reviews of a single paper, with the paper supplied as a
PDF (76,796 extracted characters). Nothing is invented for display.

The quoted reviewer text comes from a public OpenReview export. Step timings in
the simulated run are display pacing only, which is why the log column shows
step indices rather than a wall clock.

## Source code

The CHART pipeline itself lives in a separate repository, linked from the page.
