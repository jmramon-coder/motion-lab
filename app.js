const groups = [
  {
    name: "Entrances & Exits",
    terms: [
      ["Fade in / Fade out", "Element appears or disappears by changing opacity.", "fade"],
      ["Slide in", "Element enters by sliding in from off-screen left, right, top, or bottom.", "slide"],
      ["Scale in", "Element grows from smaller to full size as it appears, often paired with a fade.", "scale"],
      ["Pop in", "Element appears with a slight overshoot, like it bounces into place.", "pop"],
      ["Reveal", "Content is uncovered gradually, often by animating a clip-path or mask.", "reveal"],
      ["Enter / Exit", "The animation an element plays when it is added to or removed from the screen.", "slide"]
    ]
  },
  {
    name: "Sequencing & Timing",
    terms: [
      ["Keyframes", "Defined points in an animation such as 0%, 50%, and 100%; the browser fills the gaps.", "keyframes"],
      ["Interpolation / Tween", "Generating all the in-between frames between a start and end value, so motion is continuous.", "translate"],
      ["Stagger", "Animate several items one after another with a small delay between each, creating a cascade.", "stagger"],
      ["Orchestration", "Deliberately timing multiple animations so they feel like one coordinated motion.", "stagger"],
      ["Delay", "Time before an animation starts.", "fade"],
      ["Duration", "How long an animation takes.", "translate"],
      ["Fill mode", "Whether an element keeps its first or last frame's styles before or after the animation.", "pop"],
      ["Stepped animation", "An animation divided into discrete steps, like a countdown timer.", "performance"]
    ]
  },
  {
    name: "Movement & Transforms",
    terms: [
      ["Translate", "Move an element along the X or Y axis.", "translate"],
      ["Scale", "Make an element bigger or smaller.", "scale"],
      ["Rotate", "Spin an element around a point.", "rotate"],
      ["Skew", "Slant an element along the X or Y axis, shearing it out of its rectangular shape.", "skew"],
      ["3D tilt / Flip", "Rotate in 3D space with rotateX or rotateY to add depth.", "flip"],
      ["Perspective", "How strong the 3D effect looks; a lower value exaggerates depth.", "flip"],
      ["Transform origin", "The anchor point a scale or rotation grows or spins from.", "origin"],
      ["Origin-aware animation", "An element animates out of its trigger instead of from its own center.", "origin"]
    ]
  },
  {
    name: "Transitions Between States",
    terms: [
      ["Crossfade", "One element fades out as another fades in, in the same spot.", "crossfade"],
      ["Continuity transition", "A change that keeps the user oriented by visually connecting before and after.", "layout"],
      ["Morph", "One shape smoothly turns into another shape.", "morph"],
      ["Shared element transition", "An element travels and transforms from one position into another.", "layout"],
      ["Layout animation", "When an element's size or position changes, it animates to the new spot instead of snapping.", "layout"],
      ["Accordion / Collapse", "A section smoothly expands and collapses its height to show or hide content.", "collapse"],
      ["Direction-aware transition", "Content slides one way going forward and the opposite way going back.", "direction"]
    ]
  },
  {
    name: "Scroll",
    terms: [
      ["Scroll reveal", "Elements fade or slide into place as they enter the viewport.", "scroll"],
      ["Scroll-driven animation", "An animation whose progress is tied directly to scroll position.", "scroll"],
      ["Parallax", "Background and foreground move at different speeds while scrolling, creating depth.", "parallax"],
      ["Page transition", "An animation that plays when navigating from one page or route to another.", "direction"],
      ["View transition", "The browser morphs between two states or pages, connecting shared elements.", "morph"]
    ]
  },
  {
    name: "Feedback & Interaction",
    terms: [
      ["Hover effect", "Visual change when the cursor moves over an element.", "press"],
      ["Press / Tap feedback", "A subtle scale-down when an element is clicked, so it feels physical.", "press"],
      ["Hold to confirm", "A progress effect that fills up while the user holds a button.", "reveal"],
      ["Drag", "Moving an element by grabbing it, often with momentum when released.", "drag"],
      ["Drag to reorder", "Dragging items in a list to rearrange them while others shift to make room.", "layout"],
      ["Swipe to dismiss", "Dragging an element off-screen to close it, like a drawer or toast.", "swipe"],
      ["Rubber-banding", "Resistance and snap-back when you drag past a boundary.", "rubber"],
      ["Shake / Wiggle", "A quick side-to-side jitter signaling an error or rejected input.", "shake"],
      ["Ripple", "A circle expanding from the point of a tap, confirming the press.", "ripple"]
    ]
  },
  {
    name: "Easing",
    terms: [
      ["Easing", "The rate at which an animation speeds up or slows down.", "translate"],
      ["Ease-out", "Starts fast, ends slow; the default for most UI and anything responding to the user.", "slide"],
      ["Ease-in", "Starts slow, ends fast; usually avoided because it can feel sluggish.", "slide"],
      ["Ease-in-out", "Slow, fast, slow; good for elements already on screen moving from A to B.", "translate"],
      ["Linear", "Constant speed; reserve for spinners or marquees.", "marquee"],
      ["Cubic-bezier", "A custom easing curve you define for precise control.", "pop"],
      ["Asymmetric easing", "A curve that accelerates and decelerates at different rates.", "spring"]
    ]
  },
  {
    name: "Spring Animations",
    terms: [
      ["Spring", "Motion driven by physics such as tension, mass, and damping rather than a set duration.", "spring"],
      ["Stiffness / Tension", "How strongly the spring pulls toward its target. Higher feels snappier.", "spring"],
      ["Damping", "How quickly a spring settles. Lower damping means more bounce and oscillation.", "spring"],
      ["Mass", "How heavy the animated element feels. More mass makes it slower and more sluggish.", "spring"],
      ["Bounce", "A spring that overshoots and settles, adding playfulness.", "pop"],
      ["Perceptual duration", "How long a spring feels finished, even though it keeps micro-settling underneath.", "spring"],
      ["Momentum", "Motion that carries velocity, especially after a drag or interruption.", "drag"],
      ["Velocity", "How fast and in which direction an element is moving.", "drag"],
      ["Interruptible animation", "An animation that can be smoothly redirected mid-flight instead of finishing first.", "spring"]
    ]
  },
  {
    name: "Looping & Ambient Motion",
    terms: [
      ["Marquee", "Text or content that scrolls continuously in a loop.", "marquee"],
      ["Loop", "An animation that repeats, a set number of times or infinitely.", "pulse"],
      ["Alternate (yoyo)", "A loop that plays forward then reverses each iteration.", "pulse"],
      ["Orbit", "An element circling around another in a continuous path.", "orbit"],
      ["Pulse", "A gentle repeating scale or opacity change to draw attention.", "pulse"],
      ["Float", "A gentle continuous up-and-down drift that makes a static element feel alive.", "float"],
      ["Idle animation", "Subtle motion that plays while an element is sitting there waiting to be interacted with.", "float"]
    ]
  },
  {
    name: "Polish & Effects",
    terms: [
      ["Blur", "A blur filter used to soften an element or mask tiny imperfections.", "blur"],
      ["Clip-path", "Clipping an element to a shape, used for reveals, masks, and before/after sliders.", "reveal"],
      ["Mask", "Hiding or revealing parts of an element using a shape or gradient.", "reveal"],
      ["Before / after slider", "A draggable divider that wipes between two overlaid images to compare them.", "reveal"],
      ["Line drawing", "An SVG path that draws itself in, like an invisible pen tracing it.", "line"],
      ["Text morph", "Text that animates character by character when it changes.", "typewriter"],
      ["Skeleton / Shimmer", "A placeholder with a moving sheen shown while content loads.", "shimmer"],
      ["Number ticker", "Digits rolling or counting up to a value.", "ticker"],
      ["Tabular numbers", "Fixed-width digits so numbers do not shift around as they change.", "ticker"],
      ["Typewriter", "Text appearing one character at a time, as if being typed.", "typewriter"]
    ]
  },
  {
    name: "Performance",
    terms: [
      ["Frame rate (FPS)", "Frames drawn per second. 60fps is the baseline for smooth motion.", "performance"],
      ["Jank", "Visible stutter when the browser drops frames because it cannot keep up.", "performance"],
      ["Dropped frame", "A frame the browser missed its deadline to draw, causing a tiny hitch.", "performance"],
      ["Compositing", "Letting the GPU move or fade an element on its own layer without redoing layout or paint.", "translate"],
      ["will-change", "A CSS hint that an element is about to animate so the browser can promote it.", "fade"],
      ["Layout thrashing", "Animating width, height, top, or left in ways that force layout every frame.", "layout"]
    ]
  },
  {
    name: "Principles to Know",
    terms: [
      ["Purposeful animation", "Motion should serve a function: orient, give feedback, or show relationships.", "layout"],
      ["Anticipation", "A small wind-up in the opposite direction before a move.", "anticipation"],
      ["Follow-through", "Parts of an element keep moving and settle slightly after the main motion stops.", "follow"],
      ["Squash & stretch", "Deforming an element as it moves to convey weight, speed, and flexibility.", "squash"],
      ["Perceived performance", "The right animation makes an interface feel faster, even when it is not.", "shimmer"],
      ["Frequency of use", "The more often a user sees an animation, the shorter and subtler it should be.", "fade"],
      ["Spatial consistency", "Animating so an element keeps its identity and position across states.", "layout"],
      ["Hardware acceleration", "Animating transform and opacity lets the GPU keep motion smooth.", "translate"],
      ["Reduced motion", "Respecting prefers-reduced-motion by toning down or removing motion.", "fade"]
    ]
  }
];

