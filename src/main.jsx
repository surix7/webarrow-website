import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight,
  CircleHelp, Clock3, Code2, Globe2, Headset, Menu, PhoneCall, Search,
  ShieldCheck, ShoppingCart, Sparkles, X
} from 'lucide-react';
import './styles.css';
import './overrides.css';

const photos = {
  london: '/assets/webarrow-westminster-hero.png',
  londonAtRiver: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=90',
  home: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=90',
  trades: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=90',
  clinic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=90',
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=90',
  retail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=90',
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=90',
  bridal: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=90',
  finance: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=90',
  auto: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=90'
};

const clients = ["Forty's Capital", 'SBG Solicitors', 'Everlasting Bridal', 'VB Refurbishment', 'Mr Finance', 'Japan Parts Worldwide'];

const projects = [
  { name: "Forty's Capital", type: 'Corporate Website', category: 'Website Design', image: photos.office, description: 'Corporate web design and digital support for a finance business.' },
  { name: 'SBG Solicitors', type: 'Professional Website', category: 'Website Design', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=90', description: 'A clear, professional online experience for a solicitors practice.' },
  { name: 'Everlasting Bridal', type: 'E-commerce Website', category: 'E-commerce', image: photos.bridal, description: 'An elegant online shopping experience for a bridal brand.' },
  { name: 'VB Refurbishment', type: 'Website & Local SEO', category: 'Local SEO', image: photos.trades, description: 'A service-led website that helps local customers find refurbishment support.' },
  { name: 'Mr Finance', type: 'Finance Website', category: 'Website Design', image: photos.finance, description: 'A straightforward digital experience for finance enquiries.' },
  { name: 'Japan Parts Worldwide', type: 'Automotive E-commerce', category: 'E-commerce', image: photos.auto, description: 'A specialist online catalogue for worldwide automotive parts.' }
];

const heroSlides = [
  {
    eyebrow: 'LONDON & UK',
    title: <>Helping local<br />businesses get<br />found, <em>get leads</em><br />and grow.</>,
    description: 'Websites, SEO, Google Ads and digital solutions for businesses across London and the UK.',
    image: photos.london,
    primary: 'Get a Free Local SEO Audit',
    primaryHref: '#contact',
    secondary: 'View Our Work',
    secondaryHref: '/work'
  },
  {
    eyebrow: 'DIGITAL GROWTH, MADE PRACTICAL',
    title: <>A better website.<br />More ways to <em>grow.</em></>,
    description: 'Build your visibility, reach the right customers and turn more visits into enquiries.',
    image: photos.londonAtRiver,
    primary: 'Contact Us',
    primaryHref: '#contact',
    secondary: 'Explore Our Services',
    secondaryHref: '#services'
  }
];

const serviceItems = [
  ['Website Design', 'Bespoke, high-performance websites built around your business.', Globe2],
  ['E-commerce Development', 'Online stores designed to make products easy to find and buy.', ShoppingCart],
  ['Search Engine Optimisation (SEO)', 'Technical, on-page and local SEO to improve visibility on Google.', Search],
  ['Google Ads', 'Targeted paid search campaigns with clear tracking and reporting.', BarChart3],
  ['AI Solutions', 'Practical automation and AI tools to save time and support growth.', Sparkles],
  ['Hosting & Support', 'Fast, secure hosting and ongoing help from a real team.', Code2]
];

function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <nav>
    <a className="brand" href="/" onClick={closeMenu}>Webarrow<span className="dot">.</span></a>
    <div className={`links ${menuOpen ? 'is-open' : ''}`}>
      <a href="/" onClick={closeMenu}>Home</a>
      <a href="/#services" onClick={closeMenu}>Services</a>
      <a href="/#uk-map" onClick={closeMenu}>Locations</a>
      <a href="/work" onClick={closeMenu}>Work</a>
      <a href="/#contact" onClick={closeMenu}>Contact Us</a>
    </div>
    <div className="nav-actions">
      <CircleHelp size={19} aria-label="Help" />
      <a className="gradient-btn" href="/#contact">Contact Us <ArrowUpRight size={15} /></a>
      <button className="menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  </nav>;
}

function Browser({ children, className = '' }) {
  return <section className={`browser ${className}`}><div className="browserbar"><i /><i /><i /><span /></div>{children}</section>;
}

