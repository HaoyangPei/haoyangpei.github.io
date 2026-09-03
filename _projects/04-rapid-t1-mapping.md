---
title: "Rapid 3D T1 Mapping Using Deep Learning-Assisted Look-Locker Inversion Recovery MRI"
short_title: "Rapid 3D T1 Mapping"
permalink: /projects/rapid-3d-t1-mapping/
order: 4
area: "Quantitative MRI"
summary: "A deep learning-assisted method that removes idle recovery time from 3D T1 mapping, shortening acquisition while preserving quantitative accuracy."
institution: "Center for Advanced Imaging Innovation and Research (CAI²R), NYU Langone Health"
advisors: "Li Feng and Yao Wang"
topics:
  - T1 mapping
  - 3D imaging
  - U-Net
links:
  - label: "Journal article"
    url: "https://doi.org/10.1002/mrm.29672"
  - label: "ISMRM proceedings"
    url: "https://archive.ismrm.org/2023/0678.html"
---

## Overview

T1 mapping produces numerical maps of how quickly tissue recovers during an MRI scan, providing quantitative information beyond image appearance alone. Conventional 3D Look-Locker imaging pauses between repetitions so the MRI signal can fully recover, but this idle time substantially lengthens the scan. This project removes the recovery delay and uses deep learning to recover accurate T1 values, reducing acquisition time from 169 to 76 seconds while preserving quantitative accuracy.

<div class="project-result-stack">
  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>1. Conventional acquisition with recovery delays</span>
      <a href="{{ '/images/projects/rapid-t1-mapping/conventional-with-delay.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/rapid-t1-mapping/conventional-with-delay.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size conventional Look-Locker acquisition diagram">
      <img src="{{ '/images/projects/rapid-t1-mapping/conventional-with-delay.png' | relative_url }}" alt="Conventional Look-Locker inversion-recovery MRI with a recovery delay between repetitions." width="4000" height="2250" loading="lazy" decoding="async">
    </a>
    <figcaption>Conventional 3D Look-Locker T1 mapping inserts a recovery delay (TD) between repetitions so the MRI signal can return to its starting state, but these idle periods extend the total scan time.</figcaption>
  </figure>

  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>2. What changes when the delay is removed</span>
      <a href="{{ '/images/projects/rapid-t1-mapping/without-delay.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/rapid-t1-mapping/without-delay.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size Look-Locker acquisition diagram without recovery delay">
      <img src="{{ '/images/projects/rapid-t1-mapping/without-delay.png' | relative_url }}" alt="Continuous Look-Locker inversion-recovery MRI after removing the recovery delay between repetitions." width="4000" height="2250" loading="lazy" decoding="async">
    </a>
    <figcaption>Removing TD makes the acquisition continuous and faster, but later repetitions begin before the signal fully recovers. As a result, standard estimation substantially underestimates the true T1 value.</figcaption>
  </figure>

  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>3. Deep learning-assisted T1 estimation</span>
      <a href="{{ '/images/projects/rapid-t1-mapping/deep-learning-framework.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/rapid-t1-mapping/deep-learning-framework.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size deep learning-assisted T1 estimation framework">
      <img src="{{ '/images/projects/rapid-t1-mapping/deep-learning-framework.png' | relative_url }}" alt="Deep learning framework trained with delayed acquisitions and applied to continuous acquisitions without recovery delay." width="4000" height="2250" loading="lazy" decoding="async">
    </a>
    <figcaption>The network learns from conventional scans with a six-second TD, then converts parameter maps from continuous TD-free acquisitions into accurate T1 maps without requiring the recovery delay.</figcaption>
  </figure>
</div>

## Representative result

<div class="project-result-stack">
  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>In vivo 3D brain T1 mapping</span>
      <a href="{{ '/images/projects/rapid-t1-mapping/brain-t1-results.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/rapid-t1-mapping/brain-t1-results.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size in vivo 3D brain T1 mapping result">
      <img src="{{ '/images/projects/rapid-t1-mapping/brain-t1-results.png' | relative_url }}" alt="Brain T1 maps comparing the six-second-delay reference, standard estimation without delay, and deep learning estimation with and without the Mss anatomical map." width="4000" height="2250" loading="lazy" decoding="async">
    </a>
    <figcaption>Without TD, standard estimation markedly underestimates T1. The deep learning result closely matches the six-second-delay reference, and incorporating the Mss anatomical map further reduces the estimation error.</figcaption>
  </figure>
</div>

## Key contributions

- Designed a dual-residual U-Net to generate accurate 3D T1 maps from continuous 3D LLIR imaging.
- Removed the idle time required by conventional acquisition strategies.
- Reduced data acquisition time from 169 seconds to 76 seconds, a 55% decrease.
- Preserved quantitative mapping accuracy while improving acquisition efficiency.
