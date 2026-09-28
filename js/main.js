/* =============================================================================
   EDUCOTEC SOLUTIONS — SITE BEHAVIOR
   -----------------------------------------------------------------------------
   You normally do NOT need to edit this file.
   • Text:           js/translations.js
   • Contact form:   the action="…" address on the <form> in index.html
   • Phone / email:  index.html (search for [PHONE] and [EMAIL])

   What this file does:
     1. Language switching (EN / ES, and any language added to translations.js)
     2. Mobile menu
     3. Smooth scrolling + highlighting the current section in the menu
     4. Contact form: checking the fields and sending them to Formspree
     5. Fade-in animations and the counting numbers in the About section
   ========================================================================== */

(function () {
  "use strict";

  var TRANSLATIONS = window.TRANSLATIONS || {};
  var LANGUAGES = Object.keys(TRANSLATIONS);   // e.g. ["en", "es"] — adding "fr" to translations.js adds it here
  var FALLBACK_LANG = "en";                    // used when a text is missing in another language
  var STORAGE_KEY = "educotec-language";       // where the visitor's choice is remembered

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var currentLang = FALLBACK_LANG;
  var menuOpen = false;

  /* ===========================================================================
     1. LANGUAGE
     ======================================================================== */

  // Find a text by its key, e.g. "hero.title" → TRANSLATIONS.es.hero.title
  function lookup(lang, key) {
    return key.split(".").reduce(function (obj, part) {
      return obj && obj[part] !== undefined ? obj[part] : undefined;
    }, TRANSLATIONS[lang]);
  }

  // Text for the current language, falling back to English if it's missing
  function t(key) {
    var value = lookup(currentLang, key);
    if (typeof value !== "string") {
      value = lookup(FALLBACK_LANG, key);
      if (typeof value !== "string") {
        console.warn("[i18n] Missing text for key:", key);
        return "";
      }
    }
    return value;
  }

  function storageGet() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(value) {
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* private mode etc. */ }
  }

  // First visit: pick the browser's language if we have it (e.g. Spanish), otherwise English
  function detectLanguage() {
    var saved = storageGet();
    if (saved && TRANSLATIONS[saved]) return saved;

    var browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    for (var i = 0; i < browserLangs.length; i++) {
      var prefix = String(browserLangs[i]).toLowerCase().slice(0, 2);
      if (TRANSLATIONS[prefix]) return prefix;
    }
    return TRANSLATIONS[FALLBACK_LANG] ? FALLBACK_LANG : LANGUAGES[0];
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  // Build the language buttons from the languages found in translations.js
  function buildLanguageToggles() {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (group) {
      var labelType = group.getAttribute("data-lang-toggle"); // "code" (EN) or "name" (English)
      group.innerHTML = "";
      LANGUAGES.forEach(function (lang) {
        var meta = TRANSLATIONS[lang].meta || {};
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-btn";
        btn.setAttribute("data-lang", lang);
        btn.setAttribute("lang", meta.htmlLang || lang);
        btn.setAttribute("aria-pressed", "false");
        btn.textContent = labelType === "name" ? (meta.name || lang) : (meta.code || lang.toUpperCase());
        if (labelType !== "name") {
          btn.title = meta.name || lang;
          btn.setAttribute("aria-label", meta.name || lang);
        }
        btn.addEventListener("click", function () { setLanguage(lang); });
        group.appendChild(btn);
      });
    });
  }

  // Swap every text on the page to the chosen language
  function applyLanguage(lang) {
    currentLang = lang;
    var meta = TRANSLATIONS[lang].meta || {};

    document.documentElement.lang = meta.htmlLang || lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));   // photo descriptions
    });

    // Page title, Google description and social previews
    document.title = t("seo.title");
    setMeta('meta[name="description"]', t("seo.description"));
    setMeta('meta[property="og:title"]', t("seo.title"));
    setMeta('meta[property="og:description"]', t("seo.description"));
    if (meta.ogLocale) setMeta('meta[property="og:locale"]', meta.ogLocale);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    updateMenuLabel();
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    applyLanguage(lang);
    storageSet(lang);
  }

  /* ===========================================================================
     2. MOBILE MENU
     ======================================================================== */

  var menuButton = document.querySelector(".menu-button");
  var nav = document.getElementById("site-nav");
  var desktopQuery = window.matchMedia("(min-width: 900px)");

  function updateMenuLabel() {
    if (!menuButton) return;
    var key = menuOpen ? "ui.closeMenu" : "ui.openMenu";
    menuButton.setAttribute("data-i18n-aria", key);
    menuButton.setAttribute("aria-label", t(key));
  }

  function setMenu(open) {
    if (!menuButton || !nav) return;
    menuOpen = open;
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    updateMenuLabel();
  }

  function initMenu() {
    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", function () {
      setMenu(!menuOpen);
      if (menuOpen) {
        var firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    });

    // Close when a link in the menu is clicked
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    // Close with the Escape key and return focus to the menu button
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuOpen) {
        setMenu(false);
        menuButton.focus();
      }
    });

    // Close when clicking outside the header
    document.addEventListener("click", function (e) {
      if (menuOpen && !e.target.closest(".site-header")) setMenu(false);
    });

    // Close when the menu is left via Tab (keyboard users)
    nav.addEventListener("focusout", function (e) {
      if (menuOpen && !desktopQuery.matches && e.relatedTarget &&
          !nav.contains(e.relatedTarget) && e.relatedTarget !== menuButton) {
        setMenu(false);
      }
    });

    // Reset when the window grows to desktop size
    var onChange = function (e) { if (e.matches) setMenu(false); };
    if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", onChange);
    else if (desktopQuery.addListener) desktopQuery.addListener(onChange);
  }

  /* ===========================================================================
     3. SMOOTH SCROLLING + ACTIVE MENU LINK
     ======================================================================== */

  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var id = link.getAttribute("href").slice(1);
      var behavior = reduceMotion ? "auto" : "smooth";

      if (id === "" || id === "top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: behavior });
        history.replaceState(null, "", window.location.pathname + window.location.search);
        return;
      }

      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: behavior, block: "start" });
      history.replaceState(null, "", "#" + id);

      // Move keyboard focus to the section so Tab continues from there
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  }

  function initActiveLinks() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean)
      .sort(function (a, b) { return a.offsetTop - b.offsetTop; }); // page order
    if (!sections.length) return;

    var ticking = false;

    function update() {
      ticking = false;
      var marker = window.innerHeight * 0.35;
      var activeId = null;

      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= marker) activeId = section.id;
      });
      // At the very bottom of the page, highlight the last section (Contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        activeId = sections[sections.length - 1].id;
      }

      links.forEach(function (a) {
        var isActive = a.getAttribute("href") === "#" + activeId;
        a.classList.toggle("is-active", isActive);
        if (isActive) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }

    function onScroll() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* ===========================================================================
     4. CONTACT FORM
     The form sends to the address in its action="…" attribute (index.html).
     ======================================================================== */

  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PLACEHOLDER_ENDPOINT = "YOUR_FORM_ID";

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var status = document.getElementById("form-status");
    var submitBtn = form.querySelector('button[type="submit"]');
    var fields = {
      name: form.elements.name,
      email: form.elements.email,
      message: form.elements.message
    };

    // statusKey is a translation key, so the message re-translates when the language changes
    function showStatus(statusKey, type) {
      status.setAttribute("data-i18n", statusKey);
      status.textContent = t(statusKey);
      status.className = "form-status " + (type === "success" ? "is-success" : "is-error");
      status.hidden = false;
    }

    function clearStatus() {
      status.hidden = true;
      status.removeAttribute("data-i18n");
      status.textContent = "";
    }

    function markInvalid(field, invalid) {
      if (invalid) {
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", "form-status");
      } else {
        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-describedby");
      }
    }

    // Remove the red border as soon as the visitor fixes a field
    Object.keys(fields).forEach(function (k) {
      fields[k].addEventListener("input", function () { markInvalid(fields[k], false); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearStatus();

      // 1) Required fields
      var missing = Object.keys(fields).filter(function (k) {
        var empty = fields[k].value.trim() === "";
        markInvalid(fields[k], empty);
        return empty;
      });
      if (missing.length) {
        showStatus("form.errorRequired", "error");
        fields[missing[0]].focus();
        return;
      }

      // 2) Email format
      if (!EMAIL_PATTERN.test(fields.email.value.trim())) {
        markInvalid(fields.email, true);
        showStatus("form.errorEmail", "error");
        fields.email.focus();
        return;
      }

      // 3) Form address not set up yet
      var endpoint = form.getAttribute("action") || "";
      if (endpoint.indexOf(PLACEHOLDER_ENDPOINT) !== -1) {
        console.warn("[contact form] Set your Formspree address in index.html (search for YOUR_FORM_ID).");
        showStatus("form.errorNetwork", "error");
        return;
      }

      // 4) Send
      submitBtn.disabled = true;
      form.setAttribute("aria-busy", "true");

      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("HTTP " + response.status);
          form.reset();
          showStatus("form.success", "success");
        })
        .catch(function (err) {
          console.error("[contact form]", err);
          showStatus("form.errorNetwork", "error");
        })
        .then(function () {
          submitBtn.disabled = false;
          form.removeAttribute("aria-busy");
        });
    });
  }

  /* ===========================================================================
     5. ANIMATIONS (fade-in + counting numbers)
     Both are skipped when the visitor's device is set to "reduce motion".
     ======================================================================== */

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { observer.observe(el); });
  }

  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count-to"), 10);
    var duration = 1400;
    var start = null;
    function step(now) {
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-count-to]");
    if (reduceMotion || !("IntersectionObserver" in window)) return; // numbers stay as written
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) {
      el.textContent = "0";
      observer.observe(el);
    });
  }

  /* ===========================================================================
     START
     ======================================================================== */

  if (LANGUAGES.length) {
    buildLanguageToggles();
    applyLanguage(detectLanguage());
  } else {
    console.error("translations.js did not load — the page is showing its built-in English text.");
  }
  initMenu();
  initSmoothScroll();
  initActiveLinks();
  initForm();
  initReveal();
  initCounters();
})();
