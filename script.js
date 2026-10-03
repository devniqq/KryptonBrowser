* {
  box-sizing: border-box;
}

:root {
  --bg: #070d18;
  --bg-2: #0d1a2a;
  --panel: rgba(15, 25, 38, 0.9);
  --panel-strong: rgba(17, 29, 44, 0.98);
  --line: rgba(145, 173, 218, 0.18);
  --text: #edf5ff;
  --muted: #b3c7ea;
  --accent: #67a4ff;
  --accent-2: #7ce8d5;
  --purple: #9d7bff;
  --shadow: 0 20px 60px rgba(4, 9, 18, 0.65);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(103, 164, 255, 0.14), transparent 26%),
    radial-gradient(circle at bottom right, rgba(124, 232, 213, 0.1), transparent 28%),
    linear-gradient(180deg, #050b14 0%, #0a1524 100%);
}

img {
  max-width: 100%;
  display: block;
}

:focus-visible {
  outline: 2px solid var(--accent-2);
  outline-offset: 4px;
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(255,255,255,0.035) 0.7px, transparent 0.8px);
  background-size: 12px 12px;
  opacity: 0.28;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: min(1200px, calc(100% - 32px));
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 22px;
  border: 1px solid var(--line);
  background: rgba(8, 15, 25, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--purple));
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(103, 164, 255, 0.35);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-weight: 700;
  letter-spacing: -0.05em;
}

.brand-tag {
  font-size: 0.65rem;
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav a {
  font-size: 0.92rem;
  color: var(--muted);
  text-decoration: none;
}

.nav a:hover {
  color: var(--text);
}

.nav-button,
.primary-btn,
.secondary-btn,
.download-card {
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.nav-button,
.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.92rem 1.4rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), #4d7eff);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 16px 24px rgba(98, 124, 255, 0.35);
}

.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.92rem 1.4rem;
  border-radius: 12px;
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.nav-button:hover,
.primary-btn:hover,
.secondary-btn:hover,
.download-card:hover {
  transform: translateY(-2px);
}

.hero {
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  align-items: center;
  gap: 42px;
  padding-top: 86px;
  padding-bottom: 40px;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent-2);
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.security-copy h2 {
  margin: 0;
  letter-spacing: -0.07em;
  line-height: 1.02;
}

.hero-copy h1 {
  font-size: clamp(2.9rem, 6vw, 5.3rem);
  max-width: 700px;
}

.lead {
  max-width: 620px;
  margin-top: 20px;
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

.stat-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 26px;
  margin-top: 34px;
}

.stat-row div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-row strong {
  font-size: 1.6rem;
  letter-spacing: -0.05em;
}

.stat-row span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-art {
  display: flex;
  justify-content: center;
}

.browser-shell {
  position: relative;
  width: min(100%, 620px);
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(16,26,38,0.95), rgba(9,15,25,0.97));
  box-shadow: var(--shadow);
}

.browser-topbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 18px;
  background: rgba(9, 19, 29, 0.9);
  border-bottom: 1px solid var(--line);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.red { background: #ff6e7a; }
.dot.yellow { background: #f9c653; }
.dot.green { background: #6be5a4; }

.browser-tabs {
  display: flex;
  gap: 10px;
  padding: 14px 18px 10px;
  background: rgba(14, 22, 33, 0.7);
  border-bottom: 1px solid rgba(145,173,218,0.12);
}

.tab {
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  font-size: 0.82rem;
}

.tab.active {
  background: rgba(103,164,255,0.12);
  border: 1px solid rgba(103,164,255,0.2);
  color: var(--text);
}

.urlbar {
  padding: 12px 16px;
  margin: 18px;
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--muted);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  gap: 14px;
  padding: 0 18px 18px;
}

.panel,
.mini-panel {
  border: 1px solid var(--line);
  background: rgba(17, 25, 36, 0.92);
  border-radius: 18px;
  padding: 18px;
}

.panel-main {
  grid-column: 1 / span 2;
  min-height: 170px;
}

.panel-badge {
  display: inline-block;
  padding: 6px 10px;
  font-size: 0.72rem;
  border-radius: 999px;
  background: rgba(124,232,213,0.12);
  color: var(--accent-2);
  margin-bottom: 18px;
}

.panel h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.panel p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.mini-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 126px;
}

.mini-panel span,
.panel-wide span {
  color: var(--muted);
  font-size: 0.72rem;
  margin-bottom: 10px;
}

.mini-panel strong {
  font-size: 2rem;
  letter-spacing: -0.06em;
}

.mini-panel small {
  color: var(--muted);
}

.panel-wide {
  grid-column: 1 / -1;
  min-height: 88px;
}

.panel-wide strong {
  font-size: 1.15rem;
}

.feature-band,
.compare-section,
.download-section {
  padding-top: 110px;
}

.section-heading {
  text-align: center;
  margin-bottom: 38px;
}

.section-heading h2,
.security-copy h2 {
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
  box-shadow: 0 14px 30px rgba(6,12,21,0.28);
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  margin-bottom: 18px;
  background: linear-gradient(135deg, rgba(103,164,255,0.14), rgba(157,123,255,0.18));
  font-size: 1.7rem;
}

.feature-card h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.security-section {
  padding-top: 120px;
}

.security-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: center;
}

.security-copy p:last-child {
  margin-top: 18px;
  max-width: 550px;
  color: var(--muted);
  line-height: 1.8;
}

.security-panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.security-card {
  padding: 26px 22px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 29, 43, 0.9);
}

.security-card.highlight {
  background: linear-gradient(180deg, rgba(103,164,255,0.12), rgba(157,123,255,0.08));
}

.security-card h3 {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.35rem;
}

.security-card ul {
  margin: 0;
  padding-left: 18px;
  line-height: 2;
  color: var(--muted);
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.compare-card {
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 29, 43, 0.88);
  padding: 26px 22px;
}

.compare-card h3 {
  margin: 0 0 12px;
  font-size: 1.28rem;
}

.compare-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
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
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 29, 43, 0.9);
  color: var(--text);
  text-align: center;
}

.download-card span {
  font-size: 1.9rem;
}

.download-card strong {
  font-size: 1.2rem;
}

.download-card small {
  color: var(--muted);
}

.footer {
  margin-top: 96px;
  padding: 18px 0 40px;
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
  font-weight: 700;
  color: var(--text);
}

@media (max-width: 1080px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 58px;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .download-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .compare-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .feature-grid,
  .security-panels,
  .download-grid {
    grid-template-columns: 1fr;
  }

  .security-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .panel-main,
  .panel-wide {
    grid-column: auto;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
