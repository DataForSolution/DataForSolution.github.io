---
layout: default
title: "Our Services"
permalink: /services/
---

<section id="services">
    <h1>Our Services</h1>
    <p>We offer a wide range of data-driven services to help your business thrive in a competitive world.</p>

    <!-- Services List -->
    <div class="services-list">
        <div class="service-card">
            <h2>Business Analytics</h2>
            <p>Drive business decisions with AI-powered data insights and analytics.</p>
        </div>
        <div class="service-card">
            <h2>Data Entry</h2>
            <p>Accurate and efficient data entry services to ensure reliable records.</p>
        </div>
        <div class="service-card">
            <h2>Data Reporting</h2>
            <p>Create custom data reports and visualization for effective decision-making.</p>
        </div>
        <div class="service-card">
            <h2>Strategic Planning</h2>
            <p>Align data strategies with your business goals for success.</p>
        </div>
        <div class="service-card">
            <h2>Healthcare Consulting</h2>
            <p>Providing AI-powered solutions for healthcare analytics and imaging.</p>
        </div>
        <div class="service-card">
            <h2>Financial Analysis</h2>
            <p>Optimize budgeting and investments with data-driven financial insights.</p>
        </div>
    </div>
</section>

<style>
    /* Services Section Styling */
    #services {
        background-color: #d4edda; /* Light gray/green background */
        padding: 50px 20px;
        text-align: center;
    }

    #services h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #4CAF50; /* Green for headings */
        margin-bottom: 20px;
    }

    #services p {
        font-size: 1.2em;
        margin-bottom: 40px;
        color: #333;
    }

    .services-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .service-card {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: left;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .service-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }

    .service-card h2 {
        font-size: 1.5em;
        color: #4CAF50; /* Green for headings */
        margin-bottom: 10px;
    }

    .service-card p {
        font-size: 1em;
        color: #555;
        line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .services-list {
            flex-direction: column;
            align-items: center;
        }

        .service-card {
            width: 100%;
            max-width: 400px;
        }
    }
</style>
