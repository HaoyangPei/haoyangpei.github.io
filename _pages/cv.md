---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
description: "Curriculum vitae, updated August 31, 2026."
redirect_from:
  - /resume
---

{% include base_path %}

{% assign cv_path = "/files/CV_HaoyangPei_20260831.pdf?v=20260901" | prepend: base_path %}

<div class="cv-document">
  <div class="cv-document__actions" aria-label="CV file options">
    <a class="academic-button" href="{{ cv_path }}" target="_blank" rel="noopener">Open PDF</a>
    <a class="academic-button academic-button--quiet" href="{{ cv_path }}" download>Download PDF</a>
  </div>

  <object class="cv-document__embed" data="{{ cv_path }}#view=FitH" type="application/pdf" aria-label="Haoyang Pei curriculum vitae">
    <p>Your browser cannot display the embedded PDF. <a href="{{ cv_path }}">Open the CV as a PDF</a>.</p>
  </object>
</div>
