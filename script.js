* {
  box-sizing: border-box;
}

:root {
  --bg: #07111c;
  --bg-2: #0e1d2f;
  --panel: rgba(14, 24, 37, 0.9);
  --panel-soft: rgba(17, 31, 46, 0.8);
  --line: rgba(160, 188, 236, 0.18);
  --text: #edf5ff;
  --muted: #b4c6de;
  --strong: #ffffff;
  --primary: #67a6ff;
  --primary-2: #7fe6d5;
  --purple: #9a7dff;
  --shadow: 0 24px 54px rgba(3, 9, 16, 0.65);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(103, 166, 255, 0.18), transparent 24%),
    radial-gradient(circle at bottom right, rgba(127, 230, 213, 0.12), transparent 30%),
    linear-gradient(180deg, #050d18 0%, #0b1728 100%);
}

img {
  display: block;
  max-width: 100%;
}

:focus-visible {
  outline: 2px solid var(--primary-2);
  outline-offset: 4px;
}

.bg-orb {
  position: fixed;
  pointer-events: none;
  filter: blur(80px);
  opacity: 0.18;
  border-radius: 50%;
}

.orb-1 {
  width: 320px;
  height: 320px;
  top: 5%;
  left: 8%;
  background: rgba(103, 166, 255, 0.8);
}

.orb-2 {
  width: 360px;
  height: 360px;
  right: 6%;
  bottom: 8%;
  background: rgba(127, 230, 213, 0.7);
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.04) 0.7px, transparent 0.8px);
  background-size: 14px 14px;
  mask-image: radial-gradient(circle at center, black, transparent 82%);
  pointer-events: none;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(18px);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 18px;
  padding: 14px 20px;
  border: 1px solid var(--line);
  background: rgba(7, 17, 28, 0.7);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--purple));
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(103,166,255,0.38);
}

.brand-text {
  font-weight: 700;
  letter-spacing: -0.05em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
}

.nav a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, filter 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  padding: 0.92rem 1.4rem;
  background: linear-gradient(135deg, var(--primary), #4d7eff);
  color: white;
  box-shadow: 0 16px 26px rgba(95, 127, 255, 0.36);
}

.btn-secondary,
.btn-ghost {
  padding: 0.9rem 1.3rem;
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.full-width {
  width: 100%;
}

.hero {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 42px;
  align-items: center;
  padding: 88px 0 36px;
}

.eyebrow {
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--primary-2);
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.security-copy h2,
.cta-box h2 {
  margin: 0;
  letter-spacing: -0.07em;
  line-height: 1.02;
}

.hero-copy h1 {
  max-width: 700px;
  font-size: clamp(2.8rem, 6vw, 5.1rem);
}

.lead {
  margin-top: 22px;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.mini-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 34px;
}

.mini-stats div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-stats strong {
  font-size: 1.7rem;
  letter-spacing: -0.06em;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.browser-window {
  width: min(100%, 620px);
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(17, 28, 40, 0.96), rgba(9, 16, 25, 0.98));
  box-shadow: var(--shadow);
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 16px 18px;
  background: rgba(11, 18, 28, 0.9);
  border-bottom: 1px solid var(--line);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.red { background: #ff6e7d; }
.dot.amber { background: #efc55b; }
.dot.green { background: #6cdd9a; }

.tab-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px 10px;
  background: rgba(12, 21, 32, 0.8);
  border-bottom: 1px solid rgba(160, 188, 236, 0.12);
}

.tab {
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--muted);
  font-size: 0.8rem;
  background: rgba(255,255,255,0.02);
}

.tab.active {
  background: rgba(103,166,255,0.12);
  color: var(--text);
  border: 1px solid rgba(103,166,255,0.22);
}

.address-bar {
  padding: 12px 16px;
  margin: 18px;
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  color: var(--muted);
}

.browser-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr 0.9fr;
  gap: 14px;
  padding: 0 18px 18px;
}

.panel {
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(18, 29, 41, 0.94);
  padding: 18px;
}

.large {
  min-height: 170px;
  grid-column: 1 / span 2;
}

.accent-panel {
  background: linear-gradient(180deg, rgba(13, 26, 38, 0.94), rgba(11, 19, 28, 0.98));
}

.chip {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(127,230,213,0.12);
  color: var(--primary-2);
  font-size: 0.72rem;
  margin-bottom: 18px;
}

.panel h3 {
  margin: 0 0 10px;
  font-size: 1.45rem;
}

.panel p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 126px;
}

.panel-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 12px;
}

