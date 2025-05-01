---
layout: default
title: "Toolkits & Resources Hub"
permalink: /toolkits/
---

<section id="toolkits" style="text-align:center; padding:50px 20px;">

# 🧰 Toolkits & Study Resources

<p>Welcome to the LLmachine Toolkits Hub! Explore free notebooks, cheat sheets, interactive demos, and study planners to accelerate your learning in AI, Machine Learning, and Data Science.</p>

---

## 📓 Starter Python Notebooks {#notebooks}

<div class="toolkit-gallery">
  <div class="toolkit-card">
    <h3>🧠 CNN Starter Template</h3>
    <p>Build your first Convolutional Neural Network for image classification.</p>
    <a href="{{ '/toolkits/notebooks/Chest_CT-Scan_CNN_Project.ipynb' | relative_url }}" target="_blank" class="cta-button">View Notebook</a>
  </div>
</div>

---
## 📚 Cheat Sheets for Quick Reference {#cheat-sheets}

<ul class="cheat-sheet-list">
  <li>🐍 <a href="/toolkits/cheatsheets/Python_Cheat_Sheet.pdf" target="_blank">Python Basics</a></li>
  <li>🔢 <a href="/toolkits/cheatsheets/NumPy_Cheat_Sheet.pdf" target="_blank">NumPy Cheat Sheet</a></li>
  <li>📊 <a href="/toolkits/cheatsheets/Pandas_Cheat_Sheet.pdf" target="_blank">Pandas Cheat Sheet</a></li>
  <li>📈 <a href="/toolkits/cheatsheets/Matplotlib_Cheat_Sheet.pdf" target="_blank">Matplotlib Cheat Sheet</a></li>
  <li>🤖 <a href="/toolkits/cheatsheets/Scikit_Learn_Cheat_Sheet_Python.pdf" target="_blank">Scikit-Learn Cheat Sheet</a></li>
</ul>

---

## 🗓️ Study Planners {#study-planners}

<div class="study-planners">
  <h3>🚀 Learn ML in 60 Days Roadmap</h3>
  <p>Structured weekly plan to become confident in Machine Learning.</p>
  <a href="/assets/toolkits/study_planners/ML_Study_Planner_60Days.pdf" target="_blank" class="cta-button">Download Study Planner</a>
</div>

---
## 🛠️ Interactive Demos {#interactive-demos}

<p>Try out live machine learning demos right here — no setup needed!</p>

### 🧠 Sentiment Analysis Demo (Text Classification)

<iframe src="https://huggingface.co/spaces/akhaliq/distilbert-base-uncased-emotion" width="100%" height="600px" frameborder="0"></iframe>

</section>

<!-- Simple CSS -->
<style>
.toolkit-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}
.toolkit-card {
  background: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}
.toolkit-card:hover {
  transform: scale(1.05);
}
.cheat-sheet-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
.cheat-sheet-list li {
  margin: 10px 0;
  font-size: 1.2em;
}
.cheat-sheet-list a {
  color: #4CAF50;
  font-weight: bold;
  text-decoration: none;
}
.study-planners {
  margin-top: 30px;
}
.cta-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 18px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.cta-button:hover {
  background-color: #388e3c;
}
</style>
