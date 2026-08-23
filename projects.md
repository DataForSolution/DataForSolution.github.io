---
layout: default
title: "Curated Projects"
permalink: /projects/
description: "Selected healthcare AI, responsible AI, machine learning, NLP, and data-engineering projects reviewed for provenance, methodology, and reproducibility."
---

<section class="project-intro">
  <h1>Curated Projects</h1>
  <p>
    This page highlights a selective portfolio of projects that have been reviewed for
    <strong>provenance, methodology, reproducibility, data boundaries, and claim quality</strong>.
    Older notebooks and course exercises are not promoted simply because they exist.
  </p>
  <p>
    Each featured project links to the maintained reconstruction in the
    <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio" target="_blank" rel="noopener">DataForSolution curated portfolio</a>,
    where the source, tests, audit notes, dependencies, and limitations are documented.
  </p>
</section>

<section class="projects-section">
  <h2>Healthcare &amp; Medical Imaging</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/petquant" target="_blank" rel="noopener">PETQuant Reliability</a></h3>
      <p>PET quantitative-ML reconstruction focused on small-sample limits, data-quality contracts, and defensible validation claims.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>Python</li><li>PET safety</li><li>Validation</li></ul>
    </article>
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification" target="_blank" rel="noopener">Chest CT Classification</a></h3>
      <p>Medical-imaging transfer-learning reconstruction emphasizing overfitting analysis, split integrity, and deterministic evaluation.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>TensorFlow</li><li>ResNet50</li><li>Medical imaging</li></ul>
    </article>
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/pima-diabetes-ml" target="_blank" rel="noopener">Pima Diabetes ML Evaluation</a></h3>
      <p>Leakage-safe SVM/MLP retrospective with clinically relevant missing-measurement handling and sensitivity/specificity reporting.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>scikit-learn</li><li>Clinical metrics</li><li>Leakage control</li></ul>
    </article>
  </div>

  <h2>Responsible &amp; Explainable AI</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/shap-lime-explainability" target="_blank" rel="noopener">SHAP + LIME Explainability</a></h3>
      <p>Class-aligned explanation workflow with corrected label ordering, scaled modeling, and defensible attribution aggregation.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>SHAP</li><li>LIME</li><li>Explainability</li></ul>
    </article>
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/fairness-evaluation" target="_blank" rel="noopener">Fairness Evaluation</a></h3>
      <p>Explicit group-fairness metrics and threshold analysis with fixed reference labels and documented AIF360 provenance.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>AIF360</li><li>Group fairness</li><li>Thresholds</li></ul>
    </article>
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/adversarial-robustness" target="_blank" rel="noopener">Adversarial Robustness</a></h3>
      <p>Bounded PGD and defense-evaluation reconstruction with preprocessing, threat-model, and denominator corrections.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>PyTorch</li><li>PGD</li><li>Threat models</li></ul>
    </article>
  </div>

  <h2>Applied Machine Learning &amp; NLP</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/insurance-fraud-classification" target="_blank" rel="noopener">Automobile Insurance Fraud Classification</a></h3>
      <p>Temporal, imbalance-aware evaluation showing why high overall accuracy can coexist with zero minority-class recall.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>PR-AUC</li><li>Temporal holdout</li><li>Imbalanced ML</li></ul>
    </article>
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/restaurant-sentiment-evaluation" target="_blank" rel="noopener">Restaurant Review Sentiment Evaluation</a></h3>
      <p>Leakage-safe NLP model comparison using fold-local TF-IDF pipelines and a clearly licensed UCI Yelp data source.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>TF-IDF</li><li>NLP</li><li>Cross-validation</li></ul>
    </article>
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/cifar10-generated-analysis" target="_blank" rel="noopener">CIFAR-10 Generated-Image Analysis</a></h3>
      <p>Classifier-response diagnostics for generated images with a clear separation between classifier confidence and perceptual realism.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>NumPy</li><li>Entropy</li><li>Generative AI</li></ul>
    </article>
  </div>

  <h2>Data Engineering</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3><a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/spark-glue-ingestion" target="_blank" rel="noopener">AWS Glue + EMR PySpark Ingestion Validation</a></h3>
      <p>Catalog-resolution and ingestion-quality engineering based on a historical embedded-header defect discovered in an EMR/Glue run.</p>
      <ul class="project-tags" aria-label="Core technologies and capabilities"><li>PySpark</li><li>AWS Glue</li><li>Data quality</li></ul>
    </article>
  </div>
</section>

<section class="project-note">
  <h2>Why only these projects?</h2>
  <p>
    The broader archive contains tutorials, course templates, duplicate notebooks, experiments with untraceable data,
    and projects whose original methodology does not support a strong public claim. Those materials are retained only when useful as historical evidence;
    they are not presented as equivalent to the maintained portfolio above.
  </p>
</section>

<style>
.project-intro,
.projects-section,
.project-note {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.25rem;
}
.project-intro {
  text-align: center;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2.5rem;
}
.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.25rem;
  background: #fff;
}
.project-card h3 {
  margin-top: 0;
}
.project-card h3 a {
  color: #123b63;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.18em;
}
.project-card p {
  color: #1f2937;
  line-height: 1.6;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}
.project-tags li {
  border: 1px solid #b9c8d8;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  background: #f3f7fb;
  color: #1f2937;
  font-size: 0.85rem;
  font-weight: 600;
}
.project-note {
  border-top: 1px solid #ddd;
}
</style>