function HeroSlider() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActive(current => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  const change = direction => setActive(current => (current + direction + heroSlides.length) % heroSlides.length);
  return <section className="hero" aria-roledescription="carousel" aria-label="Webarrow digital services">
    {heroSlides.map((slide, index) => <article className={`hero-slide ${active === index ? 'active' : ''}`} key={slide.eyebrow} aria-hidden={active !== index}>
      <div className="hero-copy">
        <div className="eyebrow green"><span className="status-dot" /> {slide.eyebrow}</div>
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <div className="hero-actions">
          <a className="gradient-btn large" href={slide.primaryHref}>{slide.primary} <ArrowUpRight size={16} /></a>
          <a className="outline-btn" href={slide.secondaryHref}>{slide.secondary}</a>
        </div>
      </div>
      <div className="hero-photo" role="img" aria-label="London skyline and Westminster" style={{ backgroundImage: `url(${slide.image})` }}><div className="tower-shade" /></div>
    </article>)}
    <div className="hero-controls" aria-label="Choose hero slide">
      <button aria-label="Previous slide" onClick={() => change(-1)}><ArrowLeft size={16} /></button>
      {heroSlides.map((slide, index) => <button key={slide.eyebrow} className={`hero-dot ${active === index ? 'active' : ''}`} aria-label={`Show slide ${index + 1}`} aria-current={active === index ? 'true' : undefined} onClick={() => setActive(index)} />)}
      <button aria-label="Next slide" onClick={() => change(1)}><ArrowRight size={16} /></button>
    </div>
  </section>;
}

function ClientCarousel() {
  return <section className="client-section" aria-label="Past clients">
    <p className="eyebrow">TRUSTED BY BUSINESSES ACROSS THE UK</p>
    <div className="client-marquee">
      <div className="client-track">{[...clients, ...clients].map((client, index) => <span className={`client-wordmark client-${index % clients.length}`} key={`${client}-${index}`} aria-hidden={index >= clients.length}>{client}</span>)}</div>
    </div>
  </section>;
}

function DigitalGrowth() {
  const promises = [[Clock3, <>14-Day<br />Delivery</>], [Search, <>SEO-First<br />Approach</>], [ShieldCheck, <>Full Ownership<br />No Lock-in</>], [Headset, <>Dedicated<br />Support</>]];
  return <section className="growth-section">
    <div className="growth-main section-width">
      <div className="growth-copy">
        <p className="eyebrow">A CLEARER WAY TO GROW</p>
        <h2>Digital growth<br /><em>made simple.</em></h2>
        <p>From beautiful websites to powerful marketing campaigns, we help you attract, convert and retain more customers.</p>
        <a className="text-link" href="#services">Discover Our Services <ArrowRight size={17} /></a>
      </div>
      <div className="laptop-stage" aria-label="A preview of a Webarrow-designed website" role="img">
        <div className="laptop-screen"><div className="laptop-browser"><i /><i /><i /><span>yourbusiness.co.uk</span></div><div className="laptop-site" style={{ backgroundImage: `linear-gradient(90deg,#07132dcc,#07132d22),url(${photos.home})` }}><b>Beautiful work.<br />Built for growth.</b><span>Explore the website&nbsp; →</span></div></div>
        <div className="laptop-base" />
      </div>
    </div>
    <div className="promise-strip"><div className="promise-grid section-width">{promises.map(([Icon, label]) => <div className="promise" key={String(label)}><Icon size={27} /><b>{label}</b></div>)}</div></div>
  </section>;
}

function Services() {
  return <section className="services section-width" id="services">
    <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Our Services</h2><p>Everything your business needs to build a stronger online presence and generate more enquiries.</p></div><a className="text-link" href="#contact">Discuss a project <ChevronRight size={17} /></a></div>
    <div className="service-list">{serviceItems.map(([name, description, Icon]) => <a className="service-row" href="#contact" key={name}><span className="service-icon"><Icon size={24} /></span><span className="service-copy"><b>{name}</b><small>{description}</small></span><ArrowRight className="service-arrow" size={20} /></a>)}</div>
  </section>;
}

function ProjectsCarousel() {
  const track = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element) return;
      const atEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 8;
      element.scrollTo({ left: atEnd ? 0 : element.scrollLeft + element.clientWidth, behavior: 'smooth' });
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);
  const move = direction => {
    const element = track.current;
    if (element) element.scrollBy({ left: direction * Math.max(260, element.clientWidth / 3), behavior: 'smooth' });
  };
  return <section className="projects-section section-width" id="work">
    <div className="section-heading"><div><p className="eyebrow">RECENT WORK</p><h2>Latest Projects</h2><p>A selection of businesses we’ve helped move forward online.</p></div><div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Previous projects"><ArrowLeft size={18} /></button><button onClick={() => move(1)} aria-label="Next projects"><ArrowRight size={18} /></button></div></div>
    <div className="project-track" ref={track} aria-label="Latest client projects" tabIndex="0">{projects.map(project => <article className="project-card" key={project.name}><img src={project.image} alt={`${project.name} project`} loading="lazy" /><b>{project.name}</b><span>{project.type}</span></article>)}</div>
  </section>;
}

