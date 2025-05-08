---
layout: default
title: "Contact & Portfolio"
permalink: /contact/
---

<section id="contact" style="background-color: #1f1f1f; color: #fff; padding: 60px 20px;">
  <h1 style="text-align: center; color: #4CAF50;">📬 Contact & Portfolio</h1>
  <p style="max-width: 800px; margin: auto; text-align: center; font-size: 1.1rem;">
    Let’s collaborate, build something amazing, or simply connect! I’m always open to freelance projects, research, training opportunities, and data storytelling work.
  </p>

  <!-- Profile -->
  <div class="profile-section">
    <img src="{{ '/assets/images/lissan-profile.jpg' | relative_url }}" alt="Lissan" class="profile-pic">
    <h2>Lissan</h2>
    <p>Data Scientist | PET/CT Imaging Specialist | AI Developer</p>
    <p>
      Connect on 
      <a href="https://www.linkedin.com/in/lissan-analytic" target="_blank" class="contact-link">LinkedIn</a> or 
      view my work on 
      <a href="https://github.com/DataForSolution" target="_blank" class="contact-link">GitHub</a>.
    </p>
  </div>

  <!-- Contact Form -->
  <div class="contact-form">
    <h2>Send a Message</h2>
    <form action="https://formsubmit.co/kent.sew@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="How can I help you?" rows="6" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

<section id="portfolio" style="padding: 60px 20px; background-color: #2a2a2a; color: #fff;">
  <h2 style="text-align: center; color: #00BFFF;">💼 My Portfolio</h2>
  <p style="text-align: center; max-width: 800px; margin: auto;">
    A snapshot of my hands-on projects in AI, machine learning, and analytics. Filter by area of focus:
  </p>

  <div class="portfolio-filters" style="text-align: center; margin: 20px 0;">
    <button class="filter-btn active" onclick="filterPortfolio('all')">All</button>
    <button class="filter-btn" onclick="filterPortfolio('machine-learning')">Machine Learning</button>
    <button class="filter-btn" onclick="filterPortfolio('ai')">AI</button>
    <button class="filter-btn" onclick="filterPortfolio('data-visualization')">Data Viz</button>
  </div>

  <div class="portfolio-grid">
    <div class="portfolio-item" data-category="machine-learning">
      <h3>Project: Predictive Modeling</h3>
      <p><strong>Tech:</strong> XGBoost, pandas, scikit-learn</p>
      <p><strong>Insight:</strong> 95% accuracy on customer churn data.</p>
    </div>

    <div class="portfolio-item" data-category="ai">
      <h3>Project: Chatbot Assistant</h3>
      <p><strong>Tech:</strong> Rasa, Transformers</p>
      <p><strong>Insight:</strong> Built a contextual chatbot for help desk automation.</p>
    </div>

    <div class="portfolio-item" data-category="data-visualization">
      <h3>Project: Interactive Dashboard</h3>
      <p><strong>Tech:</strong> Power BI / Plotly</p>
      <p><strong>Insight:</strong> Executive KPI dashboard with real-time metrics.</p>
    </div>
  </div>
</section>

<script>
function filterPortfolio(category) {
  const items = document.querySelectorAll(".portfolio-item");
  items.forEach(item => {
    const match = category === "all" || item.dataset.category === category;
    item.style.display = match ? "block" : "none";
  });

  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}
</script>

<style>
.profile-section {
  text-align: center;
  margin: 40px auto;
}
.profile-pic {
  width: 140px;
  border-radius: 50%;
  border: 4px solid #4CAF50;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}
.contact-form {
  max-width: 600px;
  background: #333;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0,0,0,0.2);
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #666;
  background: #111;
  color: #fff;
}
.contact-form button {
  background-color: #4CAF50;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
}
.contact-form button:hover {
  background-color: #007BFF;
}
.portfolio-filters .filter-btn {
  background: #4CAF50;
  color: white;
  margin: 5px;
  border: none;
  padding: 10px 14px;
  border-radius: 5px;
  cursor: pointer;
}
.portfolio-filters .filter-btn.active {
  background: #007BFF;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}
.portfolio-item {
  background: #1f1f1f;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #4CAF50;
}
</style>
