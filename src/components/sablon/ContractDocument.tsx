import { KIRA_SOZLESMESI as D, type Field, type Values } from "@/lib/kira-sozlesmesi";

function Blank({ value, wide }: { value?: string; wide?: boolean }) {
    return value ? (
        <span className="kd-line kd-filled">{value}</span>
    ) : (
        <span className={wide ? "kd-line kd-line-wide" : "kd-line"} aria-hidden="true" />
    );
}

function FieldRow({ f, values }: { f: Field; values: Values }) {
    const v = values[f.key];
    if (f.options) {
        return (
            <div className="kd-field">
                <span className="kd-label">{f.label}:</span>
                <span className="kd-options">
                    {f.options.map((o) => (
                        <span key={o} className="kd-option">
                            <span className="kd-box" aria-hidden="true">{v === o ? "✓" : ""}</span>
                            {o}
                        </span>
                    ))}
                </span>
            </div>
        );
    }
    return (
        <>
            <div className="kd-field">
                <span className="kd-label">{f.label}:</span>
                {f.prefix && <span>{f.prefix}</span>}
                {f.kind === "date" && !v ? (
                    <span className="kd-date" aria-label="gün / ay / yıl">
                        <span className="kd-line kd-short" /> / <span className="kd-line kd-short" /> / 20<span className="kd-line kd-short" />
                    </span>
                ) : (
                    <Blank value={v} />
                )}
                {f.suffix && <span>{f.suffix}</span>}
            </div>
            {!v && f.lines && f.lines > 1 && Array.from({ length: f.lines - 1 }).map((_, i) => (
                <div key={i} className="kd-field"><Blank wide /></div>
            ))}
            {f.note && <p className="kd-note">{f.note}</p>}
        </>
    );
}

export function ContractDocument({ values = {}, id = "kira-sozlesmesi-sablonu" }: { values?: Values; id?: string }) {
    return (
        <div id={id} className="kira-doc" lang="tr">
            <div className="kd-head">
                <p className="kd-title">{D.title}</p>
                <p className="kd-subtitle">{D.subtitle}</p>
            </div>
            <div className="kd-meta">
                {D.header.map((f) => <FieldRow key={f.key} f={f} values={values} />)}
            </div>

            <section className="kd-section" aria-label={D.parties.title}>
                <h3 className="kd-h">{D.parties.title}</h3>
                <div className="kd-parties">
                    {D.parties.columns.map((c) => (
                        <div key={c.key} className="kd-party">
                            <p className="kd-party-title">{c.label}</p>
                            {D.parties.rows.map((r) => (
                                <FieldRow key={r.key} f={{ ...r, key: `${c.key}.${r.key}` }} values={values} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {D.blocks.map((b) => (
                <section key={b.title} className="kd-section" aria-label={b.title}>
                    <h3 className="kd-h">{b.title}</h3>
                    {b.fields.map((f) => <FieldRow key={f.key} f={f} values={values} />)}
                </section>
            ))}

            <section className="kd-section" aria-label={D.articlesTitle}>
                <h3 className="kd-h">{D.articlesTitle}</h3>
                <ol className="kd-articles">
                    {D.articles.map((a, i) => (
                        <li key={a.title} className="kd-article">
                            <p className="kd-article-title">Madde {i + 1} – {a.title}</p>
                            {a.text.map((t, j) => <p key={j}>{t}</p>)}
                        </li>
                    ))}
                </ol>
            </section>

            <section className="kd-section kd-special" aria-label={D.special.title}>
                <h3 className="kd-h">{D.special.title}</h3>
                <p className="kd-note">{D.special.note}</p>
                {values[D.special.key] ? (
                    <p className="kd-filled-block">{values[D.special.key]}</p>
                ) : (
                    Array.from({ length: D.special.lines }).map((_, i) => <div key={i} className="kd-field"><Blank wide /></div>)
                )}
            </section>

            <section className="kd-section kd-sign-section" aria-label={D.signatures.title}>
                <p className="kd-closing">{D.closing}</p>
                <h3 className="kd-h">{D.signatures.title}</h3>
                <div className="kd-signs">
                    {D.signatures.columns.map((c) => (
                        <div key={c.key} className="kd-sign">
                            <p className="kd-party-title">{c.label}</p>
                            {D.signatures.rows.map((r) => (
                                <div key={r} className={r === "İmza" ? "kd-field kd-sign-row" : "kd-field"}>
                                    <span className="kd-label">{r}:</span>
                                    <Blank value={r === "Ad Soyad" ? values[`${c.key}.ad`] : undefined} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className="kd-section kd-annex" aria-label={D.annex.title}>
                <h3 className="kd-h">{D.annex.title}</h3>
                <p>{D.annex.intro}</p>
                {D.annex.fields.map((f) => <FieldRow key={f.key} f={f} values={values} />)}
                <p className="kd-table-title">{D.annex.tableTitle}</p>
                <table className="kd-table">
                    <thead>
                        <tr>{D.annex.tableHead.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: D.annex.tableRows }).map((_, i) => (
                            <tr key={i}>{D.annex.tableHead.map((h) => <td key={h}>&nbsp;</td>)}</tr>
                        ))}
                    </tbody>
                </table>
                <p className="kd-note">{D.annex.signNote}</p>
                <div className="kd-signs kd-signs-compact">
                    {D.signatures.columns.map((c) => (
                        <div key={c.key} className="kd-field kd-sign-row">
                            <span className="kd-label">{c.label === "KİRAYA VEREN" ? "Kiraya veren" : "Kiracı"} (imza):</span>
                            <Blank />
                        </div>
                    ))}
                </div>
            </section>

            <p className="kd-footer">{D.footer}</p>
        </div>
    );
}
