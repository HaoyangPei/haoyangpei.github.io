---
title: "Absolute Depth Estimation from Monocular Images Using a Vision Transformer"
short_title: "Absolute Monocular Depth"
permalink: /projects/absolute-monocular-depth/
order: 7
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

This project explores how relative depth predictions from a pre-trained Dense Prediction Transformer can be converted into absolute, metric-scale depth maps.

## Key contributions

- Developed a RANSAC-based least-squares mapping approach for recovering absolute depth from relative model predictions.
- Investigated a self-supervised training strategy for metric-depth recovery.
- Collected and processed a custom New York City walking dataset using the VIS4ION backpack and a shoulder-mounted ZED stereo camera.
- Recorded nine 15 Hz videos totaling 43 minutes and achieved a mean absolute error of 0.39 m for distances within 10 m.
