import { useState, useEffect, useCallback, useRef } from "react";
import { 
  FiUsers, FiTrendingUp, FiAward, FiStar, FiMapPin,
  FiZap, FiMoon, FiAlertCircle, FiSearch,
  FiShield, FiBarChart2, FiTarget, FiClock,
  FiPhone, FiMail
} from 'react-icons/fi';
import './App.css';
import { designTokens as T } from './constants/designTokens';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCounterAnimation } from './hooks/useCounterAnimation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEOMeta } from './components/SEOMeta';

/* ─── Hero ───────────────────────────────────────────────────────────── */
function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section
      id="hero"
      aria-label="Hero — MedLYFE Health Optimization"
      style={{
        minHeight: '100vh',
        paddingTop: 70,
        background: `linear-gradient(160deg, ${T.green50} 0%, ${T.white} 50%, ${T.cream} 100%)`,
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', width: '100vw'
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${T.green100} 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 380, height: 380, borderRadius: '50%', background: `radial-gradient(circle, rgba(90,184,130,0.12) 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="reveal section-label">
              <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill={T.green600}/></svg>
              Health · Optimized
            </div>
            <h1 className="reveal d1" style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: T.green900,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}>
              Don't Wait to{' '}
              <span style={{ color: T.green600, fontStyle: 'italic' }}>Break.</span>
              <br />
              Optimize Your<br />
              <span style={{ color: T.green600 }}>Health</span> Now.
            </h1>
            <p className="reveal d2" style={{ fontSize: 18, color: T.gray500, lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Physician-led programs, advanced diagnostics, and recovery technology — designed to help you perform at your best, now and for the long term.
            </p>
            <div className="reveal d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn-primary" onClick={onBook} style={{ fontSize: 16, padding: '16px 32px' }}>
                Book a Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </button>
              <a href="#services" className="btn-outline" style={{ fontSize: 16, padding: '15px 32px' }}>
                Explore Services
              </a>
            </div>
            {/* Trust badges */}
            <div className="reveal d4" style={{ display: 'flex', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
              {[
                { icon: FiShield, label: 'Physician-Led Care' },
                { icon: FiSearch, label: 'Advanced Testing' },
                { icon: FiBarChart2, label: 'Data-Driven Protocols' },
              ].map(b => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <b.icon size={20} style={{ color: T.green600 }} />
                  <span style={{ fontSize: 13, color: T.gray500, fontWeight: 500 }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image collage */}
          <div className="reveal-right d1 hide-mobile" style={{ position: 'relative', height: 560 }}>
            {/* Main image */}
            <div style={{
              position: 'absolute', top: 0, right: 0, width: '85%', height: '75%',
              borderRadius: 28, overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(13,43,31,0.18)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80"
                alt="MedLYFE physician-led health consultation"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="eager"
              />
              <div className="img-overlay" />
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
                borderRadius: 16, padding: '12px 16px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.green100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiTrendingUp size={18} color={T.green600} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: T.gray500, fontWeight: 500 }}>Optimization Score</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: T.green700, fontFamily: 'Fraunces, serif' }}>94 / 100</div>
                </div>
              </div>
            </div>
            {/* Secondary image */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, width: '52%', height: '40%',
              borderRadius: 22, overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(13,43,31,0.14)',
              border: `4px solid ${T.white}`,
            }}>
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80"
                alt="Advanced health diagnostics and testing at MedLYFE"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="eager"
              />
            </div>
            {/* Floating stat */}
            <div style={{
              position: 'absolute', top: 40, left: 0,
              background: T.white,
              borderRadius: 16, padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(13,43,31,0.10)',
              border: `1px solid ${T.green100}`,
            }}>
              <div style={{ fontSize: 11, color: T.gray500, fontWeight: 500, marginBottom: 2 }}>Active Members</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: T.green700, fontFamily: 'Fraunces, serif' }}>2,400+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem Strip ──────────────────────────────────────────────────── */
function ProblemStrip() {
  const symptoms = [
    { icon: FiZap, label: 'Low Energy' },
    { icon: FiTarget, label: 'Stubborn Weight' },
    { icon: FiMoon, label: 'Poor Sleep' },
    { icon: FiAlertCircle, label: 'High Stress' },
    { icon: FiSearch, label: 'Hidden Health Risks' },
  ];
  return (
    <section style={{ background: T.green900, padding: '40px 24px' }} aria-label="Common health problems we address">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="reveal" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 28 }}>
          You're doing well… but your body isn't where it should be
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 4vw, 60px)', flexWrap: 'wrap' }}>
          {symptoms.map((s, i) => (
            <div key={s.label} className={`reveal d${i + 1}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <s.icon size={28} color={'rgba(255,255,255,0.7)'} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <p className="reveal d5" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: 14, marginTop: 28 }}>
          Most people wait until something breaks. At MedLYFE, we help you optimize <em style={{ color: T.green400 }}>before</em> that happens.
        </p>
      </div>
    </section>
  );
}

