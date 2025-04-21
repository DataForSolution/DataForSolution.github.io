---
layout: default
title: About
permalink: /about/
---

<div class="about-wrapper">
  <h1>About LLmachine</h1>
  <p>
    Welcome to <strong>LLmachine</strong>, your go-to platform for AI, Data Science, and Analytics solutions.
    We empower businesses and individuals with cutting-edge technologies and actionable insights.
  </p>

  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front">
        <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Lissan's Profile Picture" style="border-radius: 50%; width: 120px; margin-bottom: 10px;">
        <h3>Lissan</h3>
        <p>Data Scientist</p>
      </div>
      <div class="flip-back">
        <p>
          I specialize in PET/CT imaging, AI development, and applying machine learning in real-world applications.
        </p>
      </div>
    </div>
  </div>

  <h2>Skills & Expertise</h2>
  <div class="skills">
    <p>🧠 Machine Learning</p>
    <div class="progress"><div class="progress-bar" style="width: 90%; background-color: #0056b3;">90%</div></div>

    <p>📊 Data Analytics</p>
    <div class="progress"><div class="progress-bar" style="width: 85%; background-color: #28a745;">85%</div></div>

    <p>🤖 AI Development</p>
    <div class="progress"><div class="progress-bar" style="width: 80%; background-color: #ffc107;">80%</div></div>
  </div>

  <h2>Experience & Impact</h2>
  <div class="stats">
    <div><h2 id="years">0</h2><p>Years Experience</p></div>
    <div><h2 id="projects">0</h2><p>Projects Completed</p></div>
    <div><h2 id="clients">0</h2><p>Happy Clients</p></div>
  </div>

  <h2>More About Me</h2>
  <button onclick="toggleDetails()" class="cta-button">Show More</button>
  <div id="extra-info" style="display:none; max-width: 800px; margin: 0 auto;">
    <p>Outside of data science, I enjoy mentoring, medical imaging innovation, and sharing tutorials on AI and analytics.</p>
  </div>

  <h2>Connect With Me</h2>
  <p>
    Reach out via the <a href="/contact/" style="color: #0056b3;">Contact page</a>,  
    or follow me on  
    <a href="https://twitter.com/SewLiben" target="_blank" style="color: #1DA1F2;">Twitter</a> and  
    <a href="https://github.com/DataForSolution" target="_blank" style="color: #333;">GitHub</a>.
  </p>
</div>

<script>
  function toggleDetails() {
    const box = document.getElementById('extra-info');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  }

  function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function () {
      current += increment;
      obj.textContent = current;
      if (current === end) clearInterval(timer);
    }, stepTime);
  }

  document.addEventListener("DOMContentLoaded", () => {
    animateValue("years", 0, 15, 2000);
    animateValue("projects", 0, 25, 2000);
    animateValue("clients", 0, 10, 2000);

    const flipCard = document.querySelector('.flip-card');
    flipCard.addEventListener('mouseover', () => {
      flipCard.querySelector('.flip-inner').style.transform = 'rotateY(180deg)';
    });
    flipCard.addEventListener('mouseout', () => {
      flipCard.querySelector('.flip-inner').style.transform = 'rotateY(0deg)';
    });
  });
</script>
