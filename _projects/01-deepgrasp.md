---
title: "DeepGrasp: All-in-One Self-Supervised Model for Accelerated 4D Radial MRI Across Organs, Resolutions, and Dynamics"
short_title: "DeepGrasp"
permalink: /projects/deepgrasp/
order: 1
area: "Accelerated MRI"
summary: "A unified self-supervised reconstruction model for highly accelerated 4D golden-angle radial MRI across anatomy, resolution, and temporal dynamics."
institution: "Center for Advanced Imaging Innovation and Research (CAI²R), NYU Langone Health"
advisors: "Li Feng and Yao Wang"
topics:
  - Self-supervised learning
  - 4D radial MRI
  - Foundation models
links:
  - label: "ISMRM 2026 workshop abstract"
    url: "https://echo.ismrm.org/abstracts/view/d5f934e5-a549-4f86-8f7a-3c5b07d3df13"
  - label: "ISMRM 2026 annual meeting abstract"
    url: "https://echo.ismrm.org/abstracts/view/333be789-79e6-473f-be2b-ea78c51724e8"
---

## Overview

DeepGrasp is an AI reconstruction model that enables 4D MRI—three-dimensional images captured continuously over time. It reconstructs continuously acquired MRI data into 3D image sequences with very high temporal resolution, allowing motion and contrast changes inside the body to be viewed frame by frame. A single model works across multiple organs, image resolutions, and temporal dynamics without requiring fully sampled reference images for training.

<figure class="project-overview-figure">
  <img src="{{ '/images/projects/deepgrasp/overview.png' | relative_url }}?v=20260903" alt="Overview of the DeepGrasp clinical motivation, heterogeneous database, and all-in-one self-supervised reconstruction workflow." width="3410" height="2257" loading="lazy" decoding="async">
  <figcaption>One AI reconstruction model enables 4D MRI (3D + time) with very high temporal resolution across organs and scan settings.</figcaption>
</figure>

## Representative results

<p class="project-results__intro">Each animation compares the input before the model (left) with the reconstruction after the model (right).</p>

<section class="project-results__group" aria-labelledby="deepgrasp-in-distribution">
  <h3 class="project-results__group-title" id="deepgrasp-in-distribution">In-distribution applications</h3>
  <div class="project-results__grid">
    <figure class="project-comparison">
      <figcaption>Brain DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/brain-dce.gif' | relative_url }}" alt="Animated Brain DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
    <figure class="project-comparison">
      <figcaption>Neck DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/neck-dce.gif' | relative_url }}" alt="Animated Neck DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
    <figure class="project-comparison">
      <figcaption>Breast DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/breast-dce.gif' | relative_url }}" alt="Animated Breast DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="640" height="320" loading="lazy" decoding="async">
    </figure>
    <figure class="project-comparison">
      <figcaption>Liver DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/liver-dce.gif' | relative_url }}" alt="Animated Liver DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
    <figure class="project-comparison">
      <figcaption>Non-Contrast Liver</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/non-contrast-liver.gif' | relative_url }}" alt="Animated non-contrast liver comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
  </div>
</section>

<section class="project-results__group" aria-labelledby="deepgrasp-out-of-distribution">
  <h3 class="project-results__group-title" id="deepgrasp-out-of-distribution">Out-of-distribution applications</h3>
  <div class="project-results__grid">
    <figure class="project-comparison">
      <figcaption>Prostate DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/prostate-dce.gif' | relative_url }}" alt="Animated Prostate DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
    <figure class="project-comparison">
      <figcaption>Lung DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/lung-dce.gif' | relative_url }}" alt="Animated Lung DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
    <figure class="project-comparison">
      <figcaption>Pediatric DCE</figcaption>
      <div class="project-comparison__labels"><span>Before Model</span><span>After Model</span></div>
      <img src="{{ '/images/projects/deepgrasp/pediatric-dce.gif' | relative_url }}" alt="Animated Pediatric DCE comparison, with the input before the model on the left and the reconstruction after the model on the right." width="512" height="256" loading="lazy" decoding="async">
    </figure>
  </div>
</section>

## Key contributions

- Curated and processed a 22,307-slice 4D GRASP dataset spanning brain, neck, breast, liver, prostate, pediatric, and lung imaging.
- Trained a unified model across spatial resolutions, temporal dynamics of 70–500 frames, and both DCE and non-DCE applications.
- Introduced a subspace-constrained reconstruction strategy that performs training and inference in a low-dimensional subspace.
- Reduced inference time to approximately 200–300 ms per slice while improving reconstruction quality and out-of-domain generalization over GRASP-Pro reconstructions.
