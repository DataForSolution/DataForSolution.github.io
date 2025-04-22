---
layout: default
title: "Projects"
permalink: /projects/
---

<section id="projects">
  <h1>📂 Project Library</h1>
  <p>Browse our collection of data science and AI projects:</p>

  <div class="project-gallery">
    <div class="project-card" title="Uses CNN for lung cancer detection">
      <h3>🧠 Chest CT Scan Cancer Detection (CNN)</h3>
      <p>AI model to detect cancer using CT scans.</p>
      <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/chest_ct_scan_Cancer_Detection_cnn.ipynb" target="_blank">View Project</a>
      <img src="https://img.shields.io/github/stars/DataForSolution/DataForSolution.github.io?style=social" alt="GitHub stars">
    </div>

    <div class="project-card" title="Examines model vulnerability to crafted inputs">
      <h3>⚔️ Adversarial Attacks in ML</h3>
      <p>Exploring model robustness and security in ML.</p>
      <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Project</a>
    </div>

    <div class="project-card" title="Applies SVM for high-accuracy classification">
      <h3>🔍 Support Vector Machine (SVM)</h3>
      <p>Classifies data using a margin-optimized algorithm.</p>
      <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/SVM_440.ipynb" target="_blank">View Project</a>
    </div>

    <div class="project-card" title="Predicts heart disease using multiple algorithms">
      <h3>❤️ Heart Disease Prediction (Ensemble)</h3>
      <p>Combines classifiers for accurate heart disease risk analysis.</p>
      <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Heart_Disease_Prediction_Ensemble.ipynb" target="_blank">View Project</a>
    </div>

    <div class="project-card" title="Discovers shopping patterns using association rules">
      <h3>🛒 Market Basket Analysis</h3>
      <p>Analyzes customer purchase patterns for business insights.</p>
      <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Market_Basket_Analysis_Association_Rules.ipynb" target="_blank">View Project</a>
    </div>
  </div>
</section>

<style>
#projects {
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

#projects h1 {
  color: #4CAF50;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.project-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.project-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 280px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.03);
}

.project-card h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #333;
}

.project-card p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
}

.project-card a {
  display: inline-block;
  padding: 8px 12px;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 5px;
}

.project-card a:hover {
  background-color: #0056b3;
}

.project-card img {
  margin-top: 5px;
  height: 20px;
}
</style>
