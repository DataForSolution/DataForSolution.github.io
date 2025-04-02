---
layout: default
title: About
permalink: /about/
---

<div style="background-color: #f9f9f9; padding: 60px 20px; text-align: center; color: #222; font-family: 'Segoe UI', sans-serif;">

<h1 style="color: #0056b3; font-size: 2.8em; margin-bottom: 10px;">About LLmachine</h1>

<p style="font-size: 1.2em; max-width: 800px; margin: 0 auto 40px;">
Welcome to <strong>LLmachine</strong>, your go-to platform for AI, Data Science, and Analytics solutions.
We empower businesses and individuals with cutting-edge technologies and actionable insights.
</p>

<!-- Flip Card -->
<div style="perspective: 1000px; width: 300px; margin: 0 auto 60px;">
  <div class="flip-card" style="width: 100%; height: 360px; position: relative;">
    <div class="flip-inner" style="width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d; position: relative;">
      <div class="flip-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border: 1px solid #ccc; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
        <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Lissan's Profile Picture" style="border-radius: 50%; width: 120px; margin-bottom: 10px;">
        <h3 style="color: #0056b3;">Lissan</h3>
        <p>Data Scientist</p>
      </div>
      <div class="flip-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #0056b3; color: white; border-radius: 10px; transform: rotateY(180deg); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px;">
        <p style="max-width: 250px;">
          I specialize in PET/CT imaging, AI development, and applying machine learning in real-world applications.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Skills -->
<h2 style="color: #007BFF;">Skills & Expertise</h2>

<div style="max-width: 600px; margin: 20px auto 60px; text-align: left;">
  <p title="Predictive modeling, scikit-learn, deep learning">🧠 <strong>Machine Learning</strong></p>
  <div style="background-color: #eee; border-radius: 10px; overflow: hidden;">
    <div style="width: 90%; background-color: #007BFF; color: white; padding: 6px 10px; animation: growBar 2s;">90%</div>
  </div>

  <p title="Pandas, Power BI, and data storytelling">📊 <strong>Data Analytics</strong></p>
  <div style="background-color: #eee; border-radius: 10px; overflow: hidden;">
    <div style="width: 85%; background-color: #28a745; color: white; padding: 6px 10px; animation: growBar 2s;">85%</div>
  </div>

  <p title="Deploying smart, automated systems">🤖 <strong>AI Development</strong></p>
  <div style="background-color: #eee; border-radius: 10px; overflow: hidden;">
    <div style="width: 80%; background-color: #ffc107; color: white; padding: 6px 10px; animation: growBar 2s;">80%</div>
  </div>
</div>

<!-- Counters -->
<h2 style="color: #007BFF;">Experience & Impact</h2>

<div style="display: flex; justify-content: center; gap: 50px; margin-top: 30px; margin-bottom: 60px;">
  <div><h2 id="years" style="color: #0056b3;">0</h2><p>Years Experience</p></div>
  <div><h2 id="projects" style="color: #0056b3;">0</h2><p>Projects Completed</p></div>
  <div><h2 id="clients" style="color: #0056b3;">0</h2><p>Happy Clients</p></div>
</div>

<!-- More About Me -->
<h2 style="color: #007BFF;">More About Me</h2>

<button onclick="toggleDetails()" style="margin: 20px auto; padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Show More
</button>

<div id="extra-info" style="display: none; max-width: 800px; margin: 0 auto; font-size: 1.1em; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #ccc;">
    <p>
        Outside of data science, I enjoy mentoring, medical imaging innovation, and sharing tutorials on AI and analytics.
    </p>
</div>

<!-- Contact -->
<h2 style="color: #007BFF;">Connect With Me</h2>

<p style="font-size: 1.1em; max-width: 800px; margin: 0 auto;">
Reach out via the <a href="/contact/" style="color: #0056b3;">Contact page</a>  
or follow me on  
<a href="https://twitter.com/SewLiben" target="_blank" style="color: #1DA1F2;">Twitter</a> and  
<a href="https://github.com/DataForSolution" target="_blank" style="color: #333;">GitHub</a>.
</p>

</div>

<!-- JavaScript & Styles -->
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

        // Flip card hover effect
        const flipCard = document.querySelector('.flip-card');
        flipCard.addEventListener('mouseover', () => {
            flipCard.querySelector('.flip-inner').style.transform = 'rotateY(180deg)';
        });
        flipCard.addEventListener('mouseout', () => {
            flipCard.querySelector('.flip-inner').style.transform = 'rotateY(0deg)';
        });
    });
</script>

<style>
@keyframes growBar {
  from { width: 0; }
  to { width: 100%; }
}
</style>
