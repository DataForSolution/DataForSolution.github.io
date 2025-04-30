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
  <li>🐍 <a href="{{ '/toolkits/cheatsheet/Python_Cheat_Sheet.pdf' | relative_url }}" target="_blank">Python Basics</a></li>
  <li>🔢 <a href="{{ '/toolkits/cheatsheet/NumPy_Cheat_Sheet.pdf' | relative_url }}" target="_blank">NumPy Cheat Sheet</a></li>
  <li>📊 <a href="{{ '/toolkits/cheatsheet/Pandas_Cheat_Sheet.pdf' | relative_url }}" target="_blank">Pandas Cheat Sheet</a></li>
  <li>📈 <a href="{{ '/toolkits/cheatsheet/Matplotlib_Cheat_Sheet.pdf' | relative_url }}" target="_blank">Matplotlib Cheat Sheet</a></li>
  <li>🤖 <a href="{{ '/toolkits/cheatsheet/Scikit_Learn_Cheat_Sheet_Python.pdf' | relative_url }}" target="_blank">Scikit-Learn Cheat Sheet</a></li>
</ul>

---

## 🗓️ Study Planners {#study-planners}

<div class="study-planners">
  <h3>🚀 Learn ML in 60 Days Roadmap</h3>
  <p>Structured weekly plan to become confident in Machine Learning.</p>
  <a href="{{ '/assets/toolkits/ML_Study_Planner_60Days.pdf' | relative_url }}" target="_blank" class="cta-button">Download Study Planner</a>
</div>

---

## 🛠️ Interactive Demos {#interactive-demos}

<p>Coming soon: Try out interactive AI demos right in your browser!</p>
<ul class="cheat-sheet-list">
  <li>📄 Text Classification Demo</li>
  <li>🖼️ Image Classification Demo</li>
  <li>🤖 Mini Chatbot Assistant</li>
</ul>

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
