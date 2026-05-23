// Variant 1 — "Refined"
// Keeps the existing DNA (EB Garamond, warm cream, terracotta)
// but tightens hierarchy, makes the Thesis the hero asset,
// and adds confident typographic moves.

const RefinedVariant = ({ palette }) => {
  const P = window.PAUL;
  const styleVars = palette ? {
    '--bg':         palette.bg,
    '--bg-soft':    palette.bgSoft,
    '--text':       palette.text,
    '--muted':      palette.muted,
    '--faint':      palette.faint,
    '--rule':       palette.rule,
    '--accent':     palette.accent,
    '--accent-soft':palette.accentSoft,
  } : {};

  return (
    <div className="refined" style={styleVars}>
      <style>{refinedCSS}</style>

      {/* ───────── Top bar ───────── */}
      <div className="r-topbar">
        <div className="r-mark" aria-hidden="true">
          <span>P</span>
        </div>
        <nav className="r-topnav">
          <a href="#cv">CV</a>
          <a href="#research">Research</a>
          <a href="#skills">Methods</a>
          <a href="#now">Now</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="r-utility">
          <span className="r-lang"><b>EN</b> <span className="r-lang-sep">/</span> DE</span>
          <span className="r-theme">◐</span>
        </div>
      </div>

      {/* ───────── Hero ───────── */}
      <section className="r-hero">
        <div className="r-hero-meta">
          <span className="r-eyebrow">Munich · Sociology M.A.</span>
        </div>

        <h1 className="r-name">
          Paul Enno<br />Burlon
        </h1>

        <p className="r-tagline">
          Quantitative sociologist working on{" "}
          <em>inequality, migration, and the measurement of social life.</em>
        </p>

        <p className="r-bio">{P.bio}</p>

        <div className="r-cta">
          <a className="r-pill r-pill-solid" href={`mailto:${P.email}`}>
            <span>Email</span>
            <span className="r-arrow">→</span>
          </a>
          <a className="r-pill" href={P.links.linkedin}>LinkedIn</a>
          <a className="r-pill" href={P.links.github}>GitHub</a>
          <a className="r-pill" href={P.links.cv}>CV · PDF</a>
        </div>
      </section>

      {/* ───────── CV: Education + Experience ───────── */}
      <section className="r-section" id="cv">
        <header className="r-section-head">
          <span className="r-section-num">01</span>
          <h2>Curriculum</h2>
          <span className="r-section-rule" />
        </header>

        <div className="r-cv-grid">
          <div className="r-cv-col">
            <h4 className="r-col-head">Education</h4>
            {P.education.map((e, i) => (
              <Entry key={i} e={e} edu />
            ))}
          </div>
          <div className="r-cv-col">
            <h4 className="r-col-head">Experience</h4>
            {P.experience.map((e, i) => (
              <Entry key={i} e={e} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Featured Research ───────── */}
      <section className="r-section r-featured" id="research">
        <header className="r-section-head">
          <span className="r-section-num">02</span>
          <h2>Current Research</h2>
          <span className="r-section-rule" />
        </header>

        <article className="r-thesis">
          <div className="r-thesis-body">
            <p className="r-thesis-kicker">{P.thesis.meta}</p>
            <h3 className="r-thesis-title">
              {P.thesis.title}
              <span className="r-thesis-sub">{P.thesis.subtitle}</span>
            </h3>
            <p className="r-thesis-abstract">{P.thesis.abstract}</p>
            <div className="r-keywords">
              {P.thesis.keywords.map((k) => (
                <span key={k} className="r-kw">{k}</span>
              ))}
            </div>
          </div>

          <aside className="r-thesis-viz">
            <p className="r-viz-cap">
              Coefficients — desirability of a hypothetical partner (logistic regression, illustrative)
            </p>
            <CoefPlot data={P.thesis.findings} />
            <p className="r-viz-foot">
              n ≈ 1,200 · stated-preference vignettes · IAB-BAMF-SOEP refugee panel
            </p>
          </aside>
        </article>
      </section>

      {/* ───────── Methods + Skills ───────── */}
      <section className="r-section" id="skills">
        <header className="r-section-head">
          <span className="r-section-num">03</span>
          <h2>Methods & Tools</h2>
          <span className="r-section-rule" />
        </header>

        <div className="r-skills-grid">
          <div>
            <h4 className="r-col-head">Methods</h4>
            <ul className="r-methods">
              {P.methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="r-col-head">Programming</h4>
            <p className="r-tag-row">
              {P.skills.programming.map((s) => (
                <span key={s} className="r-tag">{s}</span>
              ))}
            </p>
            <h4 className="r-col-head" style={{ marginTop: "1.6rem" }}>Statistical & data tools</h4>
            <p className="r-tag-row">
              {P.skills.tools.map((s) => (
                <span key={s} className="r-tag">{s}</span>
              ))}
            </p>
          </div>
          <div>
            <h4 className="r-col-head">Languages</h4>
            <ul className="r-langs">
              {P.skills.languages.map((l) => (
                <li key={l.name}>
                  <div className="r-lang-row">
                    <span className="r-lang-name">{l.name}</span>
                    <span className="r-lang-level">{l.level}</span>
                  </div>
                  <div className="r-lang-bar">
                    <div className="r-lang-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Now / outside ───────── */}
      <section className="r-section r-now" id="now">
        <header className="r-section-head">
          <span className="r-section-num">04</span>
          <h2>Outside Research</h2>
          <span className="r-section-rule" />
        </header>
        <p className="r-now-body">
          When not coding regressions:{" "}
          <em>long-distance running</em>, <em>road cycling</em> through the Bavarian alps,
          and the <em>piano</em> — usually Debussy, sometimes Rachmaninov, badly.
        </p>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="r-footer" id="contact">
        <div className="r-foot-left">
          <p className="r-foot-name">Paul Enno Burlon</p>
          <p className="r-foot-meta">Munich · {new Date().getFullYear()}</p>
        </div>
        <div className="r-foot-right">
          <a href={`mailto:${P.email}`}>{P.email}</a>
          <a href={P.links.linkedin}>LinkedIn</a>
          <a href={P.links.github}>GitHub</a>
        </div>
      </footer>
    </div>
  );
};

// ───────── helpers ─────────

const Entry = ({ e, edu }) => (
  <div className={"r-entry" + (e.current ? " is-current" : "")}>
    <div className="r-entry-year">{e.year}</div>
    <div className="r-entry-body">
      <div className="r-entry-head">
        <span className="r-entry-place">{e.shortPlace || e.place}</span>
        {e.grade && <span className="r-entry-grade">{e.grade}</span>}
      </div>
      <div className="r-entry-role">{e.role}{e.city ? ` · ${e.city}` : ""}</div>
      {e.bullets && (
        <ul className="r-entry-bullets">
          {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {edu === undefined && e.tag && <span className="r-entry-tag">{e.tag}</span>}
    </div>
  </div>
);

const CoefPlot = ({ data }) => {
  const max = 0.6;
  const W = 360;
  const H = 180;
  const rowH = H / data.length;
  const labelW = 130;
  const plotW = W - labelW - 16;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="r-coef-svg" role="img" aria-label="Coefficient plot">
      {/* zero line */}
      <line x1={labelW} x2={labelW} y1={6} y2={H - 6} stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      {data.map((d, i) => {
        const y = rowH * i + rowH / 2;
        const cx = labelW + (d.coef / max) * plotW;
        const ciW = (d.ci / max) * plotW;
        return (
          <g key={d.label} className="r-coef-row">
            <text x={labelW - 8} y={y + 3.5} textAnchor="end" className="r-coef-label">
              {d.label}
            </text>
            <line
              x1={cx - ciW} x2={cx + ciW} y1={y} y2={y}
              stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2"
            />
            <line x1={cx - ciW} x2={cx - ciW} y1={y - 3} y2={y + 3} stroke="currentColor" strokeOpacity="0.4" />
            <line x1={cx + ciW} x2={cx + ciW} y1={y - 3} y2={y + 3} stroke="currentColor" strokeOpacity="0.4" />
            <circle cx={cx} cy={y} r="3.4" fill="currentColor" />
          </g>
        );
      })}
      {/* x ticks */}
      {[0, 0.2, 0.4, 0.6].map((t) => {
        const x = labelW + (t / max) * plotW;
        return (
          <g key={t}>
            <line x1={x} x2={x} y1={H - 6} y2={H - 2} stroke="currentColor" strokeOpacity="0.35" />
            <text x={x} y={H + 8} textAnchor="middle" className="r-coef-tick">{t.toFixed(1)}</text>
          </g>
        );
      })}
    </svg>
  );
};

// ───────── styles ─────────

const refinedCSS = `
.refined {
  --bg:        #faf5ea;
  --bg-soft:   #f3ecdc;
  --text:      #2a2622;
  --muted:     #6e655c;
  --faint:     #9b9082;
  --rule:      #e2d8c4;
  --accent:    #7a3b2f;
  --accent-soft:#b58579;
  --serif:     "EB Garamond","Source Serif Pro",Georgia,"Times New Roman",serif;

  background: var(--bg);
  color: var(--text);
  font-family: var(--serif);
  font-feature-settings: "kern","liga","onum";
  font-size: 17px;
  line-height: 1.55;
  padding: 56px 72px 64px;
}

.refined ::selection { background: var(--accent); color: var(--bg); }
.refined a { color: inherit; text-decoration: none; }

/* ─── top bar ─── */
.r-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--rule);
  margin-bottom: 64px;
}
.r-mark {
  width: 38px; height: 38px;
  border-radius: 7px;
  background: var(--accent);
  color: var(--bg);
  display: grid; place-items: center;
  font-size: 22px; font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1;
}
.r-topnav { display: flex; gap: 32px; font-size: 14.5px; }
.r-topnav a { color: var(--muted); transition: color .15s ease; }
.r-topnav a:hover { color: var(--accent); }
.r-utility { display: flex; gap: 16px; align-items: center; font-size: 13px; color: var(--muted); letter-spacing: .12em; text-transform: uppercase; }
.r-utility b { color: var(--text); font-weight: 600; }
.r-lang-sep { opacity: .4; margin: 0 2px; }
.r-theme { font-size: 16px; color: var(--accent); }

/* ─── hero ─── */
.r-hero { margin-bottom: 96px; max-width: 880px; }
.r-eyebrow {
  font-size: 12.5px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}
.r-name {
  font-size: 96px;
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 18px 0 28px;
}
.r-tagline {
  font-size: 24px;
  line-height: 1.35;
  color: var(--text);
  margin: 0 0 22px;
  max-width: 680px;
}
.r-tagline em { font-style: italic; color: var(--accent); }
.r-bio {
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
  max-width: 600px;
  margin: 0 0 32px;
}
.r-cta { display: flex; gap: 10px; flex-wrap: wrap; }
.r-pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 9px 16px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  font-size: 14.5px;
  color: var(--text);
  transition: border-color .15s ease, color .15s ease, background .15s ease;
}
.r-pill:hover { border-color: var(--accent); color: var(--accent); }
.r-pill-solid {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}
.r-pill-solid:hover { background: var(--text); border-color: var(--text); color: var(--bg); }
.r-arrow { font-size: 16px; line-height: 1; }

/* ─── sections ─── */
.r-section { margin-bottom: 88px; }
.r-section-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 36px;
}
.r-section-num {
  font-size: 12.5px;
  letter-spacing: .18em;
  color: var(--faint);
  font-variant-numeric: tabular-nums;
}
.r-section-head h2 {
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.005em;
}
.r-section-rule {
  flex: 1;
  height: 1px;
  background: var(--rule);
  align-self: center;
  margin-left: 8px;
}

/* ─── featured thesis ─── */
.r-thesis {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: start;
  background: var(--bg-soft);
  padding: 40px 44px;
  border-radius: 4px;
  border-left: 3px solid var(--accent);
}
.r-thesis-kicker {
  font-size: 12.5px; letter-spacing: .15em; text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 14px;
}
.r-thesis-title {
  font-size: 34px;
  font-weight: 500;
  line-height: 1.1;
  margin: 0 0 18px;
  letter-spacing: -0.015em;
}
.r-thesis-sub {
  display: block;
  font-size: 22px;
  font-style: italic;
  color: var(--muted);
  font-weight: 400;
  margin-top: 4px;
  letter-spacing: 0;
}
.r-thesis-abstract { font-size: 16.5px; line-height: 1.55; margin: 0 0 22px; color: var(--text); }
.r-keywords { display: flex; flex-wrap: wrap; gap: 6px 8px; }
.r-kw {
  font-size: 12.5px;
  font-style: italic;
  color: var(--accent);
  border-bottom: 1px dotted var(--accent-soft);
  padding-bottom: 1px;
}
.r-kw + .r-kw::before { content: "·"; color: var(--faint); padding: 0 6px 0 0; font-style: normal; }

.r-thesis-viz {
  color: var(--accent);
}
.r-viz-cap { font-size: 12.5px; color: var(--muted); margin: 0 0 12px; font-style: italic; line-height: 1.4; }
.r-viz-foot { font-size: 11.5px; color: var(--faint); margin: 12px 0 0; font-style: italic; }
.r-coef-svg { width: 100%; height: auto; overflow: visible; }
.r-coef-label { font-size: 11px; fill: var(--text); font-family: var(--serif); font-style: italic; }
.r-coef-tick { font-size: 10px; fill: var(--faint); font-family: var(--serif); font-variant-numeric: tabular-nums; }

/* ─── cv grid ─── */
.r-cv-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; }
.r-col-head {
  font-size: 12px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 20px;
  font-weight: 600;
}
.r-entry {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 18px;
  margin-bottom: 26px;
  padding-bottom: 22px;
  border-bottom: 1px dashed var(--rule);
}
.r-entry:last-child { border-bottom: none; }
.r-entry-year {
  font-size: 12.5px;
  color: var(--faint);
  font-variant-numeric: tabular-nums;
  padding-top: 4px;
  letter-spacing: .04em;
}
.r-entry.is-current .r-entry-year::before {
  content: "● ";
  color: var(--accent);
  font-size: 10px;
  vertical-align: 2px;
}
.r-entry-head {
  display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  margin-bottom: 1px;
}
.r-entry-place { font-weight: 600; font-size: 16.5px; }
.r-entry-grade {
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  color: var(--muted);
  font-style: italic;
  white-space: nowrap;
}
.r-entry-role { color: var(--muted); font-style: italic; font-size: 14.5px; margin-bottom: 6px; }
.r-entry-bullets { margin: 4px 0 0; padding: 0 0 0 1em; font-size: 14.5px; color: var(--text); }
.r-entry-bullets li { margin-bottom: 2px; }
.r-entry-tag {
  display: inline-block;
  margin-top: 8px;
  font-size: 11.5px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(122,59,47,0.06);
  padding: 3px 9px;
  border-radius: 3px;
}

/* ─── skills ─── */
.r-skills-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 56px; }
.r-methods { list-style: none; padding: 0; margin: 0; font-size: 15px; }
.r-methods li { padding: 6px 0; border-bottom: 1px dashed var(--rule); color: var(--text); }
.r-methods li:last-child { border-bottom: none; }
.r-tag-row { margin: 0; display: flex; flex-wrap: wrap; gap: 6px; }
.r-tag {
  font-size: 14px;
  padding: 3px 11px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  color: var(--text);
}
.r-langs { list-style: none; margin: 0; padding: 0; }
.r-langs li { margin-bottom: 14px; }
.r-lang-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }
.r-lang-name { font-size: 15px; font-weight: 500; }
.r-lang-level { font-size: 12.5px; font-style: italic; color: var(--muted); }
.r-lang-bar { height: 3px; background: var(--rule); border-radius: 2px; overflow: hidden; }
.r-lang-fill { height: 100%; background: var(--accent); }

/* ─── now ─── */
.r-now-body {
  font-size: 19px;
  line-height: 1.5;
  max-width: 600px;
  margin: 0;
  color: var(--text);
}
.r-now-body em { font-style: italic; color: var(--accent); }

/* ─── footer ─── */
.r-footer {
  margin-top: 24px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 13.5px;
  color: var(--muted);
}
.r-foot-name { font-size: 18px; color: var(--text); margin: 0 0 4px; font-weight: 500; }
.r-foot-meta { margin: 0; }
.r-foot-right { display: flex; gap: 20px; }
.r-foot-right a { border-bottom: 1px solid var(--accent-soft); padding-bottom: 1px; transition: color .15s ease, border-color .15s ease; }
.r-foot-right a:hover { color: var(--accent); border-color: var(--accent); }
`;

window.RefinedVariant = RefinedVariant;
