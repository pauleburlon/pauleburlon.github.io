// Variant 2 — "Editorial"
// Magazine layout: asymmetric 12-col grid, oversized display type,
// marginalia in the gutter, drop caps, pull quotes, roman numerals.

const EditorialVariant = () => {
  const P = window.PAUL;

  return (
    <div className="ed">
      <style>{editorialCSS}</style>

      {/* ───────── Masthead ───────── */}
      <div className="ed-masthead">
        <div className="ed-mh-left">
          <span className="ed-mh-vol">Vol. 1 · No. 26</span>
          <span className="ed-mh-issue">May 2026</span>
        </div>
        <div className="ed-mh-center">
          <span className="ed-mh-name">Burlon</span>
          <span className="ed-mh-sub">A personal record</span>
        </div>
        <div className="ed-mh-right">
          <a>EN</a><span>·</span><a className="ed-mh-mute">DE</a>
        </div>
      </div>

      {/* ───────── Hero ───────── */}
      <section className="ed-hero">
        <p className="ed-overline">
          <span className="ed-star">✱</span> Sociology — Methodology — Inequality
        </p>
        <h1 className="ed-display">
          Paul <em>Enno</em><br />
          Burlon<span className="ed-fullstop">.</span>
        </h1>
        <div className="ed-byline">
          <div>
            <span className="ed-by-label">Currently</span>
            <span className="ed-by-value">M.A. Sociology, LMU München</span>
          </div>
          <div>
            <span className="ed-by-label">Previously</span>
            <span className="ed-by-value">Otto · BIK · MZES · GESIS</span>
          </div>
          <div>
            <span className="ed-by-label">Based</span>
            <span className="ed-by-value">Munich, Germany</span>
          </div>
        </div>
      </section>

      {/* ───────── Lede ───────── */}
      <section className="ed-lede">
        <p className="ed-lede-text">
          <span className="ed-dropcap">B</span>achelor's thesis examined marriage-market dynamics
          among refugees in Germany. Prior work at Otto, BIK, MZES, and GESIS — spanning
          people analytics, market research, migration panel studies, and survey methodology.
          Outside research: running, road cycling, and piano.
        </p>
        <div className="ed-lede-aside">
          <p className="ed-aside-label">Get in touch</p>
          <ul className="ed-aside-list">
            <li><a href={`mailto:${P.email}`}>{P.email}</a></li>
            <li><a href={P.links.linkedin}>linkedin.com/in/paul-burlon</a></li>
            <li><a href={P.links.github}>github.com/pauleburlon</a></li>
            <li><a href={P.links.cv}>Download CV (PDF)</a></li>
          </ul>
        </div>
      </section>

      {/* ───────── Feature: thesis ───────── */}
      <section className="ed-feature">
        <div className="ed-section-marker">
          <span className="ed-roman">I.</span>
          <span className="ed-section-label">Featured Research</span>
        </div>

        <div className="ed-feature-grid">
          <div className="ed-feature-meta">
            <p className="ed-kicker">Bachelor's thesis · 2025</p>
            <p className="ed-meta-line">University of Mannheim</p>
            <p className="ed-meta-line">Department of Sociology</p>
            <p className="ed-meta-line">Supervisor: anonymised</p>
            <div className="ed-tags">
              {P.thesis.keywords.map((k) => <span key={k}>{k}</span>)}
            </div>
          </div>

          <div className="ed-feature-body">
            <h2 className="ed-feature-title">
              Status Maximization<br />
              <em>via</em> Marriage
            </h2>
            <p className="ed-feature-deck">
              Refugees' partnership preferences, and what they reveal about how people rebuild
              social standing after displacement.
            </p>
            <p className="ed-feature-text">
              {P.thesis.abstract} The framework treats partner choice not as romance but as one
              dimension of a broader reallocation of social position — closer to Becker's
              marriage market than to mainstream migration studies.
            </p>

            <blockquote className="ed-pullquote">
              "Marriage markets are not just about love. They are one of the most legible
              instruments of status — and one of the most under-measured."
            </blockquote>
          </div>

          <aside className="ed-feature-viz">
            <p className="ed-viz-label">Stated-preference effects, partial</p>
            <DotPlot data={P.thesis.findings} />
            <p className="ed-viz-source">
              IAB-BAMF-SOEP refugee panel · vignette sub-study · illustrative
            </p>
          </aside>
        </div>
      </section>

      {/* ───────── Career: timeline ───────── */}
      <section className="ed-career">
        <div className="ed-section-marker">
          <span className="ed-roman">II.</span>
          <span className="ed-section-label">A Career, So Far</span>
        </div>

        <div className="ed-timeline">
          <div className="ed-timeline-track" />
          {P.experience.map((e, i) => (
            <article key={i} className="ed-tl-entry">
              <div className="ed-tl-dot" />
              <p className="ed-tl-year">{e.year}</p>
              <h3 className="ed-tl-place">{e.shortPlace || e.place}</h3>
              <p className="ed-tl-role">{e.role} · <span>{e.city}</span></p>
              <ul className="ed-tl-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              {e.tag && <span className="ed-tl-tag">{e.tag}</span>}
            </article>
          ))}
        </div>
      </section>

      {/* ───────── Education ───────── */}
      <section className="ed-edu">
        <div className="ed-section-marker">
          <span className="ed-roman">III.</span>
          <span className="ed-section-label">Education</span>
        </div>

        <table className="ed-table">
          <tbody>
            {P.education.map((e, i) => (
              <tr key={i}>
                <td className="ed-t-year">{e.year}</td>
                <td className="ed-t-place">
                  <strong>{e.shortPlace || e.place}</strong>
                  <span className="ed-t-city"> — {e.city}</span>
                </td>
                <td className="ed-t-role">
                  <em>{e.role}</em>
                </td>
                <td className="ed-t-grade">{e.grade || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ───────── Methods + Skills as Index ───────── */}
      <section className="ed-index">
        <div className="ed-section-marker">
          <span className="ed-roman">IV.</span>
          <span className="ed-section-label">Index</span>
        </div>

        <div className="ed-index-grid">
          <div>
            <p className="ed-idx-head">Methods</p>
            <ul className="ed-idx-list">
              {P.methods.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <div>
            <p className="ed-idx-head">Programming</p>
            <p className="ed-idx-inline">{P.skills.programming.join(" · ")}</p>
            <p className="ed-idx-head" style={{ marginTop: 24 }}>Stat. tools</p>
            <p className="ed-idx-inline">{P.skills.tools.join(" · ")}</p>
          </div>
          <div>
            <p className="ed-idx-head">Languages</p>
            <ul className="ed-idx-langs">
              {P.skills.languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <span className="ed-idx-dots" aria-hidden="true">
                    {".".repeat(60)}
                  </span>
                  <em>{l.level}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Colophon ───────── */}
      <footer className="ed-colophon">
        <div className="ed-colo-left">
          <p className="ed-colo-title">Colophon</p>
          <p className="ed-colo-text">
            Set in EB Garamond. One page, hand-built. Updated periodically as life moves.
          </p>
        </div>
        <div className="ed-colo-mark">P.E.B.</div>
        <div className="ed-colo-right">
          <p className="ed-colo-meta">© Paul Enno Burlon · Munich · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

const DotPlot = ({ data }) => {
  const W = 280;
  const H = 200;
  const pad = { l: 8, r: 14, t: 14, b: 28 };
  const max = 0.6;
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const rowH = innerH / data.length;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="ed-dot-svg" role="img">
      {/* baseline */}
      <line x1={pad.l} x2={W - pad.r} y1={H - pad.b} y2={H - pad.b} stroke="currentColor" strokeOpacity=".3" />
      {/* zero ref */}
      <line x1={pad.l} x2={pad.l} y1={pad.t} y2={H - pad.b} stroke="currentColor" strokeOpacity=".2" strokeDasharray="2 3" />

      {data.map((d, i) => {
        const y = pad.t + rowH * i + rowH / 2;
        const cx = pad.l + (d.coef / max) * innerW;
        return (
          <g key={d.label}>
            <line x1={pad.l} x2={cx} y1={y} y2={y} stroke="currentColor" strokeOpacity=".25" strokeWidth=".8" />
            <circle cx={cx} cy={y} r="5" fill="currentColor" />
            <text x={cx + 9} y={y + 3.5} className="ed-dot-label">{d.label}</text>
          </g>
        );
      })}
      {/* ticks */}
      {[0, 0.3, 0.6].map((t) => {
        const x = pad.l + (t / max) * innerW;
        return (
          <g key={t}>
            <text x={x} y={H - pad.b + 14} textAnchor="middle" className="ed-dot-tick">+{t.toFixed(1)}</text>
          </g>
        );
      })}
    </svg>
  );
};

const editorialCSS = `
.ed {
  --paper: #f6f0e6;
  --ink:   #1c1612;
  --muted: #6b5d50;
  --faint: #b5a892;
  --rule:  #d8cbb4;
  --accent:#7a3b2f;
  --serif: "EB Garamond","Source Serif Pro",Georgia,serif;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 17px;
  line-height: 1.55;
  font-feature-settings: "kern","liga","onum";
  padding: 40px 80px 64px;
}
.ed a { color: inherit; text-decoration: none; border-bottom: 1px solid var(--rule); transition: border-color .15s, color .15s; }
.ed a:hover { color: var(--accent); border-color: var(--accent); }

/* ─── masthead ─── */
.ed-masthead {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 14px 0 16px;
  border-top: 3px double var(--ink);
  border-bottom: 1px solid var(--ink);
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  margin-bottom: 64px;
}
.ed-mh-left, .ed-mh-right { display: flex; gap: 12px; }
.ed-mh-right { justify-content: flex-end; gap: 8px; }
.ed-mh-right a { border: none; padding-bottom: 1px; border-bottom: 1px dotted var(--muted); }
.ed-mh-right .ed-mh-mute { color: var(--muted); }
.ed-mh-center { text-align: center; }
.ed-mh-name {
  display: block;
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-transform: none;
  font-style: italic;
}
.ed-mh-sub {
  display: block;
  font-size: 10.5px;
  color: var(--muted);
  letter-spacing: .22em;
  margin-top: 2px;
}

/* ─── hero ─── */
.ed-hero { margin-bottom: 72px; }
.ed-overline {
  font-size: 12.5px;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 28px;
}
.ed-star { color: var(--accent); margin-right: 8px; }
.ed-display {
  font-size: 168px;
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -0.04em;
  margin: 0 0 40px;
  font-feature-settings: "kern","liga","onum","swsh";
}
.ed-display em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}
.ed-fullstop { color: var(--accent); }

.ed-byline {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
}
.ed-by-label {
  display: block;
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 4px;
}
.ed-by-value {
  font-size: 17px;
  display: block;
  font-style: italic;
}

/* ─── lede ─── */
.ed-lede {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 64px;
  margin-bottom: 96px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--rule);
}
.ed-lede-text {
  font-size: 22px;
  line-height: 1.45;
  margin: 0;
  column-count: 2;
  column-gap: 40px;
  hyphens: auto;
}
.ed-dropcap {
  float: left;
  font-size: 86px;
  line-height: 0.85;
  font-weight: 500;
  padding: 6px 8px 0 0;
  color: var(--accent);
  font-family: var(--serif);
}
.ed-lede-aside {
  border-left: 1px solid var(--rule);
  padding-left: 32px;
}
.ed-aside-label {
  font-size: 11px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 14px;
}
.ed-aside-list { list-style: none; padding: 0; margin: 0; font-size: 15px; }
.ed-aside-list li { margin-bottom: 8px; }

/* ─── section markers ─── */
.ed-section-marker {
  display: flex;
  align-items: baseline;
  gap: 18px;
  margin-bottom: 32px;
}
.ed-roman {
  font-family: var(--serif);
  font-style: italic;
  font-size: 64px;
  color: var(--accent);
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.02em;
}
.ed-section-label {
  font-size: 13px;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ─── feature ─── */
.ed-feature { margin-bottom: 96px; }
.ed-feature-grid {
  display: grid;
  grid-template-columns: 1fr 2.2fr 1.2fr;
  gap: 40px;
  align-items: start;
}
.ed-feature-meta {
  padding-top: 14px;
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--muted);
}
.ed-kicker {
  font-size: 11.5px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 12px;
  font-weight: 600;
}
.ed-meta-line { margin: 0 0 4px; font-style: italic; }
.ed-tags { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 6px; }
.ed-tags span {
  font-size: 11.5px;
  font-style: italic;
  color: var(--accent);
  padding: 2px 0;
  border-bottom: 1px dotted var(--accent);
}
.ed-feature-title {
  font-size: 64px;
  font-weight: 500;
  line-height: 1;
  margin: 0 0 18px;
  letter-spacing: -0.025em;
}
.ed-feature-title em { font-style: italic; color: var(--accent); font-weight: 400; }
.ed-feature-deck {
  font-size: 22px;
  font-style: italic;
  color: var(--muted);
  line-height: 1.4;
  margin: 0 0 28px;
  max-width: 540px;
}
.ed-feature-text { font-size: 16.5px; line-height: 1.6; margin: 0 0 28px; max-width: 560px; }
.ed-pullquote {
  margin: 0;
  padding: 24px 0 4px;
  border-top: 1px solid var(--rule);
  font-size: 22px;
  font-style: italic;
  line-height: 1.4;
  color: var(--ink);
  max-width: 540px;
  position: relative;
}
.ed-pullquote::before {
  content: "";
  position: absolute;
  top: -1px; left: 0;
  width: 48px;
  height: 1px;
  background: var(--accent);
}
.ed-feature-viz {
  padding-top: 14px;
  color: var(--accent);
}
.ed-viz-label {
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 14px;
}
.ed-viz-source {
  font-size: 11.5px;
  font-style: italic;
  color: var(--muted);
  margin: 8px 0 0;
  line-height: 1.4;
}
.ed-dot-svg { width: 100%; height: auto; overflow: visible; }
.ed-dot-label { fill: var(--ink); font-size: 12px; font-family: var(--serif); font-style: italic; }
.ed-dot-tick { fill: var(--faint); font-size: 10px; font-family: var(--serif); }

/* ─── career timeline ─── */
.ed-career { margin-bottom: 96px; }
.ed-timeline {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 96px;
  padding-top: 16px;
}
.ed-timeline-track {
  display: none;
}
.ed-tl-entry {
  position: relative;
  padding-left: 0;
}
.ed-tl-dot { display: none; }
.ed-tl-year {
  font-size: 13px;
  letter-spacing: .15em;
  color: var(--accent);
  margin: 0 0 6px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.ed-tl-place {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 4px;
  letter-spacing: -0.005em;
}
.ed-tl-role {
  font-size: 14.5px;
  font-style: italic;
  color: var(--muted);
  margin: 0 0 10px;
}
.ed-tl-bullets { margin: 0; padding-left: 18px; font-size: 14.5px; line-height: 1.5; }
.ed-tl-bullets li { margin-bottom: 4px; }
.ed-tl-tag {
  display: inline-block;
  margin-top: 12px;
  font-size: 10.5px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--muted);
  border-top: 1px solid var(--rule);
  padding-top: 8px;
}

/* ─── education table ─── */
.ed-edu { margin-bottom: 96px; }
.ed-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}
.ed-table tr {
  border-bottom: 1px solid var(--rule);
}
.ed-table tr:first-child { border-top: 1px solid var(--ink); }
.ed-table td { padding: 16px 12px; vertical-align: baseline; }
.ed-t-year {
  font-size: 13px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  letter-spacing: .05em;
  width: 110px;
}
.ed-t-place strong { font-weight: 600; font-size: 17px; }
.ed-t-city { color: var(--muted); font-size: 14.5px; }
.ed-t-role { color: var(--muted); }
.ed-t-grade {
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-style: italic;
  color: var(--accent);
  width: 80px;
}

/* ─── index ─── */
.ed-index { margin-bottom: 80px; }
.ed-index-grid { display: grid; grid-template-columns: 1.1fr 1fr 1.4fr; gap: 56px; }
.ed-idx-head {
  font-size: 11.5px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 12px;
  font-weight: 600;
}
.ed-idx-list { list-style: none; padding: 0; margin: 0; font-size: 15.5px; font-style: italic; }
.ed-idx-list li { padding: 5px 0; border-bottom: 1px dotted var(--rule); }
.ed-idx-list li:last-child { border-bottom: none; }
.ed-idx-inline { margin: 0; font-size: 16px; font-style: italic; line-height: 1.6; }
.ed-idx-langs { list-style: none; padding: 0; margin: 0; }
.ed-idx-langs li {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 6px 0;
  font-size: 15.5px;
}
.ed-idx-dots {
  flex: 1;
  overflow: hidden;
  letter-spacing: 2px;
  color: var(--faint);
  font-size: 14px;
  white-space: nowrap;
}
.ed-idx-langs em { color: var(--muted); font-size: 14px; }

/* ─── colophon ─── */
.ed-colophon {
  margin-top: 48px;
  padding-top: 28px;
  border-top: 3px double var(--ink);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 32px;
}
.ed-colo-left, .ed-colo-right { font-size: 13px; color: var(--muted); }
.ed-colo-right { text-align: right; }
.ed-colo-title {
  font-size: 11px;
  letter-spacing: .22em;
  text-transform: uppercase;
  margin: 0 0 6px;
  font-weight: 600;
  color: var(--ink);
}
.ed-colo-text { margin: 0; font-style: italic; max-width: 320px; }
.ed-colo-meta { margin: 0; font-style: italic; }
.ed-colo-mark {
  font-family: var(--serif);
  font-size: 32px;
  font-style: italic;
  color: var(--accent);
  letter-spacing: -0.02em;
}
`;

window.EditorialVariant = EditorialVariant;
