(function discoverModule(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.DataForSolutionDiscover = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function buildDiscover() {
  'use strict';

  const CATEGORIES = ['All', 'Learn', 'Projects', 'Tools', 'Insights', 'Platform'];

  function normalize(value) {
    return String(value ?? '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9+#.\-\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function tokenize(query) {
    return normalize(query).split(' ').filter((token) => token.length > 1);
  }

  function itemText(item) {
    return normalize([
      item.title,
      item.category,
      item.type,
      item.description,
      ...(Array.isArray(item.keywords) ? item.keywords : [])
    ].join(' '));
  }

  function scoreItem(item, query) {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return 1;

    const tokens = tokenize(query);
    const title = normalize(item.title);
    const keywords = normalize((item.keywords || []).join(' '));
    const description = normalize(item.description);
    const category = normalize(item.category);
    const type = normalize(item.type);
    const haystack = itemText(item);

    if (!tokens.every((token) => haystack.includes(token))) return 0;

    let score = 0;
    if (title === normalizedQuery) score += 120;
    else if (title.startsWith(normalizedQuery)) score += 70;
    else if (title.includes(normalizedQuery)) score += 45;

    tokens.forEach((token) => {
      if (title.includes(token)) score += 22;
      if (keywords.includes(token)) score += 12;
      if (description.includes(token)) score += 6;
      if (category.includes(token)) score += 4;
      if (type.includes(token)) score += 3;
    });

    return score || 1;
  }

  function searchItems(items, query, category) {
    const requestedCategory = CATEGORIES.includes(category) ? category : 'All';
    const normalizedQuery = normalize(query);

    return (Array.isArray(items) ? items : [])
      .filter((item) => requestedCategory === 'All' || item.category === requestedCategory)
      .map((item) => ({ item, score: scoreItem(item, normalizedQuery) }))
      .filter((entry) => !normalizedQuery || entry.score > 0)
      .sort((left, right) => right.score - left.score || left.item.title.localeCompare(right.item.title))
      .map((entry) => entry.item);
  }

  function isSafeUrl(url) {
    return /^\/(?!\/)/.test(String(url || '')) || /^https:\/\//.test(String(url || ''));
  }

  function append(parent, tag, text, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    parent.appendChild(node);
    return node;
  }

  function createResultCard(item) {
    const article = document.createElement('article');
    article.className = 'discover-result';
    append(article, 'p', `${item.category} · ${item.type}`, 'discover-result-meta');
    append(article, 'h3', item.title);
    append(article, 'p', item.description || 'Open this DataForSolution destination to learn more.');

    const link = document.createElement('a');
    if (isSafeUrl(item.url)) link.href = item.url;
    else link.href = '/discover/';
    link.textContent = item.external ? 'Open maintained project ↗' : 'Open destination →';
    if (item.external) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    article.appendChild(link);
    return article;
  }

  function updateUrl(query, category) {
    if (!history.replaceState) return;
    const params = new URLSearchParams();
    if (String(query).trim()) params.set('q', String(query).trim());
    if (category && category !== 'All') params.set('type', category.toLowerCase());
    const suffix = params.toString() ? `?${params}` : '';
    history.replaceState(null, '', `${location.pathname}${suffix}`);
  }

  function categoryFromParam(value) {
    const normalized = normalize(value);
    return CATEGORIES.find((category) => normalize(category) === normalized) || 'All';
  }

  async function initializeDiscover() {
    const input = document.getElementById('discover-search');
    const searchButton = document.getElementById('discover-search-button');
    const clearButton = document.getElementById('discover-clear');
    const results = document.getElementById('discover-results');
    const status = document.getElementById('discover-status');
    const filters = [...document.querySelectorAll('[data-discover-filter]')];
    const goals = [...document.querySelectorAll('[data-discover-goal]')];
    if (!input || !results || !status) return;

    let items = [];
    let activeCategory = 'All';

    function setFilters() {
      filters.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.discoverFilter === activeCategory)));
    }

    function render() {
      const query = input.value.trim();
      const shouldBrowse = !query && activeCategory === 'All';
      const matches = shouldBrowse ? items.filter((item) => item.featured) : searchItems(items, query, activeCategory);
      results.replaceChildren();

      if (!matches.length) {
        const empty = append(results, 'p', 'No maintained DataForSolution content matches this search. Try a broader term or another category.', 'discover-empty');
        empty.setAttribute('role', 'status');
      } else {
        matches.forEach((item) => results.appendChild(createResultCard(item)));
      }

      if (shouldBrowse) status.textContent = `Showing ${matches.length} recommended starting points. Search or choose a category to explore more.`;
      else status.textContent = `Showing ${matches.length} result${matches.length === 1 ? '' : 's'}${query ? ` for “${query}”` : ''}${activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.`;

      setFilters();
      updateUrl(query, activeCategory);
    }

    try {
      const response = await fetch('/assets/data/discover-index.json', { credentials: 'same-origin' });
      if (!response.ok) throw new Error(`Index request failed with ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error('Discovery index is not an array.');
      items = data.filter((item) => item && item.title && item.category && item.url);
    } catch (error) {
      status.textContent = 'Discover could not load the site index. You can still use the navigation links below.';
      results.replaceChildren();
      append(results, 'p', 'Search is temporarily unavailable. Learning, Projects, Tools, Insights, Media, Resources, About, and Contact remain available from the site navigation.', 'discover-empty');
      return;
    }

    const params = new URLSearchParams(location.search);
    input.value = params.get('q') || '';
    activeCategory = categoryFromParam(params.get('type'));

    filters.forEach((button) => button.addEventListener('click', () => {
      activeCategory = button.dataset.discoverFilter || 'All';
      render();
    }));

    goals.forEach((button) => button.addEventListener('click', () => {
      activeCategory = button.dataset.discoverGoal || 'All';
      input.value = '';
      render();
      document.getElementById('discover-workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    input.addEventListener('input', render);
    searchButton?.addEventListener('click', () => { render(); input.focus(); });
    clearButton?.addEventListener('click', () => {
      input.value = '';
      activeCategory = 'All';
      render();
      input.focus();
    });

    document.addEventListener('keydown', (event) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      const typing = ['input', 'textarea', 'select'].includes(tag);
      if (event.key === '/' && !typing) {
        event.preventDefault();
        input.focus();
      }
      if (event.key === 'Escape' && document.activeElement === input) {
        input.value = '';
        activeCategory = 'All';
        render();
      }
    });

    render();
  }

  if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', initializeDiscover);

  return { normalize, tokenize, scoreItem, searchItems, isSafeUrl, categoryFromParam };
}));
