---
title: "DeepEMC-T2 Mapping: Deep Learning-Enabled T2 Mapping Based on Echo Modulation Curve Modeling"
short_title: "DeepEMC-T2 Mapping"
permalink: /projects/deepemc-t2/
order: 3
period: "2023–2024"
area: "Quantitative MRI"
summary: "A deep learning method that generates quantitative tissue maps from fewer MRI images without slow dictionary matching."
institution: "Center for Advanced Imaging Innovation and Research (CAI²R), NYU Langone Health"
advisors: "Li Feng and Yao Wang"
topics:
  - Quantitative imaging
  - T2 mapping
  - Deep learning
links:
  - label: "Journal article"
    url: "https://doi.org/10.1002/mrm.30239"
  - label: "ISMRM proceedings"
    url: "https://archive.ismrm.org/2024/2783.html"
---

## Overview

T2 mapping turns MRI scans into numerical maps of tissue properties, providing information that cannot be captured by image appearance alone. Conventional methods estimate these maps by comparing the scan with a large library of simulated signal patterns, a slow process that usually requires many input images. DeepEMC-T2 replaces this matching step with a neural network, producing accurate T2 and proton-density maps from fewer echoes and enabling faster quantitative imaging.

<figure class="project-overview-figure">
  <img src="{{ '/images/projects/deepemc-t2/overview.png' | relative_url }}" alt="Overview comparing conventional EMC-T2 dictionary matching with the DeepEMC-T2 neural-network workflow for estimating T2 and proton-density maps." width="2863" height="1898" loading="lazy" decoding="async">
  <figcaption>DeepEMC-T2 learns to translate multi-echo MRI images directly into quantitative tissue maps, avoiding the conventional dictionary-matching step.</figcaption>
</figure>

## Representative results

<p class="project-results__intro">Performance is evaluated as the number of acquired echoes is reduced from 10 to 3.</p>

<div class="project-result-stack">
  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>T2 mapping</span>
      <a href="{{ '/images/projects/deepemc-t2/t2-mapping-results.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/deepemc-t2/t2-mapping-results.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size T2 mapping result figure">
      <img src="{{ '/images/projects/deepemc-t2/t2-mapping-results.png' | relative_url }}" alt="T2 maps, error maps, and quantitative errors comparing EMC-T2 and DeepEMC-T2 using 10, 7, 5, and 3 echoes." width="3285" height="2032" loading="lazy" decoding="async">
    </a>
    <figcaption>DeepEMC-T2 maintains more consistent T2 estimates and lower errors than conventional EMC-T2 as fewer echoes are used.</figcaption>
  </figure>

  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>Proton-density mapping</span>
      <a href="{{ '/images/projects/deepemc-t2/pd-mapping-results.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/deepemc-t2/pd-mapping-results.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size proton-density mapping result figure">
      <img src="{{ '/images/projects/deepemc-t2/pd-mapping-results.png' | relative_url }}" alt="Proton-density maps, error maps, and quantitative errors comparing EMC-T2 and DeepEMC-T2 using 10, 7, 5, and 3 echoes." width="3229" height="1547" loading="lazy" decoding="async">
    </a>
    <figcaption>DeepEMC-T2 preserves proton-density map quality with lower errors across reduced-echo inputs.</figcaption>
  </figure>
</div>

## Key contributions

- Designed an efficient modified U-Net to estimate T2 and proton-density maps directly from multi-echo spin-echo images.
- Evaluated performance using 10, 7, 5, and 3 echoes to study accelerated mapping protocols.
- Achieved T2 estimation errors of approximately 3%–12% across different T2 ranges and proton-density errors of 0.8%–1.7%.
- Improved parameter-estimation accuracy compared with standard EMC-T2 mapping.
