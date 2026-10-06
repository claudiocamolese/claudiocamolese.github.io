---
permalink: /
title: "Applied Mathematics & Physical AI"
description: "Claudio Camolese — Applied Mathematics, Physical AI, robotics and computer vision."
layout: home-personal
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<header class="page-header">
  <div class="header-shell">
    <div class="hero-grid">
      <div class="hero-balance" aria-hidden="true"></div>
      <div class="hero-copy">
        <h1 class="project-name">Claudio Camolese</h1>
        <p class="project-tagline">Applied Mathematics Master's student<br><span>@ ENS Paris-Saclay · MVA</span></p>
      </div>
      <div class="portrait-wrap">
        <img src="{{ '/images/profile.png' | relative_url }}" alt="Portrait of Claudio Camolese" width="150" height="150" fetchpriority="high">
      </div>
    </div>
    <div class="header-footer">
      <nav class="contact" aria-label="Contact and profiles">
        <a href="https://github.com/claudiocamolese" target="_blank" rel="noopener noreferrer"><span class="icon icon-github" aria-hidden="true"></span>GitHub</a>
        <a href="https://www.linkedin.com/in/claudio-camolese" target="_blank" rel="noopener noreferrer"><span class="icon icon-linkedin" aria-hidden="true"></span>LinkedIn</a>
        <a href="mailto:claudiocamolese@gmail.com" id="mail-link"><span class="icon icon-email" aria-hidden="true"></span>Email</a>
        <a href="{{ '/files/CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><span class="icon icon-file" aria-hidden="true"></span>Resume</a>
      </nav>
    </div>
  </div>
</header>

<dialog class="email-dialog" id="email-dialog" aria-labelledby="email-title">
  <button class="popup-close" type="button" aria-label="Close email dialog" autofocus>×</button>
  <p class="hero-label" id="email-title">Email</p>
  <p><a href="mailto:claudiocamolese@gmail.com">claudiocamolese@gmail.com</a></p>
</dialog>

