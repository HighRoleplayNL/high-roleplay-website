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

  const openLinkedChapter = (shouldScroll = false) => {
    if (!window.location.hash.startsWith('#hoofdstuk-')) {
      return;
    }

    const target = document.querySelector(window.location.hash);
    if (!(target instanceof HTMLDetailsElement)) {
      return;
    }

    target.open = true;
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

      const target = document.querySelector(link.hash);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
      }
    });
  });

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
