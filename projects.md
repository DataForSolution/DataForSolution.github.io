---
layout: default
title: "Our Projects"
permalink: /projects/
---

<section id="projects">
    <h1>Our Projects</h1>
    <p>Discover our cutting-edge projects in AI and data science, addressing real-world challenges with innovative solutions.</p>

    <!-- Projects List -->
    <div class="projects-list">
        <div class="project-card">
            <h2>🏥 Chest CT Scan Cancer Detection</h2>
            <p>AI-powered early detection using CT scans.</p>
            <a href="https://github.com/DataForSolution/Data-Solution/blob/main/chest_ct_scan_Cancer_Detection_cnn.ipynb" 
               target="_blank" class="project-link">
                View Project
            </a>
        </div>
        <div class="project-card">
            <h2>🔍 Adversarial Attacks in Machine Learning</h2>
            <p>Exploring AI security vulnerabilities and model robustness.</p>
            <a href="https://github.com/DataForSolution/Data-Solution/blob/main/Adversarial_Attacks.ipynb" 
               target="_blank" class="project-link">
                View Project
            </a>
        </div>
        <div class="project-card">
            <h2>📊 Support Vector Machine (SVM) for Classification</h2>
            <p>High-accuracy classification using Support Vector Machines in machine learning.</p>
            <a href="https://github.com/DataForSolution/Data-Solution/blob/main/projects/SVM_440.ipynb" 
               target="_blank" class="project-link">
                View Project
            </a>
        </div>
        <div class="project-card">
            <h2>📄 Chest Cancer Detection Documentation</h2>
            <p>A detailed PDF report on deep learning applications for lung cancer detection using CT scans.</p>
            <a href="{{ '/assets/documents/Chest_Cancer_Detection_Deep_Learning_CT_Scan.pdf' | relative_url }}" 
               target="_blank" class="project-link">
                View Document
            </a>
        </div>
    </div>
</section>
     <section id="collaborative-projects">
    <h2>Collaborative Projects</h2>
    <p>We’re proud to collaborate with talented professionals in the data science community. Explore some of our joint efforts below:</p>

    <div class="collaboration-grid">
        <div class="collaboration-card">
            <h3>Sentiment Analysis on Social Media</h3>
            <p>Collaborated with Dr. Jane Doe to analyze social media trends using advanced NLP models.</p>
            <a href="https://github.com/username/project-link" target="_blank" class="project-link">View Project</a>
        </div>
        <div class="collaboration-card">
            <h3>Dynamic Dashboard for COVID-19 Data</h3>
            <p>Partnered with the XYZ Organization to develop a real-time dashboard visualizing global COVID-19 data.</p>
            <a href="https://covid19-dashboard-link.com" target="_blank" class="project-link">View Dashboard</a>
        </div>
    </div>
</section>

<style>
    #collaborative-projects {
        padding: 50px 20px;
        background-color: #f9f9f9;
        color: #333;
    }

    #collaborative-projects h2 {
        color: #4CAF50;
        margin-bottom: 20px;
    }

    .collaboration-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .collaboration-card {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: left;
        max-width: 300px;
    }

    .collaboration-card h3 {
        font-size: 1.5em;
        color: #4CAF50;
        margin-bottom: 10px;
    }

    .collaboration-card p {
        margin-bottom: 15px;
        font-size: 1em;
    }

    .project-link {
        text-decoration: none;
        color: white;
        background-color: #007BFF;
        padding: 10px 15px;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
        transition: background-color 0.3s ease;
    }

    .project-link:hover {
        background-color: #0056b3;
    }
</style>


<section id="live-projects">
    <h2>Live Projects</h2>
    <p>Explore live, interactive data science projects showcasing real-time insights and dynamic visualizations.</p>

    <!-- Live Sentiment Analysis -->
    <div class="live-project">
        <h3>Real-Time Sentiment Analysis</h3>
        <p>Analyze live Twitter data to uncover sentiment trends and topics of discussion.</p>
        <iframe src="https://your-sentiment-project-url.com" width="100%" height="400"></iframe>
    </div>

    <!-- Dynamic Financial Data Visualization -->
    <div class="live-project">
        <h3>Dynamic Financial Data Visualization</h3>
        <p>Visualize real-time stock market data and trends.</p>
        <iframe src="https://your-financial-project-url.com" width="100%" height="400"></iframe>
    </div>
</section>

<style>
    /* Projects Section Styling */
    #projects {
        background-color: #d4edda; /* Light gray/green background */
        padding: 50px 20px;
        text-align: center;
    }

    #projects h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #4CAF50; /* Green for headings */
        margin-bottom: 20px;
    }

    #projects p {
        font-size: 1.2em;
        margin-bottom: 40px;
        color: #333;
    }

    .projects-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .project-card {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: left;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .project-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }

    .project-card h2 {
        font-size: 1.5em;
        color: #4CAF50; /* Green for headings */
        margin-bottom: 10px;
    }

    .project-card p {
        font-size: 1em;
        color: #555;
        line-height: 1.6;
    }

    .project-link {
        display: inline-block;
        margin-top: 10px;
        padding: 10px 15px;
        color: white;
        background-color: #007BFF; /* Blue for button */
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    .project-link:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }

    /* Live Projects Section Styling */
    #live-projects {
        padding: 50px 20px;
        background-color: #f4f4f4;
        color: #333;
        text-align: center;
    }

    .live-project {
        margin-bottom: 40px;
    }

    .live-project h3 {
        font-size: 1.8em;
        color: #4CAF50;
        margin-bottom: 10px;
    }

    .live-project iframe {
        border: none;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .projects-list {
            flex-direction: column;
            align-items: center;
        }

        .project-card {
            width: 100%;
            max-width: 400px;
        }

        .live-project iframe {
            width: 100%;
        }
    }
</style>
