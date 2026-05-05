import { designTokens as T } from '../constants/designTokens';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: T.green900, color: 'rgba(255,255,255,0.65)', padding: '64px 24px 32px' }} role="contentinfo">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 56, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill={T.green500} />
                <path d="M10 16h4l2-5 2 10 2-5h2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 600, color: T.white }}>
                Med<span style={{ color: T.green400, fontStyle: 'italic' }}>LYFE</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 220 }}>Health · Optimized. Premium wellness and longevity centre serving Lagos's high performers.</p>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.white, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            {['Optimization Programs', 'Recovery & Longevity Tech', 'Advanced Health Testing', 'Wellness Products'].map(s => (
              <a key={s} href="#services" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = T.white} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>{s}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.white, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
            {['About Us', 'Our Physicians', 'Locations', 'Careers', 'Press'].map(s => (
              <a key={s} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = T.white} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.white, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
            <p style={{ fontSize: 14, marginBottom: 10 }}>+234 000 000 0000</p>
            <p style={{ fontSize: 14, marginBottom: 10 }}>hello@medlyfe.com</p>
            <p style={{ fontSize: 14, marginBottom: 20 }}>Admiralty Way, Lekki Phase 1, Lagos</p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Twitter/X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = T.green400; e.currentTarget.style.background = 'rgba(90,184,130,0.12)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>© {year} MedLYFE Health Optimized. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = T.white} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
