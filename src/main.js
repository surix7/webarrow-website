import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Webarrow home"><span class="brand-mark">↗</span><span>web<span class="brand-arrow">arrow</span></span></a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#services">What we do</a><a href="#process">How it works</a><a href="#proof">Results</a>
    </nav>
    <a class="button button-small button-dark" href="#contact">Start a conversation <span>↗</span></a>
    <button class="menu-toggle" aria-label="Open menu">☰</button>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Your digital growth partner</p>
        <h1>Be the obvious choice <em>where it matters.</em></h1>
        <p class="hero-intro">Webarrow builds the websites, visibility and digital experiences that help local businesses get found — and get chosen.</p>
        <div class="hero-actions"><a class="button button-gradient" href="#contact">Let’s make an impact <span>↗</span></a><a class="text-link" href="#services">Explore our capabilities <span>↓</span></a></div>
        <div class="hero-note"><span class="avatar-stack"><i></i><i></i><i></i></span><span>Built for ambitious businesses<br><strong>ready to move forward.</strong></span></div>
      </div>
      <div class="hero-art" aria-label="Abstract Webarrow growth illustration" role="img">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-core">↗</div>
        <span class="art-label label-top">local visibility</span><span class="art-label label-right">better journeys</span><span class="art-label label-bottom">real momentum</span>
      </div>
    </section>

    <section class="trust-strip"><div class="section-shell trust-inner"><span>Good businesses deserve to be seen.</span><span class="trust-line"></span><span>From first search to first conversation.</span></div></section>

    <section class="section-shell section" id="services">
      <div class="section-heading"><p class="eyebrow">01 / What we do</p><h2>Digital that earns<br><em>attention — and action.</em></h2><p class="heading-copy">No noise. No vanity projects. Just thoughtful digital work that makes your business easier to discover, understand and choose.</p></div>
      <div class="service-grid">
        <article class="service-card service-featured"><span class="card-number">01</span><div><h3>Websites that work hard</h3><p>Clear, confident websites that turn the right visitors into the right enquiries.</p><a href="#contact">Explore web design <span>↗</span></a></div><div class="card-shape shape-lime">↗</div></article>
        <article class="service-card"><span class="card-number">02</span><div><h3>Be found locally</h3><p>Search strategies that put you in front of people already looking for what you do.</p><a href="#contact">Explore local SEO <span>↗</span></a></div><div class="card-shape shape-pink">⌕</div></article>
        <article class="service-card"><span class="card-number">03</span><div><h3>Turn clicks into customers</h3><p>Campaigns and journeys that make every visit, click and conversation count.</p><a href="#contact">Explore growth <span>↗</span></a></div><div class="card-shape shape-blue">↗</div></article>
      </div>
    </section>

    <section class="dark-panel" id="process"><div class="section-shell process-layout"><div><p class="eyebrow eyebrow-light">02 / How we work</p><h2>Small enough<br>to <em>care.</em><br>Sharp enough<br>to deliver.</h2></div><div class="process-list"><div class="process-item"><span>01</span><div><h3>Get curious</h3><p>We start with the questions that uncover what makes your business different.</p></div></div><div class="process-item"><span>02</span><div><h3>Make it clear</h3><p>We turn the complexity into a focused plan your customers can feel.</p></div></div><div class="process-item"><span>03</span><div><h3>Make it move</h3><p>We launch, learn and keep improving what works in the real world.</p></div></div></div></div></section>

    <section class="section-shell section proof" id="proof"><div class="proof-intro"><p class="eyebrow">03 / Why Webarrow</p><h2>Less chasing.<br><em>More choosing.</em></h2></div><div class="proof-grid"><div><strong>+42%</strong><span>more qualified<br>enquiries</span></div><div><strong>3.8×</strong><span>return on focused<br>campaigns</span></div><div><strong>1</strong><span>partner for your<br>next chapter</span></div></div></section>

    <section class="cta-section" id="contact"><div class="cta-orb"></div><div class="section-shell cta-content"><p class="eyebrow eyebrow-light">Ready when you are</p><h2>Let’s make your<br>next move <em>count.</em></h2><p>Tell us where you want to go. We’ll help you work out the smartest way to get there.</p><a class="button button-light" href="mailto:hello@webarrow.co.uk">Start a conversation <span>↗</span></a></div></section>
  </main>
  <footer class="site-footer section-shell"><a class="brand" href="#top"><span class="brand-mark">↗</span><span>web<span class="brand-arrow">arrow</span></span></a><span>Web design, visibility & growth for ambitious businesses.</span><span>© ${new Date().getFullYear()} Webarrow</span></footer>
`;

document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('is-open'));
