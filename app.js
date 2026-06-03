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
      ["Shared element transition", "An element travels and transforms from one position into another.", "shared"],
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
      ["Hold to confirm", "A progress effect that fills up while the user holds a button.", "hold"],
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
  shared: "maximize-2",
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
const contextControls = document.querySelector("#context-controls");
const useTitle = document.querySelector("#use-title");
const useSummary = document.querySelector("#use-summary");
const copyPromptButton = document.querySelector("#copy-prompt");
const copyLinkButton = document.querySelector("#copy-link");
const copyXButton = document.querySelector("#copy-x");
const copyFeedback = document.querySelector("#copy-feedback");

const controls = {
  duration: document.querySelector("#duration"),
  delay: document.querySelector("#delay"),
  stagger: document.querySelector("#stagger"),
  perspective: document.querySelector("#perspective")
};

let activeGroup = 0;
let activeTerm = flatTerms.find(term => term.name === "Spring") || flatTerms[0];
let loopEnabled = false;
let loopTimer = 0;
let isSubjectSizing = false;
let currentSubject = "logo";
let currentEase = "ease-out";
let booting = true;
let copyTimer = 0;
const textDemos = new Set(["stagger", "marquee", "ticker", "typewriter"]);
const contextState = {
  direction: "right",
  distance: 86,
  origin: "bottom-left",
  bounce: 14,
  intensity: 100,
  count: 7,
  text: "MotionLab",
  target: 12480
};
const defaultShareState = {
  subject: "logo",
  size: "68",
  duration: "720",
  delay: "80",
  stagger: "80",
  perspective: "720",
  ease: "ease-out",
  direction: "right",
  distance: "86",
  origin: "bottom-left",
  bounce: "14",
  intensity: "100",
  count: "7",
  target: "12480",
  text: "MotionLab"
};
const subjectAssets = {
  logo: "assets/lab-mark.png",
  character: "assets/subject-character.png",
  ball: "assets/subject-ball.png",
  plane: "assets/subject-plane.png",
  blob: "assets/subject-blob.png"
};

const easeOptions = {
  "ease-out": "cubic-bezier(.2,.8,.2,1)",
  "ease-in-out": "cubic-bezier(.65,0,.35,1)",
  linear: "linear",
  springy: "cubic-bezier(.34,1.56,.64,1)"
};

