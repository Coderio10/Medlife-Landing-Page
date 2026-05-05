import { useState, useEffect } from 'react';
import { designTokens as T } from '../constants/designTokens';

interface NavbarProps {
  onBook: () => void;
}

export function Navbar({ onBook }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why MedLYFE', href: '#why' },
    { label: 'Our Team', href: '#testimonials' },
    { label: 'Locations', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={scrolled ? 'nav-glass' : 'nav-solid'}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 800,
        transition: 'all 0.35s cubic-bezier(.22,1,.36,1)',
      }}
      role="navigation" aria-label="Main navigation"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }} aria-label="MedLYFE Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill={T.green600} />
            <path d="M10 16h4l2-5 2 10 2-5h2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 6v2M16 24v2M6 16h2M24 16h2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, color: T.green900, letterSpacing: '-0.01em' }}>
            Med<span style={{ color: T.green600, fontStyle: 'italic' }}>LYFE</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer"
            className="hide-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 500, color: T.green600, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.color = T.green700}
            onMouseOut={e => e.currentTarget.style.color = T.green600}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.612L0 24l6.604-1.731A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.98-1.352l-.357-.212-3.922 1.029 1.045-3.819-.233-.371A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <button onClick={onBook} className="btn-primary" style={{ fontSize: 14 }}>Book Now</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="hide-desktop" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ width: 22, height: 2, background: T.gray700, borderRadius: 1 }} />
            <div style={{ width: 22, height: 2, background: T.gray700, borderRadius: 1 }} />
            <div style={{ width: 22, height: 2, background: T.gray700, borderRadius: 1 }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
