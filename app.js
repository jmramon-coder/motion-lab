const groups = [
  {
    name: "Entrances & Exits",
    terms: [
      ["Fade in / Fade out", "Element appears or disappears by changing opacity.", "fade"],
      ["Slide in", "Element enters by sliding in from off-screen left, right, top, or bottom.", "slide"],
      ["Scale in", "Element grows from smaller to full size as it appears, often paired with a fade.", "scale"],
      ["Pop in", "Element appears with a slight overshoot, like it bounces into place.", "pop"],
      ["Reveal", "Content is uncovered gradually, often by animating a clip-path or mask.", "reveal"]
    ]
  },
  {
    name: "Sequencing & Timing",
    terms: [
      ["Keyframe path", "Move through multiple defined poses instead of a single start and end state.", "keyframes"],
      ["Stagger", "Animate several items one after another with a small delay between each, creating a cascade.", "stagger"],
      ["Stepped animation", "Move in discrete steps instead of continuous motion.", "steps"]
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
      ["Origin-aware animation", "An element animates out of its trigger instead of from its own center.", "origin"],
      ["Motion trail", "Ghosted copies follow the subject to emphasize speed and direction.", "trail"]
    ]
  },
  {
    name: "Transitions Between States",
    terms: [
      ["Crossfade", "One element fades out as another fades in, in the same spot.", "crossfade"],
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
      ["Parallax", "Background and foreground move at different speeds while scrolling, creating depth.", "parallax"],
      ["Page transition", "An animation that plays when navigating from one page or route to another.", "direction"],
      ["View transition", "The browser morphs between two states or pages, connecting shared elements.", "morph"]
    ]
  },
  {
    name: "Feedback & Interaction",
    terms: [
      ["Press / Tap feedback", "A subtle scale-down when an element is clicked, so it feels physical.", "press"],
      ["Hold to confirm", "A progress effect that fills up while the user holds a button.", "reveal"],
      ["Drag", "Moving an element by grabbing it, often with momentum when released.", "drag"],
      ["Swipe to dismiss", "Dragging an element off-screen to close it, like a drawer or toast.", "swipe"],
      ["Rubber-banding", "Resistance and snap-back when you drag past a boundary.", "rubber"],
      ["Shake / Wiggle", "A quick side-to-side jitter signaling an error or rejected input.", "shake"],
      ["Ripple", "A circle expanding from the point of a tap, confirming the press.", "ripple"]
    ]
  },
  {
    name: "Spring Animations",
    terms: [
      ["Spring", "Motion driven by physics such as tension, mass, and damping rather than a set duration.", "spring"],
      ["Bounce", "A spring that overshoots and settles, adding playfulness.", "pop"],
      ["Momentum", "Motion that carries velocity after a drag or flick.", "drag"],
      ["Interruptible animation", "Motion that can be redirected mid-flight instead of finishing first.", "spring"]
    ]
  },
  {
    name: "Looping & Ambient Motion",
    terms: [
      ["Marquee", "Text or content that scrolls continuously in a loop.", "marquee"],
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
      ["Clip reveal", "Clipping an element to reveal it through a moving edge or shape.", "reveal"],
      ["Line drawing", "An SVG path that draws itself in, like an invisible pen tracing it.", "line"],
      ["Text morph", "Text that animates character by character when it changes.", "typewriter"],
      ["Skeleton / Shimmer", "A placeholder with a moving sheen shown while content loads.", "shimmer"],
      ["Number ticker", "Digits rolling or counting up to a value.", "ticker"],
      ["Typewriter", "Text appearing one character at a time, as if being typed.", "typewriter"]
    ]
  },
  {
    name: "Motion Principles",
    terms: [
      ["Anticipation", "A small wind-up in the opposite direction before a move.", "anticipation"],
      ["Follow-through", "Parts of an element keep moving and settle slightly after the main motion stops.", "follow"],
      ["Squash & stretch", "Deforming an element as it moves to convey weight, speed, and flexibility.", "squash"]
    ]
  }
];

const flatTerms = groups.flatMap((group, groupIndex) =>
  group.terms.map(([name, definition, demo]) => ({ name, definition, demo, group: group.name, groupIndex }))
);

const demoIcons = {
  anticipation: "corner-up-right",
  blur: "focus",
  collapse: "panel-top-close",
  crossfade: "blend",
  direction: "move-horizontal",
  drag: "hand",
  fade: "blend",
  flip: "box",
  follow: "git-branch",
  keyframes: "diamond",
  layout: "layout-template",
  line: "pen-line",
  marquee: "refresh-cw",
  morph: "shapes",
  orbit: "orbit",
  origin: "move-3d",
  parallax: "layers",
  performance: "gauge",
  pop: "badge-plus",
  press: "mouse-pointer-click",
  pulse: "activity",
  reveal: "panel-top-open",
  ripple: "circle-dot",
  rotate: "rotate-cw",
  rubber: "waves",
  scale: "scan",
  scroll: "mouse",
  shake: "vibrate",
  shimmer: "sparkles",
  skew: "italic",
  slide: "move-right",
  spring: "activity",
  squash: "stretch-horizontal",
  stagger: "list-tree",
  steps: "list-ordered",
  swipe: "send",
  ticker: "badge-123",
  trail: "wind",
  translate: "move",
  typewriter: "text-cursor"
};

const sectionList = document.querySelector("#section-list");
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
let isSubjectSizing = false;
const subjectAssets = {
  logo: "assets/lab-mark.png",
  character: "assets/subject-character.png",
  ball: "assets/subject-ball.png",
  plane: "assets/subject-plane.png",
  blob: "assets/subject-blob.png"
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
      <details class="panel-section vocabulary-section ${isOpen ? "is-active-section" : ""}" data-group-index="${groupIndex}" ${isOpen ? "open" : ""}>
        <summary>
          <span>${group.name}</span>
          <i data-lucide="chevron-down"></i>
        </summary>
        <div class="term-list">
          ${terms.map(term => `
            <button class="term-button ${term.name === activeTerm.name ? "is-active" : ""}" data-name="${term.name}" type="button">
              <i data-lucide="${demoIcons[term.demo] || "sparkles"}"></i>
              <span class="term-copy">
                <strong>${term.name}</strong>
                <span>${term.definition}</span>
              </span>
            </button>
          `).join("")}
        </div>
      </details>
    `;
  }).join("");

  sectionList.innerHTML = sections;

  if (window.lucide) {
    window.lucide.createIcons();
  }
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
});

function updateSubjectSizeFromPointer(event) {
  const rect = subjectSizeSlider.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, (rect.bottom - event.clientY) / rect.height));
  const min = Number(subjectSize.min);
  const max = Number(subjectSize.max);
  subjectSize.value = String(Math.round(min + progress * (max - min)));
  syncSubjectSize();
}

subjectSizeSlider.addEventListener("pointerdown", event => {
  event.preventDefault();
  isSubjectSizing = true;
  if (subjectSizeSlider.setPointerCapture) {
    subjectSizeSlider.setPointerCapture(event.pointerId);
  }
  updateSubjectSizeFromPointer(event);
});

subjectSizeSlider.addEventListener("pointermove", event => {
  if (!isSubjectSizing) return;
  updateSubjectSizeFromPointer(event);
});

["pointerup", "pointercancel", "lostpointercapture"].forEach(eventName => {
  subjectSizeSlider.addEventListener(eventName, () => {
    isSubjectSizing = false;
  });
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
