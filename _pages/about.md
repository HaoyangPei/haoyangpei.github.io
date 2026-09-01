---
layout: home
permalink: /
title: "Home"
description: "Haoyang Pei is a Ph.D. candidate in Electrical Engineering at New York University working on AI for healthcare and medical imaging."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home__section" aria-labelledby="work-experience-heading">
  <h2 class="section-label" id="work-experience-heading">Work experience</h2>
  <div class="experience-list">
    {% for experience in site.data.experience %}
      <article class="experience-item">
        <div class="experience-item__heading">
          <div>
            <h3>{{ experience.organization }}</h3>
            <p class="experience-item__role">{{ experience.role }}</p>
          </div>
          <p class="experience-item__period">{{ experience.period }}</p>
        </div>
        <p class="experience-item__summary">{{ experience.summary }}</p>
        <p class="experience-item__location">{{ experience.location }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home__section" aria-labelledby="selected-work-heading">
  <h2 class="section-label" id="selected-work-heading">Selected work</h2>
  <div>
    <ol class="selected-work">
      {% assign journal_publications = site.publications | where: "category", "manuscripts" %}
      {% assign book_publications = site.publications | where: "category", "books" %}
      {% assign selected_publications = journal_publications | concat: book_publications | sort: "date" | reverse %}
      {% for post in selected_publications limit: 3 %}
        <li class="selected-work__item">
          <span class="selected-work__year">{{ post.date | date: "%Y" }}</span>
          <div>
            <h3 class="selected-work__title"><a href="{{ post.url | prepend: base_path }}">{{ post.title }}</a></h3>
            <p class="selected-work__venue">{{ post.venue }}</p>
          </div>
        </li>
      {% endfor %}
    </ol>
    <a class="section-link" href="{{ base_path }}/publications/">All publications &rarr;</a>
  </div>
</section>

<section class="home__section" aria-labelledby="collaboration-heading">
  <h2 class="section-label" id="collaboration-heading">Collaboration</h2>
  <p class="contact-note">I am interested in collaborations at the intersection of computational imaging, machine learning, and clinical translation. <a href="mailto:{{ site.author.email }}">Send me an email</a> or connect through <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
</section>