.stat-card strong {
  font-size: 2rem;
  letter-spacing: -0.07em;
}

.stat-card small {
  color: var(--muted);
}

.wide-panel {
  grid-column: 1 / -1;
  min-height: 90px;
}

.wide-panel strong {
  display: block;
  font-size: 1.18rem;
}

.feature-band,
.security-section,
.platforms,
.compare-section,
.pricing-section {
  padding-top: 110px;
}

.section-heading {
  text-align: center;
  margin-bottom: 36px;
}

.section-heading h2,
.security-copy h2,
.cta-box h2 {
  font-size: clamp(2.2rem, 4vw, 3.5rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.feature-card {
  padding: 26px 22px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 29, 43, 0.88);
  box-shadow: 0 18px 34px rgba(5, 10, 18, 0.3);
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(103,166,255,0.12), rgba(154,125,255,0.18));
  font-size: 1.7rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.security-grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 28px;
  align-items: center;
}

.security-copy p:last-child {
  margin-top: 18px;
  max-width: 560px;
  color: var(--muted);
  line-height: 1.8;
}

.security-panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.security-card {
  padding: 26px 22px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 29, 43, 0.9);
}

.security-card.highlight {
  background: linear-gradient(180deg, rgba(103,166,255,0.12), rgba(154,125,255,0.08));
}

.security-card h3 {
  margin: 0 0 18px;
  font-size: 1.35rem;
}

.security-card ul {
  margin: 0;
  padding-left: 18px;
  line-height: 2;
  color: var(--muted);
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.platform-item {
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(17, 29, 43, 0.9);
  font-weight: 600;
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.compare-card {
  padding: 28px 22px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(17, 29, 43, 0.88);
}

.compare-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
}

.compare-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.pricing-card {
  padding: 28px 22px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(17, 29, 43, 0.9);
}

.featured-plan {
  border-color: rgba(103,166,255,0.36);
  background: linear-gradient(180deg, rgba(103,166,255,0.12), rgba(17,29,43,0.94));
  transform: translateY(-8px);
}

.pricing-top {
  margin-bottom: 18px;
}

.plan-name {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.pricing-card h3 {
  margin: 0;
  font-size: clamp(2.1rem, 3vw, 2.8rem);
  letter-spacing: -0.06em;
}

.pricing-card h3 span {
  font-size: 0.9rem;
  color: var(--muted);
  letter-spacing: normal;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  color: var(--muted);
  line-height: 2.1;
}

.pricing-card li::before {
  content: "✓";
  color: var(--primary-2);
  margin-right: 8px;
}

.cta-section {
  padding-top: 120px;
}

.cta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 32px 28px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(103,166,255,0.12), rgba(154,125,255,0.1));
}

.site-footer {
  margin-top: 100px;
  padding: 24px 0 40px;
  border-top: 1px solid var(--line);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: var(--muted);
}

.footer-brand {
  color: var(--text);
  font-weight: 700;
}

.download-shell {
  padding-top: 90px;
  padding-bottom: 50px;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.download-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-height: 180px;
  padding: 22px 18px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(17, 29, 43, 0.9);
  color: var(--text);
  text-decoration: none;
  text-align: center;
}

.download-card span {
  font-size: 2rem;
}

.download-card strong {
  font-size: 1.2rem;
}

.download-card small {
  color: var(--muted);
}

@media (max-width: 1100px) {
  .hero,
  .security-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pricing-grid,
  .compare-grid,
  .download-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .platform-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .topbar-inner {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-actions {
    width: 100%;
    justify-content: center;
  }

  .feature-grid,
  .security-panels,
  .platform-grid,
  .pricing-grid,
  .compare-grid,
  .download-grid,
  .browser-grid {
    grid-template-columns: 1fr;
  }

  .browser-grid {
    display: grid;
  }

  .large,
  .wide-panel {
    grid-column: auto;
  }

  .cta-box,
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

  .cta-box {
    align-items: center;
  }
}
