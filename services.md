---
layout: default
title: "Our Services"
permalink: /services/
---

<section id="services">
    <h1>Our Services</h1>
    <p>Explore the comprehensive services we offer to drive your business forward with data and AI-powered insights.</p>

    <!-- Services List -->
    <div class="services-container">
        <ul>
            <li>
                <a href="#" class="service-link" data-service-id="business-analytics">
                    <span>Business Analytics</span>
                </a>
            </li>
            <li>
                <a href="#" class="service-link" data-service-id="data-entry">
                    <span>Data Entry</span>
                </a>
            </li>
            <li>
                <a href="#" class="service-link" data-service-id="data-reporting">
                    <span>Data Reporting</span>
                </a>
            </li>
            <li>
                <a href="#" class="service-link" data-service-id="strategic-planning">
                    <span>Strategic Planning</span>
                </a>
            </li>
            <li>
                <a href="#" class="service-link" data-service-id="healthcare-consulting">
                    <span>Healthcare Consulting</span>
                </a>
            </li>
            <li>
                <a href="#" class="service-link" data-service-id="financial-analysis">
                    <span>Financial Analysis</span>
                </a>
            </li>
            <li>
                <a href="#" class="service-link" data-service-id="market-research">
                    <span>Market Research</span>
                </a>
            </li>
        </ul>
    </div>

    <!-- Service Details Section -->
    <div id="service-details" class="service-details">
        <h3>Select a Service</h3>
        <p>Click on a service to learn more about what we offer.</p>
    </div>
</section>

<script>
    const serviceDescriptions = {
        "business-analytics": {
            "title": "Business Analytics",
            "description": "Gain insights into your business operations through AI-powered data analysis and visualization."
        },
        "data-entry": {
            "title": "Data Entry",
            "description": "We provide accurate and efficient data entry services, ensuring reliable records for your business."
        },
        "data-reporting": {
            "title": "Data Reporting",
            "description": "Custom-built reports with dynamic visualizations to make data-driven decisions easier."
        },
        "strategic-planning": {
            "title": "Strategic Planning",
            "description": "Align data strategies with your business goals using our expert strategic analysis."
        },
        "healthcare-consulting": {
            "title": "Healthcare Consulting",
            "description": "Leverage AI-powered healthcare solutions for analytics, imaging, and diagnostics."
        },
        "financial-analysis": {
            "title": "Financial Analysis",
            "description": "Utilize AI for budgeting, fraud detection, and investment optimization."
        },
        "market-research": {
            "title": "Market Research",
            "description": "Gain competitive intelligence with AI-driven market trend analysis."
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.service-link').forEach(service => {
            service.addEventListener('click', (event) => {
                event.preventDefault();
                const serviceId = service.dataset.serviceId;
                const serviceDetails = document.getElementById('service-details');

                if (serviceDescriptions[serviceId]) {
                    serviceDetails.innerHTML = `
                        <h3>${serviceDescriptions[serviceId].title}</h3>
                        <p>${serviceDescriptions[serviceId].description}</p>
                    `;
                    serviceDetails.style.display = "block";
                } else {
                    serviceDetails.innerHTML = "<p>Details for this service are not available.</p>";
                    serviceDetails.style.display = "block";
                }
            });
        });
    });
</script>

<style>
    #services {
        background-color: #f9f9f9; 
        padding: 50px 20px;
        text-align: center;
    }

    #services h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #4CAF50;
        margin-bottom: 20px;
    }

    #services p {
        font-size: 1.2em;
        margin-bottom: 40px;
        color: #333;
    }

    .services-container ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 0;
        margin: 0;
    }

    .services-container li {
        flex: 0 1 calc(33.333% - 20px); 
        text-align: center;
    }

    .service-link {
        text-decoration: none;
        color: #333;
        display: block;
        transition: transform 0.3s ease;
    }

    .service-link:hover {
        transform: scale(1.05);
    }

    .service-details {
        margin-top: 40px;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: left;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        display: none;
    }

    .service-details h3 {
        font-size: 1.5em;
        color: #4CAF50;
    }
</style>
