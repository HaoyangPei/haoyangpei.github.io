---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
description: "Education, work and research experience, publications, conference proceedings, awards, teaching, and technical expertise."
redirect_from:
  - /resume
---

{% include base_path %}

## Contact

- Email: [Haoyang.Pei@nyulangone.org](mailto:Haoyang.Pei@nyulangone.org) · [hp2173@nyu.edu](mailto:hp2173@nyu.edu)
- Phone: +1 (347) 248-4237
- [Google Scholar](https://scholar.google.com/citations?user=AgCKjicAAAAJ&hl=en&oi=ao)

## Research interests

Deep learning, computer vision, low-level vision, MRI reconstruction and denoising, and generative models.

## Education

- **PhD, Electrical and Computer Engineering**, New York University, Tandon School of Engineering — September 2022–Present
- **MS, Computer Engineering**, New York University, Tandon School of Engineering — September 2020–May 2022
- **BE, Electrical Engineering and Automation**, North China Electric Power University — September 2013–June 2017

## Work experience

{% for experience in site.data.experience %}
<div class="cv-experience">
  <div>
    <h3>{{ experience.organization }}</h3>
    <p>{{ experience.role }} · {{ experience.location }}</p>
  </div>
  <span>{{ experience.period }}</span>
  {% if experience.summary %}<p class="cv-experience__summary">{{ experience.summary }}</p>{% endif %}
</div>
{% endfor %}

## Research experience

### DeepGrasp: All-in-One Self-Supervised Model for Accelerated 4D Radial MRI

*Center for Advanced Imaging Innovation and Research, NYU Langone Health · Mentors: Dr. Li Feng and Dr. Yao Wang*

- Developed a unified self-supervised framework for highly accelerated 4D golden-angle radial dynamic MRI at 2–3 spokes per frame.
- Curated a 22,307-slice multi-organ dataset spanning brain, neck, breast, liver, prostate, pediatric, and lung imaging protocols.
- Trained a single foundation-style model across spatial resolutions, temporal dynamics, and DCE/non-DCE applications.
- Introduced a subspace-constrained scheme that reduced inference time to 200–300 ms per slice and improved out-of-domain performance over GRASP-Pro.

### Hybrid Learning for Joint MRI Reconstruction and Denoising

*Center for Advanced Imaging Innovation and Research, NYU Langone Health · Mentors: Dr. Li Feng and Dr. Yao Wang*

- Combined self-supervised and supervised training using only low-SNR reference data.
- Evaluated the approach on simulated and real lung and brain MRI at 0.55 T and 0.3 T.
- Achieved stronger reconstruction quality across acceleration factors than standard supervised and self-supervised baselines.

### DeepEMC-T2 Mapping

*Center for Advanced Imaging Innovation and Research, NYU Langone Health · Mentors: Dr. Li Feng and Dr. Yao Wang*

- Designed an efficient modified U-Net to estimate T2 and proton-density maps directly from multi-echo spin-echo images without dictionary matching.
- Achieved 3%–12% T2 error and 0.8%–1.7% proton-density error using as few as 3–10 echoes.

### Rapid 3D T1 Mapping with Deep Learning-Assisted LLIR MRI

*Center for Advanced Imaging Innovation and Research, NYU Langone Health · Mentors: Dr. Li Feng and Dr. Yao Wang*

- Proposed a dual-residual U-Net for continuous 3D LLIR imaging without idle time.
- Reduced acquisition time from 169 seconds to 76 seconds while maintaining accurate T1 mapping.

### DSC-Derived Perfusion Map Generation from DCE MRI

*BMEII, Icahn School of Medicine at Mount Sinai · Mentor: Dr. Xiang Xu*

- Developed a modified conditional GAN to synthesize DSC-MRI parameter maps from DCE MRI.
- Evaluated the model in healthy participants and patients with brain tumors, reducing the need for a second contrast injection and mitigating susceptibility artifacts.

### Wireless Offloading for Wearable Navigation

*NSF SCC Project / NYU Video Lab · Mentor: Dr. Yao Wang*

- Studied the effects of compression, bitrate, and object distance on detection performance for visually impaired navigation.
- Implemented YOLOv5 and Resolution-Adaptive YOLO on compressed urban video and developed a distance-estimation model.

### Absolute Depth Estimation from Monocular Images

*NSF SCC Project / NYU Video Lab · Mentor: Dr. Yao Wang*

- Developed RANSAC-based and self-supervised approaches for recovering absolute depth from a Dense Prediction Transformer.
- Collected a nine-video New York City dataset with the VIS4ION backpack and achieved 0.39 m mean absolute error for distances within 10 m.

## Teaching experience

- **Teaching Assistant, ECE 6123 — Image and Video Processing**, NYU Tandon School of Engineering — February–May 2022

## Publications

<ul class="cv-list">{% assign journal_publications = site.publications | where: "category", "manuscripts" %}{% assign book_publications = site.publications | where: "category", "books" %}{% assign publications_by_date = journal_publications | concat: book_publications | sort: "date" | reverse %}{% for post in publications_by_date %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Conference proceedings

<ol class="cv-conference-list">{% for conference in site.data.conferences %}
  <li>
    <a href="{{ conference.url }}">{{ conference.title }}</a>
    {% assign highlighted_authors = conference.authors | replace: "Haoyang Pei", "<strong>Haoyang Pei</strong>" %}
    <span>{{ highlighted_authors }}</span>
    <span>{{ conference.event }}, {{ conference.year }} · {{ conference.format }}{% if conference.recognition and conference.recognition != "" %} · {{ conference.recognition }}{% endif %}</span>
  </li>
{% endfor %}</ol>

## Awards

- Summa Cum Laude, ISMRM, 2026
- 2nd Place Abstract Award, ISMRM AI/ML Study Group, 2026
- 1st Place Abstract Award, ISMRM Low Field Study Group, 2025
- Magna Cum Laude, ISMRM, 2025
- Dr. Li’s Publication Award, NYU Tandon, 2025
- Magna Cum Laude, ISMRM, 2024
- Magna Cum Laude, ISMRM, 2023
- Summa Cum Laude, ISMRM, 2023

## Skills and interests

Python, PyTorch, PowerPoint design, Photoshop, Lightroom, and photography.