function ContactForm() {
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ['Name', 'Email', 'Company', 'Service', 'Message'].map(key => `${key}: ${data.get(key.toLowerCase()) || ''}`).join('\n\n');
    window.location.href = `mailto:hello@webarrow.co.uk?subject=${encodeURIComponent(`Website enquiry: ${data.get('service') || 'New project'}`)}&body=${encodeURIComponent(body)}`;
  }
  return <section className="contact-section" id="contact">
    <div className="contact-inner section-width">
      <div className="contact-copy"><p className="eyebrow">LET’S TALK</p><h2>Tell us what you’re<br /><em>looking to grow.</em></h2><p>Share a few details and we’ll get back to you about the right next step for your business.</p><a href="mailto:hello@webarrow.co.uk">hello@webarrow.co.uk</a></div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
        <div className="form-row"><label>Company<input name="company" autoComplete="organization" /></label><label>Service<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{serviceItems.map(([name]) => <option key={name}>{name}</option>)}</select></label></div>
        <label>How can we help?<textarea name="message" rows="4" required /></label>
        <button className="gradient-btn submit-button" type="submit">Send Enquiry <ArrowUpRight size={16} /></button>
        <small className="form-note">Your email app will open with your enquiry ready to send.</small>
      </form>
    </div>
  </section>;
}

function FooterMap() {
  return <svg className="uk-map" viewBox="0 0 360 270" role="img" aria-label="Map of the United Kingdom and Ireland with service locations">
    <path className="map-land ireland" d="m63 119 11-7 13 2 8 8 10 2 5 10-5 9 4 8-8 10-1 12-10 6-3 13-10 1-4 10-9-4-4-11-9-3-3-11-10-2 2-12-7-7 5-10-3-10 11-8 4-10Z" />
    <path className="map-land" d="m188 13 16 4 12 9 11 2 9 11-4 10 13 8-3 11 13 9-8 12 9 8-5 11 11 11-8 11 9 10-9 11 8 11-10 10 5 12-10 10 3 13-9 9 2 12-10 8 1 12-10 6-3 12-11 3-5 12-11-1-5 10-11-7-3-12-11-3-4-11-11-4 1-11-10-5 4-12-8-8 6-11-7-9 7-10-7-11 9-8-6-11 9-9-5-12 11-6-4-12 11-6-2-12 12-3-1-11 11-5-4-13 10-4-2-12 12-6-1-11 14-2-1-12 14-4 2-12 13-2Z" />
    <path className="map-land island" d="m167 104 8-3 6 5-2 8-7 3-6-5Z M214 242l5 4-3 8-6-3Z M244 76l5 4-2 5-5-3Z" />
    <g className="map-roads"><path d="m198 38 13 30-10 30 15 27-13 31 12 27-12 31" /><path d="m227 75-17 23 20 19-24 20 18 23-25 20" /><path d="m89 132 9 20-5 19 8 20" /></g>
    <g className="map-pins"><circle cx="207" cy="58" r="6" /><circle cx="216" cy="104" r="6" /><circle cx="210" cy="147" r="6" /><circle cx="201" cy="190" r="6" /><circle cx="99" cy="157" r="5" /></g>
  </svg>;
}

function FooterCta() {
  return <footer className="footer-cta" id="uk-map"><div className="footer-inner section-width"><div className="footer-copy"><b>Grow your business<br />across London and the UK.</b><small>Get a free SEO audit and find out how we can help you attract more local customers.</small><a className="footer-audit-btn" href="#contact">Get Your Free Audit <ArrowUpRight size={16} /></a></div><FooterMap /></div></footer>;
}

function Home() {
  return <><Nav /><main className="home-main"><HeroSlider /><ClientCarousel /><DigitalGrowth /><Services /><ProjectsCarousel /><ContactForm /><FooterCta /></main></>;
}

function Work() {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Website Design', 'Local SEO', 'E-commerce'];
  const visible = filter === 'All' ? projects : projects.filter(project => project.category === filter);
  return <><Nav /><main className="work-page section-width"><div className="work-head"><div className="eyebrow green"><span className="status-dot" /> OUR WORK</div><h1>Real projects for<br /><em>London businesses.</em></h1><p>Explore websites and digital work created for businesses we’ve worked with across the UK.</p><div className="filters">{categories.map(category => <button className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div></div><div className="work-grid">{visible.map(project => <article key={project.name}><img src={project.image} alt={`${project.name} project`} /><div className="tag">{project.category}</div><h2>{project.name}<ArrowUpRight size={16} /></h2><p>{project.description}</p></article>)}</div><a className="gradient-btn" href="/#contact">Contact Us <ArrowUpRight size={15} /></a></main><FooterCta /></>;
}

function App() {
  return window.location.pathname === '/work' || window.location.pathname === '/work.html' ? <Work /> : <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
