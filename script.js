(() => {
  'use strict';

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const filterRegion = document.querySelector('[data-apv-filter]');
  if (!filterRegion) {
    return;
  }

  const input = filterRegion.querySelector('#apv-search');
  const clearButton = filterRegion.querySelector('[data-clear-search]');
  const resultMessage = filterRegion.querySelector('[data-filter-status]');
  const emptyMessage = document.querySelector('[data-no-results]');
  const chapters = Array.from(document.querySelectorAll('[data-apv-chapter]'));
  const chapterLinks = Array.from(document.querySelectorAll('.toc a[href^="#hoofdstuk-"]'));
  let hadQuery = false;
  let activeChapter = null;
  let activeLockUntil = 0;
  let activeUpdateFrame = 0;

  filterRegion.hidden = false;

  chapters.forEach((chapter) => {
    const summary = chapter.querySelector('summary');
    if (!summary) {
      return;
    }

    summary.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      chapter.open = !chapter.open;
    });
  });

  const collapseChapters = () => {
    chapters.forEach((chapter) => {
      if (chapter instanceof HTMLDetailsElement) {
        chapter.open = false;
      }
    });
  };

  const resolveChapter = (linkedElement) => {
    const linkedChapterId = linkedElement?.getAttribute('data-chapter-target');
    const chapter = linkedElement instanceof HTMLDetailsElement
      ? linkedElement
      : linkedChapterId
        ? document.getElementById(linkedChapterId)
        : null;

    return chapter instanceof HTMLDetailsElement ? chapter : null;
  };

  const setActiveChapter = (chapter, lockDuringScroll = false) => {
    if (!(chapter instanceof HTMLDetailsElement) || chapter.hidden) {
      chapterLinks.forEach((link) => link.removeAttribute('aria-current'));
      activeChapter = null;
      return;
    }

    if (lockDuringScroll) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      activeLockUntil = performance.now() + (reducedMotion ? 0 : 800);
    }

    if (chapter === activeChapter) {
      return;
    }

    chapterLinks.forEach((link) => {
      if (link.hash === `#${chapter.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    activeChapter = chapter;
  };

  const updateActiveChapterFromScroll = () => {
    activeUpdateFrame = 0;
    if (performance.now() < activeLockUntil) {
      return;
    }

    const visibleChapters = chapters.filter((chapter) => !chapter.hidden);
    if (!visibleChapters.length) {
      setActiveChapter(null);
      return;
    }

    const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0;
    const readingLine = Math.max(headerBottom + 24, window.innerHeight * 0.28);
    let currentChapter = visibleChapters[0];

    visibleChapters.forEach((chapter) => {
      if (chapter.getBoundingClientRect().top <= readingLine) {
        currentChapter = chapter;
      }
    });

    setActiveChapter(currentChapter);
  };

  const scheduleActiveChapterUpdate = () => {
    if (!activeUpdateFrame) {
      activeUpdateFrame = window.requestAnimationFrame(updateActiveChapterFromScroll);
    }
  };

  const openLinkedChapter = (shouldScroll = false) => {
    if (!window.location.hash.startsWith('#hoofdstuk-')) {
      return;
    }

    const target = resolveChapter(document.querySelector(window.location.hash));
    if (!target) {
      return;
    }

    target.open = true;
    setActiveChapter(target, shouldScroll);
    if (shouldScroll) {
      target.scrollIntoView({ block: 'start' });
    }
  };

  chapterLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (input.value) {
        input.value = '';
        updateFilter();
      }

      const target = resolveChapter(document.querySelector(link.hash));
      if (target) {
        target.open = true;
        setActiveChapter(target, true);
      }
    });
  });

  window.addEventListener('scroll', scheduleActiveChapterUpdate, { passive: true });
  window.addEventListener('resize', scheduleActiveChapterUpdate);

  window.addEventListener('hashchange', () => openLinkedChapter(true));
  openLinkedChapter();
  if (window.location.hash.startsWith('#hoofdstuk-')) {
    window.requestAnimationFrame(() => openLinkedChapter(true));
    window.addEventListener('load', () => {
      window.setTimeout(() => openLinkedChapter(true), 0);
    }, { once: true });
  }

  const normalize = (value) => value
    .toLocaleLowerCase('nl-NL')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  const updateFilter = () => {
    const query = normalize(input.value);
    let visibleCount = 0;

    if (!query && hadQuery) {
      collapseChapters();
      if (window.location.hash.startsWith('#hoofdstuk-')) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      }
    }

    chapters.forEach((chapter) => {
      const matches = !query || normalize(chapter.textContent).includes(query);
      chapter.hidden = !matches;
      if (query && matches && chapter instanceof HTMLDetailsElement) {
        chapter.open = true;
      }
      if (matches) {
        visibleCount += 1;
      }
    });

    if (query) {
      setActiveChapter(chapters.find((chapter) => !chapter.hidden) ?? null);
    } else {
      scheduleActiveChapterUpdate();
    }

    hadQuery = query.length > 0;
    clearButton.hidden = input.value.length === 0;
    emptyMessage.hidden = visibleCount !== 0;

    if (!query) {
      resultMessage.textContent = `Alle ${chapters.length} hoofdstukken worden getoond.`;
    } else if (visibleCount === 1) {
      resultMessage.textContent = '1 hoofdstuk gevonden.';
    } else {
      resultMessage.textContent = `${visibleCount} hoofdstukken gevonden.`;
    }
  };

  input.addEventListener('input', updateFilter);
  const clearSearch = () => {
    input.value = '';
    updateFilter();
    input.focus();
  };

  clearButton.addEventListener('click', clearSearch);
  clearButton.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    clearSearch();
  });

  updateFilter();
})();
