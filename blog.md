---
layout: default
title: Blog
permalink: /blog/
---

<h1>Latest Articles</h1>
{% for post in site.posts %}
    <div>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
    </div>
  {% include navigation.html %}

{% endfor %}
