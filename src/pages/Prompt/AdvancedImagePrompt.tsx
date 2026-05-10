import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Search, X, Wand2, BookOpen, Sparkles } from 'lucide-react';
import { PRESET_GROUPS, SECTIONS } from '../../type/promptData';

type Selections = Record<string, string[]>;

const NAV_GROUPS = [
  { label: 'THEME',   sections: ['style', 'world', 'character', 'camera', 'camera2'] },
  { label: 'STORIES', sections: ['stories'] },
  { label: 'AUDIO',   sections: ['sound', 'envmotion'] },
  { label: 'VOICE',   sections: ['voice'] },
  { label: 'OUTPUT',  sections: ['vars', 'ytseo', 'promptfmt', 'tools'] },
];
const BOTTOM_SECTIONS = ['settings'];
const ALL_SECTION_IDS = NAV_GROUPS.flatMap(g => g.sections).concat(BOTTOM_SECTIONS);

export default function AdvancedImagePrompt() {
  const [selections, setSelections]     = useState<Selections>({});
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('style');
  const [copied, setCopied]             = useState(false);
  const [searchQuery, setSearchQuery]   = useState('');
  const [showSearch, setShowSearch]     = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (showSearch) searchRef.current?.focus(); }, [showSearch]);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); setShowSearch(v => !v); }
      if (e.key === 'Escape') setShowSearch(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const presets: any[]     = (PRESET_GROUPS as any[])[0]?.presets ?? [];
  const allSections: any[] = (SECTIONS as any[]).filter(s => ALL_SECTION_IDS.includes(s.id));
  const currentSection     = allSections.find(s => s.id === activeSection);

  /* ── handlers ── */
  const applyPreset = (preset: any) => {
    setActivePreset(preset.id);
    const next: Selections = {};
    Object.entries(preset.values || {}).forEach(([k, v]: any) => {
      next[k] = Array.isArray(v) ? v : [v];
    });
    setSelections(next);
  };

  const toggleOpt = (key: string, opt: string, single: boolean) => {
    setActivePreset(null);
    setSelections(prev => {
      const cur = prev[key] ?? [];
      if (cur.includes(opt)) return { ...prev, [key]: cur.filter(o => o !== opt) };
      return { ...prev, [key]: single ? [opt] : [...cur, opt] };
    });
  };

  const setText = (key: string, val: string) => {
    setActivePreset(null);
    setSelections(prev => ({ ...prev, [key]: val ? [val] : [] }));
  };

  const clearSection = (secId: string) => {
    const sec = allSections.find(s => s.id === secId);
    if (!sec) return;
    setSelections(prev => {
      const next = { ...prev };
      sec.fields.forEach((f: any) => delete next[f.key]);
      return next;
    });
  };

  /* ── derived ── */
  const generatedPrompt = useMemo(() => {
    const parts: string[] = [];
    allSections.forEach(sec => {
      sec.fields.forEach((f: any) => {
        if (!f.opts && !f.text) return;
        parts.push(...(selections[f.key] ?? []).filter(Boolean));
      });
    });
    return parts.join(', ');
  }, [selections, allSections]);

  const selCount = (secId: string) =>
    allSections.find(s => s.id === secId)?.fields.reduce(
      (n: number, f: any) => n + (selections[f.key]?.length ?? 0), 0
    ) ?? 0;

  const totalActive = Object.values(selections).reduce((n, v) => n + v.length, 0);

  const copyPrompt = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ── search ── */
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const out: { sId: string; sLabel: string; fKey: string; fSingle: boolean; opt: string }[] = [];
    allSections.forEach(sec => {
      sec.fields.forEach((f: any) => {
        if (!f.opts) return;
        f.opts.forEach((opt: string) => {
          if (opt.toLowerCase().includes(q))
            out.push({ sId: sec.id, sLabel: sec.label, fKey: f.key, fSingle: f.single, opt });
        });
      });
    });
    return out.slice(0, 40);
  }, [searchQuery, allSections]);

  /* ── pill style using portfolio vars ── */
  const pillOn: React.CSSProperties = {
    padding: '5px 13px', borderRadius: 20, fontSize: 13, cursor: 'pointer',
    border: '1px solid rgba(139,92,246,0.5)',
    background: 'rgba(139,92,246,0.15)',
    color: '#c4b5fd',
    transition: 'all .15s', userSelect: 'none',
  };
  const pillOff: React.CSSProperties = {
    ...pillOn,
    border: '1px solid var(--glass-border)',
    background: 'transparent',
    color: 'var(--text-secondary)',
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100vh',
      paddingTop: 80,
      background: 'var(--bg-color)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-main)',
      overflow: 'hidden',
    }}>

      {/* ── Body ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '290px 1fr', flex: 1, minHeight: 0, overflow: 'hidden' }}>

        {/* ══════════════ SIDEBAR ══════════════ */}
        <nav style={{
          borderRight: '1px solid var(--border-color)',
          background: 'var(--surface-color)',
          overflowY: 'auto', display: 'flex', flexDirection: 'column',
        }}>
          {/* Status + search strip */}
          <div style={{
            padding: '10px 14px', borderBottom: '1px solid var(--border-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexShrink: 0,
          }}>
            <span style={{ fontSize: 11, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {activePreset
                ? `${presets.find((p: any) => p.id === activePreset)?.name} · ${totalActive} active`
                : totalActive > 0 ? `${totalActive} options active` : 'Select a theme or configure'}
            </span>
            <button onClick={() => setShowSearch(v => !v)}
              style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 10px', border: '1px solid var(--border-color)', borderRadius: 20, background: 'var(--bg-color)', color: 'var(--text-secondary)', fontSize: 11, cursor: 'pointer', flexShrink: 0 }}>
              <Search size={11} /> Search
            </button>
          </div>

          {/* Quick Themes label */}
          <div style={{ padding: '10px 16px 6px', flexShrink: 0 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Sparkles size={11} color="var(--accent-purple)" /> Quick Themes
            </div>
          </div>

          {/* Preset buttons */}
          <div style={{ padding: '0 10px 12px', borderBottom: '1px solid var(--border-color)', flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {presets.map((p: any) => {
                const on = activePreset === p.id;
                return (
                  <button key={p.id} onClick={() => applyPreset(p)} style={{
                    width: '100%', padding: '8px 10px', borderRadius: 10,
                    border: `1px solid ${on ? 'rgba(139,92,246,0.5)' : 'var(--glass-border)'}`,
                    background: on ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.02)',
                    color: on ? '#c4b5fd' : 'var(--text-secondary)',
                    cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8, transition: 'all .15s',
                  }}>
                    <span style={{ fontSize: 14, width: 20, textAlign: 'center', flexShrink: 0 }}>{p.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 500, fontSize: 12, color: on ? '#c4b5fd' : 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                      <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nav groups */}
          <div style={{ flex: 1, padding: '6px 0 12px' }}>
            {NAV_GROUPS.map(grp => (
              <div key={grp.label} style={{ marginBottom: 4 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', padding: '10px 18px 4px', opacity: 0.7 }}>
                  {grp.label}
                </div>
                {grp.sections.map(sid => {
                  const sec = allSections.find(s => s.id === sid);
                  if (!sec) return null;
                  const count = selCount(sid);
                  const active = activeSection === sid;
                  return (
                    <button key={sid} onClick={() => setActiveSection(sid)} style={{
                      width: '100%', padding: '7px 18px', border: 'none',
                      borderLeft: `2px solid ${active ? 'var(--accent-purple)' : 'transparent'}`,
                      background: active ? 'rgba(139,92,246,0.08)' : 'transparent',
                      color: active ? '#c4b5fd' : 'var(--text-secondary)',
                      cursor: 'pointer', textAlign: 'left', fontSize: 13,
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      transition: 'all .15s',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ opacity: 0.5, fontSize: 10 }}>◦</span> {sec.label}
                      </span>
                      {count > 0 && (
                        <span style={{ fontSize: 10, color: active ? '#c4b5fd' : 'var(--text-secondary)', background: active ? 'rgba(139,92,246,0.2)' : 'var(--bg-color)', padding: '2px 6px', borderRadius: 10 }}>
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}

            {/* Settings at bottom */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 6, marginTop: 4 }}>
              {BOTTOM_SECTIONS.map(sid => {
                const sec = allSections.find(s => s.id === sid);
                if (!sec) return null;
                const active = activeSection === sid;
                return (
                  <button key={sid} onClick={() => setActiveSection(sid)} style={{
                    width: '100%', padding: '7px 18px', border: 'none',
                    borderLeft: `2px solid ${active ? 'var(--accent-purple)' : 'transparent'}`,
                    background: active ? 'rgba(139,92,246,0.08)' : 'transparent',
                    color: active ? '#c4b5fd' : 'var(--text-secondary)',
                    cursor: 'pointer', textAlign: 'left', fontSize: 13, transition: 'all .15s',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ opacity: 0.5, fontSize: 10 }}>◦</span> {sec.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* ══════════════ MAIN CONTENT ══════════════ */}
        <div style={{ overflowY: 'auto', padding: '30px 36px' }}>
          <AnimatePresence mode="wait">
            {currentSection && (
              <motion.div key={currentSection.id}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              >
                {/* Section header */}
                <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
                  <h2 style={{ fontSize: '1.4rem', margin: '0 0 4px', color: 'var(--text-primary)', fontWeight: 700 }}>
                    {currentSection.label}
                  </h2>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0 }}>{currentSection.desc}</p>
                  {selCount(currentSection.id) > 0 && (
                    <button onClick={() => clearSection(currentSection.id)} style={{
                      position: 'absolute', top: 0, right: 0,
                      fontSize: 11, color: 'var(--text-secondary)', background: 'none',
                      border: '1px solid var(--border-color)', borderRadius: 6,
                      padding: '4px 10px', cursor: 'pointer', transition: 'all .15s',
                    }}>
                      Clear
                    </button>
                  )}
                </div>

                {/* Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  {currentSection.fields.map((field: any) => {
                    if (field.myStoryToggle || field.settingsWidget || field.productionWidget || field.episodeToggle) return null;
                    const vals: string[] = selections[field.key] ?? [];

                    return (
                      <div key={field.key}>
                        {/* Field label row */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                          <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                            {field.label?.replace(/<[^>]+>/g, '') ?? field.key}
                          </span>
                          {field.opts && (
                            <span style={{
                              fontSize: 10, padding: '2px 7px', borderRadius: 10,
                              border: field.single ? '1px solid var(--border-color)' : '1px solid rgba(59,130,246,0.3)',
                              background: field.single ? 'transparent' : 'rgba(59,130,246,0.08)',
                              color: field.single ? 'var(--text-secondary)' : 'var(--accent-blue)',
                            }}>
                              {field.single ? 'single' : 'multi-select'}
                            </span>
                          )}
                        </div>

                        {/* Text input */}
                        {field.text && (
                          <input type="text"
                            value={vals[0] ?? field.default ?? ''}
                            onChange={e => setText(field.key, e.target.value)}
                            placeholder={field.default ?? `Enter ${field.label?.replace(/<[^>]+>/g, '') ?? ''}`}
                            className="input-field"
                            style={{ fontSize: 13 }}
                          />
                        )}

                        {/* Pills */}
                        {field.opts && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                            {field.opts.map((opt: string) => (
                              <button key={opt}
                                onClick={() => toggleOpt(field.key, opt, field.single)}
                                style={vals.includes(opt) ? pillOn : pillOff}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Section nav arrows */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 36, paddingTop: 20, borderTop: '1px solid var(--border-color)' }}>
                  {(() => {
                    const flat = NAV_GROUPS.flatMap(g => g.sections);
                    const idx  = flat.indexOf(activeSection);
                    return (
                      <>
                        {idx > 0 && (
                          <button onClick={() => setActiveSection(flat[idx - 1])}
                            className="btn btn-secondary" style={{ fontSize: 13, padding: '8px 16px' }}>
                            ← {allSections.find(s => s.id === flat[idx - 1])?.label}
                          </button>
                        )}
                        {idx < flat.length - 1 && (
                          <button onClick={() => setActiveSection(flat[idx + 1])}
                            className="btn btn-primary" style={{ fontSize: 13, padding: '8px 16px' }}>
                            {allSections.find(s => s.id === flat[idx + 1])?.label} →
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ══════════════ BOTTOM BAR ══════════════ */}
      <div style={{
        borderTop: '1px solid var(--border-color)',
        padding: '12px 28px',
        display: 'flex', alignItems: 'center', gap: 14,
        background: 'var(--surface-color)', flexShrink: 0,
      }}>
        <button onClick={copyPrompt} disabled={!generatedPrompt}
          className={generatedPrompt ? 'btn btn-primary' : 'btn btn-secondary'}
          style={{ fontSize: 13, padding: '9px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
          {copied ? <CheckCircle2 size={15} /> : <Wand2 size={15} />}
          {copied ? 'Copied!' : 'Generate prompt'}
        </button>
        <button className="btn btn-secondary" style={{ fontSize: 13, padding: '9px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <BookOpen size={15} /> Reference Prompts
        </button>
        <div style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginLeft: 8 }}>
          {generatedPrompt ? generatedPrompt.substring(0, 130) + '…' : 'Select a quick theme or configure options to build your prompt'}
        </div>
        {activePreset && (
          <span style={{ fontSize: 12, color: 'var(--accent-purple)', whiteSpace: 'nowrap', marginLeft: 'auto' }}>
            {presets.find((p: any) => p.id === activePreset)?.name} · {totalActive} options
          </span>
        )}
      </div>

      {/* ══════════════ SEARCH OVERLAY ══════════════ */}
      <AnimatePresence>
        {showSearch && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 500, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 20px' }}
            onClick={e => e.target === e.currentTarget && setShowSearch(false)}
          >
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20 }}
              className="glass-panel"
              style={{ width: '100%', maxWidth: 600, maxHeight: '65vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 16 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderBottom: '1px solid var(--border-color)' }}>
                <Search size={16} color="var(--text-secondary)" />
                <input ref={searchRef} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search all options…"
                  style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 15, color: 'var(--text-primary)', fontFamily: 'var(--font-main)' }}
                />
                <button onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  <X size={15} />
                </button>
              </div>

              <div style={{ overflowY: 'auto', flex: 1, padding: 8 }}>
                {!searchQuery.trim() && (
                  <div style={{ padding: 32, textAlign: 'center', fontSize: 13, color: 'var(--text-secondary)' }}>
                    Type to search across all sections
                  </div>
                )}
                {searchQuery.trim() && searchResults.length === 0 && (
                  <div style={{ padding: 32, textAlign: 'center', fontSize: 13, color: 'var(--text-secondary)' }}>
                    No results found
                  </div>
                )}
                {searchResults.map((r, i) => {
                  const on = selections[r.fKey]?.includes(r.opt);
                  return (
                    <div key={i}
                      onClick={() => { toggleOpt(r.fKey, r.opt, r.fSingle); setActiveSection(r.sId); }}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, cursor: 'pointer', background: on ? 'rgba(139,92,246,0.08)' : 'transparent', transition: 'background .12s' }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: on ? 'var(--accent-purple)' : 'transparent', border: `1px solid ${on ? 'var(--accent-purple)' : 'var(--border-color)'}`, flexShrink: 0 }} />
                      <span style={{ flex: 1, fontSize: 13, color: 'var(--text-primary)' }}>{r.opt}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{r.sLabel}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ padding: '8px 18px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: 16 }}>
                {[['↑↓', 'navigate'], ['↵', 'toggle'], ['Esc', 'close']].map(([k, v]) => (
                  <span key={k} style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <kbd style={{ border: '1px solid var(--border-color)', borderRadius: 4, padding: '1px 5px', fontSize: 10, fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{k}</kbd> {v}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
