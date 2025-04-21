---
layout: default
title: Blog
permalink: /blog/
---

<section id="blog">
  <h1>📰 Latest Articles</h1>
  <p class="blog-intro">
    Dive into tutorials, trends, and insights in AI, Data Science, and Analytics. Curated for learners and professionals alike.
  </p>

  <!-- Featured Article -->
  <!-- Featured Article -->
<div class="featured-post">
  <h2><a href="{{ '/2025/04/17/understanding-transformers.html' | relative_url }}">
    🧠 Understanding Transformers in NLP
  </a></h2>
  <p class="featured-date">Published: April 17, 2025</p>
  <p class="featured-summary">
    Transformers have revolutionized Natural Language Processing by enabling deep contextual understanding and parallel processing of text.
    Unlike RNNs, transformers rely on attention mechanisms, allowing them to focus on relevant parts of the input sequence regardless of position...
  </p>
  <a href="{{ '/2025/04/17/understanding-transformers.html' | relative_url }}" class="read-featured">Read Full Article →</a>
</div>


  <!-- Blog Filters -->
  <div class="blog-filters">
    <span>Filter by:</span>
    <button onclick="filterPosts('all')">All</button>
    <button onclick="filterPosts('tutorial')">Tutorials</button>
    <button onclick="filterPosts('trend')">Trends</button>
    <button onclick="filterPosts('case')">Case Studies</button>
    <button onclick="filterPosts('tech')">Tech Reviews</button>
    <button onclick="filterPosts('career')">Career</button>
  </div>

  <!-- Blog Post List -->
  <div class="blog-posts">
    {% for post in site.posts %}
      <div class="blog-card" data-category="{{ post.category }}">
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="blog-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p class="blog-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url }}" class="read-more">Read More →</a>
      </div>
    {% endfor %}
  </div>
</section>

<!-- Scroll to Top Button -->
<button onclick="window.scrollTo({top: 0, behavior: 'smooth'});" class="scroll-top">↑</button>

<style>
  #blog {
    padding: 2rem;
    font-family: sans-serif;
  }
  .blog-intro {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .featured-post {
    border: 2px solid #007BFF;
    padding: 1.5rem;
    border-radius: 10px;
    background: #f8faff;
    margin: 2rem 0;
  }
  .featured-post h2 {
    margin-top: 0;
    font-size: 1.5rem;
  }
  .featured-date {
    color: gray;
    font-size: 0.9rem;
  }
  .featured-summary {
    font-size: 1.05rem;
    margin: 0.8rem 0;
  }
  .read-featured {
    font-weight: bold;
    text-decoration: none;
    color: #007BFF;
  }
  .blog-filters {
    margin-bottom: 1.5rem;
  }
  .blog-filters button {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border: none;
    background: #eee;
    cursor: pointer;
    border-radius: 5px;
  }
  .blog-filters button:hover {
    background-color: #ccc;
  }
  .blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .blog-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 10px;
    transition: transform 0.2s ease;
  }
  .blog-card:hover {
    transform: scale(1.03);
    background: #f9f9f9;
  }
  .blog-card h3 {
    margin-top: 0;
  }
  .blog-date {
    font-size: 0.85rem;
    color: gray;
  }
  .read-more {
    color: #007BFF;
    text-decoration: none;
    font-weight: bold;
  }
  .scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 0.6rem 1rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: none;
  }
</style>

<script>
  function filterPosts(category) {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (category === 'all' || cat === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Scroll button visibility
  window.onscroll = function() {
    const btn = document.querySelector('.scroll-top');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
</script>