const flatTerms = groups.flatMap((group, groupIndex) =>
  group.terms.map(([name, definition, demo]) => ({ name, definition, demo, group: group.name, groupIndex }))
);

const animationExamples = [
  ["Fade", "Opacity change for a quiet enter or exit.", "Fade in / Fade out", "blend"],
  ["Slide", "Move in from an edge while preserving direction.", "Slide in", "move-right"],
  ["Scale in", "Grow from small to full size with a soft fade.", "Scale in", "scan"],
  ["Pop", "Overshoot slightly, then settle into place.", "Pop in", "badge-plus"],
  ["Reveal", "Uncover content with a mask or clipped edge.", "Reveal", "panel-top-open"],
  ["Stagger", "Cascade related items one after another.", "Stagger", "list-tree"],
  ["3D flip", "Rotate through depth with perspective.", "3D tilt / Flip", "box"],
  ["Layout shift", "Animate size or position changes instead of snapping.", "Layout animation", "layout-template"],
  ["Scroll reveal", "Bring elements in as they enter the viewport.", "Scroll reveal", "mouse"],
  ["Drag", "Move with a grabbed, interruptible feeling.", "Drag", "hand"],
  ["Ripple", "Expand feedback from the tap point.", "Ripple", "circle-dot"],
  ["Spring", "Use overshoot and settle for physical motion.", "Spring", "activity"],
  ["Marquee", "Loop content continuously at linear speed.", "Marquee", "refresh-cw"],
  ["Ticker", "Roll digits with fixed-width number spacing.", "Number ticker", "badge-123"],
  ["Squash & stretch", "Deform briefly to imply weight and speed.", "Squash & stretch", "stretch-horizontal"]
].map(([name, definition, termName, icon]) => ({ name, definition, termName, icon }));

