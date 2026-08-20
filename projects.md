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
      <h3>PETQuant Reliability</h3>
      <p>PET quantitative-ML reconstruction focused on small-sample limits, data-quality contracts, and defensible validation claims.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/petquant" target="_blank" rel="noopener">View project</a>
    </article>
    <article class="project-card">
      <h3>Chest CT Classification</h3>
      <p>Medical-imaging transfer-learning reconstruction emphasizing overfitting analysis, split integrity, and deterministic evaluation.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/chest-ct-classification" target="_blank" rel="noopener">View project</a>
    </article>
    <article class="project-card">
      <h3>Pima Diabetes ML Evaluation</h3>
      <p>Leakage-safe SVM/MLP retrospective with clinically relevant missing-measurement handling and sensitivity/specificity reporting.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/pima-diabetes-ml" target="_blank" rel="noopener">View project</a>
    </article>
  </div>

  <h2>Responsible &amp; Explainable AI</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3>SHAP + LIME Explainability</h3>
      <p>Class-aligned explanation workflow with corrected label ordering, scaled modeling, and defensible attribution aggregation.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/shap-lime-explainability" target="_blank" rel="noopener">View project</a>
    </article>
    <article class="project-card">
      <h3>Fairness Evaluation</h3>
      <p>Explicit group-fairness metrics and threshold analysis with fixed reference labels and documented AIF360 provenance.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/fairness-evaluation" target="_blank" rel="noopener">View project</a>
    </article>
    <article class="project-card">
      <h3>Adversarial Robustness</h3>
      <p>Bounded PGD and defense-evaluation reconstruction with preprocessing, threat-model, and denominator corrections.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/adversarial-robustness" target="_blank" rel="noopener">View project</a>
    </article>
  </div>

  <h2>Applied Machine Learning &amp; NLP</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3>CIFAR-10 Generated-Image Analysis</h3>
      <p>Classifier-response diagnostics for generated images with a clear separation between classifier confidence and perceptual realism.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/cifar10-generated-analysis" target="_blank" rel="noopener">View project</a>
    </article>
    <article class="project-card">
      <h3>Automobile Insurance Fraud Classification</h3>
      <p>Temporal, imbalance-aware evaluation showing why high overall accuracy can coexist with zero minority-class recall.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/insurance-fraud-classification" target="_blank" rel="noopener">View project</a>
    </article>
    <article class="project-card">
      <h3>Restaurant Review Sentiment Evaluation</h3>
      <p>Leakage-safe NLP model comparison using fold-local TF-IDF pipelines and a clearly licensed UCI Yelp data source.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/restaurant-sentiment-evaluation" target="_blank" rel="noopener">View project</a>
    </article>
  </div>

  <h2>Data Engineering</h2>
  <div class="project-grid">
    <article class="project-card">
      <h3>AWS Glue + EMR PySpark Ingestion Validation</h3>
      <p>Catalog-resolution and ingestion-quality engineering based on a historical embedded-header defect discovered in an EMR/Glue run.</p>
      <a href="https://github.com/DataForSolution/Data-Solution/tree/Master/portfolio/spark-glue-ingestion" target="_blank" rel="noopener">View project</a>
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
.project-card a {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 600;
}
.project-note {
  border-top: 1px solid #ddd;
}
</style>
