---
permalink: /
title: "About me"
layout: home-personal
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<main class="home-personal" id="about">

  <!-- NAVIGATION -->
  <nav class="home-personal__nav" aria-label="Primary">

    <a
      class="home-personal__brand"
      href="{{ '/' | relative_url }}"
    >
      Claudio Camolese
    </a>

    <div class="home-personal__tabs">

      <a
        class="home-personal__tab is-active"
        href="#about"
      >
        About
      </a>

      <a
        class="home-personal__tab home-personal__tab--future"
        href="#projects"
        hidden
      >
        Projects
      </a>

      <a
        class="home-personal__tab home-personal__tab--future"
        href="#blog"
        hidden
      >
        Blog
      </a>

    </div>

  </nav>


  <!-- HERO -->
  <section
    class="home-personal__hero"
    aria-labelledby="home-title"
  >

    <div class="home-personal__portrait-stack">

      <p class="home-personal__eyebrow home-personal__eyebrow--intro">
        Applied Math | AI Engineer | Physics Engineer
      </p>

      <img
        class="home-personal__portrait"
        src="{{ '/images/profile.png' | relative_url }}"
        alt="Claudio Camolese portrait"
      >

    </div>


    <div class="home-personal__intro">

      <h1 id="home-title">
        Claudio Camolese
      </h1>

      <p>
        I am a Master's student in <strong>Applied Mathematics</strong> at

        <a
          href="https://ens-paris-saclay.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENS Paris-Saclay
        </a>

        and

        <a
          href="https://www.universite-paris-saclay.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Université Paris-Saclay
        </a>, in the

        <a
          href="https://www.master-mva.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MVA program
        </a>

        (Mathematics, Vision, and Learning).

        <br>

        I am passionate about <strong>Physical AI</strong>.
      </p>


      <div
        class="home-personal__actions"
        aria-label="Profile links"
      >

        <a
          href="https://github.com/claudiocamolese"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/claudio-camolese"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:claudiocamolese@gmail.com">
          Email
        </a>

      </div>

    </div>

  </section>


  <!-- ABOUT -->
  <section
    class="home-personal__section home-personal__about"
    aria-label="About"
  >

    <p class="home-personal__eyebrow">
      About
    </p>


    <!-- AI & ROBOTICS EXPERIENCE -->
    <section
      class="home-personal__subsection"
      aria-labelledby="experience-title"
    >

      <h2 id="experience-title">
        AI & Robotics experience
      </h2>


      <!-- CAMBRIDGE EXPERIENCE -->
      <div class="home-personal__experience-row">

        <div class="home-personal__experience-copy">
          <p>
            I was fortunate enough to conduct a research internship at the
            <strong>University of Cambridge</strong>
            within the

            <a
              href="https://cv4dt.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Vision for Digital Twin (CV4DT)
            </a>

            and the

            <a
              href="https://pirlab.github.io/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Physical Intelligence and Robotics Lab (PIRLab)
            </a>,
            under the supervision of <a
              href="https://olafwysocki.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Olaf Wysocki
            </a>, <a
              href="https://cv4dt.github.io/author/dr-guangming-wang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Guangming Wang
            </a>, and <a
              href="https://www.giuseppeaverta.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Giuseppe Averta
            </a>,
            focusing on Physics-Informed methods for VLA safety.
          </p>
        </div>


        <!-- CAMBRIDGE IMAGES -->
        <div
          class="home-personal__experience-gallery"
          data-slider
          aria-label="University of Cambridge experience"
        >

          <div class="home-personal__experience-track">
            <div class="home-personal__experience-slide">
              <img
                src="{{ '/images/cambridge-1.jpg' | relative_url }}"
                alt="Research experience at the University of Cambridge"
              >
            </div>

            <div class="home-personal__experience-slide">
              <img
                src="{{ '/images/cambridge-2.jpg' | relative_url }}"
                alt="Robotics research at the University of Cambridge"
              >
            </div>
            <div class="home-personal__experience-slide">
              <img
                src="{{ '/images/cambridge-3.jpg' | relative_url }}"
                alt="Robotics research at the University of Cambridge"
              >
            </div>
          </div>

          <div class="home-personal__gallery-nav" aria-hidden="true">
            <button class="home-personal__gallery-btn home-personal__gallery-btn--prev" type="button" aria-label="Previous image">&#8249;</button>
            <button class="home-personal__gallery-btn home-personal__gallery-btn--next" type="button" aria-label="Next image">&#8250;</button>
          </div>

          <div class="home-personal__gallery-dots" aria-label="Choose image">
            <button class="home-personal__gallery-dot is-active" type="button" aria-label="View image 1"></button>
            <button class="home-personal__gallery-dot" type="button" aria-label="View image 2"></button>
            <button class="home-personal__gallery-dot" type="button" aria-label="View image 3"></button>
          </div>

        </div>

      </div>


      <!-- DRIVERLESS EXPERIENCE -->
      <div class="home-personal__experience-row">

        <div class="home-personal__experience-copy">
          <p>
            During my studies, I worked as a <strong>Perception and AI Engineer</strong>
            in the
            <a
              href="https://www.squadracorsepolito.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Squadra Corse Polito | Driverless division
            </a>,
            contributing to LiDAR-based perception systems for autonomous driving
            state estimation. I also competed in the Formula Student FSAE competition.
          </p>
        </div>


        <!-- DRIVERLESS IMAGES -->
        <div
          class="home-personal__experience-gallery"
          data-slider
          aria-label="Autonomous driving experience"
        >

          <div class="home-personal__experience-track">
            <div class="home-personal__experience-slide">
              <img
                src="{{ '/images/driverless-2.jpg' | relative_url }}"
                alt="Squadra Corse Polito driverless car"
              >
            </div>

            <div class="home-personal__experience-slide">
              <img
                src="{{ '/images/driverless-1.jpg' | relative_url }}"
                alt="LiDAR perception system for autonomous driving"
              >
            </div>
            <div class="home-personal__experience-slide">
              <img
                src="{{ '/images/driverless-3.jpg' | relative_url }}"
                alt="LiDAR perception system for autonomous driving"
              >
            </div>
          </div>

          <div class="home-personal__gallery-nav" aria-hidden="true">
            <button class="home-personal__gallery-btn home-personal__gallery-btn--prev" type="button" aria-label="Previous image">&#8249;</button>
            <button class="home-personal__gallery-btn home-personal__gallery-btn--next" type="button" aria-label="Next image">&#8250;</button>
          </div>

          <div class="home-personal__gallery-dots" aria-label="Choose image">
            <button class="home-personal__gallery-dot is-active" type="button" aria-label="View image 1"></button>
            <button class="home-personal__gallery-dot" type="button" aria-label="View image 2"></button>
            <button class="home-personal__gallery-dot" type="button" aria-label="View image 3"></button>
          </div>

        </div>

      </div>


      <!-- UROP EXPERIENCE -->
      <div class="home-personal__about-grid">

        <p>
          During my studies, I worked as an <strong>Undergraduate Researcher</strong>
          through

          <a
            href="https://www.polito.it/didattica/polito/learning-experiences-in-research/undergraduate-research-opportunities-programme"
            target="_blank"
            rel="noopener noreferrer"
          >
            UROP
          </a>

          at Politecnico di Torino, investigating methods to reduce the computational
          complexity of large language model inference for deployment on edge devices.
        </p>

      </div>

    </section>


    <!-- ACADEMIC BACKGROUND -->
    <section
      class="home-personal__subsection home-personal__academic"
      aria-labelledby="academic-title"
    >

      <h2 id="academic-title">
        Academic background
      </h2>


      <div class="home-personal__about-grid">

        <p>
          I obtained a double Master's degree from
          <strong>Politecnico di Torino</strong>
          (Italy) and the

          <strong>
            National School of Computer Science and Applied Mathematics
          </strong>

          (France), specializing in <strong>Artificial Intelligence</strong>.<br>
          Before that, I obtained a Bachelor's degree in
          <strong>Physical Engineering</strong> from Politecnico di Torino.
        </p>

      </div>

    </section>

  </section>


  <!-- NEWS -->
  <section
    class="home-personal__section home-personal__timeline"
    aria-labelledby="news-title"
  >

    <h2 id="news-title">
      News
    </h2>


    <ol class="home-personal__news-list">

      <li>

        <time>
          Now
        </time>

        <p>
          I am starting my Master's degree in Paris in the

          <a
            href="https://www.master-mva.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MVA program
          </a>

          (Mathematics, Vision, and Learning).
        </p>

      </li>


      <li>

        <time>
          Sept 2026
        </time>

        <p>
          I graduated from <strong>Politecnico di Torino</strong>
          (Italy) and the

          <strong>
            National School of Computer Science and Applied Mathematics
          </strong>

          (France), specializing in <strong>Artificial Intelligence</strong>.
        </p>

      </li>


      <li>

        <time>
          Aug 2026
        </time>

        <p>
          I completed my research internship at the <strong>University of Cambridge</strong>.
          What an experience!
        </p>

      </li>

    </ol>

  </section>

</main>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-slider]').forEach(function (slider) {
      const track = slider.querySelector('.home-personal__experience-track');
      const slides = Array.from(slider.querySelectorAll('.home-personal__experience-slide'));
      const prevBtn = slider.querySelector('.home-personal__gallery-btn--prev');
      const nextBtn = slider.querySelector('.home-personal__gallery-btn--next');
      const dots = Array.from(slider.querySelectorAll('.home-personal__gallery-dot'));
      let activeIndex = 0;

      function renderSlide(index) {
        activeIndex = (index + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + (activeIndex * 100) + '%)';

        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle('is-active', dotIndex === activeIndex);
        });
      }

      prevBtn.addEventListener('click', function () {
        renderSlide(activeIndex - 1);
      });

      nextBtn.addEventListener('click', function () {
        renderSlide(activeIndex + 1);
      });

      dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
          renderSlide(index);
        });
      });

      renderSlide(0);
    });
  });
</script>