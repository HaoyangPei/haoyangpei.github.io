---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education
- **PhD, Electrical and Computer Engineering**, New York University (2022–present)
- **MS, Computer Engineering**, New York University (2020–2022)
- **BE, Electrical Engineering and Automation**, North China Electric Power University (2013–2017)

## Research experience (Machine Learning)
- **DeepGrasp: All-in-One Self-Supervised 4D Radial MRI Reconstruction** — Center for Advanced Imaging Innovation and Research, NYU Langone Health (mentors: Dr. Li Feng, Dr. Yao Wang)
  - Built a unified self-supervised framework for 2–3 spokes/frame 4D golden-angle radial MRI using a 22,307-slice multi-organ dataset.
  - Trained a single foundation-style model across organs, spatial resolutions, and dynamics; enabled 200–300 ms/slice inference via subspace-constrained reconstruction.
  - Delivered strong out-of-domain generalization over GRASP-Pro for both DCE and non-DCE applications.
- **Hybrid Learning for Joint MRI Reconstruction and Denoising** — NYU Langone Health (mentors: Dr. Li Feng, Dr. Yao Wang)
  - Combined self-supervised and supervised stages to reconstruct accelerated low-field MRI using only low-SNR references.
  - Demonstrated superior quality across lung and brain datasets at 0.55 T and 0.3 T versus standard baselines.
- **DeepEMC-T2 Mapping** — NYU Langone Health (mentors: Dr. Li Feng, Dr. Yao Wang)
  - Designed a modified U-Net to estimate T2 and proton density from multi-echo spin-echo images without a dictionary.
  - Achieved 3–12% T2 error and <2% PD error using as few as 3–10 echoes.
- **Rapid 3D T1 Mapping with Deep Learning-Assisted LLIR MRI** — NYU Langone Health (mentors: Dr. Li Feng, Dr. Yao Wang)
  - Proposed a dual-residual U-Net for 3D T1 maps from continuous LLIR imaging and reduced acquisition time from 169 s to 76 s.
- **DSC-Derived Perfusion Maps from DCE MRI** — BMEII, Icahn School of Medicine at Mount Sinai (mentor: Dr. Xiang Xu)
  - Created a conditional GAN to synthesize DSC-MRI parameter maps from DCE MRI, avoiding a second contrast injection and mitigating susceptibility artifacts.
- **Edge-Assisted Perception for Wearable Navigation** — NYU Video Lab (mentor: Dr. Yao Wang)
  - Evaluated object detection under compression and distance constraints; implemented YOLOv5 and RA-YOLO on real-world urban footage.

## Work experience
- **Research Assistant (Machine Learning)** — Center for Advanced Imaging Innovation and Research, NYU Langone Health (Feb 2023–present)
- **Research Assistant (Machine Learning)** — NYU Video Lab, New York University (Jun 2021–present)
- **Research Assistant (Machine Learning)** — BMEII, Icahn School of Medicine at Mount Sinai (Jun 2022–Feb 2023)
- **Electrical Engineer** — State Grid Corporation of China (Aug 2017–Aug 2021)

## Teaching experience
- **Teaching Assistant, ECE 6123 - Image and Video Processing** — NYU Tandon School of Engineering (Feb 2022–May 2022)

## Awards
- 1st Place Abstract Award, ISMRM Low Field Study Group (2025)
- Magna Cum Laude, ISMRM (2023, 2024, 2025)
- Summa Cum Laude, ISMRM (2023)
- Dr. Li's Publication Award, NYU Tandon (2025)

## Skills & interests
Python, PyTorch, MRI reconstruction and quantitative imaging, scientific visualization, PowerPoint design, Photoshop, Lightroom, photography.

## Publications
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Talks
<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>

## Teaching
<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Service and leadership
- Built machine learning pipelines and data curation workflows for multi-organ radial MRI and wearable perception studies.