const sectionList = document.querySelector("#section-list");
const exampleList = document.querySelector("#example-list");
const demoObject = document.querySelector("#demo-object");
const demoLabel = document.querySelector("#demo-label");
const demoStage = document.querySelector("#demo-stage");
const scrollWorld = document.querySelector("#scroll-world");
const subjectImage = document.querySelector("#subject-image");
const conceptTitle = document.querySelector("#concept-title");
const conceptDefinition = document.querySelector("#concept-definition");
const activeCategory = document.querySelector("#active-category");
const playButton = document.querySelector("#play");
const loopButton = document.querySelector("#loop");
const subjectToggle = document.querySelector("#subject-toggle");
const subjectGallery = document.querySelector("#subject-gallery");
const subjectSize = document.querySelector("#subject-size");
const subjectSizeControl = document.querySelector(".subject-size-control");
const subjectSizeSlider = document.querySelector(".size-slider");
const libraryModeButtons = document.querySelectorAll(".library-mode-button");
const reducedMotion = document.querySelector("#reduced-motion");
const panelSwitchButtons = document.querySelectorAll(".panel-switch-button");
const panelViews = document.querySelectorAll(".panel-view");

const controls = {
  duration: document.querySelector("#duration"),
  delay: document.querySelector("#delay"),
  stagger: document.querySelector("#stagger"),
  perspective: document.querySelector("#perspective")
};

let activeGroup = 0;
let activeTerm = flatTerms[0];
let loopEnabled = false;
let loopTimer = 0;
const subjectAssets = {
  logo: "assets/lab-mark.png",
  character: "assets/subject-character.png",
  ball: "assets/subject-ball.png"
};

