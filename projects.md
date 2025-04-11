---
layout: default
title: "Our Projects"
permalink: /projects/
---

<section id="projects">
  <h1>🚀 Our Projects</h1>
  <p>Explore our data science, AI, and ML projects solving real-world challenges.</p>

  <div class="projects-list">

    <!-- Static Project Cards -->
    <div class="project-card">
      <img src="/assets/images/project_ctscan.jpg" alt="CT Scan Project" class="project-thumb">
      <h2>🏥 Chest CT Scan Cancer Detection</h2>
      <p>AI-powered early detection using CT scans and CNN.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/blob/main/chest_ct_scan_Cancer_Detection_cnn.ipynb" class="btn-view" target="_blank">View Code</a>
    </div>

    <div class="project-card">
      <img src="/assets/images/project_attack.jpg" alt="Adversarial Attacks" class="project-thumb">
      <h2>🔍 Adversarial Attacks in ML</h2>
      <p>Explore model robustness and AI security vulnerabilities.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/blob/main/Adversarial_Attacks.ipynb" class="btn-view" target="_blank">View Code</a>
    </div>

    <div class="project-card">
      <img src="/assets/images/project_svm.jpg" alt="SVM Classifier" class="project-thumb">
      <h2>📊 SVM for Classification</h2>
      <p>High-accuracy classification using Support Vector Machines.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/blob/main/projects/SVM_440.ipynb" class="btn-view" target="_blank">View Code</a>
    </div>

    <div class="project-card">
      <img src="/assets/images/project_pdf.jpg" alt="Chest Cancer PDF" class="project-thumb">
      <h2>📄 Chest Cancer Detection Doc</h2>
      <p>Deep learning PDF report on lung cancer using CT scans.</p>
      <a href="/assets/documents/chest-cancer-detection.pdf" class="btn-view" target="_blank">View PDF</a>
    </div>
  </div>
</section>

<!-- 🧠 Dynamic Jekyll Project Loop -->
<section id="dynamic-projects">
  <h2 style="margin-top: 60px;">🧠 Additional Projects</h2>
  <div class="projects-list">
    {% for project in site.projects %}
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description | truncate: 120 }}</p>
      <a href="{{ project.url | relative_url }}" class="btn-view">Read More</a>
    </div>
    {% endfor %}
  </div>
</section>

<!-- LIVE PROJECTS -->
<section id="live-projects">
  <h2>🔴 Live Projects</h2>
  <p>Explore our live and interactive data science dashboards and analytics tools.</p>

  <div class="live-project">
    <h3>Real-Time Sentiment Analysis</h3>
    <iframe src="https://your-sentiment-project-url.com" width="100%" height="400"></iframe>
  </div>

  <div class="live-project">
    <h3>Dynamic Financial Dashboard</h3>
    <iframe src="https://your-financial-project-url.com" width="100%" height="400"></iframe>
  </div>
</section>

<style>
#projects, #dynamic-projects {
  background-color: #f5f9ff;
  padding: 50px 20px;
  text-align: center;
}
.projects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
.project-card {
  background: white;
  width: 290px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px);
}
.project-thumb {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}
.project-card h2 {
  font-size: 1.2rem;
  color: #007bff;
  margin: 10px 0;
}
.project-card p {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 10px;
}
.btn-view {
  display: inline-block;
  padding: 8px 14px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}
.btn-view:hover {
  background-color: #0056b3;
}

#live-projects {
  padding: 50px 20px;
  background-color: #f4f4f4;
  text-align: center;
}
.live-project {
  margin-bottom: 40px;
}
.live-project h3 {
  color: #4CAF50;
  font-size: 1.6rem;
}
.live-project iframe {
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 100%;
}
@media (max-width: 768px) {
  .projects-list {
    flex-direction: column;
    align-items: center;
  }
}
</style>
