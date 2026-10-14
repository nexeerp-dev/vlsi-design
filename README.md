# VLSI fieldnotes

Build intuition for VLSI design, from MOS devices and CMOS logic to RTL, physical design, timing, verification, and tape-out.

An original visual notebook with illustrated stories, handwritten callouts, controllable worked animations, prediction challenges, step-order puzzles, quizzes, personal notes, bookmarks, and browser-local learning progress.

## Open

Double-click `index.html` in this folder. Or run `python3 -m http.server 5173 --directory dist` from this folder and visit http://localhost:5173. No dependency installation or build is needed.

## Included

- 48 lessons in 6 chapters.
- 144 topic-specific worked animation snapshots, with play, pause, rewind, scrubbing, pace control, and object inspection.
- 144 quiz checks with feedback and retries, plus prediction and order-the-steps exercises.
- A live subject-specific demonstration on the first page.
- Engineering explanations, example notation/commands, application notes, and cautions.
- Search, printable revision notes, bookmarks, exported progress, and personal notes.
- Responsive layouts and reduced-motion support.

Worked diagrams are educational abstractions; they are not circuit simulators, ISA-complete CPU emulators, or a real Git terminal. Commands in lessons are examples and do not run against your computer. Advanced lessons focus on a core operation or invariant rather than every detail of a production tool.

Progress belongs to this site and browser; it does not synchronize across devices. Clearing browser data removes saved progress. The My discoveries page exports a JSON copy.

## Edit

Content is in `dist/curriculum.js`. `dist/storyboards.js` supplies worked snapshots. `dist/config.js` selects the subject. The notebook engine is in `dist/notebook.js`, with subject interactions in `dist/subject.js`. All files needed to open the website are in this folder.

The content and illustrations are original, inspired by the general visual-learning approach of books such as the Head First series. No book pages, text, or brand assets were copied.

## Primary references

- OpenROAD documentation: https://openroad.readthedocs.io/
- SkyWater SKY130 PDK: https://skywater-pdk.readthedocs.io/
- Yosys documentation: https://yosyshq.readthedocs.io/projects/yosys/en/latest/
