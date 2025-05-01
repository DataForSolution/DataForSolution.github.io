---
layout: default
title: "Projects"
permalink: /projects/
---

<section id="projects">
  <h1>📂 Project Library</h1>
  <p>Browse our collection of data science and AI projects:</p>

  <div class="project-gallery">
<div class="project-card" data-topic="cnn" title="Uses CNN for lung cancer detection">
    <h3>🧠 Chest CT Scan Cancer Detection (CNN)</h3>
    <p>AI model to detect cancer using CT scans.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/chest_ct_scan_Cancer_Detection_cnn.ipynb" target="_blank">View Project</a>
  </div>
<!-- Project Cards -->
<div class="project-card" data-topic="cnn">
  <h3>📓 Chest CT Scan CNN – Notebook</h3>
  <a href="https://raw.githubusercontent.com/DataForSolution/DataForSolution.github.io/main/projects/Chest_CT_Scan_CNN.ipynb" target="_blank">View Notebook</a>
</div>

<div class="project-card" data-topic="cnn">
  <h3>📓 Chest CT Scan CNN – Final</h3>
  <a href="https://raw.githubusercontent.com/DataForSolution/DataForSolution.github.io/main/projects/Chest_CT_Scan_CNN-Final.ipynb" target="_blank">View Notebook</a>
</div>

<div class="project-card" data-topic="cnn">
  <h3>📄 Chest CT Scan CNN – Final (Colab PDF)</h3>
  <a href="https://raw.githubusercontent.com/DataForSolution/DataForSolution.github.io/main/projects/Chest_CT-Scan_CNN-Final.ipynb%20-%20Colab.pdf" target="_blank">View PDF</a>
</div>

<div class="project-card" data-topic="cnn">
  <h3>📄 CT Scan Deep Learning (PDF)</h3>
  <a href="https://raw.githubusercontent.com/DataForSolution/DataForSolution.github.io/main/projects/Chest_Cancer_Detection_Deep_Learning_CT_Scan.pdf" target="_blank">View PDF</a>
</div>

<!-- Recommendation Section -->
<div id="recommendations" style="margin-top: 2rem;"></div>

