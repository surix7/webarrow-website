import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BarChart3, Check, ChevronRight, CircleHelp, Code2, Globe2, MapPin, Menu, PhoneCall, ShoppingCart, Sparkles } from 'lucide-react';
import './styles.css';
import './overrides.css';

const photos = {
  london: '/assets/webarrow-westminster-hero.png',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=90',
  trades: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=90',
  clinic: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=90',
  office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=90',
  retail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=90',
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=90'
};
const featured = [
  ['Bricks & Bobs', 'E-commerce Website', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=90'],
  ['SafeStart', 'Corporate Website', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=90'],
  ['SBG Solicitors', 'Professional Website', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=90']
];

const work = [
  ['Midtown Design', 'Modern websites driving 220% more online bookings.', photos.restaurant, 'Web Design'],
  ['North London Trades', 'Launched at 5.4m. 230 new enquiries in a month.', photos.trades, 'Local SEO'],
  ['Home & Living Brand', 'E-commerce website with 180%+ revenue growth.', photos.retail, 'E-commerce'],
  ['Fitness Studio', '350% more trial bookings with Google Ads.', photos.office, 'Google Ads'],
  ['Professional Services', '15k more organic visitors and 50+ enquiries.', photos.clinic, 'Website Design'],
  ['Boutique Hotel', 'Increased direct bookings by 70% through local SEO.', photos.hotel, 'Local SEO']
];

function Browser({ children, className='' }) { return <section className={'browser '+className}><div className="browserbar"><i/><i/><i/><span/></div>{children}</section> }
function Nav(){ return <nav><a className="brand" href="/">Webarrow<span className="dot">.</span></a><div className="links"><a href="/">Home</a><a href="/#services">Services</a><a href="/#industries">Locations</a><a href="/work">Work</a><a href="/#contact">Contact</a></div><div className="nav-actions"><CircleHelp size={14}/><a className="gradient-btn" href="/#contact">Get a Quote <ArrowUpRight size={13}/></a><button className="menu"><Menu size={17}/></button></div></nav> }
function Trust(){ return <div className="trust"><div><MapPin/><b>Local SEO Experts</b></div><div><PhoneCall/><b>More Calls & Enquiries</b></div><div><BarChart3/><b>Results-Driven</b></div><div><Check/><b>Trusted By UK Businesses</b></div></div> }
function Industries(){ const items=[['Restaurants & Cafes',photos.restaurant],['Trades & Home Services',photos.trades],['Healthcare & Clinics',photos.clinic],['Professional Services',photos.office],['Retail & E-commerce',photos.retail],['Hotel & Hospitality',photos.hotel]]; return <div className="industries" id="industries"><div className="eyebrow">WE WORK WITH</div><div className="industry-grid">{items.map(([name,img])=><div className="industry" key={name}><img src={img}/><div><b>{name}</b><ArrowUpRight size={13}/></div></div>)}</div></div> }
function Services(){ const items=[['Website Design',Globe2],['E-commerce',ShoppingCart],['Local SEO',MapPin],['Google Ads',BarChart3],['AI Solutions',Sparkles],['Hosting & Support',Code2]]; return <div className="services" id="services"><div className="section-title"><h2>A complete digital solution<br/>for every business.</h2><a href="#contact">View All Services <ChevronRight size={14}/></a></div><div className="service-grid">{items.map(([name,Icon])=><div className="service" key={name}><span><Icon size={18}/></span><b>{name}</b><ChevronRight size={14}/></div>)}</div></div> }
function Featured(){ return <section className="featured"><div className="section-title"><h2>Featured Local Projects</h2><a href="/work">View All <ChevronRight size={14}/></a></div><div className="featured-grid">{featured.map(([name,type,img])=><article key={name}><div className={`project-art ${name.toLowerCase().replaceAll(' ','-')}`} style={{backgroundImage:`url(${img})`}}><span className="project-brand">{name}</span><strong>{name==='Bricks & Bobs'?'Beautiful spaces, made for living':name==='SafeStart'?'Sustainable protection for every journey':'Expert legal support, with you'}</strong><span className="project-action">{name==='Bricks & Bobs'?'Shop now ↗':name==='SafeStart'?'Explore SafeStart ↗':'Speak to a solicitor ↗'}</span></div><b>{name}</b><span>{type}</span></article>)}</div></section> }
function FooterMap(){ return <svg className="uk-map" viewBox="0 0 240 240" role="img" aria-label="Map of the United Kingdom with service locations"><path className="map-land" d="M111 8 126 12 139 20 146 29 139 37 150 44 144 52 154 60 148 68 157 76 150 85 158 93 152 102 160 111 152 120 156 129 148 137 151 147 143 155 145 165 137 173 138 181 130 188 129 197 121 202 118 212 111 221 104 217 100 207 92 204 88 196 80 193 78 185 71 179 76 171 69 164 75 156 68 149 74 141 68 134 75 126 69 118 77 111 72 103 79 96 75 88 83 81 79 73 88 67 84 59 94 53 90 45 101 39 98 31 108 27 105 19 113 15Z"/><path className="map-land ireland" d="m54 112 9-3 8 4 5 8-4 8 3 7-7 7-8-2-4-7-7-3 2-8-4-5Z"/><path className="map-land" d="m74 73 2-5 3 2-1 5Z M89 229l3 2-2 4-3-2Z"/><g className="map-roads"><path d="M116 40 111 82 120 111 111 152 105 190"/><path d="M148 70 126 93 113 119 92 150"/></g><g className="map-pins"><circle cx="126" cy="57" r="5"/><circle cx="111" cy="115" r="5"/><circle cx="124" cy="164" r="5"/><circle cx="99" cy="180" r="4"/></g></svg> }
function Home(){ return <><div className="page-label">01. Homepage</div><Browser><Nav/><div className="hero"><div className="hero-copy"><div className="eyebrow green">● LONDON & UK</div><h1>Helping local<br/>businesses get<br/>found, <em>get leads</em><br/>and grow.</h1><p>Websites, SEO, Google Ads and digital solutions<br/>for businesses across London and the UK.</p><a className="gradient-btn large" href="/#services">Get a Free Local SEO Audit <ArrowUpRight size={15}/></a><a className="outline-btn" href="/work">View Our Work</a></div><div className="hero-photo" style={{backgroundImage:`url(${photos.london})`}}><div className="tower-shade"/></div></div><Trust/><Industries/><Services/><Featured/><footer id="contact"><div className="footer-inner"><div className="footer-copy"><b>Grow your business<br/>in London and the UK.</b><small>See how we can help you get more calls,<br/>more customers and a stronger online presence.</small></div><FooterMap/><a className="gradient-btn" href="mailto:hello@webarrow.co.uk">Run free audit <ArrowUpRight size={13}/></a></div></footer></Browser></> }
function Work(){ return <><div className="page-label">05. Case Studies / Work</div><Browser className="work-browser"><Nav/><div className="work-head"><div className="eyebrow green">● OUR WORK</div><h2>Real results for<br/><em>London businesses.</em></h2><p>See how we’ve helped local businesses get more visibility,<br/>more leads and real growth through great websites, SEO and<br/>Google Ads.</p><div className="filters"><button className="active">All</button><button>Website Design</button><button>Local SEO</button><button>Google Ads</button><button>E-commerce</button></div></div><div className="work-grid">{work.map(([name,desc,img,tag])=><article key={name}><img src={img}/><div className="tag">{tag}</div><h3>{name}<ArrowUpRight size={13}/></h3><p>{desc}</p></article>)}</div></Browser></> }
function App(){ return <main>{window.location.pathname === '/work' || window.location.pathname === '/work.html' ? <Work/> : <Home/>}</main> }
createRoot(document.getElementById('root')).render(<App/>);
