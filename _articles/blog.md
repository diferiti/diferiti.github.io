---
layout: article_layout
group: "navigation"
title: Blog
tags: articles
image:
order: 3
tagline: 
---

{% for post in site.posts %}
      {{ post.content | markdownify }}
{% endfor %}