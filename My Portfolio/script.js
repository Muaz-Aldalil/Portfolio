(function () {
  'use strict';

  /* ============================================
     THEME TOGGLE
     ============================================ */
  const themeToggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');

  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });

  /* ============================================
     MOBILE NAV
     ============================================ */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function () {
    const open = navMenu.classList.toggle('open');
    this.classList.toggle('active');
    this.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ============================================
     TYPING EFFECT
     ============================================ */
  const words = ['Web Experiences', 'Beautiful Interfaces', 'Responsive Designs', 'Performant Apps'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingEl = document.getElementById('typing');
  const typeSpeed = 70;
  const deleteSpeed = 40;
  const pauseTime = 2200;

  function type() {
    const current = words[wordIndex];
    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 200);
        return;
      }
      setTimeout(type, deleteSpeed);
    } else {
      typingEl.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
        return;
      }
      setTimeout(type, typeSpeed);
    }
  }

  type();

  /* ============================================
     HERO PARTICLE GENERATOR
     ============================================ */
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (10 + Math.random() * 20) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
      particlesContainer.appendChild(p);
    }
  }

  /* ============================================
     ACTIVE NAV LINK
     ============================================ */
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(function (sec) {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function (a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }

  /* ============================================
     NAVBAR SCROLL EFFECTS
     ============================================ */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function handleNavScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    backToTop.classList.toggle('visible', scrollY > 500);
  }

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================================
     SKILL BAR ANIMATION
     ============================================ */
  function animateSkillBars() {
    document.querySelectorAll('.skill-item-fill').forEach(function (bar) {
      bar.classList.add('animate');
    });
  }

  /* ============================================
     HERO STAT COUNTERS
     ============================================ */
  function animateHeroCounters() {
    const nums = document.querySelectorAll('.hero-stat-num');
    nums.forEach(function (el) {
      const target = parseInt(el.getAttribute('data-count'));
      if (target === 0) { el.textContent = '0'; return; }
      const increment = Math.max(target / 35, 0.5);
      let current = 0;
      function update() {
        current += increment;
        if (current < target) {
          el.textContent = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          el.textContent = target + '+';
        }
      }
      update();
    });
  }

  /* ============================================
     SCROLL REVEAL
     ============================================ */
  function revealElements() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add('revealed');
      }
    });
  }

  // Mark elements to reveal
  document.querySelectorAll(
    '.hero-content, .hero-visual, .about-grid > *, .skills-grid > *, ' +
    '.project-card, .timeline-item, .testimonial-card, .contact-grid > *'
  ).forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.06) + 's';
  });

  /* ============================================
     PROJECT FILTERING
     ============================================ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(function () { card.style.opacity = '1'; }, 20);
        } else {
          card.style.opacity = '0';
          setTimeout(function () { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  /* ============================================
     CONTACT FORM
     ============================================ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      // Simple validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      [name, email, message].forEach(function (el) {
        el.classList.remove('error');
      });

      if (!name.value.trim()) {
        name.classList.add('error');
        valid = false;
      }
      if (!email.value.trim() || !email.value.includes('@')) {
        email.classList.add('error');
        valid = false;
      }
      if (!message.value.trim()) {
        message.classList.add('error');
        valid = false;
      }

      if (!valid) return;

      const btn = contactForm.querySelector('.btn-submit');
      btn.classList.add('loading');
      btn.disabled = true;

      const formData = new FormData(contactForm);

      fetch(contactForm.getAttribute('action'), {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) {
        if (res.ok) return res.json();
        throw new Error('Form submission failed');
      })
      .then(function () {
        btn.classList.remove('loading');
        btn.classList.add('sent');
        btn.innerHTML = '<span>Message Sent! <i class="fas fa-check"></i></span>';
        contactForm.reset();
        setTimeout(function () {
          btn.classList.remove('sent');
          btn.disabled = false;
          btn.innerHTML = '<span class="btn-text">Send Message</span><i class="fas fa-paper-plane"></i><span class="btn-loading"><i class="fas fa-spinner fa-spin"></i> Sending...</span>';
        }, 3000);
      })
      .catch(function () {
        btn.classList.remove('loading');
        btn.disabled = false;
        btn.innerHTML = '<span>Error — try again?</span>';
        setTimeout(function () {
          btn.innerHTML = '<span class="btn-text">Send Message</span><i class="fas fa-paper-plane"></i><span class="btn-loading"><i class="fas fa-spinner fa-spin"></i> Sending...</span>';
        }, 2500);
      });
    });
  }

  /* ============================================
     EVENT LISTENERS
     ============================================ */
  window.addEventListener('scroll', function () {
    updateActiveNav();
    handleNavScroll();
    revealElements();
  });

  window.addEventListener('load', function () {
    revealElements();
    handleNavScroll();

    // Animate skill bars if visible on load
    const skills = document.getElementById('skills');
    if (skills && skills.getBoundingClientRect().top < window.innerHeight) {
      animateSkillBars();
    }

    // Animate hero counters if visible
    const heroStats = document.querySelector('.hero-stats-card');
    if (heroStats && heroStats.getBoundingClientRect().top < window.innerHeight) {
      animateHeroCounters();
    }
  });

  /* ============================================
     INTERSECTION OBSERVERS
     ============================================ */
  // Hero counters
  const heroStatsCard = document.querySelector('.hero-stats-card');
  if (heroStatsCard) {
    const heroObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateHeroCounters();
          heroObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    heroObs.observe(heroStatsCard);
  }

  // Skill bars
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateSkillBars();
          skillObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    skillObs.observe(skillsSection);
  }

})();
