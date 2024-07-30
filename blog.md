---
layout: default
title: Blog
permalink: /blog/
---
<h1>Blog</h1>
<ul>
    {% for post in site.posts %}
    <li class="post">
        <a href="{{ post.url }}" class="link">
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
        </a>
    </li>
    {% endfor %}
</ul>