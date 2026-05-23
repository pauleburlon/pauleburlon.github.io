// Variant 3 — "Quant"
// Data-forward / computational social science aesthetic.
// EB Garamond + JetBrains Mono mix. Information-dense.
// Multiple small charts. Reads like an annotated research notebook.

const QuantVariant = () => {
  const P = window.PAUL;

  return (
    <div className="qv">
      <style>{quantCSS}</style>

      {/* ───────── Top strip ───────── */}
      <div className="qv-strip">
        <div className="qv-strip-left">
          <span className="qv-handle">~/paul-burlon</span>
          <span className="qv-dot" />
          <span className="qv-branch">main</span>
          <span className="qv-dot" />
          <span className="qv-time">Last updated: 2026-05-22</span>
        </div>
        <div className="qv-strip-right">
          <a>EN</a><span>|</span><a className="qv-mute">DE</a>
          <span className="qv-pipe">|</span>
          <a className="qv-mute">light</a><span>|</span><a>dark</a>
        </div>
      </div>

      {/* ───────── Header card ───────── */}
      <header className="qv-header">
        <div className="qv-header-main">
          <p className="qv-prelude">
            <span className="qv-prompt">$</span> whoami
          </p>
          <h1 className="qv-name">
            Paul Enno Burlon
          </h1>
          <p className="qv-tagline">
            Quantitative sociologist · M.A. student, LMU Munich
          </p>
          <p className="qv-summary">
            Working at the seam between sociology and computation: marriage markets,
            forced migration, survey methodology, and the engineering that makes
            them tractable in R, Python and Stata.
          </p>
        </div>

        <div className="qv-header-meta">
          <MetaRow k="Affiliation" v="LMU München · Soziologie" />
          <MetaRow k="Field" v="Quantitative inequality" />
          <MetaRow k="Email" v={P.email} href={`mailto:${P.email}`} />
          <MetaRow k="LinkedIn" v="paul-burlon" href={P.links.linkedin} />
          <MetaRow k="GitHub" v="pauleburlon" href={P.links.github} />
          <MetaRow k="CV" v="EN · DE (PDF)" href={P.links.cv} />
        </div>
      </header>

      {/* ───────── Trajectory sparkline strip ───────── */}
      <section className="qv-trajectory">
        <p className="qv-eyebrow"># trajectory.R</p>
        <TrajectoryStrip />
      </section>

      {/* ───────── Research dashboard ───────── */}
      <section className="qv-panel" id="research">
        <header className="qv-panel-head">
          <p className="qv-panel-num">01 ·</p>
          <h2>Featured research</h2>
          <p className="qv-panel-status">
            <span className="qv-pulse" /> in revision
          </p>
        </header>

        <div className="qv-research-grid">
          <div className="qv-research-prose">
            <p className="qv-tag-row">
              <span className="qv-mono-tag">B.A. thesis</span>
              <span className="qv-mono-tag">Mannheim · 2025</span>
              <span className="qv-mono-tag">supervised</span>
            </p>
            <h3 className="qv-research-title">
              Status maximization via marriage
            </h3>
            <p className="qv-research-sub">
              Refugees' partnership preferences in Germany
            </p>
            <p className="qv-research-abs">
              {P.thesis.abstract}
            </p>

            <table className="qv-results">
              <thead>
                <tr>
                  <th>Trait</th>
                  <th>β</th>
                  <th>CI ±</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                {P.thesis.findings.map((d) => (
                  <tr key={d.label}>
                    <td>{d.label}</td>
                    <td className="qv-num">{d.coef.toFixed(2)}</td>
                    <td className="qv-num qv-muted">{d.ci.toFixed(2)}</td>
                    <td><InlineBar value={d.coef} max={0.5} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="qv-table-foot">
              n ≈ 1,200 · logistic regression on stated-preference vignettes ·
              IAB-BAMF-SOEP refugee panel · coefficients illustrative.
            </p>
          </div>

          <div className="qv-research-vizcol">
            <div className="qv-viz-card">
              <p className="qv-viz-cap">Sample composition</p>
              <SampleBars />
            </div>
            <div className="qv-viz-card">
              <p className="qv-viz-cap">Preference gradient</p>
              <Gradient />
            </div>
            <div className="qv-viz-card">
              <p className="qv-viz-cap">Methods</p>
              <ul className="qv-methods-mini">
                <li>Stated-preference vignettes</li>
                <li>Multinomial logit</li>
                <li>Robust SEs by cluster</li>
                <li>Sensitivity to weighting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Experience as data table ───────── */}
      <section className="qv-panel">
        <header className="qv-panel-head">
          <p className="qv-panel-num">02 ·</p>
          <h2>Experience</h2>
          <p className="qv-panel-status qv-muted">
            5 positions · 2020 — present
          </p>
        </header>

        <table className="qv-exp-table">
          <thead>
            <tr>
              <th className="qv-col-year">Year</th>
              <th>Organisation</th>
              <th>Role</th>
              <th className="qv-col-tag">Domain</th>
              <th className="qv-col-loc">Location</th>
            </tr>
          </thead>
          <tbody>
            {P.experience.map((e, i) => (
              <tr key={i} className="qv-exp-row">
                <td className="qv-col-year qv-num">{e.year}</td>
                <td>
                  <strong>{e.shortPlace || e.place}</strong>
                  <ul className="qv-mini-bullets">
                    {e.bullets.slice(0, 2).map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </td>
                <td><em>{e.role}</em></td>
                <td className="qv-col-tag">
                  {e.tag && <span className="qv-pill">{e.tag}</span>}
                </td>
                <td className="qv-col-loc qv-muted">{e.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ───────── Education timeline ───────── */}
      <section className="qv-panel">
        <header className="qv-panel-head">
          <p className="qv-panel-num">03 ·</p>
          <h2>Education</h2>
          <p className="qv-panel-status qv-muted">2020 — present</p>
        </header>

        <EduTimeline education={P.education} />
      </section>

      {/* ───────── Stack ───────── */}
      <section className="qv-panel qv-stack">
        <header className="qv-panel-head">
          <p className="qv-panel-num">04 ·</p>
          <h2>Stack</h2>
          <p className="qv-panel-status qv-muted">
            languages, tools, methods
          </p>
        </header>

        <div className="qv-stack-grid">
          <div>
            <p className="qv-stack-head">Programming</p>
            <div className="qv-skill-list">
              {[
                { name: "R", level: 0.9 },
                { name: "Python", level: 0.8 },
                { name: "Stata", level: 0.85 },
                { name: "SQL", level: 0.65 },
                { name: "Java", level: 0.5 },
              ].map((s) => (
                <div key={s.name} className="qv-skill">
                  <span className="qv-skill-name">{s.name}</span>
                  <span className="qv-skill-bar"><i style={{ width: `${s.level * 100}%` }} /></span>
                  <span className="qv-skill-pct qv-num">{Math.round(s.level * 100)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="qv-stack-head">Methods</p>
            <ul className="qv-method-list">
              {P.methods.map((m) => (
                <li key={m}>
                  <span className="qv-method-dot" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="qv-stack-head">Languages</p>
            <div className="qv-lang-list">
              {P.skills.languages.map((l) => (
                <div key={l.name} className="qv-lang">
                  <div className="qv-lang-top">
                    <span>{l.name}</span>
                    <span className="qv-num qv-muted">{l.pct}</span>
                  </div>
                  <div className="qv-lang-track">
                    {[...Array(20)].map((_, i) => (
                      <span
                        key={i}
                        className={"qv-lang-tick" + (i < Math.round(l.pct / 5) ? " on" : "")}
                      />
                    ))}
                  </div>
                  <span className="qv-lang-level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="qv-foot">
        <div>
          <p className="qv-foot-line"><span className="qv-prompt">$</span> echo $LOCATION</p>
          <p className="qv-foot-val">Munich, Germany</p>
        </div>
        <div>
          <p className="qv-foot-line"><span className="qv-prompt">$</span> uptime</p>
          <p className="qv-foot-val">Outside the regressions: running, road cycling, piano.</p>
        </div>
        <div>
          <p className="qv-foot-line"><span className="qv-prompt">$</span> contact</p>
          <p className="qv-foot-val">
            <a href={`mailto:${P.email}`}>{P.email}</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

// ───────── helpers ─────────
const MetaRow = ({ k, v, href }) => (
  <div className="qv-meta-row">
    <span className="qv-meta-k">{k}</span>
    <span className="qv-meta-v">{href ? <a href={href}>{v}</a> : v}</span>
  </div>
);

const InlineBar = ({ value, max }) => {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <span className="qv-inline-bar">
      <span className="qv-inline-bar-fill" style={{ width: `${pct}%` }} />
    </span>
  );
};

const TrajectoryStrip = () => {
  // Synthetic: research depth + breadth over years
  const points = [
    { x: 2020, y: 18, label: "L'Arche" },
    { x: 2021, y: 24, label: "U Mannheim" },
    { x: 2022, y: 42, label: "GESIS" },
    { x: 2023, y: 58, label: "SMU · MZES" },
    { x: 2024, y: 70, label: "MZES" },
    { x: 2025, y: 86, label: "BIK · Otto · Thesis" },
    { x: 2026, y: 96, label: "LMU M.A." },
  ];
  const W = 1100, H = 130, pad = { l: 30, r: 30, t: 18, b: 32 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const xs = points.map((_, i) => pad.l + (i / (points.length - 1)) * innerW);
  const yMax = 100;
  const ys = points.map((p) => pad.t + innerH - (p.y / yMax) * innerH);
  const path = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
  const area = `${path} L${xs[xs.length - 1]},${pad.t + innerH} L${xs[0]},${pad.t + innerH} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="qv-traj">
      <path d={area} fill="currentColor" opacity="0.08" />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.4" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={xs[i]} cy={ys[i]} r="3" fill="currentColor" />
          <text x={xs[i]} y={H - 14} textAnchor="middle" className="qv-traj-x">{p.x}</text>
          <text x={xs[i]} y={ys[i] - 10} textAnchor="middle" className="qv-traj-label">{p.label}</text>
        </g>
      ))}
    </svg>
  );
};

const SampleBars = () => {
  const groups = [
    { l: "Male", v: 58 },
    { l: "Female", v: 42 },
    { l: "Married", v: 31 },
    { l: "Single", v: 69 },
    { l: "≤30 y", v: 64 },
  ];
  return (
    <div className="qv-sample">
      {groups.map((g) => (
        <div key={g.l} className="qv-sample-row">
          <span className="qv-sample-l">{g.l}</span>
          <span className="qv-sample-bar"><i style={{ width: `${g.v}%` }} /></span>
          <span className="qv-num qv-sample-v">{g.v}%</span>
        </div>
      ))}
    </div>
  );
};

const Gradient = () => {
  // small stylized scatter, x = same-origin desirability, y = education preference
  const W = 230, H = 110;
  const points = [
    [.15, .25], [.22, .42], [.38, .35], [.45, .55], [.55, .48],
    [.62, .72], [.72, .65], [.78, .82], [.85, .78], [.92, .9],
    [.18, .55], [.3, .6], [.5, .3], [.66, .42],
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="qv-grad">
      <line x1="10" x2={W - 10} y1={H - 16} y2={H - 16} stroke="currentColor" strokeOpacity=".25" />
      <line x1="10" x2="10" y1="10" y2={H - 16} stroke="currentColor" strokeOpacity=".25" />
      <line
        x1="10" y1={H - 16}
        x2={W - 10} y2="14"
        stroke="currentColor" strokeOpacity=".4"
        strokeDasharray="3 3" strokeWidth="0.9"
      />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={10 + p[0] * (W - 20)}
          cy={H - 16 - p[1] * (H - 30)}
          r="2.4"
          fill="currentColor"
          opacity="0.7"
        />
      ))}
      <text x={W - 12} y={H - 4} className="qv-axis" textAnchor="end">same origin →</text>
      <text x={12} y={12} className="qv-axis">education ↑</text>
    </svg>
  );
};

const EduTimeline = ({ education }) => {
  return (
    <div className="qv-edu">
      {education.map((e, i) => (
        <div key={i} className={"qv-edu-row" + (e.current ? " is-current" : "")}>
          <div className="qv-edu-year">{e.year}</div>
          <div className="qv-edu-bar">
            <span className={"qv-edu-dot" + (e.current ? " pulse" : "")} />
            {i < education.length - 1 && <span className="qv-edu-line" />}
          </div>
          <div className="qv-edu-body">
            <div className="qv-edu-head">
              <strong>{e.shortPlace || e.place}</strong>
              <span className="qv-edu-city">{e.city}</span>
              {e.grade && <span className="qv-edu-grade qv-num">grade · {e.grade}</span>}
            </div>
            <div className="qv-edu-role">{e.role}</div>
            {e.bullets && (
              <ul className="qv-edu-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const quantCSS = `
.qv {
  --paper:  #fafaf7;
  --panel:  #ffffff;
  --ink:    #15161a;
  --muted:  #6e6f76;
  --faint:  #b6b7bd;
  --rule:   #e6e6df;
  --rule-2: #d6d6cc;
  --accent: #1f3a8a;     /* deep indigo — differentiates from terracotta */
  --accent-soft: #4f63ad;
  --hot:    #b8412a;     /* secondary, used very sparingly */
  --serif:  "EB Garamond","Source Serif Pro",Georgia,serif;
  --mono:   "JetBrains Mono","IBM Plex Mono",ui-monospace,Menlo,monospace;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 16px;
  line-height: 1.55;
  padding: 0 0 64px;
  font-feature-settings: "kern","liga","onum";
}
.qv .qv-num { font-variant-numeric: tabular-nums; }
.qv a { color: inherit; text-decoration: none; border-bottom: 1px solid var(--accent-soft); transition: color .15s, border-color .15s; }
.qv a:hover { color: var(--accent); border-color: var(--accent); }
.qv-muted { color: var(--muted); }

/* ─── top strip ─── */
.qv-strip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 56px;
  border-bottom: 1px solid var(--rule);
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  background: var(--panel);
}
.qv-strip-left, .qv-strip-right { display: flex; align-items: center; gap: 10px; }
.qv-strip a { border: none; color: var(--ink); }
.qv-strip a.qv-mute { color: var(--muted); }
.qv-strip span { color: var(--faint); }
.qv-handle { color: var(--accent); }
.qv-dot::before { content: "·"; color: var(--faint); }
.qv-pipe { padding: 0 4px; }

/* ─── header ─── */
.qv-header {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 56px;
  padding: 56px 56px 48px;
  border-bottom: 1px solid var(--rule);
  background: var(--panel);
}
.qv-prelude {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  margin: 0 0 12px;
}
.qv-prompt { color: var(--accent); margin-right: 6px; }
.qv-name {
  font-size: 64px;
  font-weight: 500;
  line-height: 1;
  margin: 0 0 14px;
  letter-spacing: -0.02em;
}
.qv-tagline {
  font-size: 19px;
  color: var(--muted);
  font-style: italic;
  margin: 0 0 22px;
}
.qv-summary {
  font-size: 16.5px;
  max-width: 520px;
  margin: 0;
  line-height: 1.55;
}

.qv-header-meta {
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 4px 16px;
  align-self: start;
  font-family: var(--mono);
  font-size: 12.5px;
  background: var(--paper);
}
.qv-meta-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px dashed var(--rule);
}
.qv-meta-row:last-child { border-bottom: none; }
.qv-meta-k { color: var(--muted); }
.qv-meta-v { color: var(--ink); }
.qv-header-meta a { border-bottom-color: var(--rule-2); }

/* ─── trajectory ─── */
.qv-trajectory {
  padding: 32px 56px 16px;
  border-bottom: 1px solid var(--rule);
  color: var(--accent);
  background: var(--panel);
}
.qv-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .1em;
  color: var(--muted);
  margin: 0 0 14px;
  text-transform: uppercase;
}
.qv-traj { width: 100%; height: auto; display: block; }
.qv-traj-x { font-family: var(--mono); font-size: 10px; fill: var(--muted); }
.qv-traj-label { font-family: var(--serif); font-size: 11px; font-style: italic; fill: var(--ink); }

/* ─── panels ─── */
.qv-panel {
  padding: 48px 56px;
  border-bottom: 1px solid var(--rule);
}
.qv-panel:nth-of-type(odd) { background: var(--panel); }
.qv-panel-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule);
}
.qv-panel-num {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--accent);
  margin: 0;
  letter-spacing: .05em;
}
.qv-panel-head h2 {
  font-size: 26px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
  font-family: var(--serif);
}
.qv-panel-status {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--muted);
  display: inline-flex; align-items: center; gap: 6px;
}
.qv-pulse {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--hot);
  box-shadow: 0 0 0 0 rgba(184, 65, 42, .5);
  animation: qv-pulse 1.8s ease-out infinite;
}
@keyframes qv-pulse {
  0% { box-shadow: 0 0 0 0 rgba(184, 65, 42, .4); }
  100% { box-shadow: 0 0 0 10px rgba(184, 65, 42, 0); }
}

/* ─── research ─── */
.qv-research-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 56px;
  align-items: start;
}
.qv-tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 18px; }
.qv-mono-tag {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .04em;
  color: var(--accent);
  background: rgba(31, 58, 138, 0.06);
  padding: 3px 9px;
  border-radius: 2px;
}
.qv-research-title {
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.05;
  margin: 0 0 4px;
}
.qv-research-sub {
  font-size: 19px;
  font-style: italic;
  color: var(--muted);
  margin: 0 0 18px;
}
.qv-research-abs { font-size: 16px; line-height: 1.6; margin: 0 0 24px; max-width: 540px; }

.qv-results {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--mono);
  font-size: 12.5px;
  margin-bottom: 10px;
}
.qv-results th {
  text-align: left;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 6px 10px 6px 0;
  border-bottom: 1px solid var(--ink);
}
.qv-results td {
  padding: 8px 10px 8px 0;
  border-bottom: 1px dashed var(--rule);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 14.5px;
}
.qv-results td:first-child { font-style: italic; }
.qv-results td.qv-num { font-family: var(--mono); font-size: 12.5px; font-style: normal; }
.qv-results td:last-child { width: 36%; }
.qv-table-foot {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--muted);
  line-height: 1.5;
  margin: 8px 0 0;
}

.qv-inline-bar {
  display: inline-block;
  width: 100%;
  height: 4px;
  background: var(--rule);
  border-radius: 1px;
  position: relative;
  top: -2px;
}
.qv-inline-bar-fill { display: block; height: 100%; background: var(--accent); border-radius: 1px; }

.qv-research-vizcol { display: flex; flex-direction: column; gap: 18px; }
.qv-viz-card {
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 14px 16px;
  background: var(--paper);
}
.qv-viz-cap {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 12px;
}

/* sample bars */
.qv-sample-row {
  display: grid;
  grid-template-columns: 70px 1fr 36px;
  gap: 10px;
  align-items: center;
  padding: 3px 0;
}
.qv-sample-l { font-size: 13px; }
.qv-sample-bar { display: block; height: 5px; background: var(--rule); border-radius: 1px; overflow: hidden; }
.qv-sample-bar i { display: block; height: 100%; background: var(--accent); }
.qv-sample-v { font-family: var(--mono); font-size: 11.5px; color: var(--muted); text-align: right; }

/* gradient scatter */
.qv-grad { display: block; width: 100%; height: auto; color: var(--accent); }
.qv-axis { font-family: var(--mono); font-size: 9px; fill: var(--muted); }

.qv-methods-mini { list-style: none; padding: 0; margin: 0; font-size: 13.5px; font-style: italic; }
.qv-methods-mini li { padding: 3px 0; border-bottom: 1px dotted var(--rule); }
.qv-methods-mini li:last-child { border-bottom: none; }

/* ─── experience table ─── */
.qv-exp-table { width: 100%; border-collapse: collapse; }
.qv-exp-table th {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--muted);
  text-align: left;
  padding: 0 14px 10px 0;
  border-bottom: 2px solid var(--ink);
  font-weight: 600;
}
.qv-exp-table td {
  padding: 16px 14px 16px 0;
  border-bottom: 1px solid var(--rule);
  vertical-align: top;
  font-size: 14.5px;
}
.qv-exp-row td:first-child { color: var(--accent); }
.qv-col-year { width: 88px; font-family: var(--mono); font-size: 12.5px; padding-top: 18px; }
.qv-col-tag { width: 160px; }
.qv-col-loc { width: 130px; }
.qv-mini-bullets { list-style: none; padding: 0; margin: 6px 0 0; }
.qv-mini-bullets li {
  font-size: 13px; color: var(--muted); line-height: 1.5;
  padding-left: 12px; position: relative;
}
.qv-mini-bullets li::before {
  content: "—";
  position: absolute; left: 0; top: 0;
  color: var(--faint);
}
.qv-pill {
  display: inline-block;
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: .05em;
  color: var(--accent);
  border: 1px solid var(--accent-soft);
  padding: 2px 8px;
  border-radius: 2px;
}

/* ─── education ─── */
.qv-edu { display: flex; flex-direction: column; }
.qv-edu-row { display: grid; grid-template-columns: 88px 36px 1fr; gap: 0; padding: 4px 0; }
.qv-edu-year {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  padding-top: 8px;
}
.qv-edu-bar { position: relative; display: flex; justify-content: center; }
.qv-edu-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--accent);
  position: relative;
  z-index: 1;
  margin-top: 12px;
}
.qv-edu-dot.pulse { background: var(--accent); }
.qv-edu-line {
  position: absolute;
  top: 22px; bottom: -28px;
  left: 50%;
  width: 1px;
  background: var(--rule-2);
  transform: translateX(-0.5px);
}
.qv-edu-body { padding: 4px 0 24px 16px; }
.qv-edu-head { display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline; }
.qv-edu-head strong { font-size: 16.5px; font-weight: 600; }
.qv-edu-city { color: var(--muted); font-style: italic; font-size: 14px; }
.qv-edu-grade {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: .04em;
  margin-left: auto;
}
.qv-edu-role { color: var(--muted); font-style: italic; font-size: 14.5px; margin: 2px 0 6px; }
.qv-edu-bullets { margin: 0; padding-left: 16px; font-size: 14px; }
.qv-edu-bullets li { margin-bottom: 2px; }

/* ─── stack ─── */
.qv-stack-grid { display: grid; grid-template-columns: 1fr 1fr 1.1fr; gap: 56px; }
.qv-stack-head {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule);
  font-weight: 600;
}
.qv-skill {
  display: grid;
  grid-template-columns: 60px 1fr 32px;
  gap: 12px; align-items: center;
  padding: 6px 0;
}
.qv-skill-name { font-size: 14.5px; font-weight: 500; }
.qv-skill-bar {
  display: block;
  height: 4px; background: var(--rule); border-radius: 1px; overflow: hidden;
}
.qv-skill-bar i { display: block; height: 100%; background: var(--accent); }
.qv-skill-pct { font-family: var(--mono); font-size: 11.5px; color: var(--muted); text-align: right; }

.qv-method-list { list-style: none; padding: 0; margin: 0; }
.qv-method-list li {
  display: flex; align-items: baseline; gap: 10px;
  padding: 6px 0;
  font-size: 14.5px;
  border-bottom: 1px dashed var(--rule);
}
.qv-method-list li:last-child { border-bottom: none; }
.qv-method-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  transform: translateY(-2px);
}

.qv-lang-list { display: flex; flex-direction: column; gap: 14px; }
.qv-lang-top { display: flex; justify-content: space-between; font-size: 14.5px; font-weight: 500; }
.qv-lang-track { display: flex; gap: 2px; margin: 6px 0 4px; }
.qv-lang-tick { width: 100%; height: 6px; background: var(--rule); border-radius: 1px; }
.qv-lang-tick.on { background: var(--accent); }
.qv-lang-level { font-family: var(--mono); font-size: 11px; color: var(--muted); }

/* ─── footer ─── */
.qv-foot {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  padding: 40px 56px 0;
}
.qv-foot-line {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  margin: 0 0 4px;
}
.qv-foot-val { margin: 0; font-size: 15px; }
.qv-foot-val a { border-bottom-color: var(--accent-soft); }
`;

window.QuantVariant = QuantVariant;
