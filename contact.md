---
layout: default
title: "Contact & Portfolio"
permalink: /contact/
---

<section id="contact">
    <h1>Contact & Portfolio</h1>
    <p>
        Have questions or want to collaborate? Feel free to reach out to us via email, 
        or connect with us on LinkedIn or GitHub. We're excited to hear from you!
    </p>
    
    <!-- Profile Section -->
    <div class="profile-section">
        <img src="{{ '/assets/images/lissan-profile.jpg' | relative_url }}" alt="Lissan's Profile Picture" class="profile-pic">
        <h2>Lissan</h2>
        <p>AI & Data Science | Nuclear Medicine | Data Analyst</p>
        <p>
            Let's connect on 
            <a href="https://www.linkedin.com/in/lissan-analytic" 
               target="_blank" class="contact-link">
               LinkedIn
            </a> or check out my projects on 
            <a href="https://github.com/DataForSolution" 
               target="_blank" class="contact-link">
               GitHub
            </a>.
        </p>
    </div>

    <!-- Contact Form -->
    <div class="contact-form">
        <h2>Send Me a Message</h2>
        <form action="https://formsubmit.co/your-email@example.com" method="POST">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>

<section id="portfolio">
    <h2>My Portfolio</h2>
    <p>Explore a curated selection of my data science and AI projects. Use the filters to browse by category.</p>

    <!-- Filter Buttons -->
    <div class="portfolio-filters">
        <button class="filter-btn active" data-category="all">All</button>
        <button class="filter-btn" data-category="machine-learning">Machine Learning</button>
        <button class="filter-btn" data-category="ai">AI</button>
        <button class="filter-btn" data-category="data-visualization">Data Visualization</button>
    </div>

    <!-- Portfolio Grid -->
    <div class="portfolio-grid">
        <div class="portfolio-item" data-category="machine-learning">
            <h3>Project 1: Predictive Modeling</h3>
            <p><strong>Accuracy:</strong> 95%</p>
            <p><strong>Dataset Size:</strong> 10,000 rows</p>
            <p><strong>Insights:</strong> Achieved significant prediction accuracy using advanced regression models.</p>
        </div>
        <div class="portfolio-item" data-category="ai">
            <h3>Project 2: Chatbot Development</h3>
            <p><strong>Accuracy:</strong> 92%</p>
            <p><strong>Dataset Size:</strong> 5,000 intents</p>
            <p><strong>Insights:</strong> Built an AI-powered conversational agent for customer support.</p>
        </div>
        <div class="portfolio-item" data-category="data-visualization">
            <h3>Project 3: Interactive Dashboard</h3>
            <p><strong>Metrics:</strong> Real-time data integration</p>
            <p><strong>Insights:</strong> Designed a dashboard with dynamic filtering for decision-making.</p>
        </div>
        <div class="portfolio-item" data-category="machine-learning">
            <h3>Project 4: Classification Models</h3>
            <p><strong>Accuracy:</strong> 90%</p>
            <p><strong>Dataset Size:</strong> 15,000 rows</p>
            <p><strong>Insights:</strong> Applied advanced classification techniques for business predictions.</p>
        </div>
    </div>
</section>

<style>
    /* Profile Section */
    .profile-section {
        text-align: center;
        margin: 30px auto;
    }

    .profile-pic {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #4CAF50;
        margin-bottom: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    /* Contact Form Styling */
    .contact-form {
        text-align: center;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 20px auto;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }

    .contact-form button {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .contact-form button:hover {
        background-color: #007BFF;
    }

    /* Portfolio Section */
    #portfolio {
        padding: 50px 20px;
        background-color: #f4f4f4;
        color: #333;
        text-align: center;
    }

    .portfolio-filters {
        margin-bottom: 20px;
    }

    .filter-btn {
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        cursor: pointer;
        margin: 5px;
        font-size: 1em;
    }

    .filter-btn:hover {
        background-color: #007BFF;
    }

    .portfolio-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .portfolio-item {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        max-width: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: left;
    }

    .portfolio-item h3 {
        font-size: 1.5em;
        color: #4CAF50;
        margin-bottom: 10px;
    }
</style>
