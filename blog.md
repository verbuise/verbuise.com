---
layout: default
title: "Blog"
section_label: "Writing"
lead: "Thinking on global products, market adaptation, and building software that travels."
permalink: /blog
description: "The Verbuise blog — thinking on globalization, market adaptation, and building products that work everywhere."
---

<ul class="blog-list">
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
            <span class="blog-date">{{ post.date | date: "%B %d, %Y" }}</span>
        </a>
    </li>
    {% endfor %}
</ul>
