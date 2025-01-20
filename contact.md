---
layout: default
title: "Contact Us"
permalink: /contact/
---

<section id="contact">
    <h1>Contact Us</h1>
    <p>Have questions or want to collaborate? Feel free to reach out to us via email or connect with us on GitHub.</p>
    <!-- Profile Section -->
    <div class="profile-section">
        <img src="{{ '/assets/images/lissan-profile.jpg' | relative_url }}" alt="Lissan's Profile Picture" class="profile-pic">
        <h2>Lissan</h2>
        <p>AI & Data Science Enthusiast</p>
        <p>
            Let's connect on 
            <a href="https://www.linkedin.com/in/lissan-analytic?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bd17iurqvQ0SBEBUQxrMHXw%3D%3D" 
               target="_blank">
               LinkedIn
            </a>.
        </p>
    </div>

    <!-- Contact Information -->
    <p>Email: <a href="mailto:kent.sew@gmail.com">kent.sew@gmail.com</a></p>
    <p>GitHub: <a href="https://github.com/DataForSolution" target="_blank">DataForSolution</a></p>
    <div class="contact-details">
        <p><strong>Email:</strong> <a href="mailto:kent.sew@gmail.com" class="contact-link">kent.sew@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/DataForSolution" target="_blank" class="contact-link">DataForSolution</a></p>
    </div>

    <form id="contact-form" action="#" method="POST">
        <h2>Send Us a Message</h2>
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
    </form>
</section>

<style>
    /* Contact Section Styling */
    #contact {
        background-color: #d4edda; /* Light gray/green background */
        padding: 50px 20px;
        text-align: center;
    }

    #contact h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #4CAF50; /* Green for headings */
        margin-bottom: 20px;
    }

    #contact p {
        font-size: 1.2em;
        margin-bottom: 40px;
        color: #333;
    }

    .contact-details p {
        font-size: 1.2em;
        margin: 10px 0;
    }

    .contact-link {
        color: #007BFF; /* Blue for links */
        text-decoration: none;
        font-weight: bold;
    }

    .contact-link:hover {
        text-decoration: underline;
    }

    /* Contact Form Styling */
    #contact-form {
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 20px auto 0;
        text-align: left;
    }

    #contact-form h2 {
        font-size: 1.8em;
        color: #4CAF50; /* Green for heading */
        margin-bottom: 20px;
    }

    #contact-form input, #contact-form textarea {
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

    #contact-form input:focus, #contact-form textarea:focus {
        border-color: #007BFF; /* Blue focus border */
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
        background-color: #007BFF; /* Blue on hover */
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        #contact {
            padding: 30px 20px;
        }

        #contact h1 {
            font-size: 2em;
        }

        #contact-form {
            padding: 20px;
        }
    }
</style>