function switchPanel(panel) {
  panelSwitchButtons.forEach(button => {
    const isActive = button.dataset.panel === panel;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  panelViews.forEach(view => {
    const isActive = view.id === `${panel}-panel`;
    view.classList.toggle("is-active", isActive);
    view.hidden = !isActive;
  });
}

function renderLibrary() {
  const sections = groups.map((group, groupIndex) => {
    const terms = group.terms
      .map(([name, definition, demo]) => ({ name, definition, demo, group: group.name, groupIndex }));

    const isOpen = groupIndex === activeGroup;
    return `
      <details class="panel-section vocabulary-section" data-group-index="${groupIndex}" ${isOpen ? "open" : ""}>
        <summary>
          <span>${group.name}</span>
          <i data-lucide="chevron-down"></i>
        </summary>
        <div class="term-list">
          ${terms.map(term => `
            <button class="term-button ${term.name === activeTerm.name ? "is-active" : ""}" data-name="${term.name}" type="button">
              <strong>${term.name}</strong>
              <span>${term.definition}</span>
            </button>
          `).join("")}
        </div>
      </details>
    `;
  }).join("");

  sectionList.innerHTML = sections;
  renderExamples();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderExamples() {
  exampleList.innerHTML = animationExamples.map(example => `
    <button class="example-button ${example.termName === activeTerm.name ? "is-active" : ""}" data-term="${example.termName}" type="button">
      <i data-lucide="${example.icon}"></i>
      <span>
        <strong>${example.name}</strong>
        <span>${example.definition}</span>
      </span>
    </button>
  `).join("");
}

function setActiveTerm(term, shouldPlay = true) {
  activeTerm = term;
  activeGroup = term.groupIndex;
  activeCategory.textContent = term.group;
  conceptTitle.textContent = term.name;
  conceptDefinition.textContent = term.definition;
  demoLabel.textContent = labelFor(term);
  renderLibrary();
  if (shouldPlay) playDemo();
}

function labelFor(term) {
  if (term.demo === "ticker") return "12,480";
  if (term.demo === "typewriter") return "MotionLab";
  if (term.demo === "marquee") return "Continuous loop";
  if (term.demo === "stagger") return "STAGGER";
  return term.name.split(" / ")[0].replace(/\(.+\)/, "").trim();
}

function playDemo() {
  window.clearTimeout(loopTimer);
  const demo = activeTerm.demo;
  demoObject.className = "demo-object";
  demoStage.className = "demo-stage";
  scrollWorld.className = "scroll-world";

  if (demo === "stagger") {
    demoLabel.innerHTML = labelFor(activeTerm).split("").map((letter, index) =>
      `<span style="animation-delay: calc(var(--delay) + ${index} * var(--stagger))">${letter}</span>`
    ).join("");
  } else {
    demoLabel.textContent = labelFor(activeTerm);
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (demo === "parallax") {
        scrollWorld.classList.add("animate-parallax");
        demoObject.classList.add("animate-float");
        scheduleLoop();
        return;
      }
      if (demo === "ripple") {
        demoObject.classList.add("animate-press");
        scheduleLoop();
        return;
      }
      demoObject.classList.add(`animate-${demo}`);
      scheduleLoop();
    });
  });
}

function scheduleLoop() {
  if (!loopEnabled) return;
  const duration = Number(controls.duration.value);
  const delay = Number(controls.delay.value);
  loopTimer = window.setTimeout(playDemo, duration + delay + 220);
}

function syncControls() {
  document.documentElement.style.setProperty("--duration", `${controls.duration.value}ms`);
  document.documentElement.style.setProperty("--delay", `${controls.delay.value}ms`);
  document.documentElement.style.setProperty("--stagger", `${controls.stagger.value}ms`);
  document.documentElement.style.setProperty("--perspective", `${controls.perspective.value}px`);
  document.querySelector("#duration-value").textContent = `${controls.duration.value}ms`;
  document.querySelector("#delay-value").textContent = `${controls.delay.value}ms`;
  document.querySelector("#stagger-value").textContent = `${controls.stagger.value}ms`;
  document.querySelector("#perspective-value").textContent = `${controls.perspective.value}px`;
}

function syncSubjectSize() {
  document.documentElement.style.setProperty("--subject-size", `${subjectSize.value}vw`);
  const range = Number(subjectSize.max) - Number(subjectSize.min);
  const progress = ((Number(subjectSize.value) - Number(subjectSize.min)) / range) * 100;
  document.documentElement.style.setProperty("--subject-size-progress", `${progress}%`);
}

