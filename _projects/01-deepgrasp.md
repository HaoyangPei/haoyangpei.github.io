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
  - label: "ISMRM 2026 workshop presentation"
    url: "/talks/2026-deepgrasp-workshop"
  - label: "Conference project page"
    url: "/publication/2026-deepgrasp-ismrm"
---

## Overview

DeepGrasp reconstructs highly accelerated 4D golden-angle radial dynamic MRI from as few as 2–3 spokes per frame. The project is designed around a single model that generalizes across organs and imaging protocols rather than requiring one model for every acquisition setting.

## Key contributions

- Curated and processed a 22,307-slice 4D GRASP dataset spanning brain, neck, breast, liver, prostate, pediatric, and lung imaging.
- Trained a unified model across spatial resolutions, temporal dynamics of 70–500 frames, and both DCE and non-DCE applications.
- Introduced a subspace-constrained reconstruction strategy that performs training and inference in a low-dimensional subspace.
- Reduced inference time to approximately 200–300 ms per slice while improving reconstruction quality and out-of-domain generalization over GRASP-Pro reconstructions.