/* ─── Stats Bar ──────────────────────────────────────────────────────── */
function StatsBar() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: '2400', label: 'Members Optimized', icon: FiUsers },
    { value: '8', label: 'Years of Excellence', icon: FiAward },
    { value: '15', label: 'Specialist Physicians', icon: FiShield },
    { value: '94', label: 'Member Satisfaction', icon: FiStar, suffix: '%' },
    { value: '3', label: 'Lagos Locations', icon: FiMapPin },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: T.green50, padding: '60px 24px', borderTop: `1px solid ${T.green100}`, borderBottom: `1px solid ${T.green100}` }} aria-label="MedLYFE statistics">
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 32 }}>
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} delay={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  suffix?: string;
}

function StatCard({ stat, delay, inView }: { stat: Stat; delay: number; inView: boolean }) {
  const displayValue = useCounterAnimation(`${stat.value}${stat.suffix || ''}`, inView);

  return (
    <div key={stat.label} className={`reveal d${delay + 1}`} style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
        <stat.icon size={28} color={T.green600} />
      </div>
      <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: T.green700 }}>{displayValue}</div>
      <div style={{ fontSize: 13, color: T.gray500, fontWeight: 500, marginTop: 4 }}>{stat.label}</div>
    </div>
  );
}

/* ─── About Strip ────────────────────────────────────────────────────── */
function About() {
  return (
    <section style={{ padding: '100px 24px', background: T.white }} aria-label="About MedLYFE">
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Image */}
        <div className="reveal-left" style={{ position: 'relative' }}>
          <div style={{ borderRadius: 28, overflow: 'hidden', height: 480, boxShadow: '0 24px 64px rgba(13,43,31,0.12)' }}>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80"
              alt="MedLYFE premium wellness clinic interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          {/* Green accent card */}
          <div style={{
            position: 'absolute', bottom: -24, right: -24,
            background: T.green600, borderRadius: 20, padding: '20px 24px',
            boxShadow: '0 12px 36px rgba(39,117,76,0.3)',
            maxWidth: 200,
          }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 700, color: T.white }}>12+</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>Specialized health programs tailored for you</div>
          </div>
        </div>
        {/* Text */}
        <div>
          <div className="reveal section-label">About MedLYFE</div>
          <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: T.green900, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.01em' }}>
            A Premium Health Optimization, Wellness & Longevity Centre
          </h2>
          <p className="reveal d2" style={{ fontSize: 16, color: T.gray500, lineHeight: 1.8, marginBottom: 20 }}>
            We combine advanced testing, personalised programs, recovery & longevity technologies, and high-quality wellness products into one structured system for measurable results that help maintain your vitality today and increase your health and lifespan for years to come.
          </p>
          <p className="reveal d3" style={{ fontSize: 18, fontFamily: 'Fraunces, serif', fontStyle: 'italic', color: T.green600, lineHeight: 1.5 }}>
            "We don't only add years to your life — we add life to your years."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Accordion ─────────────────────────────────────────────── */
