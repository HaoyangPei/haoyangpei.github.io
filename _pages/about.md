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

<section class="home__section" aria-labelledby="professional-experience-heading">
  <h2 class="section-label" id="professional-experience-heading">Professional experience</h2>
  <div class="experience-list">
    {% for experience in site.data.experience %}
      <details class="experience-item">
        <summary class="experience-item__summary">
          <span class="experience-item__heading">
            <span>
              <span class="experience-item__organization" role="heading" aria-level="3">{{ experience.organization }}</span>
              <span class="experience-item__role">{{ experience.role }}</span>
            </span>
            <span class="experience-item__period">{{ experience.period }}</span>
          </span>
          <span class="experience-item__toggle" aria-hidden="true"></span>
        </summary>
        <div class="experience-item__details">
          <p class="experience-item__location">{{ experience.location }}</p>
          {% if experience.details %}
            <ul>
              {% for detail in experience.details %}<li>{{ detail }}</li>{% endfor %}
            </ul>
          {% endif %}
          {% if experience.project_url %}<a class="experience-item__project-link" href="{{ experience.project_url | prepend: base_path }}">Project portfolio &rarr;</a>{% endif %}
        </div>
      </details>
    {% endfor %}
  </div>
</section>
