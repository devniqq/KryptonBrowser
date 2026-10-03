* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-2: #0c1728;
  --panel: rgba(13, 24, 39, 0.88);
  --panel-strong: rgba(18, 30, 48, 0.98);
  --line: rgba(143, 177, 255, 0.18);
  --text: #eaf2ff;
  --muted: #afc1df;
  --accent: #6ea8ff;
  --accent-2: #7ef0d1;
  --purple: #9a7dff;
  --danger: #ff6b8b;
  --shadow: 0 20px 60px rgba(7, 17, 31, 0.7);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(110, 168, 255, 0.18), transparent 26%),
    radial-gradient(circle at bottom right, rgba(126, 240, 209, 0.12), transparent 24%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 24px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 18px 22px;
  background: rgba(7, 17, 31, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--purple));
  font-weight: 800;
  box-shadow: 0 8px 24px rgba(110, 168, 255, 0.4);
}

.brand-text {
  font-weight: 700;
  letter-spacing: -0.04em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
}

.nav-button,
.primary-btn,
.secondary-btn,
.download-card {
  text-decoration: none;
  transition: 0.2s ease;
}

.nav-button,
.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.25rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), #4d7dff);
  color: white;
  font-weight: 700;
  box-shadow: 0 12px 26px rgba(86, 126, 255, 0.35);
}

.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  color: var(--text);
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
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
  padding: 82px 8px 40px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--accent-2);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
}

.hero-copy h1,
.section-heading h2 {
  margin: 0;
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  max-width: 700px;
}

.lead {
  max-width: 620px;
  margin-top: 22px;
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  color: var(--muted);
  font-size: 0.95rem;
}

.hero-meta li {
  position: relative;
  padding-left: 16px;
}

.hero-meta li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  transform: translateY(-50%);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.browser-window {
  width: min(100%, 620px);
  background: linear-gradient(180deg, rgba(22, 37, 53, 0.98), rgba(11, 22, 36, 0.97));
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
  background: rgba(12, 20, 31, 0.9);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.red { background: #ff6e7d; }
.dot.yellow { background: #f3c65d; }
.dot.green { background: #63d397; }

.tab-row {
  display: flex;
  gap: 10px;
  padding: 14px 18px 10px;
  border-bottom: 1px solid var(--line);
  background: rgba(11, 20, 29, 0.7);
}

.tab {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid transparent;
  color: var(--muted);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 0.8rem;
}

.tab.active {
  background: rgba(110, 168, 255, 0.12);
  border-color: rgba(110, 168, 255, 0.2);
  color: var(--text);
}

.browser-content {
  padding: 18px;
}

.address-bar {
  padding: 12px 16px;
  border-radius: 12px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  margin-bottom: 18px;
}

.page-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 14px;
}

.card {
  min-height: 110px;
  background: linear-gradient(180deg, rgba(17, 28, 41, 0.98), rgba(12, 19, 31, 0.98));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
}

.card.large {
  grid-column: 1 / span 2;
  min-height: 165px;
}

.card.wide {
  grid-column: 1 / -1;
  min-height: 90px;
}

.chip {
  display: inline-block;
  background: rgba(126, 240, 209, 0.1);
  color: var(--accent-2);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  margin-bottom: 18px;
}

.card h3 {
  margin: 0 0 8px;
  font-size: 1.4rem;
}

.card p,
.card small {
  margin: 0;
  color: var(--muted);
}

.mini-label {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  margin-bottom: 12px;
}

.card strong {
  display: block;
  font-size: clamp(1.3rem, 3vw, 2rem);
  margin-bottom: 4px;
}

.feature-band,
.security-section,
.platforms,
.download-section {
  padding-top: 110px;
}

.section-heading {
  text-align: center;
  margin-bottom: 36px;
}

.section-heading.left {
  text-align: left;
}

.section-heading h2 {
  font-size: clamp(2rem, 4vw, 3.3rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.feature-card,
.security-panel,
.download-card {
  background: rgba(17, 26, 39, 0.9);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px 22px;
  box-shadow: 0 12px 30px rgba(6, 12, 21, 0.35);
}

.feature-card .icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(110, 168, 255, 0.15), rgba(154, 125, 255, 0.18));
  font-size: 1.5rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.security-panel {
  padding: 30px 28px;
}

.security-panel h3 {
  margin: 0 0 18px;
  font-size: 1.4rem;
}

.security-panel ul {
  padding-left: 18px;
  line-height: 2;
  color: var(--muted);
  margin: 0;
}

.security-panel.highlight {
  background: linear-gradient(135deg, rgba(110, 168, 255, 0.12), rgba(154, 125, 255, 0.08));
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.platform-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 110px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(17, 26, 39, 0.9);
  border: 1px solid var(--line);
  font-weight: 600;
  font-size: 1.06rem;
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
  gap: 12px;
  color: var(--text);
  min-height: 180px;
}

.os {
  color: var(--accent-2);
  font-weight: 700;
}

.download-card strong {
  font-size: 1.25rem;
}

.download-card small {
  color: var(--muted);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .download-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .platform-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .page-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero {
    padding-top: 52px;
  }

  .feature-grid,
  .security-grid,
  .platform-grid,
  .download-grid {
    grid-template-columns: 1fr;
  }

  .page-grid {
    grid-template-columns: 1fr;
  }

  .card.large,
  .card.wide {
    grid-column: auto;
  }

  .footer {
    flex-direction: column;
    text-align: center;
  }
}
