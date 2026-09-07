/**
 * Moaz Mohamed — Portfolio
 * Vanilla JS. Handles only functional behavior: sticky header state,
 * the mobile menu, scroll-spy for the active nav link, back-to-top,
 * and the footer year. No decorative scroll-triggered animations —
 * the one intentional motion moment (hero load-in) lives in CSS.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var header = document.getElementById('site-header');
    var navToggle = document.getElementById('nav-toggle');
    var navList = document.querySelector('.nav-list');
    var navLinks = document.querySelectorAll('.nav-link');
    var backToTop = document.getElementById('back-to-top');
    var yearEl = document.getElementById('year');
    // Only top-level sections belong in navigation. Inner headings have IDs
    // for accessibility and must not affect the active navigation state.
    var sections = document.querySelectorAll('main > section[id]');

    // Footer year
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    // Sticky header + back-to-top visibility, driven by scroll position
    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (header) {
        header.classList.toggle('is-scrolled', y > 12);
      }
      if (backToTop) {
        backToTop.classList.toggle('is-visible', y > 480);
      }
      updateActiveNav(y);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    function closeMenu() {
      document.body.classList.remove('nav-open');
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      }
    }
    function openMenu() {
      document.body.classList.add('nav-open');
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close menu');
      }
    }
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        var isOpen = document.body.classList.contains('nav-open');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
        setActiveNavLink(link);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    // Close the mobile menu if the viewport grows past the mobile breakpoint
    // (e.g. rotating a tablet) so it doesn't stay stuck open.
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1080) closeMenu();
    });

    // Back-to-top
    if (backToTop) {
      backToTop.addEventListener('click', function () {
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    }

    // Scroll-spy: use one stable activation line for every regular section.
    function updateActiveNav(scrollY) {
      if (!sections.length) return;

      var headerHeight = header ? header.offsetHeight : 0;
      var activationLine = headerHeight + 24;
      var currentId = sections[0].getAttribute('id');

      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentId = section.getAttribute('id');
        }
      });

      // Contact is the final section. It cannot always reach the activation
      // line because the document ends shortly after it, so activate it when
      // the visitor reaches the document end (or immediately on its nav click).
      var lastSection = sections[sections.length - 1];
      var atDocumentEnd = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atDocumentEnd && lastSection) {
        currentId = lastSection.getAttribute('id');
      }

      navLinks.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + currentId);
      });
    }

    function setActiveNavLink(activeLink) {
      navLinks.forEach(function (link) {
        link.classList.toggle('is-active', link === activeLink);
      });
    }

    window.addEventListener('resize', function () {
      updateActiveNav(window.scrollY || window.pageYOffset);
    });
  }
})();
