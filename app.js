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

const categoryTabs = document.querySelector("#category-tabs");
const termList = document.querySelector("#term-list");
const search = document.querySelector("#search");
const demoObject = document.querySelector("#demo-object");
const demoLabel = document.querySelector("#demo-label");
const demoStage = document.querySelector("#demo-stage");
const scrollWorld = document.querySelector("#scroll-world");
const tapTarget = document.querySelector("#tap-target");
const conceptTitle = document.querySelector("#concept-title");
const conceptDefinition = document.querySelector("#concept-definition");
const activeCategory = document.querySelector("#active-category");
const playButton = document.querySelector("#play");
const randomizeButton = document.querySelector("#randomize");
const reducedMotion = document.querySelector("#reduced-motion");
const sheetToggle = document.querySelector("#sheet-toggle");
const sheetTitle = document.querySelector(".sheet-header strong");
const sheetTabs = document.querySelectorAll(".sheet-tab");
const sheetViews = document.querySelectorAll(".sheet-view");

const controls = {
  duration: document.querySelector("#duration"),
  delay: document.querySelector("#delay"),
  stagger: document.querySelector("#stagger"),
  perspective: document.querySelector("#perspective")
};

let activeGroup = 0;
let activeTerm = flatTerms[0];

function setSheetOpen(isOpen) {
  document.body.classList.toggle("sheet-open", isOpen);
  sheetToggle.setAttribute("aria-expanded", String(isOpen));
}

function switchPanel(panel) {
  sheetTitle.textContent = panel === "controls" ? "Controls" : "Library";

  sheetTabs.forEach(tab => {
    const isActive = tab.dataset.panel === panel;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  sheetViews.forEach(view => {
    const isActive = view.id === `${panel}-panel`;
    view.classList.toggle("is-active", isActive);
    view.hidden = !isActive;
  });
}

function renderCategories() {
  categoryTabs.innerHTML = groups.map((group, index) => (
    `<button class="category-tab ${index === activeGroup ? "is-active" : ""}" data-index="${index}" type="button">${group.name}</button>`
  )).join("");
}

function renderTerms() {
  const query = search.value.trim().toLowerCase();
  const terms = query ? flatTerms : flatTerms.filter(term => term.groupIndex === activeGroup);

  termList.innerHTML = terms.map(term => {
    const hidden = query && !`${term.name} ${term.definition} ${term.group}`.toLowerCase().includes(query);
    return `
      <button class="term-button ${term === activeTerm ? "is-active" : ""} ${hidden ? "is-hidden" : ""}" data-name="${term.name}" type="button">
        <strong>${term.name}</strong>
        <span>${term.definition}</span>
      </button>
    `;
  }).join("");
}

function setActiveTerm(term, shouldPlay = true) {
  activeTerm = term;
  activeGroup = term.groupIndex;
  activeCategory.textContent = term.group;
  conceptTitle.textContent = term.name;
  conceptDefinition.textContent = term.definition;
  demoLabel.textContent = labelFor(term);
  renderCategories();
  renderTerms();
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
  const demo = activeTerm.demo;
  demoObject.className = "demo-object";
  demoStage.className = "demo-stage";
  scrollWorld.className = "scroll-world";
  tapTarget.classList.remove("is-rippling");

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
        return;
      }
      if (demo === "ripple") {
        tapTarget.classList.add("is-rippling");
        demoObject.classList.add("animate-press");
        return;
      }
      demoObject.classList.add(`animate-${demo}`);
    });
  });
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

categoryTabs.addEventListener("click", event => {
  const button = event.target.closest(".category-tab");
  if (!button) return;
  activeGroup = Number(button.dataset.index);
  search.value = "";
  setActiveTerm(flatTerms.find(term => term.groupIndex === activeGroup));
});

termList.addEventListener("click", event => {
  const button = event.target.closest(".term-button");
  if (!button) return;
  const term = flatTerms.find(item => item.name === button.dataset.name);
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

sheetToggle.addEventListener("click", () => {
  setSheetOpen(!document.body.classList.contains("sheet-open"));
});

sheetTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    switchPanel(tab.dataset.panel);
    setSheetOpen(true);
  });
});

search.addEventListener("input", renderTerms);
playButton.addEventListener("click", playDemo);
demoStage.addEventListener("click", playDemo);
tapTarget.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    playDemo();
  }
});

randomizeButton.addEventListener("click", () => {
  const next = flatTerms[Math.floor(Math.random() * flatTerms.length)];
  setActiveTerm(next);
});

reducedMotion.addEventListener("change", () => {
  document.body.classList.toggle("motion-reduced", reducedMotion.checked);
  playDemo();
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  reducedMotion.checked = true;
  document.body.classList.add("motion-reduced");
}

renderCategories();
renderTerms();
syncControls();
setActiveTerm(activeTerm, false);
playDemo();

if (window.lucide) {
  window.lucide.createIcons();
}
