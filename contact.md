---
layout: default
title: "Contact Us"
permalink: /contact/
---

<section id="contact">
    <h1>Contact Us</h1>
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
    <form id="contact-form" action="#" method="POST">
        <h2>Send Us a Message</h2>
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
    </form>
</section>

<!-- Styles for Contact Section -->
<style>
    /* Contact Section Styling */
    #contact {
        background-color: #f9f9f9;
        padding: 50px 20px;
        text-align: center;
        color: #333;
    }

    #contact h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #4CAF50;
        margin-bottom: 20px;
    }

    #contact p {
        font-size: 1.2em;
        margin-bottom: 20px;
        line-height: 1.6;
    }

    .contact-link {
        color: #007BFF;
        text-decoration: none;
        font-weight: bold;
    }

    .contact-link:hover {
        text-decoration: underline;
        color: #0056b3;
    }

    /* Profile Section */
    .profile-section {
        margin: 30px auto;
        text-align: center;
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

    .profile-section h2 {
        font-size: 1.8em;
        margin-bottom: 10px;
    }

    .profile-section p {
        font-size: 1.2em;
        margin-bottom: 15px;
    }

    /* Contact Form */
    #contact-form {
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 20px auto;
        text-align: left;
    }

    #contact-form h2 {
        font-size: 1.8em;
        color: #4CAF50;
        margin-bottom: 20px;
    }

    #contact-form input,
    #contact-form textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }

    #contact-form textarea {
        resize: none;
        height: 100px;
    }

    #contact-form input:focus,
    #contact-form textarea:focus {
        border-color: #4CAF50;
        outline: none;
    }

    #contact-form button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 100%;
    }

    #contact-form button:hover {
        background-color: #007BFF;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        #contact h1 {
            font-size: 2em;
        }

        .profile-pic {
            width: 120px;
            height: 120px;
        }

        #contact-form {
            padding: 20px;
        }
    }
</style>
