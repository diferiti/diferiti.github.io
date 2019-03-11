---
layout: 404_layout
title: Tags
---
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
<!-- site_tags: {{ site_tags }} -->
{% assign tag_words = site_tags | split:',' | sort %}
<!-- tag_words: {{ tag_words }} -->

<div id="tags">
  <ul class="tag-box inline">
  {% for tag in tag_words %}
    <li><a href="#{{ tag | cgi_escape }}">{{ tag }} <span>{{ site.tags[tag] | size }}</span></a></li>
  {% endfor %}
  </ul>

  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
  <ul class="pages">
    {% for pages in site.tags[this_word] %}{% if page.title != null %}
    <li itemscope><span class="entry-date"><time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">{{ page.date | date: "%B %d, %Y" }}</time></span> &raquo; {% if page.category == "speaking" %}<i class="fa fa-microphone"></i> {% endif %}<a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}
</div>