const prompts = {
  fade: "Animate this element with a simple fade using opacity only. Keep it short, subtle, and purposeful so it supports the state change without drawing attention to itself.",
  slide: "Animate this element with a slide-in from the selected direction. Pair the movement with a light fade and use an ease-out curve so it responds quickly and settles gently.",
  scale: "Animate this element by scaling it from smaller to full size. Pair the scale with opacity and keep the transform origin consistent with where the element comes from.",
  pop: "Animate this element with a pop-in: scale up quickly, overshoot slightly, then settle back to normal size. Keep the bounce playful but restrained.",
  reveal: "Reveal this content by animating a mask or clip-path from one edge to the other. Use the reveal to show hierarchy or progression, not as decoration.",
  keyframes: "Animate this element through several key poses instead of one direct movement. Use the middle keyframe to clarify the path and make the motion feel intentional.",
  stagger: "Animate these items with a stagger so each one starts shortly after the previous item. Keep the delay small enough that the sequence feels connected.",
  steps: "Use a stepped animation where the element jumps through discrete states instead of interpolating smoothly. This is useful for counters, timers, and mechanical UI states.",
  translate: "Move this element along the X/Y axis with transform: translate. Use transform instead of top or left so the motion stays smooth.",
  rotate: "Rotate this element around a clear anchor point. Keep the speed and origin consistent so the spin feels physical instead of random.",
  skew: "Skew this element briefly to suggest speed or impact, then return it to its normal shape. Use the distortion sparingly.",
  flip: "Animate this element with a 3D flip using rotateY or rotateX. Add perspective so the depth is visible and keep the motion short.",
  origin: "Animate this element from the trigger point instead of its center. Set the transform origin to match where the interaction started.",
  trail: "Animate this subject with a motion trail that follows the direction of travel. Use faint ghosted copies so the trail implies speed without obscuring the subject.",
  crossfade: "Crossfade between two states in the same position. Fade the old state out while the new state fades in so the user understands the replacement.",
  morph: "Morph this shape smoothly from one form into another. Keep the identity of the element visible throughout the transition.",
  shared: "Animate this as a shared element transition: move and scale the same visual object from its starting position to its destination instead of replacing it abruptly.",
  layout: "Animate layout changes so the element moves and resizes into its new position instead of snapping. Preserve spatial continuity.",
  collapse: "Animate this section open and closed with height or scale plus opacity. Keep the timing quick because users may trigger it often.",
  direction: "Animate navigation with direction awareness: move forward in one direction and back in the opposite direction so the user understands spatial order.",
  scroll: "Reveal this element as it enters the viewport with a subtle fade and upward movement. Keep scroll motion calm and avoid surprising the user.",
  parallax: "Create parallax by moving background and foreground layers at different speeds. Use small offsets so the depth supports the content.",
  press: "Add tap feedback by scaling the element down slightly on press, then returning it to normal. The motion should feel immediate.",
  hold: "Animate a hold-to-confirm action with progress filling while the user holds. Make the progress visible and cancelable before confirmation.",
  drag: "Let this element be dragged with momentum. Preserve velocity on release so the movement feels physical and interruptible.",
  swipe: "Animate this element being dismissed by swiping it off-screen. Fade and rotate it slightly as it crosses the threshold.",
  rubber: "Add rubber-banding at the boundary: resist the drag, then snap back with a small overshoot so the limit feels physical.",
  shake: "Use a short shake to signal an invalid action. Keep the distance small and the duration brief so it reads as feedback, not punishment.",
  ripple: "Trigger a ripple from the tap point. The circle should expand and fade quickly to confirm the interaction.",
  spring: "Animate this element with spring motion using tension and damping instead of a fixed-feeling duration. Let it overshoot slightly and settle.",
  marquee: "Loop this content as a marquee with constant linear speed. Reserve this for ambient or decorative motion, not important text.",
  orbit: "Animate this element in an orbit around a center point. Keep the path continuous and predictable.",
  pulse: "Use a gentle pulse in scale or opacity to draw attention. Keep it subtle for frequently viewed UI.",
  float: "Add a slow floating idle animation so the subject feels alive while waiting for interaction.",
  blur: "Animate blur away as the element resolves into focus. Use blur to soften transitions, not to hide important content.",
  line: "Animate a line drawing effect so a path appears to draw itself in. This works best for icons, marks, and route/path visuals.",
  shimmer: "Show a skeleton shimmer while content loads. Keep it lightweight and replace it as soon as real content is available.",
  ticker: "Animate numbers with a ticker effect and tabular numbers so digits do not shift sideways while changing.",
  typewriter: "Reveal text one character at a time with a typewriter animation. Use it for short labels or moments of emphasis only.",
  anticipation: "Add anticipation by moving slightly opposite the final direction before the main motion. This prepares the viewer for what happens next.",
  follow: "Add follow-through so the element continues slightly after the main motion and then settles. This gives the motion weight.",
  squash: "Use squash and stretch during impact or bounce. Compress on contact and stretch during movement to imply weight and flexibility."
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

function slugForTerm(term) {
  return term.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function termFromSlug(slug) {
  if (!slug) return null;
  return flatTerms.find(term => slugForTerm(term) === slug || term.demo === slug || term.name === slug) || null;
}

function bestUseFor(term) {
  const uses = {
    "Spring": "Best for physical UI responses and interrupted motion.",
    "Origin-aware animation": "Best for popovers, menus, and elements opened from a trigger.",
    "Shared element transition": "Best for thumbnail-to-detail and card expansion flows.",
    "Stagger": "Best for lists, menus, and grouped entrances.",
    "Swipe to dismiss": "Best for toasts, drawers, and dismissible cards.",
    "Hold to confirm": "Best for destructive or high-friction actions.",
    "Number ticker": "Best for metrics, counters, timers, and dashboards.",
    "Typewriter": "Best for short labels or generated text moments.",
    "Accordion / Collapse": "Best for compact settings, FAQs, and dense mobile panels.",
    "Squash & stretch": "Best for balls, blobs, and playful physical motion."
  };
  return uses[term.name] || term.definition;
}

function promptFor(term) {
  return prompts[term.demo] || `Animate this element with ${term.name.toLowerCase()}. ${term.definition}`;
}

function currentUrl() {
  const url = new URL(window.location.href);
  url.search = "";
  const setIfChanged = (key, value) => {
    const normalized = String(value);
    if (defaultShareState[key] === normalized) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, normalized);
    }
  };
  url.searchParams.set("motion", slugForTerm(activeTerm));
  setIfChanged("subject", currentSubject);
  setIfChanged("size", subjectSize.value);
  setIfChanged("duration", controls.duration.value);
  setIfChanged("delay", controls.delay.value);
  setIfChanged("stagger", controls.stagger.value);
  setIfChanged("perspective", controls.perspective.value);
  setIfChanged("ease", currentEase);
  setIfChanged("direction", contextState.direction);
  setIfChanged("distance", contextState.distance);
  setIfChanged("origin", contextState.origin);
  setIfChanged("bounce", contextState.bounce);
  setIfChanged("intensity", contextState.intensity);
  setIfChanged("count", contextState.count);
  setIfChanged("target", contextState.target);
  if (activeTerm.demo === "typewriter") {
    setIfChanged("text", contextState.text);
  }
  if (loopEnabled) {
    url.searchParams.set("loop", "1");
  } else {
    url.searchParams.delete("loop");
  }
  return url.toString();
}

