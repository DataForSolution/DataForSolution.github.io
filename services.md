---
layout: default
title: "Our Services"
permalink: /services/
---

<section id="services">
    <h1>Our Services</h1>
    <p>We offer a wide range of data-driven services to help your business thrive.</p>

    <!-- Services List -->
    <div class="services-list">
        <div class="service-card" data-service-id="business-analytics">
            <h2>Business Analytics</h2>
            <button class="view-more-btn">View More</button>
            <div class="service-details" style="display: none;">
                <p>Drive business decisions with AI-powered insights and predictive analytics.</p>
            </div>
        </div>
        <div class="service-card" data-service-id="data-entry">
            <h2>Data Entry</h2>
            <button class="view-more-btn">View More</button>
            <div class="service-details" style="display: none;">
                <p>Accurate and efficient data entry services to ensure reliable records.</p>
            </div>
        </div>
        <div class="service-card" data-service-id="data-reporting">
            <h2>Data Reporting</h2>
            <button class="view-more-btn">View More</button>
            <div class="service-details" style="display: none;">
                <p>Automated reports and data visualization to help you make informed decisions.</p>
            </div>
        </div>
        <div class="service-card" data-service-id="strategic-planning">
            <h2>Strategic Planning</h2>
            <button class="view-more-btn">View More</button>
            <div class="service-details" style="display: none;">
                <p>Align your business strategies with data insights and AI-driven decision-making.</p>
            </div>
        </div>
        <div class="service-card" data-service-id="healthcare-consulting">
            <h2>Healthcare Consulting</h2>
            <button class="view-more-btn">View More</button>
            <div class="service-details" style="display: none;">
                <p>Providing AI-powered solutions for healthcare analytics and medical imaging.</p>
            </div>
        </div>
        <div class="service-card" data-service-id="financial-analysis">
            <h2>Financial Analysis</h2>
            <button class="view-more-btn">View More</button>
            <div class="service-details" style="display: none;">
                <p>Financial forecasting, fraud detection, and investment insights.</p>
            </div>
        </div>
    </div>
</section>

<script>
    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isVisible = details.style.display === 'block';
            details.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'View More' : 'View Less';
        });
    });
</script>

<style>
    .view-more-btn {
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 0.9em;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
    }

    .view-more-btn:hover {
        background-color: #0056b3;
    }

    .service-details {
        margin-top: 15px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 5px;
        display: none;
    }
</style>
