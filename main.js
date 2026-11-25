(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = () => innerWidth > 1100;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Data ---------- */
  const species = [
    { n: 'Savanna elephant', g: 'Elephants', img: 'assets/img/splash-wildlife.jpg', t: 'A keystone species that shapes the savanna for everything that lives on it.' },
    { n: 'Forest elephant', g: 'Elephants', img: 'assets/img/species/AdobeStock_98238600.jpg', t: 'Guardians of biodiversity and climate in the forests of Central Africa.' },
    { n: 'Lion', g: 'Large carnivores', img: 'assets/img/species/AdobeStock_383001101.jpg', t: 'A science-driven approach to lion conservation across our landscapes.' },
    { n: 'Cheetah', g: 'Large carnivores', img: 'assets/img/species/AdobeStock_764799258.jpeg', t: 'Cheetahs are barometers of healthy African landscapes.' },
    { n: 'African wild dog', g: 'Large carnivores', img: 'assets/img/species/Featured-Image-WILDDOG.jpg', t: 'Celebrating exceptional work in wild dog conservation in Zimbabwe.' },
    { n: 'Ethiopian wolf', g: 'Large carnivores', img: 'assets/img/species/Ethiopian-Wolf-.jpeg', t: 'Africa’s rarest carnivore, found only in the Ethiopian highlands.' },
    { n: 'Mountain gorilla', g: 'Great apes', img: 'assets/img/species/Gorilla-1-.jpg', t: 'Protecting Africa’s gentle giants for people and planet.' },
    { n: 'Chimpanzee', g: 'Great apes', img: 'assets/img/species/Chimp-.jpeg', t: 'Community-led conservation is helping chimpanzees thrive in West and Central Africa.' },
    { n: 'Bonobo', g: 'Great apes', img: 'assets/img/species/News-Page-Featured-2360x1340-Bonobo-MLW.jpg', t: 'Bonobo protection in the DRC shows results.' },
    { n: 'Giraffe', g: 'Giraffes', img: 'assets/img/species/News-Page-Featured-2360x1340-Kordofan-Giraffes.jpg', t: 'Kordofan giraffes in Cameroon’s Faro show signs of recovery.' },
    { n: 'Rhino', g: 'Rhinos', img: 'assets/img/species/Rhino-1.jpg', t: 'Collaborative efforts drive rhino conservation progress across Africa.' },
    { n: 'Pangolin', g: 'Threatened species', img: 'assets/img/species/Featured-Image.jpg', t: 'Protecting pangolins from poachers in Cameroon’s Dja Faunal Reserve.' },
    { n: 'Hippo', g: 'Threatened species', img: 'assets/img/species/News-Page-Featured-2360x1340-Hippo-Faro-Featured-v2.jpg', t: 'Faro National Park records its highest hippo count in more than a decade.' },
  ];
  const lands = [
    { n: 'Simien Mountains', c: 'Ethiopia', img: 'simien-splash.jpg', x: 72.5, y: 31.8 },
    { n: 'Faro', c: 'Cameroon', img: 'faro-splash.jpg', x: 40.8, y: 38.4 },
    { n: 'Dja', c: 'Cameroon', img: 'dja-splash.jpg', x: 41.6, y: 45.6 },
    { n: 'Campo Ma’an', c: 'Cameroon', img: 'campo-splash_0.jpg', x: 37.6, y: 46.6 },
    { n: 'Bili-Uélé', c: 'DR Congo', img: 'bili-uele-splash_0.jpg', x: 55.4, y: 44.3 },
    { n: 'Maringa-Lopori-Wamba', c: 'DR Congo', img: 'mlw-splash_0.jpg', x: 52.3, y: 49 },
    { n: 'Kidepo', c: 'Uganda', img: 'kidepo-splash.jpg', x: 67, y: 44.4 },
    { n: 'Murchison Falls', c: 'Uganda', img: 'murchison-falls-splash.jpg', x: 64.4, y: 46.5 },
    { n: 'Virungas', c: 'Rwanda, Uganda, DR Congo', img: 'virungas-splash.jpg', x: 62, y: 51.5 },
    { n: 'Mara-Serengeti', c: 'Kenya, Tanzania', img: 'mara-serengeti-splash.jpg', x: 68.6, y: 52.6 },
    { n: 'Tsavo-Mkomazi', c: 'Kenya, Tanzania', img: 'tsavo-mkomazi-splash.jpg', x: 73, y: 54 },
    { n: 'Maasai Steppe', c: 'Tanzania', img: 'maasai-steppe-splash.jpg', x: 70.4, y: 56.2 },
    { n: 'Kilombero', c: 'Tanzania', img: 'kilombero-splash.jpg', x: 70, y: 61.2 },
    { n: 'Mid-Zambezi Valley', c: 'Zimbabwe', img: 'mid-zambezi-splash_0.jpg', x: 62.3, y: 71.3 },
    { n: 'Southeast Lowveld', c: 'Zimbabwe', img: 'se-lowveld_splash.jpg', x: 64.6, y: 78 },
  ];

  /* ---------- Species ---------- */
  const sList = document.querySelector('.species__list');
  const sFrame = document.querySelector('.species__frame');
  const sGroup = document.querySelector('.species__group');
  const sNote = document.querySelector('.species__note');
  species.forEach((s, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button">${s.n}<small>${s.g}</small></button>`;
    sList.appendChild(li);
    const img = new Image();
    img.src = s.img; img.alt = s.n; img.loading = i < 2 ? 'eager' : 'lazy';
    sFrame.appendChild(img);
    const act = () => setSpecies(i);
    li.firstChild.addEventListener('mouseenter', act);
    li.firstChild.addEventListener('focus', act);
    li.firstChild.addEventListener('click', act);
  });
  function setSpecies(i) {
    sList.querySelectorAll('button').forEach((b, j) => b.classList.toggle('is-active', i === j));
    sFrame.querySelectorAll('img').forEach((im, j) => im.classList.toggle('is-on', i === j));
    sGroup.textContent = species[i].g;
    sNote.textContent = species[i].t;
  }
  setSpecies(0);

  /* ---------- Where ---------- */
  const wList = document.querySelector('.where__list');
  const pins = document.querySelector('.where__pins');
  const peek = document.querySelector('.where__peek');
  const peekImg = peek.querySelector('img');
  lands.forEach((l, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button"><span class="nm">${l.n}</span><span class="ct">${l.c}</span></button>`;
    wList.appendChild(li);
    const p = document.createElement('span');
    p.className = 'pin'; p.style.left = l.x + '%'; p.style.top = l.y + '%';
    p.setAttribute('aria-label', l.n);
    pins.appendChild(p);
    [li.firstChild, p].forEach(el => {
      el.addEventListener('mouseenter', () => setLand(i));
      el.addEventListener('focus', () => setLand(i));
      el.addEventListener('click', () => setLand(i));
    });
    new Image().src = 'assets/img/land/' + l.img;
  });
  function setLand(i) {
    wList.querySelectorAll('button').forEach((b, j) => b.classList.toggle('is-on', i === j));
    pins.querySelectorAll('.pin').forEach((p, j) => p.classList.toggle('is-on', i === j));
    peekImg.src = 'assets/img/land/' + lands[i].img;
    peekImg.alt = lands[i].n;
    peek.querySelector('strong').textContent = lands[i].n;
    peek.querySelector('span').textContent = lands[i].c;
    peek.classList.add('is-on');
    // place peek on the opposite side of the pin
    peek.style.right = lands[i].x > 55 ? 'auto' : '0';
    peek.style.left = lands[i].x > 55 ? '0' : 'auto';
    peek.style.top = lands[i].y > 55 ? '4%' : '58%';
  }
  setLand(8);

  /* ---------- Donate ---------- */
  const give = document.querySelector('.give');
  const submit = give.querySelector('.give__submit');
  const toggle = give.querySelector('.give__toggle');
  const custom = give.querySelector('.give__custom input');
  let amt = 100, monthly = false;
  const renderGive = () => { submit.textContent = `Donate $${amt}${monthly ? ' monthly' : ''}`; };
  toggle.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    monthly = b.dataset.freq === 'monthly';
    toggle.classList.toggle('is-monthly', monthly);
    toggle.querySelectorAll('button').forEach(x => x.classList.toggle('is-active', x === b));
    renderGive();
  }));
  give.querySelectorAll('.give__amounts button').forEach(b => b.addEventListener('click', () => {
    amt = +b.dataset.amt; custom.value = '';
    give.querySelectorAll('.give__amounts button').forEach(x => x.classList.toggle('is-active', x === b));
    renderGive();
  }));
  custom.addEventListener('input', () => {
    const v = Math.max(0, Math.round(+custom.value || 0));
    if (v) { amt = v; give.querySelectorAll('.give__amounts button').forEach(x => x.classList.remove('is-active')); }
    renderGive();
  });

  /* ---------- News tabs ---------- */
  document.querySelectorAll('.news__tabs button').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.news__tabs button').forEach(x => x.classList.toggle('is-active', x === b));
    document.querySelectorAll('.news__panel').forEach(p => p.classList.toggle('is-active', p.dataset.panel === b.dataset.tab));
    ScrollTrigger.refresh();
  }));

  /* ---------- Vision film sound ---------- */
  const vVid = document.querySelector('.vision__video');
  const vBtn = document.querySelector('.vision__sound');
  vBtn.addEventListener('click', () => {
    vVid.muted = !vVid.muted;
    if (vVid.paused) vVid.play();
    vBtn.querySelector('.label').textContent = vVid.muted ? 'Sound on' : 'Sound off';
  });

  /* ---------- Mobile menu ---------- */
  document.querySelector('.nav__burger').addEventListener('click', () => document.body.classList.toggle('menu-open'));
  document.querySelectorAll('.mmenu a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

  /* ---------- Milestone year labels for small screens ---------- */
  document.querySelectorAll('.milestone').forEach(m => {
    const s = document.createElement('span');
    s.className = 'ms-year'; s.textContent = m.dataset.year;
    m.querySelector('div').prepend(s);
  });

  /* ---------- Smooth scroll ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    lenis ? lenis.scrollTo(el, { offset: id === '#top' ? 0 : -40, duration: 1.4 }) : el.scrollIntoView({ behavior: 'smooth' });
  }));

  /* ---------- Nav state ---------- */
  const nav = document.getElementById('nav');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    nav.classList.toggle('is-hidden', y > 600 && y > lastY && !document.body.classList.contains('menu-open'));
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Split helpers ---------- */
  function splitLines(el) {
    const html = el.innerHTML.split(/<br\s*\/?>/i);
    if (html.length > 1) {
      el.innerHTML = html.map(h => `<span class="line"><span>${h}</span></span>`).join('');
      return;
    }
    // measure lines by words
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="wtmp" style="display:inline-block">${w}</span>`).join(' ');
    const lines = []; let top = null;
    el.querySelectorAll('.wtmp').forEach(w => {
      if (w.offsetTop !== top) { lines.push([]); top = w.offsetTop; }
      lines[lines.length - 1].push(w.textContent);
    });
    el.innerHTML = lines.map(l => `<span class="line"><span>${l.join(' ')}</span></span>`).join('');
  }

  /* ---------- Intro ---------- */
  const loader = document.querySelector('.loader');
  const heroTitle = document.querySelector('.hero__title');
  splitLines(heroTitle);
  const intro = () => {
    loader.classList.add('is-out');
    const tl = gsap.timeline({ delay: .35 });
    tl.from('.hero__title .line > span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: .1 })
      .to('.hero__aside', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, '-=.9')
      .from('.hero__frame', { y: 80, opacity: 0, duration: 1.4, ease: 'expo.out' }, '-=1')
      .from('.nav__inner > *', { y: -20, opacity: 0, duration: .8, stagger: .06, ease: 'expo.out' }, '-=1.4');
    setTimeout(() => loader.remove(), 1400);
  };
  if (reduce) { loader.remove(); gsap.set('[data-reveal]', { opacity: 1, y: 0 }); }
  else {
    let started = false;
    const go = () => { if (!started) { started = true; intro(); } };
    Promise.race([document.fonts.ready.then(() => new Promise(r => setTimeout(r, 1200))), new Promise(r => setTimeout(r, 2600))]).then(go);
  }

  if (reduce) return;

  /* ---------- Hero frame expands to full bleed ---------- */
  gsap.to('.hero__frame', {
    marginLeft: 0, marginRight: 0, borderRadius: 0, ease: 'none',
    scrollTrigger: { trigger: '.hero__media', start: 'top 85%', end: 'top top', scrub: true }
  });
  gsap.to('.hero__video', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero__media', start: 'top top', end: 'bottom top', scrub: true } });

  /* ---------- Headline line reveals ---------- */
  document.querySelectorAll('[data-split]:not(.hero__title)').forEach(el => {
    splitLines(el);
    gsap.from(el.querySelectorAll('.line > span'), {
      yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: .08,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
  addEventListener('resize', debounce(() => ScrollTrigger.refresh(), 250));

  /* ---------- Generic reveals ---------- */
  gsap.utils.toArray('[data-reveal]:not(.hero__aside)').forEach(el => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  /* ---------- Manifesto words ---------- */
  const mt = document.querySelector('.manifesto__text');
  const wrapWords = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s); }
        });
        n.replaceWith(frag);
      } else wrapWords(n);
    });
  };
  wrapWords(mt);
  gsap.to(mt.querySelectorAll('.w'), {
    opacity: 1, stagger: .1, ease: 'none',
    scrollTrigger: { trigger: '.manifesto', start: 'top 70%', end: 'bottom 70%', scrub: true }
  });
  gsap.fromTo('.manifesto__bg', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: true } });

  /* ---------- Stats ---------- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const to = +el.dataset.count, suf = el.dataset.suffix || '';
    const o = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to(o, { v: to, duration: 2, ease: 'power3.out', onUpdate: () => el.textContent = Math.round(o.v) + suf })
    });
  });
  gsap.utils.toArray('.stat img').forEach(img => {
    gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  gsap.from('.stat', { y: 60, stagger: .08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.impact', start: 'top 85%' } });

  /* ---------- Approach horizontal ---------- */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1101px)', () => {
    const track = document.querySelector('.approach__track');
    const dist = () => track.scrollWidth - innerWidth;
    const tw = gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: '.approach__pin', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true,
        onUpdate: s => gsap.set('.approach__progress span', { scaleX: s.progress })
      }
    });
    gsap.utils.toArray('.pillar__media img').forEach(img => {
      gsap.fromTo(img, { xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: img.closest('.pillar'), containerAnimation: tw, start: 'left right', end: 'right left', scrub: true } });
    });
  });

  /* ---------- Story parallax ---------- */
  gsap.fromTo('[data-parallax-strong]', { yPercent: -10 }, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'bottom top', scrub: true } });

  /* ---------- Vision film: play when visible, scale in ---------- */
  ScrollTrigger.create({
    trigger: '.vision__film', start: 'top 70%', end: 'bottom 20%',
    onToggle: s => s.isActive ? vVid.play().catch(() => {}) : vVid.pause()
  });
  gsap.fromTo('.vision__video', { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.vision__film', start: 'top bottom', end: 'top top', scrub: true } });

  /* ---------- History year counter ---------- */
  const yr = document.querySelector('.history__year .yr');
  let curYear = 1961;
  gsap.utils.toArray('.milestone').forEach(m => {
    ScrollTrigger.create({
      trigger: m, start: 'top 60%', end: 'bottom 60%',
      onToggle: s => {
        m.classList.toggle('is-on', s.isActive);
        if (s.isActive) rollYear(+m.dataset.year);
      }
    });
  });
  function rollYear(to) {
    if (to === curYear) return;
    const from = curYear; curYear = to;
    const o = { v: from };
    gsap.fromTo(yr, { yPercent: to > from ? 30 : -30, opacity: .2 }, { yPercent: 0, opacity: 1, duration: .7, ease: 'expo.out' });
    gsap.to(o, { v: to, duration: .7, ease: 'power3.out', onUpdate: () => yr.textContent = Math.round(o.v) });
  }

  /* ---------- Donate bg parallax ---------- */
  gsap.fromTo('.donate__bg', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.donate', start: 'top bottom', end: 'top top', scrub: true } });

  function debounce(fn, t) { let id; return (...a) => { clearTimeout(id); id = setTimeout(() => fn(...a), t); }; }
  addEventListener('load', () => ScrollTrigger.refresh());
})();