<div class="page-layout">
  <aside class="section-nav">
    <nav aria-label="On this page">
      <p class="nav-label">Index</p>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#publications">Publications</a>
      <a href="#education">Education</a>
      <a href="#projects">Other projects</a>
    </nav>
  </aside>

  <main id="content" class="main-content" tabindex="-1">
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>I am a Master's student in Applied Mathematics at <a href="https://ens-paris-saclay.fr/">ENS Paris-Saclay</a> and <a href="https://www.universite-paris-saclay.fr/">Université Paris-Saclay</a>, in the <a href="https://www.master-mva.com/">MVA program</a> (Mathematics, Vision, and Learning).</p>
      <p>I am passionate about <strong>Physical AI</strong>. My research interests include world models, vision-language-action models, robotics, and computer vision.</p>
      <p>During my studies, I worked on physics-informed methods for VLA safety at the <a href="#cambridge">University of Cambridge</a>, LiDAR-based perception for <a href="#driverless">autonomous racing</a>, and <a href="#urop">efficient language model inference</a>. I hold a double Master's degree specializing in Artificial Intelligence and a Bachelor's degree in Physical Engineering.</p>
      <div class="affiliations" aria-label="Academic and research affiliations">
        <div class="current-affiliation">
          <h3>Currently</h3>
          <div class="current-affiliation-list">
            <a class="affiliation" href="#mva" aria-label="MVA — Mathematics, Vision, and Learning">
              <img class="logo-emphasized logo-mva" src="{{ '/images/mva.png' | relative_url }}" alt="MVA — Mathematics, Vision, and Learning" loading="lazy">
            </a>
            <a class="affiliation" href="#mva" aria-label="ENS Paris-Saclay">
              <img class="logo-emphasized" src="{{ '/images/ens-ps.png' | relative_url }}" alt="ENS Paris-Saclay" loading="lazy">
            </a>
          </div>
        </div>
        <div class="past-affiliations">
          <h3>Past affiliations</h3>
          <div class="affiliation-carousel">
            <button class="carousel-btn" type="button" data-direction="-1" aria-label="Previous affiliations" hidden>‹</button>
            <div class="affiliation-list" tabindex="0" aria-label="Past affiliations">
              <a class="affiliation is-active" href="#cambridge" aria-label="University of Cambridge">
                <img class="logo-cambridge" src="{{ '/images/cambridge.png' | relative_url }}" alt="University of Cambridge" loading="lazy">
              </a>
              <a class="affiliation" href="#double-masters" aria-label="Politecnico di Torino">
                <img src="{{ '/images/polito.png' | relative_url }}" alt="Politecnico di Torino" loading="lazy">
              </a>
              <a class="affiliation" href="#driverless" aria-label="Squadra Corse Polito">
                <img class="logo-emphasized" src="{{ '/images/sc-polito.png' | relative_url }}" alt="Squadra Corse Polito" loading="lazy">
              </a>
            </div>
            <button class="carousel-btn" type="button" data-direction="1" aria-label="Next affiliations" hidden>›</button>
          </div>
        </div>
      </div>
    </section>

    <section id="news" class="news" aria-labelledby="news-title">
      <h2 id="news-title">News</h2>
      <p><span class="date-badge">Now</span> I am starting my Master's degree in Paris in the <a href="https://www.master-mva.com/">MVA program</a> (Mathematics, Vision, and Learning).</p>
      <p><time class="date-badge" datetime="2026-09">Sep. 2026</time> I graduated from Politecnico di Torino and ENSIMAG, specializing in Artificial Intelligence.</p>
      <p><time class="date-badge" datetime="2026-08">Aug. 2026</time> I completed my research internship at the University of Cambridge. What an experience!</p>
    </section>

    <section id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Research experience</h2>
      <article class="entry-card" id="cambridge">
        <div class="entry-logo"><img class="logo-cambridge" src="{{ '/images/cambridge.png' | relative_url }}" alt="University of Cambridge" loading="lazy"></div>
        <div class="entry-date"><span class="date-badge">2026</span></div>
        <div class="entry-copy">
          <h3>University of Cambridge</h3>
          <p>Research internship with <a href="https://cv4dt.github.io/">CV4DT</a>, <a href="https://pirlab.github.io/index.html">PIRLab</a>, and <a href="https://vandal.polito.it/">VANDAL</a>, advised by <a href="https://olafwysocki.github.io/">Prof. Olaf Wysocki</a>, <a href="https://cv4dt.github.io/author/dr-guangming-wang/">Prof. Guangming Wang</a>, and <a href="https://www.giuseppeaverta.me/">Prof. Giuseppe Averta</a>.</p>
          <p>Physics-informed methods for vision-language-action model safety and robotic manipulation.</p>
        </div>
      </article>
      <article class="entry-card" id="driverless">
        <div class="entry-logo entry-logo--captioned">
          <img class="logo-emphasized" src="{{ '/images/sc-polito.png' | relative_url }}" alt="Squadra Corse Polito" loading="lazy">
          <span>Squadra Corse</span>
        </div>
        <div class="entry-date"><span class="date-badge">2024–2025</span></div>
        <div class="entry-copy">
          <h3>Squadra Corse Polito · Driverless</h3>
          <p>Perception and AI Engineer in the <a href="https://www.squadracorsepolito.com/">Squadra Corse Polito Driverless division</a>. Developed LiDAR-based perception and state-estimation systems for autonomous driving, and competed in Formula SAE Driverless.</p>
        </div>
      </article>
      <article class="entry-card" id="urop">
        <div class="entry-logo"><img src="{{ '/images/polito.png' | relative_url }}" alt="Politecnico di Torino" loading="lazy"></div>
        <div class="entry-date"><span class="date-badge">2025</span></div>
        <div class="entry-copy">
          <h3>Undergraduate Research Opportunities Programme</h3>
          <p>Undergraduate Researcher at <a href="https://www.polito.it/didattica/polito/learning-experiences-in-research/undergraduate-research-opportunities-programme">Politecnico di Torino · UROP</a>, studying memory-efficient large language model inference for deployment on edge devices.</p>
        </div>
      </article>
    </section>

    <section id="publications" aria-labelledby="publications-title">
      <h2 id="publications-title">Publications</h2>
      <article class="entry-card publication-card">
        <div class="entry-copy">
          <h3>PhiSVLA: Physics-Informed Safety for Vision Language Action manipulation</h3>
          <p><strong>Claudio Camolese</strong>, Giuseppe Averta, Olaf Wysocki, Guangming Wang</p>
          <p class="muted">Manuscript in preparation</p>
        </div>
      </article>
    </section>

    <section id="education" aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      <article class="entry-card" id="mva">
        <div class="entry-logo"><img src="{{ '/images/mva_ed.png' | relative_url }}" alt="MVA, ENS Paris-Saclay and Université Paris-Saclay" loading="lazy"></div>
        <div class="entry-date"><span class="date-badge">2026–2027</span></div>
        <div class="entry-copy"><h3>ENS Paris-Saclay · Université Paris-Saclay</h3><p>Master of Research in Applied Mathematics, <a href="https://www.master-mva.com/">MVA track</a> — Mathematics, Vision, and Learning.</p></div>
      </article>
      <article class="entry-card" id="double-masters">
        <div class="entry-logo"><img src="{{ '/images/polito.png' | relative_url }}" alt="Politecnico di Torino" loading="lazy"></div>
        <div class="entry-date"><span class="date-badge">2024–2026</span></div>
        <div class="entry-copy"><h3>Politecnico di Torino · ENSIMAG</h3><p>Double Master's degree from Politecnico di Torino and the National School of Computer Science and Applied Mathematics, specializing in Artificial Intelligence.</p></div>
      </article>
      <article class="entry-card">
        <div class="entry-logo"><img src="{{ '/images/polito.png' | relative_url }}" alt="Politecnico di Torino" loading="lazy"></div>
        <div class="entry-date"><span class="date-badge">2021–2024</span></div>
        <div class="entry-copy"><h3>Politecnico di Torino</h3><p>Bachelor's degree in Physical Engineering.</p></div>
      </article>
    </section>

    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Other projects</h2>
      <article class="entry-card project-card"><h3>RGB-D 6D Object Pose Estimation</h3><p>An end-to-end pipeline for object position and orientation estimation, evaluated on LINEMOD and adapted for real-time traffic-cone pose estimation in the Squadra Corse Driverless simulator.</p></article>
      <article class="entry-card project-card"><h3>Semantic Scene Understanding for Autonomous Drones</h3><p>Semantic segmentation of aerial imagery with DeepLabV3+ for autonomous navigation and environmental perception.</p></article>
      <article class="entry-card project-card"><h3>Sim-to-Real Reinforcement Learning</h3><p>Robust MuJoCo Hopper control policies under dynamics shifts, using uniform domain randomization to study transfer across different robot dynamics.</p></article>
      <article class="entry-card project-card"><h3>Generative Models for Image Synthesis</h3><p>Diffusion models, flow-matching models, GANs, and VAEs implemented from scratch, comparing training stability, sample quality, and inference behaviour.</p></article>
    </section>

    <footer class="site-footer"><span>© Claudio Camolese {{ site.time | date: '%Y' }}</span><a href="#top">Back to top ↑</a></footer>
  </main>
</div>