<!-- Script to track clicks and show recommendations -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  // Track click & store data-topic
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const topic = card.getAttribute("data-topic");
      if (topic) localStorage.setItem("lastViewedTopic", topic);
    });
  });

  // Show recommendation
  const lastTopic = localStorage.getItem("lastViewedTopic");
  const box = document.getElementById("recommendations");

  if (lastTopic === "cnn" && box) {
    box.innerHTML = `
      <h2>📌 Recommended for You</h2>
      <p>Since you viewed a <strong>CNN</strong> project:</p>
      <a href="/projects/#gan-project" class="cta-button">Explore GAN for Image Generation</a>
    `;
  }
});
</script>


  <div class="project-card" data-topic="security" title="Examines model vulnerability to crafted inputs">
    <h3>⚔️ Adversarial Attacks in ML</h3>
    <p>Exploring model robustness and security in ML.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Project</a>
  </div>

  <div class="project-card" data-topic="svm" title="Applies SVM for high-accuracy classification">
    <h3>🔍 Support Vector Machine (SVM)</h3>
    <p>Classifies data using a margin-optimized algorithm.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/SVM_440.ipynb" target="_blank">View Project</a>
  </div>

  <div class="project-card" data-topic="numpy">
    <h3>📊 Activity: Arrays and Vectors with NumPy</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Activity_ Arrays and vectors with NumPy.py" target="_blank">View Script</a>
  </div>

  

  <div class="project-card" data-topic="reinforcement">
    <h3>🎮 Actor Critic Cartpole</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/actor_critic_cartpole.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Adversarial Attacks (Original)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Adversarial Attacks (Modified)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks_modified-2.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Assign Adversarial Attacks</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Assign_Adversarial_Attacks.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="security">
    <h3>🧠 Attack Defence (Imagenet v2.5)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/attack_defence_imagenet_v2.5.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🧠 Attack Defence with Beagle (Final)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/attack_defence_imagenet_with_beagleFinal.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="bayesian">
    <h3>📈 Bayesian Classification</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/BayesianClassification.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="healthcare">
    <h3>🩺 Breast Cancer - Wisconsin Dataset</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Breast Cancer Wisconsin.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree (Simple)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build a decision tree.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="clustering">
    <h3>🔵 K-Means Clustering</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build a K-means model.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="xgboost">
    <h3>⚡ XGBoost Model with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build an XGBoost model with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest (Cross-Validation)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build and cross-validate a random forest model with Python.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build-a decision tree with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="cnn">
    <h3>🧠 Chest CT Scan (CNN Final)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Chest_CT_Scan_CNN-Final.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="image-analysis">
    <h3>🖼️ CIFAR-10 Fake Image Analysis (Notebook)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/cifar10_fake_images_analysis.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="image-analysis">
    <h3>🖼️ CIFAR-10 Fake Image Analysis (Python Script)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/cifar10_fake_images_analysis.py" target="_blank">View Script</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Complete</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Complete_.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Complete (Alt)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Complete_1_.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Final</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Final.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="naive-bayes">
    <h3>📊 Naive Bayes Classifier</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Construct a Naive Bayes model with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="preprocessing">
    <h3>🧪 Data Preprocessing: German Dataset</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_german.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="mlp">
    <h3>🧠 Preprocessing with MLP</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_MLP.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="mlp">
    <h3>📊 MLP with Plots</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_MLP_with_plots.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest Preprocessing</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_RF.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest with Plots</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_RF_with_plots.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="preprocessing">
    <h3>🧪 Data Preprocessing v2</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_v2.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/DicisionTree1.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="pyspark">
    <h3>⚙️ EMR Glue with PySpark</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/EMR_Glue_PySpark.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Simple Linear Regression (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Evaluate simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Simple Linear Regression (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Evaluate-simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="neural-networks">
    <h3>🧠 Explain a Neural Network Model</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Explain a Neural Network Mode.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="anova">
    <h3>📊 ANOVA Tests with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Explore one-way versus two-way ANOVA tests with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="hypothesis-testing">
    <h3>📊 Hypothesis Testing (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Hypothesis testing with Python (2).ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="hypothesis-testing">
    <h3>📊 Hypothesis Testing (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Hypothesis testing with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="multiple-regression">
    <h3>📈 Interpret Multiple Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Interpret multiple regression results with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="logistic-regression">
    <h3>📉 Logistic Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Logistic Regression.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="mlp">
    <h3>🧠 MLP 440</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/MLP_440 (1).ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 Modified CIFAR-10 GAN</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/modified_CIFAR10GAN_notebook.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="feature-engineering">
    <h3>⚙️ Feature Engineering</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Perform feature engineering.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="multiple-regression">
    <h3>📈 Multiple Linear Regression (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Perform multiple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="multiple-regression">
    <h3>📈 Multiple Linear Regression (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Perform-multiple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Run Simple Linear Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Run-simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="business">
    <h3>🚗 Salifort Motors Project Lab</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Salifort Motors project lab.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="python-script">
    <h3>🔧 Set Webhook (Python Script)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/set_webhook.py" target="_blank">View Script</a>
  </div>

  <div class="project-card" data-topic="svm">
    <h3>🧠 SVM and Neural Network (MLB)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/SVM and NN(MLB).ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="svm">
    <h3>🧠 SVM 440</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/SVM_440.ipynb" target="_blank">View Notebook</a>
  </div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>

  <div id="recommendations"></div>
</section>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const topic = card.getAttribute("data-topic");
      localStorage.setItem("lastViewedTopic", topic);
    });
  });

  const lastTopic = localStorage.getItem("lastViewedTopic");
  const recommendationBox = document.getElementById("recommendations");

  if (lastTopic && recommendationBox) {
    const suggestions = {
      "cnn": "Lung Cancer Detection with CNN",
      "deep-learning": "Brain Tumor Classification with Deep Learning",
      "nlp": "Text Mining in Healthcare",
      "ai-ethics": "Bias Mitigation in AI"
    };

    const links = {
      "cnn": "/projects/lung-cancer-detection/",
      "deep-learning": "/projects/brain-tumor-classification/",
      "nlp": "/projects/text-mining-healthcare/",
      "ai-ethics": "/projects/bias-mitigation/"
    };

    if (suggestions[lastTopic]) {
      recommendationBox.innerHTML = `
        <h2>📌 Recommended for You</h2>
        <p>Since you viewed a <strong>${lastTopic.replace('-', ' ').toUpperCase()}</strong> project, you might like:</p>
        <a href="${links[lastTopic]}" class="cta-button">${suggestions[lastTopic]}</a>
      `;
    }
  }
});
</script>

