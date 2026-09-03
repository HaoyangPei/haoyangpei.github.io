---
title: "Hybrid Learning for Joint MRI Reconstruction and Denoising"
short_title: "Hybrid Learning"
permalink: /projects/hybrid-learning/
order: 2
area: "Low-field MRI"
summary: "A two-stage framework combining self-supervised and supervised learning for joint MRI reconstruction and denoising without high-quality training references."
institution: "Center for Advanced Imaging Innovation and Research (CAI²R), NYU Langone Health"
advisors: "Li Feng and Yao Wang"
topics:
  - Hybrid learning
  - MRI denoising
  - Low-field MRI
image_compare: true
links:
  - label: "Journal article"
    url: "https://doi.org/10.1088/1361-6560/ae792b"
  - label: "ISMRM presentation"
    url: "https://archive.ismrm.org/2025/0390.html"
---

## Overview

Low-field MRI has an inherently weaker signal, so fully sampled, high-quality reference scans can take too long to acquire or may not be feasible—especially for breath-hold lung imaging. To address this challenge, Hybrid Learning combines self-supervised and supervised training in a two-stage framework for reconstructing accelerated, noisy MRI using only low-SNR reference data. In practical terms, it produces clearer MRI images without needing clean, high-quality examples for training.

<figure class="project-overview-figure">
  <img src="{{ '/images/projects/hybrid-learning/overview.png' | relative_url }}" alt="Overview of the two-stage Hybrid Learning framework for MRI reconstruction and denoising without clean reference images." width="3108" height="2089" loading="lazy" decoding="async">
  <figcaption>The first stage creates denoised pseudo-reference images; the second stage uses them to train a joint reconstruction-and-denoising model.</figcaption>
</figure>

## Representative results

<p class="project-results__intro">Drag the divider to compare the input before the model with the reconstructed and denoised image after the model.</p>

<div class="image-compare-grid">
  <figure class="image-compare">
    <figcaption><span>Breast radial MRI</span></figcaption>
    <div class="image-compare__stage" data-image-compare style="--position: 50%;">
      <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/breast-before.png' | relative_url }}" alt="Breast radial MRI before model reconstruction." width="1674" height="942" loading="lazy" decoding="async">
      <div class="image-compare__after">
        <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/breast-after.png' | relative_url }}" alt="Breast radial MRI after model reconstruction and denoising." width="1674" height="942" loading="lazy" decoding="async">
      </div>
      <span class="image-compare__label image-compare__label--before">Before Model</span>
      <span class="image-compare__label image-compare__label--after">After Model</span>
      <span class="image-compare__divider" aria-hidden="true"><span>↔</span></span>
      <input class="image-compare__range" type="range" min="0" max="100" value="50" aria-label="Compare breast radial MRI before and after the model">
    </div>
  </figure>

  <figure class="image-compare">
    <figcaption><span>0.3 T Cartesian brain MRI</span></figcaption>
    <div class="image-compare__stage" data-image-compare style="--position: 50%;">
      <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/brain-before.png' | relative_url }}" alt="0.3 T Cartesian brain MRI before model reconstruction." width="1478" height="1477" loading="lazy" decoding="async">
      <div class="image-compare__after">
        <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/brain-after.png' | relative_url }}" alt="0.3 T Cartesian brain MRI after model reconstruction and denoising." width="1478" height="1477" loading="lazy" decoding="async">
      </div>
      <span class="image-compare__label image-compare__label--before">Before Model</span>
      <span class="image-compare__label image-compare__label--after">After Model</span>
      <span class="image-compare__divider" aria-hidden="true"><span>↔</span></span>
      <input class="image-compare__range" type="range" min="0" max="100" value="50" aria-label="Compare 0.3 T Cartesian brain MRI before and after the model">
    </div>
  </figure>

  <figure class="image-compare">
    <figcaption><span>0.55 T spiral lung MRI</span></figcaption>
    <div class="image-compare__stage" data-image-compare style="--position: 50%;">
      <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/lung-spiral-before.png' | relative_url }}" alt="0.55 T spiral lung MRI before model reconstruction." width="1071" height="1066" loading="lazy" decoding="async">
      <div class="image-compare__after">
        <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/lung-spiral-after.png' | relative_url }}" alt="0.55 T spiral lung MRI after model reconstruction and denoising." width="1071" height="1066" loading="lazy" decoding="async">
      </div>
      <span class="image-compare__label image-compare__label--before">Before Model</span>
      <span class="image-compare__label image-compare__label--after">After Model</span>
      <span class="image-compare__divider" aria-hidden="true"><span>↔</span></span>
      <input class="image-compare__range" type="range" min="0" max="100" value="50" aria-label="Compare 0.55 T spiral lung MRI before and after the model">
    </div>
  </figure>

  <figure class="image-compare">
    <figcaption>
      <span>0.55 T spiral lung MRI</span>
      <span class="image-compare__badge">Extreme low-SNR case</span>
    </figcaption>
    <div class="image-compare__stage" data-image-compare style="--position: 50%;">
      <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/lung-extreme-low-snr-before.png' | relative_url }}" alt="Extreme low-SNR 0.55 T spiral lung MRI before model reconstruction." width="1187" height="1174" loading="lazy" decoding="async">
      <div class="image-compare__after">
        <img class="image-compare__image" src="{{ '/images/projects/hybrid-learning/lung-extreme-low-snr-after.png' | relative_url }}" alt="Extreme low-SNR 0.55 T spiral lung MRI after model reconstruction and denoising." width="1187" height="1174" loading="lazy" decoding="async">
      </div>
      <span class="image-compare__label image-compare__label--before">Before Model</span>
      <span class="image-compare__label image-compare__label--after">After Model</span>
      <span class="image-compare__divider" aria-hidden="true"><span>↔</span></span>
      <input class="image-compare__range" type="range" min="0" max="100" value="50" aria-label="Compare the extreme low-SNR 0.55 T spiral lung MRI before and after the model">
    </div>
  </figure>
</div>

## Key contributions

- Addressed limitations of conventional supervised learning, which depends on high-quality reference data, and purely self-supervised reconstruction.
- Evaluated the method on simulated and real breast, lung, and brain MRI across field strengths from 0.3 T to 3 T.
- Demonstrated consistent improvements across radial, Cartesian, and spiral sampling patterns, multiple noise levels, and a wide range of acceleration factors.
- Established a practical learning strategy for low-field MRI applications where high-SNR targets are difficult to acquire.