function syncUrlState() {
  if (booting) return;
  window.history.replaceState(null, "", currentUrl());
}

function xPostFor(term) {
  return [
    `Motion term: ${term.name}`,
    "",
    term.definition,
    "",
    "I am using Motion Lab to see it live, tune the timing, and copy a cleaner animation prompt.",
    "",
    currentUrl(),
    "",
    "What motion term should I add next?"
  ].join("\n");
}

async function copyText(text, label) {
  window.clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  copyFeedback.textContent = `${label} copied`;
  copyTimer = window.setTimeout(() => {
    copyFeedback.textContent = "";
  }, 1600);
}

function updateUseStrip() {
  useTitle.textContent = activeTerm.name;
  useSummary.textContent = bestUseFor(activeTerm);
}

function setDirection(direction) {
  contextState.direction = direction;
  const directions = {
    left: ["120%", "0", "-1"],
    right: ["-120%", "0", "1"],
    top: ["0", "-120%", "1"],
    bottom: ["0", "120%", "1"]
  };
  const [x, y, route] = directions[direction] || directions.right;
  document.documentElement.style.setProperty("--slide-from-x", x);
  document.documentElement.style.setProperty("--slide-from-y", y);
  document.documentElement.style.setProperty("--route-sign", route);
}

function setOrigin(origin) {
  contextState.origin = origin;
  const origins = {
    center: ["50%", "50%"],
    "top-left": ["8%", "8%"],
    "bottom-left": ["8%", "92%"],
    "top-right": ["92%", "8%"],
    "bottom-right": ["92%", "92%"]
  };
  const [x, y] = origins[origin] || origins["bottom-left"];
  document.documentElement.style.setProperty("--origin-x", x);
  document.documentElement.style.setProperty("--origin-y", y);
}

function syncContextVars() {
  document.documentElement.style.setProperty("--distance", `${contextState.distance}px`);
  document.documentElement.style.setProperty("--distance-soft", `${Math.round(contextState.distance * .62)}px`);
  document.documentElement.style.setProperty("--bounce-scale", `${1 + contextState.bounce / 100}`);
  document.documentElement.style.setProperty("--squash-x", `${1 + contextState.bounce / 140}`);
  document.documentElement.style.setProperty("--squash-y", `${Math.max(.52, 1 - contextState.bounce / 110)}`);
  document.documentElement.style.setProperty("--motion-intensity", `${contextState.intensity / 100}`);
  setDirection(contextState.direction);
  setOrigin(contextState.origin);
}

function contextConfigFor(term) {
  if (["slide", "direction", "scroll", "swipe"].includes(term.demo)) {
    return { kind: "direction", label: "Direction" };
  }
  if (["translate", "drag", "rubber", "trail", "keyframes"].includes(term.demo)) {
    return { kind: "distance", label: "Distance" };
  }
  if (["spring", "pop", "squash", "follow", "anticipation"].includes(term.demo)) {
    return { kind: "bounce", label: "Bounce" };
  }
  if (term.demo === "origin") {
    return { kind: "origin", label: "Origin" };
  }
  if (term.demo === "stagger") {
    return { kind: "count", label: "Items" };
  }
  if (term.demo === "ticker") {
    return { kind: "target", label: "Target" };
  }
  if (term.demo === "typewriter") {
    return { kind: "text", label: "Text" };
  }
  return { kind: "intensity", label: "Intensity" };
}

