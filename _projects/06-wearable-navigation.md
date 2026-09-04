---
title: "Wireless Offloading of Visual Computation for a Wearable Navigation System for the Visually Impaired"
short_title: "Wearable Visual Navigation"
permalink: /projects/wearable-visual-navigation/
order: 6
period: "2021–2022"
area: "Computer vision"
summary: "An edge-assisted wearable vision system that sends camera video to a nearby server for object detection; my work studied how compression and object distance affect accuracy."
institution: "NSF SCC Project and NYU Video Lab, NYU Tandon School of Engineering"
advisors: "Yao Wang"
topics:
  - Object detection
  - Edge computing
  - Accessibility
links:
  - label: "IEEE Access article"
    url: "https://doi.org/10.1109/ACCESS.2022.3157876"
  - label: "IROS conference paper"
    url: "https://ieeexplore.ieee.org/document/10342139"
---

## Overview

A wearable camera can help people with visual impairments detect pedestrians and obstacles, but running accurate AI directly on a small wearable device is limited by its computing power and battery life. This system compresses camera video and sends it over a wireless network to a nearby edge server for object detection, then returns the results to the user. My contribution focused on measuring how video compression, image resolution, and the distance of an object from the camera affect detection accuracy.

<figure class="project-overview-figure">
  <img src="{{ '/images/projects/wearable-navigation/overview.png' | relative_url }}" alt="Overview of a wearable navigation system that compresses multi-camera video, sends it wirelessly to an edge server for object detection, and returns detection results to the user." width="1013" height="738" loading="lazy" decoding="async">
  <figcaption>Camera views are compressed on the wearable device, transmitted over the wireless network, and processed by a more powerful edge server. My work examined how compression, resolution, and object distance influence detection accuracy.</figcaption>
</figure>

## Key contributions

- Collected urban video with a wearable ZED stereo camera in New York City.
- Generated ground-truth labels for 13 object classes relevant to visually impaired navigation.
- Evaluated YOLOv5 and Resolution-Adaptive YOLO across compression settings using PSNR–bitrate and mAP–bitrate analysis.
- Developed a model for estimating the distance between a person and the wearable camera.