<style>
.cta-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.cta-button:hover {
  background-color: #388e3c;
}
</style>

<div class="project-card" data-topic="security" title="Examines model vulnerability to crafted inputs">
    <h3>⚔️ Adversarial Attacks in ML</h3>
    <p>Exploring model robustness and security in ML.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Project</a>
  </div>

  <div class="project-card" data-topic="svm" title="Applies SVM for high-accuracy classification">
    <h3>🔍 Support Vector Machine (SVM)</h3>
    <p>Classifies data using a margin-optimized algorithm.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/SVM_440.ipynb" target="_blank">View Project</a>
  </div>

  <div class="project-card" data-topic="numpy">
    <h3>📊 Activity: Arrays and Vectors with NumPy</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Activity_ Arrays and vectors with NumPy.py" target="_blank">View Script</a>
  </div>

  

  <div class="project-card" data-topic="reinforcement">
    <h3>🎮 Actor Critic Cartpole</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/actor_critic_cartpole.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Adversarial Attacks (Original)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Adversarial Attacks (Modified)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks_modified-2.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Assign Adversarial Attacks</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Assign_Adversarial_Attacks.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="security">
    <h3>🧠 Attack Defence (Imagenet v2.5)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/attack_defence_imagenet_v2.5.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🧠 Attack Defence with Beagle (Final)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/attack_defence_imagenet_with_beagleFinal.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="bayesian">
    <h3>📈 Bayesian Classification</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/BayesianClassification.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="healthcare">
    <h3>🩺 Breast Cancer - Wisconsin Dataset</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Breast Cancer Wisconsin.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree (Simple)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build a decision tree.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="clustering">
    <h3>🔵 K-Means Clustering</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build a K-means model.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="xgboost">
    <h3>⚡ XGBoost Model with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build an XGBoost model with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest (Cross-Validation)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build and cross-validate a random forest model with Python.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build-a decision tree with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="cnn">
    <h3>🧠 Chest CT Scan (CNN Final)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Chest_CT_Scan_CNN-Final.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="image-analysis">
    <h3>🖼️ CIFAR-10 Fake Image Analysis (Notebook)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/cifar10_fake_images_analysis.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="image-analysis">
    <h3>🖼️ CIFAR-10 Fake Image Analysis (Python Script)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/cifar10_fake_images_analysis.py" target="_blank">View Script</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Complete</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Complete_.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Complete (Alt)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Complete_1_.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Final</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Final.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="naive-bayes">
    <h3>📊 Naive Bayes Classifier</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Construct a Naive Bayes model with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="preprocessing">
    <h3>🧪 Data Preprocessing: German Dataset</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_german.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="mlp">
    <h3>🧠 Preprocessing with MLP</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_MLP.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="mlp">
    <h3>📊 MLP with Plots</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_MLP_with_plots.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest Preprocessing</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_RF.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest with Plots</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_RF_with_plots.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="preprocessing">
    <h3>🧪 Data Preprocessing v2</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_v2.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/DicisionTree1.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="pyspark">
    <h3>⚙️ EMR Glue with PySpark</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/EMR_Glue_PySpark.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Simple Linear Regression (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Evaluate simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Simple Linear Regression (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Evaluate-simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="neural-networks">
    <h3>🧠 Explain a Neural Network Model</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Explain a Neural Network Mode.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="anova">
    <h3>📊 ANOVA Tests with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Explore one-way versus two-way ANOVA tests with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="hypothesis-testing">
    <h3>📊 Hypothesis Testing (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Hypothesis testing with Python (2).ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="hypothesis-testing">
    <h3>📊 Hypothesis Testing (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Hypothesis testing with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="multiple-regression">
    <h3>📈 Interpret Multiple Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Interpret multiple regression results with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="logistic-regression">
    <h3>📉 Logistic Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Logistic Regression.ipynb" target="_blank">View Notebook</a>
    

</div>
</div>
</div>
</div>
</div>
</div>
</div>

  <div id="recommendations"></div>
</section>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const topic = card.getAttribute("data-topic");
      localStorage.setItem("lastViewedTopic", topic);
    });
  });

  const lastTopic = localStorage.getItem("lastViewedTopic");
  const recommendationBox = document.getElementById("recommendations");

  if (lastTopic && recommendationBox) {
    const suggestions = {
      "cnn": "Lung Cancer Detection with CNN",
      "deep-learning": "Brain Tumor Classification with Deep Learning",
      "nlp": "Text Mining in Healthcare",
      "ai-ethics": "Bias Mitigation in AI"
    };

    const links = {
      "cnn": "/projects/lung-cancer-detection/",
      "deep-learning": "/projects/brain-tumor-classification/",
      "nlp": "/projects/text-mining-healthcare/",
      "ai-ethics": "/projects/bias-mitigation/"
    };

    if (suggestions[lastTopic]) {
      recommendationBox.innerHTML = `
        <h2>📌 Recommended for You</h2>
        <p>Since you viewed a <strong>${lastTopic.replace('-', ' ').toUpperCase()}</strong> project, you might like:</p>
        <a href="${links[lastTopic]}" class="cta-button">${suggestions[lastTopic]}</a>
      `;
    }
  }
});
 <div class="project-card" data-topic="security" title="Examines model vulnerability to crafted inputs">
    <h3>⚔️ Adversarial Attacks in ML</h3>
    <p>Exploring model robustness and security in ML.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Project</a>
  </div>

  <div class="project-card" data-topic="svm" title="Applies SVM for high-accuracy classification">
    <h3>🔍 Support Vector Machine (SVM)</h3>
    <p>Classifies data using a margin-optimized algorithm.</p>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/SVM_440.ipynb" target="_blank">View Project</a>
  </div>

  <div class="project-card" data-topic="numpy">
    <h3>📊 Activity: Arrays and Vectors with NumPy</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Activity_ Arrays and vectors with NumPy.py" target="_blank">View Script</a>
  </div>

  

  <div class="project-card" data-topic="reinforcement">
    <h3>🎮 Actor Critic Cartpole</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/actor_critic_cartpole.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Adversarial Attacks (Original)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Adversarial Attacks (Modified)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Adversarial_Attacks_modified-2.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🛡️ Assign Adversarial Attacks</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Assign_Adversarial_Attacks.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="security">
    <h3>🧠 Attack Defence (Imagenet v2.5)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/attack_defence_imagenet_v2.5.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="security">
    <h3>🧠 Attack Defence with Beagle (Final)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/attack_defence_imagenet_with_beagleFinal.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="bayesian">
    <h3>📈 Bayesian Classification</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/BayesianClassification.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="healthcare">
    <h3>🩺 Breast Cancer - Wisconsin Dataset</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Breast Cancer Wisconsin.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree (Simple)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build a decision tree.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="clustering">
    <h3>🔵 K-Means Clustering</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build a K-means model.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="xgboost">
    <h3>⚡ XGBoost Model with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build an XGBoost model with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest (Cross-Validation)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build and cross-validate a random forest model with Python.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Build-a decision tree with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="cnn">
    <h3>🧠 Chest CT Scan (CNN Final)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Chest_CT_Scan_CNN-Final.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="image-analysis">
    <h3>🖼️ CIFAR-10 Fake Image Analysis (Notebook)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/cifar10_fake_images_analysis.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="image-analysis">
    <h3>🖼️ CIFAR-10 Fake Image Analysis (Python Script)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/cifar10_fake_images_analysis.py" target="_blank">View Script</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Complete</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Complete_.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Complete (Alt)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Complete_1_.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="gan">
    <h3>🧬 CIFAR-10 GAN Final</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/CIFAR10GAN_Final.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="naive-bayes">
    <h3>📊 Naive Bayes Classifier</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Construct a Naive Bayes model with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="preprocessing">
    <h3>🧪 Data Preprocessing: German Dataset</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_german.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="mlp">
    <h3>🧠 Preprocessing with MLP</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_MLP.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="mlp">
    <h3>📊 MLP with Plots</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_MLP_with_plots.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest Preprocessing</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_RF.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="random-forest">
    <h3>🌲 Random Forest with Plots</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_RF_with_plots.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="preprocessing">
    <h3>🧪 Data Preprocessing v2</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/demo_optim_data_preproc_v2.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="decision-tree">
    <h3>🌳 Decision Tree (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/DicisionTree1.ipynb" target="_blank">View Notebook</a>
    <div class="project-card" data-topic="pyspark">
    <h3>⚙️ EMR Glue with PySpark</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/EMR_Glue_PySpark.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Simple Linear Regression (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Evaluate simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="linear-regression">
    <h3>📈 Simple Linear Regression (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Evaluate-simple linear regression.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="neural-networks">
    <h3>🧠 Explain a Neural Network Model</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Explain a Neural Network Mode.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="anova">
    <h3>📊 ANOVA Tests with Python</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Explore one-way versus two-way ANOVA tests with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="hypothesis-testing">
    <h3>📊 Hypothesis Testing (1)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Hypothesis testing with Python (2).ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="hypothesis-testing">
    <h3>📊 Hypothesis Testing (2)</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Hypothesis testing with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="multiple-regression">
    <h3>📈 Interpret Multiple Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Interpret multiple regression results with Python.ipynb" target="_blank">View Notebook</a>
  </div>

  <div class="project-card" data-topic="logistic-regression">
    <h3>📉 Logistic Regression</h3>
    <a href="https://github.com/DataForSolution/DataForSolution.github.io/blob/main/projects/Logistic Regression.ipynb" target="_blank">View Notebook</a>
    

</div>
</div>
</div>
</div>
</div>
</div>
</div>

  <div id="recommendations"></div>
</section>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const topic = card.getAttribute("data-topic");
      localStorage.setItem("lastViewedTopic", topic);
    });
  });

  const lastTopic = localStorage.getItem("lastViewedTopic");
  const recommendationBox = document.getElementById("recommendations");

  if (lastTopic && recommendationBox) {
    const suggestions = {
      "cnn": "Lung Cancer Detection with CNN",
      "deep-learning": "Brain Tumor Classification with Deep Learning",
      "nlp": "Text Mining in Healthcare",
      "ai-ethics": "Bias Mitigation in AI"
    };

    const links = {
      "cnn": "/projects/lung-cancer-detection/",
      "deep-learning": "/projects/brain-tumor-classification/",
      "nlp": "/projects/text-mining-healthcare/",
      "ai-ethics": "/projects/bias-mitigation/"
    };

    if (suggestions[lastTopic]) {
      recommendationBox.innerHTML = `
        <h2>📌 Recommended for You</h2>
        <p>Since you viewed a <strong>${lastTopic.replace('-', ' ').toUpperCase()}</strong> project, you might like:</p>
        <a href="${links[lastTopic]}" class="cta-button">${suggestions[lastTopic]}</a>
      `;
    }
  }
});
</section>

<style>
#projects {
  padding: 40px 20px;
  background-color: #1e1e1e; /* Dark gray background */
  text-align: center;
  color: #ffffff; /* White text */
}

#projects h1 {
  color: #ffffff;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

#projects p {
  color: #cccccc; /* Light gray paragraph text */
}

.project-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.project-card {
  background: #2c2c2c; /* Darker card background */
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.03);
}

.project-card h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #ffffff;
}

.project-card p {
  font-size: 0.9rem;
  color: #dddddd;
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
</script>

<style>
.cta-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.cta-button:hover {
  background-color: #388e3c;
}
</style>
