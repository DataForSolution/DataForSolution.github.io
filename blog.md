---
layout: default
title: "Blog"
permalink: /blog/
---

<section id="blog">
    <h1>Latest Articles</h1>
    <p>Explore our latest insights, tutorials, and updates on AI, data science, and analytics.</p>

    <!-- Blog Post List -->
    <div class="blog-list">
        {% for post in site.posts %}
            <div class="blog-card">
                <h3><a href="{{ post.url }}" class="blog-link">{{ post.title }}</a></h3>
                <p>{{ post.excerpt }}</p>
                <a href="{{ post.url }}" class="read-more-link">Read More</a>
            </div>
        {% endfor %}
    </div>
</section>

<style>
    /* Blog Section Styling */
    #blog {
        background-color: #d4edda; /* Light gray/green background */
        padding: 50px 20px;
        text-align: center;
    }

    #blog h1 {
        font-size: 2.5em;
        font-weight: bold;
        color: #4CAF50; /* Green for headings */
        margin-bottom: 20px;
    }

    #blog p {
        font-size: 1.2em;
        margin-bottom: 40px;
        color: #333;
    }

    .blog-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .blog-card {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: left;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .blog-card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }

    .blog-link {
        color: #007BFF; /* Blue for blog links */
        text-decoration: none;
        font-size: 1.5em;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
        transition: color 0.3s ease;
    }

    .blog-link:hover {
        color: #0056b3; /* Darker blue on hover */
    }

    .read-more-link {
        color: #4CAF50; /* Green for 'Read More' link */
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin-top: 10px;
        transition: color 0.3s ease;
    }

    .read-more-link:hover {
        color: #007BFF; /* Blue on hover */
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .blog-list {
            flex-direction: column;
            align-items: center;
        }

        .blog-card {
            width: 100%;
            max-width: 400px;
        }
    }
</style>