function setSubject(subject) {
  if (!subjectAssets[subject]) return;
  subjectImage.src = subjectAssets[subject];
  document.querySelectorAll(".subject-option").forEach(option => {
    option.classList.toggle("is-active", option.dataset.subject === subject);
  });
  subjectGallery.hidden = true;
  subjectToggle.setAttribute("aria-expanded", "false");
  playDemo();
}

sectionList.addEventListener("click", event => {
  const button = event.target.closest(".term-button");
  if (!button) return;
  const term = flatTerms.find(item => item.name === button.dataset.name);
  if (term) setActiveTerm(term);
});

exampleList.addEventListener("click", event => {
  const button = event.target.closest(".example-button");
  if (!button) return;
  const term = flatTerms.find(item => item.name === button.dataset.term);
  if (term) setActiveTerm(term);
});

Object.values(controls).forEach(control => {
  control.addEventListener("input", () => {
    syncControls();
    playDemo();
  });
});

document.querySelector(".segmented").addEventListener("click", event => {
  const button = event.target.closest(".segment");
  if (!button) return;
  document.querySelectorAll(".segment").forEach(segment => segment.classList.remove("is-active"));
  button.classList.add("is-active");
  document.documentElement.style.setProperty("--ease", button.dataset.ease);
  playDemo();
});

panelSwitchButtons.forEach(button => {
  button.addEventListener("click", () => switchPanel(button.dataset.panel));
});

libraryModeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const isExamples = button.dataset.libraryMode === "examples";
    libraryModeButtons.forEach(modeButton => {
      const isActive = modeButton === button;
      modeButton.classList.toggle("is-active", isActive);
      modeButton.setAttribute("aria-selected", String(isActive));
    });
    sectionList.hidden = isExamples;
    exampleList.hidden = !isExamples;
  });
});

playButton.addEventListener("click", playDemo);
loopButton.addEventListener("click", () => {
  loopEnabled = !loopEnabled;
  loopButton.classList.toggle("is-active", loopEnabled);
  loopButton.setAttribute("aria-pressed", String(loopEnabled));
  if (loopEnabled) {
    playDemo();
  } else {
    window.clearTimeout(loopTimer);
  }
});
subjectToggle.addEventListener("click", event => {
  event.stopPropagation();
  subjectGallery.hidden = !subjectGallery.hidden;
  subjectToggle.setAttribute("aria-expanded", String(!subjectGallery.hidden));
});

subjectGallery.addEventListener("click", event => {
  event.stopPropagation();
  const button = event.target.closest(".subject-option");
  if (!button) return;
  setSubject(button.dataset.subject);
});

subjectSize.addEventListener("input", () => {
  syncSubjectSize();
  playDemo();
});

function updateSubjectSizeFromPointer(event) {
  const rect = subjectSizeSlider.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, (rect.bottom - event.clientY) / rect.height));
  const min = Number(subjectSize.min);
  const max = Number(subjectSize.max);
  subjectSize.value = String(Math.round(min + progress * (max - min)));
  syncSubjectSize();
  playDemo();
}

subjectSizeSlider.addEventListener("pointerdown", event => {
  event.preventDefault();
  subjectSizeSlider.setPointerCapture(event.pointerId);
  updateSubjectSizeFromPointer(event);
});

subjectSizeSlider.addEventListener("pointermove", event => {
  if (!subjectSizeSlider.hasPointerCapture(event.pointerId)) return;
  updateSubjectSizeFromPointer(event);
});

["click", "pointerdown", "touchstart"].forEach(eventName => {
  subjectSizeControl.addEventListener(eventName, event => event.stopPropagation());
});

document.addEventListener("click", event => {
  if (subjectGallery.hidden) return;
  if (subjectGallery.contains(event.target) || subjectToggle.contains(event.target)) return;
  subjectGallery.hidden = true;
  subjectToggle.setAttribute("aria-expanded", "false");
});

demoStage.addEventListener("click", playDemo);

reducedMotion.addEventListener("change", () => {
  document.body.classList.toggle("motion-reduced", reducedMotion.checked);
  playDemo();
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  reducedMotion.checked = true;
  document.body.classList.add("motion-reduced");
}

renderLibrary();
syncControls();
syncSubjectSize();
setActiveTerm(activeTerm, false);
playDemo();

if (window.lucide) {
  window.lucide.createIcons();
}