function renderContextControls() {
  const config = contextConfigFor(activeTerm);
  if (config.kind === "direction") {
    contextControls.innerHTML = `
      <div class="context-control">
        <span>${config.label}</span>
        <div class="chip-grid" role="group" aria-label="Direction">
          ${["left", "right", "top", "bottom"].map(direction => `
            <button class="chip ${contextState.direction === direction ? "is-active" : ""}" data-context="direction" data-value="${direction}" type="button">${direction}</button>
          `).join("")}
        </div>
      </div>
    `;
    return;
  }
  if (config.kind === "origin") {
    const origins = [
      ["center", "Center"],
      ["top-left", "Top left"],
      ["bottom-left", "Bottom left"],
      ["top-right", "Top right"],
      ["bottom-right", "Bottom right"]
    ];
    contextControls.innerHTML = `
      <div class="context-control">
        <span>${config.label}</span>
        <div class="chip-grid origin-grid" role="group" aria-label="Transform origin">
          ${origins.map(([value, label]) => `
            <button class="chip ${contextState.origin === value ? "is-active" : ""}" data-context="origin" data-value="${value}" type="button">${label}</button>
          `).join("")}
        </div>
      </div>
    `;
    return;
  }
  if (config.kind === "text") {
    contextControls.innerHTML = `
      <label class="control context-control">
        <span>${config.label} <strong>${contextState.text}</strong></span>
        <input data-context="text" type="text" maxlength="14" value="${contextState.text}">
      </label>
    `;
    return;
  }
  const ranges = {
    distance: [36, 132, 2, contextState.distance, "px"],
    bounce: [0, 34, 1, contextState.bounce, "%"],
    count: [3, 12, 1, contextState.count, ""],
    target: [100, 99000, 100, contextState.target, ""],
    intensity: [35, 140, 5, contextState.intensity, "%"]
  };
  const [min, max, step, value, unit] = ranges[config.kind];
  contextControls.innerHTML = `
    <label class="control context-control">
      <span>${config.label} <strong>${value}${unit}</strong></span>
      <input data-context="${config.kind}" type="range" min="${min}" max="${max}" step="${step}" value="${value}">
    </label>
  `;
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
  updateUseStrip();
  renderContextControls();
  renderLibrary();
  syncUrlState();
  if (shouldPlay) playDemo();
}

function labelFor(term) {
  if (term.demo === "ticker") return Number(contextState.target).toLocaleString("en-US");
  if (term.demo === "typewriter") return contextState.text || "MotionLab";
  if (term.demo === "marquee") return "Continuous loop";
  if (term.demo === "stagger") return "MOTION".slice(0, Math.max(3, Math.min(6, contextState.count)));
  return term.name.split(" / ")[0].replace(/\(.+\)/, "").trim();
}

function playDemo() {
  window.clearTimeout(loopTimer);
  const demo = activeTerm.demo;
  demoObject.className = "demo-object";
  demoStage.className = "demo-stage";
  scrollWorld.className = "scroll-world";
  syncContextVars();

  if (demo === "stagger") {
    const letters = Array.from({ length: contextState.count }, (_, index) => labelFor(activeTerm)[index % labelFor(activeTerm).length]);
    demoLabel.innerHTML = letters.map((letter, index) =>
      `<span style="animation-delay: calc(var(--delay) + ${index} * var(--stagger))">${letter}</span>`
    ).join("");
  } else {
    demoLabel.textContent = labelFor(activeTerm);
  }

  demoObject.classList.toggle("text-demo", textDemos.has(demo));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (demo === "parallax") {
        scrollWorld.classList.add("animate-parallax");
        demoObject.classList.add("animate-float");
        scheduleLoop();
        return;
      }
      if (demo === "ripple") {
        demoObject.classList.add("animate-ripple");
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
  syncUrlState();
}

function syncSubjectSize() {
  document.documentElement.style.setProperty("--subject-size", `${subjectSize.value}vw`);
  const range = Number(subjectSize.max) - Number(subjectSize.min);
  const progress = ((Number(subjectSize.value) - Number(subjectSize.min)) / range) * 100;
  document.documentElement.style.setProperty("--subject-size-progress", `${progress}%`);
  syncUrlState();
}

function setSubject(subject) {
  if (!subjectAssets[subject]) return;
  currentSubject = subject;
  subjectImage.src = subjectAssets[subject];
  document.querySelectorAll(".subject-option").forEach(option => {
    option.classList.toggle("is-active", option.dataset.subject === subject);
  });
  subjectGallery.hidden = true;
  subjectToggle.setAttribute("aria-expanded", "false");
  syncUrlState();
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
  currentEase = Object.entries(easeOptions).find(([, value]) => value === button.dataset.ease)?.[0] || "ease-out";
  document.documentElement.style.setProperty("--ease", button.dataset.ease);
  syncUrlState();
  playDemo();
});

