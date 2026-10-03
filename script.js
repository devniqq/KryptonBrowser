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
  border: 1px solid transparent;
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
.cta-box h2,
.content-header h2 {
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
.cta-box h2,
.content-header h2 {
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

.panel-box {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(17, 29, 43, 0.9);
}

.download-steps {
  margin-top: 34px;
  padding: 28px 24px;
}

.download-steps h3 {
  margin-top: 0;
  margin-bottom: 18px;
}

.download-steps ol {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 2;
}

.auth-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 40px 18px;
}

.auth-shell {
  width: min(1100px, 100%);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  border: 1px solid var(--line);
  border-radius: 32px;
  overflow: hidden;
  background: rgba(12, 20, 30, 0.8);
  box-shadow: var(--shadow);
}

.auth-panel {
  padding: 42px 36px;
}

.auth-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  margin-bottom: 18px;
}

.auth-panel h1 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: -0.06em;
}

.auth-subtitle {
  margin: 0 0 28px;
  color: var(--muted);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.auth-form label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--muted);
}

.auth-form input {
  width: 100%;
  padding: 0.95rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
}

.auth-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-size: 0.86rem;
}

.remember-me {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.auth-btn {
  width: 100%;
  border: none;
  margin-top: 6px;
}

.auth-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 22px 0 16px;
  color: var(--muted);
  font-size: 0.8rem;
}

.auth-divider::before,
.auth-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--line);
}

.social-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.social-btn {
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  font-weight: 600;
}

.auth-footer {
  text-align: center;
  margin-top: 22px;
  color: var(--muted);
}

.auth-footer a {
  color: var(--primary-2);
  text-decoration: none;
}

.promo-panel {
  background: linear-gradient(180deg, rgba(103,166,255,0.1), rgba(154,125,255,0.08));
  padding: 52px 32px;
  display: flex;
  align-items: center;
}

.promo-content {
  max-width: 420px;
}

.promo-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 0 22px;
  letter-spacing: -0.06em;
}

.promo-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--muted);
  line-height: 2.2;
}

.promo-content li::before {
  content: "✓";
  color: var(--primary-2);
  margin-right: 8px;
}

.dashboard-page {
  min-height: 100vh;
  padding: 18px;
}

.dashboard-shell {
  width: min(1380px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: calc(100vh - 36px);
  border: 1px solid var(--line);
  border-radius: 30px;
  background: rgba(10, 18, 30, 0.88);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.sidebar {
  background: rgba(16, 27, 40, 0.98);
  border-right: 1px solid var(--line);
  padding: 26px 18px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  margin-bottom: 32px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-nav a {
  text-decoration: none;
  color: var(--muted);
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
}

.sidebar-nav a.active,
.sidebar-nav a:hover {
  background: rgba(103,166,255,0.12);
  color: var(--text);
}

.sidebar-card {
  margin-top: 28px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
}

.sidebar-card strong {
  color: var(--text);
  font-size: 2rem;
}

.dashboard-main {
  padding: 30px;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.dashboard-header h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.06em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.metric-card {
  padding: 22px 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(17, 29, 43, 0.9);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.metric-card span {
  color: var(--muted);
}

.metric-card strong {
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.metric-card small {
  color: var(--muted);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 26px;
}

.section-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.section-title-row h3 {
  margin: 0;
  font-size: 1.2rem;
}

.section-title-row a {
  color: var(--primary-2);
  text-decoration: none;
}

.panel-box {
  padding: 22px 20px;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.activity-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(160,188,236,0.12);
}

.activity-list li:last-child {
  border-bottom: none;
}

.activity-list span {
  color: var(--muted);
}

.toggle-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.toggle-list div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: var(--muted);
}

.switch {
  position: relative;
  width: 48px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,0.08);
  cursor: pointer;
}

.switch::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  transition: transform 0.2s ease;
}

.switch.on {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
}

.switch.on::before {
  transform: translateX(20px);
}

.bookmark-panel {
  margin-top: 26px;
}

.bookmark-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.bookmark-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  gap: 10px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  text-align: center;
}

.bookmark-card span {
  font-size: 1.8rem;
}

.page-section {
  padding-top: 70px;
  padding-bottom: 40px;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  margin-top: 24px;
}

.story-card,
.story-quote {
  padding: 28px 24px;
}

.story-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.story-card p,
.story-quote p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.story-quote {
  margin-top: 22px;
  text-align: center;
  font-size: clamp(1.3rem, 3vw, 2rem);
}

.faq-section {
  padding-bottom: 60px;
}

.faq-list {
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(17, 29, 43, 0.88);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  text-align: left;
  padding: 20px 22px;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 1.02rem;
  font-weight: 600;
  cursor: pointer;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.faq-item.active .faq-answer {
  max-height: 160px;
}

.faq-answer p {
  margin: 0;
  padding: 0 22px 20px;
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 1100px) {
  .hero,
  .security-grid,
  .download-grid,
  .pricing-grid,
  .compare-grid,
  .content-grid,
  .story-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .platform-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
}

@media (max-width: 760px) {
  .topbar-inner {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav,
  .nav-actions {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .feature-grid,
  .security-panels,
  .platform-grid,
  .pricing-grid,
  .compare-grid,
  .download-grid,
  .bookmark-grid,
  .stats-grid,
  .social-row,
  .auth-shell {
    grid-template-columns: 1fr;
  }

  .auth-shell {
    display: grid;
  }

  .hero {
    padding-top: 58px;
  }

  .browser-grid {
    grid-template-columns: 1fr;
  }

  .large,
  .wide-panel {
    grid-column: auto;
  }

  .cta-box,
  .footer-inner,
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .dashboard-main {
    padding: 18px;
  }
}
