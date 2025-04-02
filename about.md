---
layout: default
title: About
permalink: /about/
---

<div style="background-color: #f9f9f9; padding: 60px 20px; text-align: center; color: #222; font-family: sans-serif;">

<h1 style="color: #0056b3; font-size: 2.5em;">About LLmachine</h1>

<p style="font-size: 1.2em; max-width: 800px; margin: 0 auto;">
Welcome to <strong>LLmachine</strong>, your go-to platform for AI, Data Science, and Analytics solutions.
</p>

---

### 👨‍💼 Profile Flip Card

<div style="perspective: 1000px; display: flex; justify-content: center; margin: 40px 0;">
  <div style="width: 280px; height: 350px; position: relative; transform-style: preserve-3d; transition: transform 0.8s;" id="flip-card" onclick="this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)'">
    <div style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border: 1px solid #ccc; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
      <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Lissan's Profile Picture" style="border-radius: 50%; width: 120px; margin-bottom: 10px;">
      <h3 style="color: #0056b3;">Lissan</h3>
      <p>Data Scientist</p>
    </div>
    <div style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #0056b3; color: white; border-radius: 10px; transform: rotateY(180deg); display: flex; flex-direction: column; justify-content: center; padding: 20px;">
      <p>I specialize in PET/CT imaging, AI development, and applying machine learning in real-world applications.</p>
    </div>
  </div>
</div>

---

### 💡 Animated Skills

<div style="max-width: 600px; margin: auto;">
  <p>Machine Learning <span title="Predictive modeling, scikit-learn, and deep learning">🧠</span></p>
  <div class="skill-bar" style="background-color: #eee; border-radius: 10px; overflow: hidden;">
    <div style="width: 90%; background-color: #007BFF; color: white; padding: 5px 0; text-align: center; animation: growBar 2s;">90%</div>
  </div>

  <p>Data Analytics <span title="Pandas, Power BI, and data storytelling">📊</span></p>
  <div class="skill-bar" style="background-color: #eee; border-radius: 10px; overflow: hidden;">
    <div style="width: 85%; background-color: #28a745; color: white; padding: 5px 0; text-align: center; animation: growBar 2s;">85%</div>
  </div>

  <p>AI Development <span title="Deploying smart, automated systems">🤖</span></p>
  <div class="skill-bar" style="background-color: #eee; border-radius: 10px; overflow: hidden;">
    <div style="width: 80%; background-color: #ffc107; color: white; padding: 5px 0; text-align: center; animation: growBar 2s;">80%</div>
  </div>
</div>

---

### 📈 Stats That Count

<div style="display: flex; justify-content: center; gap: 40px; margin-top: 40px;">
  <div><h2 id="years" style="color: #0056b3;">0</h2><p>Years Experience</p></div>
  <div><h2 id="projects" style="color: #0056b3;">0</h2><p>Projects Completed</p></div>
  <div><h2 id="clients" style="color: #0056b3;">0</h2><p>Happy Clients</p></div>
</div>

---

### 🔍 More About Me

<button onclick="toggleDetails()" style="margin: 20px auto; display: block; padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
    More About Me
</button>

<div id="extra-info" style="display: none; max-width: 800px; margin: 0 auto; font-size: 1.1em; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #ccc;">
    <p>
        Outside of data science, I enjoy mentoring, medical imaging innovation, and sharing tutorials on AI and analytics.
    </p>
</div>

---

### 📬 Connect With Me

<p style="font-size: 1.1em; max-width: 800px; margin: 0 auto;">
Reach out via the <a href="/contact/" style="color: #0056b3;">Contact page</a>  
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

    // Animated counters
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
    });
</script>

<style>
@keyframes growBar {
  from { width: 0; }
  to { width: 100%; }
}
</style>