contextControls.addEventListener("input", event => {
  const input = event.target.closest("[data-context]");
  if (!input) return;
  const key = input.dataset.context;
  if (key === "text") {
    contextState.text = input.value || "MotionLab";
    const valueLabel = input.closest(".context-control")?.querySelector("strong");
    if (valueLabel) valueLabel.textContent = contextState.text;
  } else {
    contextState[key] = Number(input.value);
    const valueLabel = input.closest(".context-control")?.querySelector("strong");
    if (valueLabel) {
      const suffix = key === "distance" ? "px" : key === "bounce" || key === "intensity" ? "%" : "";
      valueLabel.textContent = `${contextState[key]}${suffix}`;
    }
  }
  syncContextVars();
  syncUrlState();
  playDemo();
});

contextControls.addEventListener("click", event => {
  const button = event.target.closest("[data-context]");
  if (!button || !button.matches("button")) return;
  contextState[button.dataset.context] = button.dataset.value;
  renderContextControls();
  syncContextVars();
  syncUrlState();
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

copyPromptButton.addEventListener("click", () => {
  copyText(promptFor(activeTerm), "Prompt");
});

copyLinkButton.addEventListener("click", () => {
  copyText(currentUrl(), "Link");
});

copyXButton.addEventListener("click", () => {
  copyText(xPostFor(activeTerm), "X post");
});

function restoreStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const term = termFromSlug(params.get("motion"));
  if (term) activeTerm = term;
  activeGroup = activeTerm.groupIndex;

  Object.entries(controls).forEach(([key, control]) => {
    const value = params.get(key);
    if (value !== null) control.value = value;
  });

  const size = params.get("size");
  if (size !== null) subjectSize.value = size;

  const ease = params.get("ease");
  if (ease && easeOptions[ease]) {
    currentEase = ease;
    document.documentElement.style.setProperty("--ease", easeOptions[ease]);
    document.querySelectorAll(".segment").forEach(segment => {
      const segmentEase = Object.entries(easeOptions).find(([, value]) => value === segment.dataset.ease)?.[0] || "ease-out";
      segment.classList.toggle("is-active", segmentEase === ease);
    });
  }

  const subject = params.get("subject");
  if (subject && subjectAssets[subject]) {
    currentSubject = subject;
    subjectImage.src = subjectAssets[subject];
    document.querySelectorAll(".subject-option").forEach(option => {
      option.classList.toggle("is-active", option.dataset.subject === subject);
    });
  }

  ["direction", "origin", "text"].forEach(key => {
    const value = params.get(key);
    if (value) contextState[key] = value;
  });
  ["distance", "bounce", "intensity", "count", "target"].forEach(key => {
    const value = params.get(key);
    if (value !== null && !Number.isNaN(Number(value))) contextState[key] = Number(value);
  });

  loopEnabled = params.get("loop") === "1";
  loopButton.classList.toggle("is-active", loopEnabled);
  loopButton.setAttribute("aria-pressed", String(loopEnabled));
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  reducedMotion.checked = true;
  document.body.classList.add("motion-reduced");
}

restoreStateFromUrl();
renderLibrary();
syncControls();
syncSubjectSize();
syncContextVars();
setActiveTerm(activeTerm, false);
booting = false;
syncUrlState();
playDemo();

if (window.lucide) {
  window.lucide.createIcons();
}
