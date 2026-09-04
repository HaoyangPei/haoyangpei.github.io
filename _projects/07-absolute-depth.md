---
title: "Absolute Depth Estimation from Monocular Images Using a Vision Transformer"
short_title: "Absolute Monocular Depth"
permalink: /projects/absolute-monocular-depth/
order: 7
period: "2021–2022"
area: "Computer vision"
summary: "Methods for recovering metric-scale depth from monocular predictions produced by a pre-trained Dense Prediction Transformer."
institution: "NSF SCC Project and NYU Video Lab, NYU Tandon School of Engineering"
advisors: "Yao Wang"
topics:
  - Monocular depth
  - Vision transformers
  - Self-supervised learning
links:
  - label: "Related IROS conference paper"
    url: "https://ieeexplore.ieee.org/document/10342139"
---

## Overview

Relative depth shows which objects are closer or farther away, but a navigation system needs their actual distance to provide useful and timely guidance. This is an important capability for a wearable navigation device for people with visual impairments: an obstacle one meter away requires a different response from one ten meters away. This project explores how relative depth predictions from a pre-trained Dense Prediction Transformer can be converted into absolute, metric-scale depth maps.

<figure class="project-overview-figure">
  <a href="{{ '/images/projects/absolute-monocular-depth/approach-overview.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size absolute depth estimation approach overview">
    <img src="{{ '/images/projects/absolute-monocular-depth/approach-overview.png' | relative_url }}" alt="Comparison of four absolute depth estimation approaches, including stereo-camera methods and self-supervised monocular methods." width="884" height="335" loading="lazy" decoding="async">
  </a>
  <figcaption>The project compares stereo-based depth estimation with two self-supervised approaches that use stereo images only during training and predict absolute depth from a single color image afterward.</figcaption>
</figure>

<figure class="project-overview-figure">
  <a href="{{ '/images/projects/absolute-monocular-depth/vit-architecture.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size Vision Transformer depth estimation architecture">
    <img src="{{ '/images/projects/absolute-monocular-depth/vit-architecture.png' | relative_url }}" alt="Vision Transformer depth estimation architecture with transformer features, multiscale reassembly, fusion blocks, and a depth prediction head." width="1346" height="430" loading="lazy" decoding="async">
  </a>
  <figcaption>The Vision Transformer extracts features at multiple scales, combines them through reassembly and fusion blocks, and produces a dense depth map for the full image. Architecture adapted from <a href="https://arxiv.org/abs/2103.13413" target="_blank" rel="noopener"><em>Vision Transformers for Dense Prediction</em></a> by René Ranftl, Alexey Bochkovskiy, and Vladlen Koltun.</figcaption>
</figure>

## Key contributions

- Developed a RANSAC-based least-squares mapping approach for recovering absolute depth from relative model predictions.
- Investigated a self-supervised training strategy for metric-depth recovery.
- Collected and processed a custom New York City walking dataset using the VIS4ION backpack and a shoulder-mounted ZED stereo camera.
- Recorded nine 15 Hz videos totaling 43 minutes and achieved a mean absolute error of 0.39 m for distances within 10 m.