function Services() {
  const [open, setOpen] = useState(0);

  const services = [
    {
      title: 'Optimization Programs',
      subtitle: 'Structured programs designed to deliver real transformation.',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
      imgAlt: 'Health optimization program consultation',
      body: 'Our physician-designed optimization programs combine metabolic assessment, hormonal profiling, nutrition protocols, and movement planning. Each program is built around your unique biomarkers and lifestyle goals — delivering measurable improvements in energy, weight, mental clarity, and longevity.',
      features: ['Metabolic & hormonal assessment', 'Personalised nutrition protocols', 'Performance & movement planning', '90-day transformation roadmap'],
    },
    {
      title: 'Recovery & Longevity Technology',
      subtitle: 'Recharge, recover, and perform at a higher level.',
      img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&q=80',
      imgAlt: 'Advanced recovery and longevity therapy',
      body: 'Access cutting-edge recovery modalities including IV therapy, hyperbaric oxygen, red light therapy, cryotherapy, and more. Our longevity protocols are designed to accelerate cellular repair, reduce inflammation, and extend your healthy years.',
      features: ['IV nutrient therapy', 'Hyperbaric oxygen therapy', 'Red light & photobiomodulation', 'Cold & heat therapy protocols'],
    },
    {
      title: 'Advanced Health Testing',
      subtitle: 'Understand what is really happening inside your body.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80',
      imgAlt: 'Advanced laboratory health testing',
      body: 'We go far beyond standard GP bloodwork. Our comprehensive panels include advanced cardiometabolic markers, gut microbiome analysis, heavy metal testing, genetic profiling, and full hormone panels — giving you a 360° picture of your internal health.',
      features: ['Comprehensive blood biomarker panels', 'Gut microbiome & food sensitivity', 'Genetic & DNA profiling', 'Hormonal & thyroid deep-dive'],
    },
    {
      title: 'Wellness & Longevity Products',
      subtitle: 'Daily tools to support your optimization journey.',
      img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80',
      imgAlt: 'Premium wellness and longevity supplements',
      body: 'Our curated range of pharmaceutical-grade supplements, nutraceuticals, and wellness products is recommended exclusively on the basis of your test results. No guesswork — only what your body actually needs.',
      features: ['Physician-recommended supplements', 'Pharmaceutical-grade nutraceuticals', 'Personalised stack based on your labs', 'Monthly supply management'],
    },
  ];

  return (
    <section id="services" style={{ padding: '100px 24px', background: T.cream }} aria-label="MedLYFE services">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="reveal section-label" style={{ display: 'inline-flex' }}>Our Services</div>
          <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: T.green900, letterSpacing: '-0.01em' }}>
            Comprehensive Care. <span style={{ color: T.green600, fontStyle: 'italic' }}>Real Results.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal d${i + 1} card-lift`}
              style={{
                background: T.white,
                borderRadius: 20,
                overflow: 'hidden',
                border: open === i ? `1.5px solid ${T.green400}` : `1px solid ${T.gray100}`,
                transition: 'border-color 0.2s',
              }}
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', padding: '24px 28px',
                  display: 'flex', alignItems: 'center', gap: 20,
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left',
                }}
                aria-expanded={open === i}
                aria-controls={`service-body-${i}`}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={s.img} alt={s.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 600, color: T.green900 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: T.gray500, marginTop: 2 }}>{s.subtitle}</div>
                </div>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: open === i ? T.green600 : T.green100,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s, transform 0.3s',
                  transform: open === i ? 'rotate(180deg)' : 'none',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={open === i ? T.white : T.green700} strokeWidth="2" strokeLinecap="round"><path d="M2 5l5 5 5-5"/></svg>
                </div>
              </button>
              {/* Body */}
              <div id={`service-body-${i}`} className={`accordion-content ${open === i ? 'open' : ''}`}>
                <div style={{ padding: '0 28px 28px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start' }}>
                  <div>
                    <p style={{ fontSize: 15, color: T.gray500, lineHeight: 1.75, marginBottom: 20 }}>{s.body}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {s.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', background: T.green100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={T.green600} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 5l2 2 4-4"/></svg>
                          </div>
                          <span style={{ fontSize: 14, color: T.gray700 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hide-mobile" style={{ width: 160, height: 140, borderRadius: 16, overflow: 'hidden', flexShrink: 0 }}>
                    <img src={s.img} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why MedLYFE ────────────────────────────────────────────────────── */
function WhyMedLYFE({ onBook }: { onBook: () => void }) {
  const pillars = [
    { icon: FiShield, title: 'Physician-Led Care', desc: 'Every program is designed and overseen by qualified, specialist physicians — not just wellness coaches.' },
    { icon: FiBarChart2, title: 'Data-Driven Decisions', desc: 'We test first, then act. Your biomarkers guide every recommendation we make.' },
    { icon: FiTarget, title: 'Personalised Protocols', desc: 'No one-size-fits-all plans. Every protocol is tailored to your unique biology and goals.' },
    { icon: FiStar, title: 'Premium Experience', desc: 'From your first consult to ongoing support, every touchpoint is crafted for excellence.' },
    { icon: FiAward, title: 'Built for High Performers', desc: 'We serve professionals, athletes, and executives who demand the best from their bodies.' },
  ];

  return (
    <section id="why" style={{ padding: '100px 24px', background: T.white }} aria-label="Why choose MedLYFE">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top: image + text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <div className="reveal section-label">Why MedLYFE</div>
            <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: T.green900, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 20 }}>
              Imagine Waking Up With <span style={{ color: T.green600, fontStyle: 'italic' }}>More Energy…</span>
            </h2>
            <p className="reveal d2" style={{ fontSize: 16, color: T.gray500, lineHeight: 1.8, marginBottom: 12 }}>Losing weight without extreme dieting…</p>
            <p className="reveal d3" style={{ fontSize: 16, color: T.gray500, lineHeight: 1.8, marginBottom: 12 }}>Feeling sharper, stronger, and more in control…</p>
            <p className="reveal d4" style={{ fontSize: 17, color: T.green700, fontWeight: 600, lineHeight: 1.6, marginBottom: 32 }}>That's exactly what we help you achieve.</p>
            <button className="btn-primary reveal d5" onClick={onBook} style={{ fontSize: 15 }}>
              Start Your Journey
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
          </div>
          <div className="reveal-right" style={{ borderRadius: 28, overflow: 'hidden', height: 420, boxShadow: '0 24px 64px rgba(13,43,31,0.14)' }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80"
              alt="Healthy, energetic lifestyle achieved through MedLYFE optimization"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Pillars grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {pillars.map((p, i) => (
            <div key={p.title} className={`reveal d${i + 1} card-lift`} style={{
              background: i % 2 === 0 ? T.green50 : T.white,
              border: `1px solid ${T.green100}`,
              borderRadius: 20, padding: '28px 24px',
            }}>
              <div style={{ marginBottom: 12 }}>
                <p.icon size={32} color={T.green600} />
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 600, color: T.green900, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 14, color: T.gray500, lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Carousel ──────────────────────────────────────────── */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const testimonials = [
    {
      name: 'Adaeze O.',
      role: 'CEO, Lagos',
      img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
      quote: "I had been struggling with fatigue and weight gain for years. After 90 days on the MedLYFE Optimization Program, my energy is through the roof and I've lost 12kg — sustainably. This isn't a clinic, it's a life upgrade.",
      stars: 5,
    },
    {
      name: 'Emeka T.',
      role: 'Investment Banker',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      quote: "The advanced testing revealed hormonal imbalances my GP had missed for 3 years. The team at MedLYFE built a protocol around my results. Two months in, I feel 10 years younger — sharper, calmer, and performing at my peak.",
      stars: 5,
    },
    {
      name: 'Funmi A.',
      role: 'Surgeon & Mother of 3',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      quote: "As a surgeon, I'm deeply sceptical of wellness marketing. MedLYFE won me over with data. Their testing is thorough, the physicians are legitimate experts, and the results speak for themselves. My biomarkers have never looked better.",
      stars: 5,
    },
    {
      name: 'Chukwudi M.',
      role: 'Professional Athlete',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      quote: "The Recovery & Longevity Tech suite at MedLYFE is world-class. The IV therapy, red light protocols, and hyperbaric sessions have cut my recovery time in half. If you're serious about performance, this is where you go.",
      stars: 5,
    },
  ];

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section id="testimonials" style={{ padding: '100px 24px', background: T.green900, position: 'relative', overflow: 'hidden' }} aria-label="Client testimonials">
      {/* Decoration */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(90,184,130,0.12) 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal section-label" style={{ background: 'rgba(90,184,130,0.15)', color: T.green400, display: 'inline-flex' }}>Member Stories</div>
        <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, color: T.white, letterSpacing: '-0.01em', marginBottom: 56 }}>
          Real People. <span style={{ color: T.green400, fontStyle: 'italic' }}>Real Transformations.</span>
        </h2>

        {/* Card */}
        <div className="reveal d2" style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 28, padding: '48px 40px',
          position: 'relative',
        }}>
          <div style={{ fontSize: 64, color: T.green500, fontFamily: 'Fraunces, serif', lineHeight: 0.8, marginBottom: 20, opacity: 0.6 }}>"</div>
          <p style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(17px, 2vw, 22px)', color: 'rgba(255,255,255,0.90)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 32 }}>
            {t.quote}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${T.green500}` }}>
              <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 600, color: T.white, fontSize: 15 }}>{t.name}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{t.role}</div>
            </div>
            <div style={{ marginLeft: 8, display: 'flex', gap: 2 }}>
              {Array(t.stars).fill(0).map((_, j) => (
                <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill={T.green400}><path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75L8 1z"/></svg>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32 }}>
          <button onClick={prev} aria-label="Previous testimonial" style={{
            width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.07)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"><path d="M11 4l-5 5 5 5"/></svg>
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i + 1}`} style={{
              width: i === idx ? 28 : 8, height: 8, borderRadius: 4,
              background: i === idx ? T.green400 : 'rgba(255,255,255,0.25)',
              border: 'none', cursor: 'pointer',
              transition: 'width 0.3s, background 0.2s',
              padding: 0,
            }} />
          ))}
          <button onClick={next} aria-label="Next testimonial" style={{
            width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.07)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"><path d="M7 4l5 5-5 5"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Download Brochure ──────────────────────────────────────────────── */
function DownloadBrochure() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="brochure" style={{ padding: '100px 24px', background: T.green50 }} aria-label="Download MedLYFE brochure">
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <div className="reveal section-label">Get Started</div>
          <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(30px, 3vw, 44px)', fontWeight: 600, color: T.green900, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 16 }}>
            Download Your Free <span style={{ color: T.green600, fontStyle: 'italic' }}>Health Programme</span> Guide
          </h2>
          <p className="reveal d2" style={{ fontSize: 16, color: T.gray500, lineHeight: 1.75, marginBottom: 28 }}>
            Get instant access to MedLYFE programmes, services, and solutions tailored to your goals. Delivered to your inbox — private, confidential, and spam-free.
          </p>
          <div className="reveal d3" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['🔒 Private & Confidential', '📭 Zero Spam, Ever', '⚡ Instant Access'].map(i => (
              <div key={i} style={{ fontSize: 14, color: T.gray700, fontWeight: 500 }}>{i}</div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="reveal-right d1" style={{ background: T.white, borderRadius: 24, padding: '40px 36px', boxShadow: '0 12px 48px rgba(13,43,31,0.08)', border: `1px solid ${T.green100}` }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: T.green800, marginBottom: 8 }}>You're all set!</h3>
              <p style={{ fontSize: 15, color: T.gray500 }}>Your guide is on its way to your inbox. One of our health advisors will also be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-label="Brochure download form">
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: T.green900, marginBottom: 24 }}>Tell us about yourself</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                  <label className="form-label" htmlFor="b-interest">Area of Interest *</label>
                  <select id="b-interest" className="form-input" required value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}>
                    <option value="">Select…</option>
                    <option>Optimization Programs</option>
                    <option>Recovery & Longevity Tech</option>
                    <option>Advanced Health Testing</option>
                    <option>Wellness Products</option>
                    <option>All Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-name">Full Name *</label>
                  <input id="b-name" className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-email">Email Address *</label>
                  <input id="b-email" type="email" className="form-input" required placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-phone">Phone Number</label>
                  <input id="b-phone" className="form-input" placeholder="+234 …" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-goal">Primary Goal</label>
                  <select id="b-goal" className="form-input" value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })}>
                    <option value="">Select…</option>
                    <option>Lose Weight</option>
                    <option>Boost Energy</option>
                    <option>Improve Sleep</option>
                    <option>Manage Stress</option>
                    <option>Longevity & Prevention</option>
                    <option>Athletic Performance</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8, fontSize: 15 }}>
                Download My Guide →
              </button>
              <p style={{ fontSize: 12, color: T.gray500, textAlign: 'center', marginTop: 12 }}>
                By submitting, you agree to receive health insights from MedLYFE. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Visit Us / Locations ───────────────────────────────────────────── */
function Locations() {
  const locs = [
    {
      name: 'Lekki',
      address: 'Admiralty Way, Near \'O2 Arena, Lekki Phase 1, Lagos',
      tag: 'Flagship Centre',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
      imgAlt: 'MedLYFE Lekki flagship wellness centre exterior',
      status: 'Open Now',
    },
    {
      name: 'The Lyfe Place',
      address: 'Premium Wellness Experience, Victoria Island, Lagos',
      tag: 'Partner Venue',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80',
      imgAlt: 'The Lyfe Place premium wellness location',
      status: 'Open Now',
    },
    {
      name: 'Ikoyi',
      address: 'Coming Soon — Ikoyi, Lagos',
      tag: 'Opening Soon',
      img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80',
      imgAlt: 'MedLYFE Ikoyi location coming soon',
      status: 'Coming Soon',
    },
  ];

  return (
    <section id="locations" style={{ padding: '100px 24px', background: T.white }} aria-label="MedLYFE Lagos locations">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 56 }}>
          <div>
            <div className="reveal section-label">Visit Us</div>
            <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: T.green900, lineHeight: 1.15, letterSpacing: '-0.01em' }}>
              We Come <span style={{ color: T.green600, fontStyle: 'italic' }}>To You</span> Too
            </h2>
          </div>
          <div className="reveal d2" style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 16, color: T.gray500, lineHeight: 1.75, marginBottom: 16 }}>
              Visit one of our premium wellness centres across Lagos, or let us come to you. For select members, MedLYFE offers home visits, corporate wellness sessions, and concierge health management.
            </p>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                { icon: FiMapPin, text: 'Home Visits' },
                { icon: FiTarget, text: 'Corporate Wellness' },
                { icon: FiShield, text: 'Concierge Care' }
              ].map(s => (
                <div key={s.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: T.green700, fontWeight: 500 }}>
                  <s.icon size={16} />
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {locs.map((l, i) => (
            <div key={l.name} className={`reveal d${i + 1} card-lift`} style={{
              borderRadius: 22, overflow: 'hidden',
              border: `1px solid ${T.gray100}`,
              background: T.white,
            }}>
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img src={l.img} alt={l.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} loading="lazy" />
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  background: l.status === 'Coming Soon' ? T.gray700 : T.green600,
                  color: T.white, fontSize: 11, fontWeight: 600,
                  padding: '4px 12px', borderRadius: 50, letterSpacing: '0.04em',
                }}>{l.status}</div>
              </div>
              <div style={{ padding: '22px 22px 24px' }}>
                <div style={{ fontSize: 11, color: T.green600, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{l.tag}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, color: T.green900, marginBottom: 8 }}>{l.name}</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                  <FiMapPin size={14} style={{ marginTop: 2, flexShrink: 0, color: T.gray500 }} />
                  <span style={{ fontSize: 13, color: T.gray500, lineHeight: 1.5 }}>{l.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', background: T.cream }} aria-label="Contact MedLYFE">
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <div className="reveal section-label">Get In Touch</div>
          <h2 className="reveal d1" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(30px, 3vw, 44px)', fontWeight: 600, color: T.green900, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 16 }}>
            Your Health Journey Starts <span style={{ color: T.green600, fontStyle: 'italic' }}>With a Conversation</span>
          </h2>
          <p className="reveal d2" style={{ fontSize: 16, color: T.gray500, lineHeight: 1.75, marginBottom: 32 }}>
            Our team is available to answer your questions, explain our programmes, and help you find the best path to optimal health.
          </p>
          <div className="reveal d3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: FiPhone, label: 'Phone', value: '+234 000 000 0000' },
              { icon: FiMail, label: 'Email', value: 'hello@medlyfe.com' },
              { icon: FiClock, label: 'Hours', value: 'Mon–Sat: 8am – 7pm' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: T.green100, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <c.icon size={20} color={T.green600} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: T.gray500, fontWeight: 500 }}>{c.label}</div>
                  <div style={{ fontSize: 15, color: T.gray900, fontWeight: 500 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right d1" style={{ background: T.white, borderRadius: 24, padding: '40px 36px', boxShadow: '0 12px 48px rgba(13,43,31,0.07)', border: `1px solid ${T.green100}` }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: T.green800, marginBottom: 8 }}>Message received!</h3>
              <p style={{ fontSize: 15, color: T.gray500 }}>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-label="Contact form">
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, color: T.green900, marginBottom: 24 }}>Send us a message</h3>
              <div className="form-group">
                <label className="form-label" htmlFor="c-name">Full Name *</label>
                <input id="c-name" className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-email">Email Address *</label>
                <input id="c-email" type="email" className="form-input" required placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-phone">Phone Number</label>
                <input id="c-phone" className="form-input" placeholder="+234 …" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-msg">Message *</label>
                <textarea id="c-msg" className="form-input" required placeholder="How can we help?" rows={4} style={{ resize: 'vertical' }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}



/* ─── Booking Modal ──────────────────────────────────────────────────── */
function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', goal: '' });
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setDone(true);
  };

  useEffect(() => {
    if (!open) { setTimeout(() => { setStep(1); setDone(false); setForm({ name: '', email: '', phone: '', service: '', date: '', goal: '' }); }, 400); }
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label="Book a consultation">
      <div className="modal-box">
        {/* Close */}
        <button onClick={onClose} aria-label="Close modal" style={{ position: 'absolute', top: 16, right: 16, background: T.gray100, border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={T.gray700} strokeWidth="2" strokeLinecap="round"><path d="M2 2l10 10M12 2L2 12"/></svg>
        </button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: T.green100, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28 }}>✅</div>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 26, color: T.green900, marginBottom: 10 }}>Consultation Booked!</h2>
            <p style={{ fontSize: 15, color: T.gray500, lineHeight: 1.7, marginBottom: 24 }}>We've received your request and will confirm your appointment within 2 hours via email and WhatsApp.</p>
            <button className="btn-primary" onClick={onClose} style={{ margin: '0 auto' }}>Done</button>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              {[1, 2].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: s < 2 ? 1 : 'none' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: step >= s ? T.green600 : T.gray100,
                    color: step >= s ? T.white : T.gray500,
                    fontSize: 12, fontWeight: 600,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.25s',
                  }}>{s}</div>
                  {s < 2 && <div style={{ flex: 1, height: 2, background: step > 1 ? T.green500 : T.gray100, transition: 'background 0.3s', borderRadius: 1 }} />}
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: T.green900, marginBottom: 6 }}>
              {step === 1 ? 'Book a Consultation' : 'Choose Your Slot'}
            </h2>
            <p style={{ fontSize: 14, color: T.gray500, marginBottom: 28 }}>
              {step === 1 ? 'Tell us a little about yourself and your goals.' : 'Pick your preferred service and date.'}
            </p>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="m-name">Full Name *</label>
                      <input id="m-name" className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="m-email">Email *</label>
                      <input id="m-email" type="email" className="form-input" required placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-phone">WhatsApp / Phone *</label>
                    <input id="m-phone" className="form-input" required placeholder="+234 000 000 0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-goal">Primary Health Goal</label>
                    <select id="m-goal" className="form-input" value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })}>
                      <option value="">Select a goal…</option>
                      <option>Lose Weight & Improve Body Composition</option>
                      <option>Boost Energy & Reduce Fatigue</option>
                      <option>Improve Sleep Quality</option>
                      <option>Manage Stress & Mental Clarity</option>
                      <option>Longevity & Disease Prevention</option>
                      <option>Athletic Performance</option>
                      <option>Hormonal Balance</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-service">Service *</label>
                    <select id="m-service" className="form-input" required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service…</option>
                      <option>Optimization Programs — Initial Consultation</option>
                      <option>Recovery & Longevity Technology</option>
                      <option>Advanced Health Testing</option>
                      <option>Wellness Products Consultation</option>
                      <option>Not sure — help me choose</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-date">Preferred Date *</label>
                    <input id="m-date" type="date" className="form-input" required min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-loc">Preferred Location</label>
                    <select id="m-loc" className="form-input">
                      <option>Lekki — Admiralty Way</option>
                      <option>The Lyfe Place — Victoria Island</option>
                      <option>Ikoyi (Coming Soon)</option>
                      <option>Home Visit (Select Members)</option>
                    </select>
                  </div>
                </>
              )}
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                {step === 1 ? 'Continue →' : 'Confirm Booking →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── SEO Meta (inline) ──────────────────────────────────────────────── */
/* ─── App Root ───────────────────────────────────────────────────────── */
export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  useScrollReveal();

  const openBook = useCallback(() => setBookingOpen(true), []);
  const closeBook = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      <SEOMeta />

      <Navbar onBook={openBook} />

      <main id="main-content">
        <Hero onBook={openBook} />
        <ProblemStrip />
        <StatsBar />
        <About />
        <Services />
        <WhyMedLYFE onBook={openBook} />
        <Testimonials />
        <DownloadBrochure />
        <Locations />
        <Contact />
      </main>

      <Footer />
      <BookingModal open={bookingOpen} onClose={closeBook} />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/2341234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat with MedLYFE on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.612L0 24l6.604-1.731A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.98-1.352l-.357-.212-3.922 1.029 1.045-3.819-.233-.371A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
        </svg>
      </a>
    </>
  );
}
