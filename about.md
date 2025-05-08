---
layout: default
title: "About"
permalink: /about/
---

<div class="about-wrapper">

  <h1>👋 About LLmachine</h1>
  <p>
    Welcome to <strong>LLmachine</strong>, a hub for innovation, learning, and real-world impact in AI, Data Science, and Analytics.  
    Founded by <strong>Lissan</strong> — a medical imaging specialist and data scientist — LLmachine combines 15+ years of technical experience with a mission to educate and empower.
  </p>

  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front">
        <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Lissan" style="border-radius: 50%; width: 120px; margin-bottom: 10px;">
        <h3>Lissan</h3>
        <p>Founder | Data Scientist | PET/CT Specialist</p>
      </div>
      <div class="flip-back">
        <p>
          I specialize in combining PET/CT imaging expertise with AI and machine learning to solve real-world problems, create educational tools, and deliver research-grade solutions.
        </p>
      </div>
    </div>
  </div>

  <h2>🛠️ Skills & Expertise</h2>
  <div class="skills">
    <p>🧠 Machine Learning</p>
    <div class="progress"><div class="progress-bar" style="width: 90%; background-color: #007bff;">90%</div></div>

    <p>📊 Data Analytics & Visualization</p>
    <div class="progress"><div class="progress-bar" style="width: 85%; background-color: #28a745;">85%</div></div>

    <p>🤖 AI & Deep Learning</p>
    <div class="progress"><div class="progress-bar" style="width: 80%; background-color: #ffc107;">80%</div></div>

    <p>🩺 Medical Imaging & PET/CT</p>
    <div class="progress"><div class="progress-bar" style="width: 95%; background-color: #17a2b8;">95%</div></div>
  </div>

  <h2>📈 Experience & Impact</h2>
  <div class="stats">
    <div><h2 id="years">0</h2><p>Years in PET/CT & Data Science</p></div>
    <div><h2 id="projects">0</h2><p>Projects & Research</p></div>
    <div><h2 id="clients">0</h2><p>Clients & Collaborators</p></div>
  </div>

  <h2>🌍 Mission & Values</h2>
  <p style="max-width: 800px; margin: auto;">
    My mission is to make complex data science accessible, actionable, and ethical — especially in the fields of healthcare, education, and AI-powered research.  
    I believe in building knowledge-sharing tools, mentoring aspiring analysts, and delivering impactful solutions through technology.
  </p>

  <h2>💬 More About Me</h2>
  <button onclick="toggleDetails()" class="cta-button">Show More</button>
  <div id="extra-info" style="display:none; max-width: 800px; margin: 0 auto;">
    <p>
      Beyond data and tech, I enjoy mentoring, developing AI chatbots, building dashboards, and exploring innovations in radiology.  
      I actively share tutorials, research tools, and practical guides across this platform.
    </p>
  </div>

  <h2>📬 Connect With Me</h2>
  <p>
    Reach out via the <a href="/contact/" style="color: #4CAF50;">Contact page</a>, or follow my work on  
    <a href="https://twitter.com/SewLiben" target="_blank" style="color: #1DA1F2;">Twitter</a> and  
    <a href="https://github.com/DataForSolution" target="_blank" style="color: #ccc;">GitHub</a>.
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
