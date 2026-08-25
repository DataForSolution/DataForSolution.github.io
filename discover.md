---
layout: default
title: Discover
description: Search maintained DataForSolution lessons, projects, tools, articles, and platform destinations from one browser-local discovery workspace.
permalink: /discover/
disable_search: true
---

<div class="discover-page">
  <section class="discover-hero" aria-labelledby="discover-title">
    <div class="discover-shell">
      <p class="discover-eyebrow">DataForSolution Discover</p>
      <h1 id="discover-title">Find the right place to learn, build, or investigate</h1>
      <p class="discover-lead">Search maintained DataForSolution lessons, reviewed projects, interactive tools, articles, and platform destinations from one place. Search runs in your browser and does not send your query to an external service.</p>

      <div class="discover-search-wrap">
        <div class="discover-search-row">
          <label for="discover-search">What are you looking for?</label>
          <input id="discover-search" class="discover-search" type="search" placeholder="Try “medical imaging”, “CSV”, “fairness”, “statistics”, or “career”…" autocomplete="off">
          <button id="discover-search-button" class="discover-search-button" type="button">Search</button>
        </div>
        <button id="discover-clear" class="discover-clear" type="button">Clear search</button>
      </div>
    </div>
  </section>

  <section class="discover-section discover-section--soft" aria-labelledby="discover-goals-title">
    <div class="discover-shell">
      <div class="discover-heading">
        <h2 id="discover-goals-title">Start with your goal</h2>
        <p>If you do not know the exact title, choose the kind of work you want to do. Discover will narrow the maintained site content for you.</p>
      </div>

      <div class="discover-goals">
        <button class="discover-goal" type="button" data-discover-goal="Learn"><strong>Learn a concept</strong><span>Academies, lessons, foundations, and structured learning paths.</span></button>
        <button class="discover-goal" type="button" data-discover-goal="Projects"><strong>Review a project</strong><span>Evidence-backed portfolio work with methodology and limitations.</span></button>
        <button class="discover-goal" type="button" data-discover-goal="Tools"><strong>Use a tool</strong><span>CSV profiling, statistics, model evaluation, and career-alignment tools.</span></button>
        <button class="discover-goal" type="button" data-discover-goal="Insights"><strong>Read or watch</strong><span>Articles, media learning, and curated technical/resource directories.</span></button>
        <button class="discover-goal" type="button" data-discover-goal="Platform"><strong>Understand the platform</strong><span>About, FAQ, participation, and contact destinations.</span></button>
      </div>
    </div>
  </section>

  <section class="discover-workspace" id="discover-workspace" aria-labelledby="discover-results-title">
    <div class="discover-shell">
      <div class="discover-heading">
        <h2 id="discover-results-title">Explore maintained content</h2>
        <p>Filter by area or search across the index. Exact titles rank first; then matches in titles, keywords, descriptions, and content type.</p>
      </div>

      <div class="discover-controls" role="group" aria-label="Filter discovery results">
        <button class="discover-filter" type="button" data-discover-filter="All" aria-pressed="true">All</button>
        <button class="discover-filter" type="button" data-discover-filter="Learn" aria-pressed="false">Learn</button>
        <button class="discover-filter" type="button" data-discover-filter="Projects" aria-pressed="false">Projects</button>
        <button class="discover-filter" type="button" data-discover-filter="Tools" aria-pressed="false">Tools</button>
        <button class="discover-filter" type="button" data-discover-filter="Insights" aria-pressed="false">Insights</button>
        <button class="discover-filter" type="button" data-discover-filter="Platform" aria-pressed="false">Platform</button>
      </div>

      <p id="discover-status" class="discover-status" aria-live="polite">Loading the maintained discovery index…</p>
      <div id="discover-results" class="discover-results"></div>
    </div>
  </section>

  <section class="discover-section discover-section--soft" aria-labelledby="discover-coverage-title">
    <div class="discover-shell discover-coverage">
      <div class="discover-note">
        <h3 id="discover-coverage-title">What Discover indexes</h3>
        <p>Discover searches maintained internal DataForSolution content: learning pages, the ten curated portfolio projects, the interactive Tools workspace, site articles, Insights/Media/Resources hubs, and core platform pages.</p>
        <p>It does not duplicate every external link inside the Resources or Media directories. Use those dedicated pages when you want to search their larger curated external catalogs.</p>
        <p>Search queries stay in your browser. No account, API key, or external search provider is used.</p>
      </div>

      <nav class="discover-links" aria-label="Specialized discovery destinations">
        <a href="{{ '/resources/' | relative_url }}"><strong>Search external data and AI resources</strong><span>Datasets, APIs, official documentation, healthcare sources, and learning communities.</span></a>
        <a href="{{ '/media/' | relative_url }}"><strong>Search the Media Learning Center</strong><span>Technical lessons, healthcare AI media, responsible-AI material, and trusted channels.</span></a>
        <a href="{{ '/toolkits/' | relative_url }}"><strong>Work in the Tools Workspace</strong><span>Run browser-local data, statistics, evaluation, and career tools.</span></a>
      </nav>
    </div>
  </section>
</div>

<link rel="stylesheet" href="{{ '/assets/css/discover.css' | relative_url }}">
<script src="{{ '/assets/js/discover.js' | relative_url }}" defer></script>
