---
layout: article_layout
group: "navigation"
title: Blog
tags: articles
image:
order: 3
tagline: 
---


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>