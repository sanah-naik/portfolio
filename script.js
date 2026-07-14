/* ============================================================
   Sanah — Portfolio interactions
   Vanilla JS, no dependencies. Four jobs:
     1. Hero load-in stagger
     2. Scroll-reveal (IntersectionObserver) with child stagger
     3. Sticky-nav state (transparent -> blurred) + gliding pill
     4. Active-section tracking to move the pill
   Everything is transform/opacity based and respects
   prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ----------------------------------------------------------
     0. Footer year
     ---------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     1. HERO LOAD-IN
     Add a class on the next frame so the CSS transition fires
     from the initial hidden state.
     ---------------------------------------------------------- */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.classList.add("hero-ready");
    });
  });

  /* ----------------------------------------------------------
     2. SCROLL REVEAL
     - [data-reveal]  : single element fades/slides in once.
     - [data-stagger] : container whose direct children cascade;
                        we set transition-delay per child, then
                        add .is-visible to the container.
     Each element animates only once (unobserve after reveal).
     ---------------------------------------------------------- */
  var STAGGER_MS = 90; // delay between cascading children

  function revealNow(el) {
    el.classList.add("is-visible");
  }

  if (prefersReduced || !("IntersectionObserver" in window)) {
    // No animation path: just show everything.
    document
      .querySelectorAll("[data-reveal], [data-stagger]")
      .forEach(revealNow);
  } else {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;

          // If it's a stagger container, set per-child delays first.
          if (el.hasAttribute("data-stagger")) {
            var kids = el.children;
            for (var i = 0; i < kids.length; i++) {
              kids[i].style.transitionDelay = i * STAGGER_MS + "ms";
            }
          }

          revealNow(el);
          obs.unobserve(el); // trigger once, never re-animate
        });
      },
      {
        // Fire a little before fully in view so it feels responsive.
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    document
      .querySelectorAll("[data-reveal], [data-stagger]")
      .forEach(function (el) {
        observer.observe(el);
      });
  }

  /* ----------------------------------------------------------
     3. STICKY NAV — scrolled state
     Toggle a blurred/solid background once we're past the hero.
     ---------------------------------------------------------- */
  var nav = document.getElementById("nav");

  function updateNavBackground() {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  updateNavBackground();

  /* ----------------------------------------------------------
     4. GLIDING NAV INDICATOR + ACTIVE SECTION
     The pill (.nav-indicator) is moved with transform + width to
     sit behind the active link. We recompute its geometry from
     the active link's offset within the links container.
     ---------------------------------------------------------- */
  var indicator = document.getElementById("nav-indicator");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll("[data-nav]")
  );

  // Map each nav link to its target section element.
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return { link: link, section: document.getElementById(id) };
    })
    .filter(function (pair) {
      return pair.section;
    });

  var currentActive = null;

  function moveIndicatorTo(link) {
    if (!indicator || !link) return;
    // Offsets are relative to the .nav__links (positioned) parent.
    var x = link.offsetLeft;
    var w = link.offsetWidth;
    indicator.style.width = w + "px";
    indicator.style.transform = "translate(" + x + "px, -50%)";
    indicator.style.opacity = "1";
  }

  function setActive(link) {
    if (link === currentActive) return;
    currentActive = link;
    navLinks.forEach(function (l) {
      l.classList.toggle("is-active", l === link);
    });
    moveIndicatorTo(link);
  }

  /* Determine the active section by scroll position. We pick the
     last section whose top has crossed a line just below the nav.
     This is robust for short sections where IO thresholds are
     fiddly, and pairs with a smooth transform on the pill. */
  function updateActiveSection() {
    var line = window.scrollY + (window.innerHeight * 0.32);
    var active = sections[0];

    for (var i = 0; i < sections.length; i++) {
      var top = sections[i].section.offsetTop;
      if (top <= line) active = sections[i];
    }

    // Near the very bottom, force-select the last section (contact),
    // since it may be too short to ever cross the line otherwise.
    var atBottom =
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 4;
    if (atBottom) active = sections[sections.length - 1];

    if (active) setActive(active.link);
  }

  /* Combined scroll handler, throttled with rAF for smoothness. */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateNavBackground();
      updateActiveSection();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Recompute pill geometry when layout changes (font load, resize).
  window.addEventListener("resize", function () {
    moveIndicatorTo(currentActive);
  });
  window.addEventListener("load", function () {
    updateActiveSection();
    moveIndicatorTo(currentActive);
  });
  // Fonts can shift link widths after first paint — re-measure.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      moveIndicatorTo(currentActive);
    });
  }

  // Initial paint.
  updateActiveSection();
})();
