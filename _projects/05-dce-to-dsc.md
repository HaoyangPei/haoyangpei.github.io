---
title: "DSC-Derived Perfusion Map Generation from DCE MRI Using Deep Learning"
short_title: "DCE-to-DSC Perfusion Mapping"
permalink: /projects/dce-to-dsc-perfusion/
order: 5
period: "2021–2023"
area: "Generative imaging"
summary: "A generative AI model that creates brain perfusion maps normally obtained from a second contrast-enhanced MRI scan, enabling both measurements from one contrast dose."
institution: "BioMedical Engineering and Imaging Institute, Icahn School of Medicine at Mount Sinai"
advisors: "Xiang Xu"
topics:
  - Generative models
  - Perfusion MRI
  - Image translation
links:
  - label: "Journal article"
    url: "https://doi.org/10.3174/ajnr.A8768"
  - label: "ISMRM presentation"
    url: "https://archive.ismrm.org/2023/1173.html"
---

## Overview

Brain perfusion MRI measures how blood moves through tissue, providing important information for evaluating brain tumors. Two complementary scans—DCE and DSC MRI—are often acquired together, but the conventional workflow typically requires two gadolinium contrast injections. This project uses a generative deep learning model to create DSC-derived perfusion maps directly from a DCE scan, making it possible to obtain both sets of information with a single contrast dose.

<figure class="project-overview-figure">
  <img src="{{ '/images/projects/dce-to-dsc/overview.png' | relative_url }}" alt="Workflow showing how deep learning generates DSC-derived brain perfusion maps from a DCE MRI acquisition." width="2699" height="1288" loading="lazy" decoding="async">
  <figcaption>Instead of performing a second contrast-enhanced DSC scan, the model uses the DCE acquisition to generate relative blood-volume, blood-flow, and transit-time maps.</figcaption>
</figure>

## Representative results

<div class="project-result-stack">
  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>Healthy participants</span>
      <a href="{{ '/images/projects/dce-to-dsc/healthy-results.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/dce-to-dsc/healthy-results.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size healthy participant perfusion mapping results">
      <img src="{{ '/images/projects/dce-to-dsc/healthy-results.png' | relative_url }}" alt="Synthetic and real DSC-derived relative cerebral blood volume, relative cerebral blood flow, and mean transit time maps in healthy participants, with their value distributions." width="2148" height="1437" loading="lazy" decoding="async">
    </a>
    <figcaption>Across healthy participants, the synthetic rCBV, rCBF, and MTT maps closely reproduce the appearance and value distributions of maps measured from real DSC scans.</figcaption>
  </figure>

  <figure class="project-result-figure">
    <div class="project-result-figure__heading">
      <span>Brain tumor case</span>
      <a href="{{ '/images/projects/dce-to-dsc/tumor-results.png' | relative_url }}" target="_blank" rel="noopener">View full size</a>
    </div>
    <a href="{{ '/images/projects/dce-to-dsc/tumor-results.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size brain tumor perfusion mapping results">
      <img src="{{ '/images/projects/dce-to-dsc/tumor-results.png' | relative_url }}" alt="Structural MRI and synthetic and real DSC-derived perfusion maps from two slices of a brain tumor case." width="1632" height="1507" loading="lazy" decoding="async">
    </a>
    <figcaption>In a brain tumor case, the synthetic maps preserve perfusion patterns in and around the lesion and remain informative in regions affected by susceptibility artifacts in the real DSC maps.</figcaption>
  </figure>
</div>

## Key contributions

- Generated realistic DSC-derived parameter maps without requiring both DCE and DSC acquisitions.
- Evaluated the method using data from healthy participants and patients with brain tumors.
- Demonstrated mitigation of susceptibility-induced artifacts in the generated maps.
- Established the potential to shorten scanning and avoid a second gadolinium contrast dose in clinical studies.
