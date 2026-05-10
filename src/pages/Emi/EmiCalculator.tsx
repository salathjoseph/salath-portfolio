import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Percent, Clock, IndianRupee, Car, Home, Bike, Briefcase, Download, Search, Calendar } from 'lucide-react';

type Mode = 'emi' | 'reverse' | 'schedule';

const fmt = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');

// Find interest rate given loan, emi, months (Newton-Raphson)
function findRate(P: number, emi: number, n: number): { reducing: number; flat: number } {
  let r = 0.01;
  for (let i = 0; i < 1000; i++) {
    const f  = P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1) - emi;
    const df = P * (Math.pow(1+r,n)*(1+r*n) - Math.pow(1+r,n+1) + r*Math.pow(1+r,n)) / Math.pow(Math.pow(1+r,n)-1,2);
    const r2 = r - f/df;
    if (Math.abs(r2-r)<1e-9) { r=r2; break; }
    r = r2 > 0 ? r2 : r/2;
  }
  const totalPaid = emi * n;
  const totalInterest = totalPaid - P;
  const flatRate = (totalInterest / P / n) * 12 * 100;
  return { reducing: r * 12 * 100, flat: flatRate };
}

function buildSchedule(P: number, annualRate: number, emi: number, months: number, startDate: string) {
  const r = annualRate / 12 / 100;
  let balance = P;
  let totalPaid = 0, totalInterest = 0;
  const rows: any[] = [];
  const start = startDate ? new Date(startDate) : new Date();
  for (let i = 1; i <= months; i++) {
    const d = new Date(start);
    d.setMonth(d.getMonth() + i - 1);
    const interest = balance * r;
    const principal = Math.min(emi - interest, balance);
    balance = Math.max(0, balance - principal);
    totalPaid += emi;
    totalInterest += interest;
    rows.push({
      month: i,
      date: d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' }),
      emi, interest, principal, balance, totalPaid, totalInterest,
    });
    if (balance <= 0) break;
  }
  return rows;
}

function exportCSV(rows: any[]) {
  const header = 'Month,Date,EMI,Interest,Principal,Balance,Total Paid,Total Interest\n';
  const data = rows.map(r =>
    `${r.month},${r.date},${Math.round(r.emi)},${Math.round(r.interest)},${Math.round(r.principal)},${Math.round(r.balance)},${Math.round(r.totalPaid)},${Math.round(r.totalInterest)}`
  ).join('\n');
  const blob = new Blob([header+data], { type: 'text/csv' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'loan_schedule.csv'; a.click();
}

export default function EmiCalculator() {
  const [mode, setMode] = useState<Mode>('emi');
  const [loanType, setLoanType] = useState('custom');
  // shared
  const [principal, setPrincipal] = useState<number|''>('');
  const [interestRate, setInterestRate] = useState<number|''>('');
  const [tenureMonths, setTenureMonths] = useState<number|''>('');
  // reverse
  const [knownEmi, setKnownEmi] = useState<number|''>('');
  // schedule
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [schedEmi, setSchedEmi] = useState<number|''>('');

  const applyPreset = (type: string) => {
    setLoanType(type);
    const map: Record<string, [number,number,number]> = {
      home:[5000000,8.5,240], car:[800000,9,84], bike:[150000,11.5,36], business:[2000000,12.5,60],
    };
    if (map[type]) { setPrincipal(map[type][0]); setInterestRate(map[type][1]); setTenureMonths(map[type][2]); }
  };

  const emiResult = useMemo(() => {
    const p=Number(principal), r=Number(interestRate), n=Number(tenureMonths);
    if (!p||!r||!n) return null;
    const rm = r/12/100;
    const emi = p*rm*Math.pow(1+rm,n)/(Math.pow(1+rm,n)-1);
    return { emi, totalInterest: emi*n-p, totalPayment: emi*n };
  }, [principal, interestRate, tenureMonths]);

  const reverseResult = useMemo(() => {
    const p=Number(principal), e=Number(knownEmi), n=Number(tenureMonths);
    if (!p||!e||!n||e<=0) return null;
    if (e*n<=p) return null;
    try { return findRate(p,e,n); } catch { return null; }
  }, [principal, knownEmi, tenureMonths]);

  const schedule = useMemo(() => {
    const p=Number(principal), r=Number(interestRate), e=Number(schedEmi), n=Number(tenureMonths);
    if (!p||!r||!n) return [];
    const rm=r/12/100;
    const autoEmi = e>0 ? e : p*rm*Math.pow(1+rm,n)/(Math.pow(1+rm,n)-1);
    return buildSchedule(p, r, autoEmi, n, startDate);
  }, [principal, interestRate, tenureMonths, schedEmi, startDate]);

  const card: React.CSSProperties = { background:'rgba(255,255,255,0.03)', borderRadius:12, padding:'18px', border:'1px solid var(--glass-border)' };
  const modeBtn = (m: Mode, label: string, Icon: any) => (
    <button onClick={()=>setMode(m)} className={`btn ${mode===m?'btn-primary':'btn-secondary'}`}
      style={{fontSize:13,padding:'8px 16px',display:'flex',alignItems:'center',gap:7}}>
      <Icon size={16}/> {label}
    </button>
  );

  return (
    <div className="page-wrapper app-container">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
        <div style={{textAlign:'center',marginBottom:32}}>
          <h1 style={{fontSize:'2.6rem',marginBottom:8}}>EMI <span className="text-gradient">Calculator</span></h1>
          <p style={{color:'var(--text-secondary)'}}>Standard EMI · Interest Finder · Repayment Schedule</p>
        </div>

        {/* Loan type presets */}
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginBottom:24}}>
          {[['home','Home',Home],['car','Car',Car],['bike','Bike',Bike],['business','Business',Briefcase]].map(([t,l,I]:any)=>(
            <button key={t} className={`btn ${loanType===t?'btn-primary':'btn-secondary'}`}
              onClick={()=>applyPreset(t)} style={{fontSize:13,padding:'8px 16px'}}>
              <I size={15}/> {l} Loan
            </button>
          ))}
        </div>

        {/* Mode tabs */}
        <div style={{display:'flex',gap:10,justifyContent:'center',marginBottom:28}}>
          {modeBtn('emi','EMI Calculator',Calculator)}
          {modeBtn('reverse','Find Interest Rate',Search)}
          {modeBtn('schedule','Repayment Schedule',Calendar)}
        </div>

        {/* ── MODE: EMI ── */}
        {mode==='emi' && (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:28}}>
            <div className="glass-panel" style={{padding:28}}>
              <h3 style={{marginBottom:22,display:'flex',alignItems:'center',gap:10}}><Calculator size={20}/> Loan Details</h3>
              <div className="input-group">
                <label>Loan Amount (₹)</label>
                <div style={{position:'relative'}}>
                  <IndianRupee size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                  <input type="number" className="input-field" style={{paddingLeft:38}} value={principal}
                    onChange={e=>{setPrincipal(e.target.value===''?'':Number(e.target.value));setLoanType('custom');}} placeholder="e.g. 200000"/>
                </div>
                <input type="range" min="10000" max="10000000" step="10000" value={Number(principal)||0}
                  onChange={e=>{setPrincipal(Number(e.target.value));setLoanType('custom');}}
                  style={{width:'100%',accentColor:'var(--accent-blue)'}}/>
              </div>
              <div className="input-group">
                <label>Interest Rate (% p.a.)</label>
                <div style={{position:'relative'}}>
                  <Percent size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                  <input type="number" className="input-field" style={{paddingLeft:38}} value={interestRate}
                    onChange={e=>{setInterestRate(e.target.value===''?'':Number(e.target.value));setLoanType('custom');}} step="0.1" placeholder="e.g. 9"/>
                </div>
                <input type="range" min="1" max="30" step="0.1" value={Number(interestRate)||0}
                  onChange={e=>{setInterestRate(Number(e.target.value));setLoanType('custom');}}
                  style={{width:'100%',accentColor:'var(--accent-purple)'}}/>
              </div>
              <div className="input-group" style={{marginBottom:0}}>
                <label>Tenure (Months)</label>
                <div style={{position:'relative'}}>
                  <Clock size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                  <input type="number" className="input-field" style={{paddingLeft:38}} value={tenureMonths}
                    onChange={e=>{setTenureMonths(e.target.value===''?'':Number(e.target.value));setLoanType('custom');}} placeholder="e.g. 24"/>
                </div>
                <input type="range" min="1" max="360" step="1" value={Number(tenureMonths)||0}
                  onChange={e=>{setTenureMonths(Number(e.target.value));setLoanType('custom');}}
                  style={{width:'100%',accentColor:'var(--accent-pink)'}}/>
              </div>
            </div>
            <div className="glass-panel" style={{padding:28}}>
              <h3 style={{marginBottom:22}}>Summary</h3>
              {emiResult ? (
                <div style={{display:'flex',flexDirection:'column',gap:16}}>
                  <div style={{...card,border:'1px solid var(--accent-blue)'}}>
                    <p style={{color:'var(--text-secondary)',fontSize:13,marginBottom:4}}>Monthly EMI</p>
                    <h2 style={{fontSize:'2.4rem',color:'var(--accent-blue)'}}>{fmt(emiResult.emi)}</h2>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                    <div style={card}>
                      <p style={{color:'var(--text-secondary)',fontSize:12,marginBottom:4}}>Principal</p>
                      <h3 style={{fontSize:'1.15rem'}}>{fmt(Number(principal))}</h3>
                    </div>
                    <div style={card}>
                      <p style={{color:'var(--text-secondary)',fontSize:12,marginBottom:4}}>Total Interest</p>
                      <h3 style={{fontSize:'1.15rem',color:'var(--accent-pink)'}}>{fmt(emiResult.totalInterest)}</h3>
                    </div>
                  </div>
                  <div style={card}>
                    <p style={{color:'var(--text-secondary)',fontSize:13,marginBottom:4}}>Total Payable</p>
                    <h3 style={{fontSize:'1.6rem'}}>{fmt(emiResult.totalPayment)}</h3>
                  </div>
                  <div style={{background:'rgba(59,130,246,0.06)',borderRadius:10,padding:'12px 16px',fontSize:13,color:'var(--text-secondary)'}}>
                    Interest is <strong style={{color:'var(--accent-pink)'}}>
                      {((emiResult.totalInterest/Number(principal))*100).toFixed(1)}%
                    </strong> of the loan amount
                  </div>
                </div>
              ) : (
                <div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-secondary)',fontSize:14}}>
                  Enter loan details to see results
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── MODE: REVERSE INTEREST ── */}
        {mode==='reverse' && (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:28}}>
            <div className="glass-panel" style={{padding:28}}>
              <h3 style={{marginBottom:6,display:'flex',alignItems:'center',gap:10}}><Search size={20}/> Find True Interest Rate</h3>
              <p style={{color:'var(--text-secondary)',fontSize:13,marginBottom:22}}>
                Know your loan amount + EMI? Discover the actual interest rate — including the difference between flat and reducing balance.
              </p>
              <div className="input-group">
                <label>Loan Amount (₹)</label>
                <div style={{position:'relative'}}>
                  <IndianRupee size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                  <input type="number" className="input-field" style={{paddingLeft:38}} value={principal}
                    onChange={e=>setPrincipal(e.target.value===''?'':Number(e.target.value))} placeholder="e.g. 200000"/>
                </div>
              </div>
              <div className="input-group">
                <label>Your EMI Amount (₹)</label>
                <div style={{position:'relative'}}>
                  <IndianRupee size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                  <input type="number" className="input-field" style={{paddingLeft:38}} value={knownEmi}
                    onChange={e=>setKnownEmi(e.target.value===''?'':Number(e.target.value))} placeholder="e.g. 9603"/>
                </div>
              </div>
              <div className="input-group" style={{marginBottom:0}}>
                <label>Tenure (Months)</label>
                <div style={{position:'relative'}}>
                  <Clock size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                  <input type="number" className="input-field" style={{paddingLeft:38}} value={tenureMonths}
                    onChange={e=>setTenureMonths(e.target.value===''?'':Number(e.target.value))} placeholder="e.g. 24"/>
                </div>
              </div>
            </div>
            <div className="glass-panel" style={{padding:28}}>
              <h3 style={{marginBottom:22}}>Interest Analysis</h3>
              {reverseResult ? (
                <div style={{display:'flex',flexDirection:'column',gap:16}}>
                  <div style={{...card,border:'1px solid #10b981'}}>
                    <p style={{color:'var(--text-secondary)',fontSize:12,marginBottom:4}}>✅ Reducing Balance Rate (True Rate)</p>
                    <h2 style={{fontSize:'2.2rem',color:'#10b981'}}>{reverseResult.reducing.toFixed(2)}% p.a.</h2>
                    <p style={{fontSize:12,color:'var(--text-secondary)',marginTop:6}}>This is the actual cost of your loan (banks use this method)</p>
                  </div>
                  <div style={{...card,border:'1px solid var(--accent-pink)'}}>
                    <p style={{color:'var(--text-secondary)',fontSize:12,marginBottom:4}}>⚠️ Flat Rate (as lenders often quote)</p>
                    <h2 style={{fontSize:'2.2rem',color:'var(--accent-pink)'}}>{reverseResult.flat.toFixed(2)}% p.a.</h2>
                    <p style={{fontSize:12,color:'var(--text-secondary)',marginTop:6}}>Flat rate always looks lower — actual cost is ~{(reverseResult.reducing/reverseResult.flat).toFixed(1)}x more</p>
                  </div>
                  <div style={{background:'rgba(239,68,68,0.07)',borderRadius:10,padding:'12px 16px',fontSize:13}}>
                    <strong style={{color:'var(--accent-pink)'}}>Watch out:</strong>
                    <span style={{color:'var(--text-secondary)'}}> If lender quoted <strong>{reverseResult.flat.toFixed(1)}% flat</strong>, the true reducing rate is actually <strong style={{color:'#10b981'}}>{reverseResult.reducing.toFixed(2)}%</strong></span>
                  </div>
                  <div style={card}>
                    <p style={{color:'var(--text-secondary)',fontSize:12,marginBottom:6}}>Total breakdown for {tenureMonths} months</p>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                      <div><p style={{fontSize:11,color:'var(--text-secondary)'}}>Total Paid</p><p style={{fontWeight:600}}>{fmt(Number(knownEmi)*Number(tenureMonths))}</p></div>
                      <div><p style={{fontSize:11,color:'var(--text-secondary)'}}>Total Interest</p><p style={{fontWeight:600,color:'var(--accent-pink)'}}>{fmt(Number(knownEmi)*Number(tenureMonths)-Number(principal))}</p></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-secondary)',fontSize:14,textAlign:'center',padding:20}}>
                  Enter loan amount, your EMI and tenure to discover the true interest rate
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── MODE: SCHEDULE ── */}
        {mode==='schedule' && (
          <div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20,marginBottom:24}}>
              <div className="glass-panel" style={{padding:22}}>
                <div className="input-group">
                  <label>Loan Amount (₹)</label>
                  <div style={{position:'relative'}}>
                    <IndianRupee size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                    <input type="number" className="input-field" style={{paddingLeft:38}} value={principal}
                      onChange={e=>setPrincipal(e.target.value===''?'':Number(e.target.value))} placeholder="200000"/>
                  </div>
                </div>
                <div className="input-group">
                  <label>Interest Rate (% p.a.)</label>
                  <div style={{position:'relative'}}>
                    <Percent size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                    <input type="number" className="input-field" style={{paddingLeft:38}} value={interestRate}
                      onChange={e=>setInterestRate(e.target.value===''?'':Number(e.target.value))} step="0.1" placeholder="9"/>
                  </div>
                </div>
              </div>
              <div className="glass-panel" style={{padding:22}}>
                <div className="input-group">
                  <label>Tenure (Months)</label>
                  <div style={{position:'relative'}}>
                    <Clock size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                    <input type="number" className="input-field" style={{paddingLeft:38}} value={tenureMonths}
                      onChange={e=>setTenureMonths(e.target.value===''?'':Number(e.target.value))} placeholder="24"/>
                  </div>
                </div>
                <div className="input-group">
                  <label>EMI (leave blank to auto-calculate)</label>
                  <div style={{position:'relative'}}>
                    <IndianRupee size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-secondary)'}}/>
                    <input type="number" className="input-field" style={{paddingLeft:38}} value={schedEmi}
                      onChange={e=>setSchedEmi(e.target.value===''?'':Number(e.target.value))} placeholder="auto"/>
                  </div>
                </div>
              </div>
              <div className="glass-panel" style={{padding:22}}>
                <div className="input-group">
                  <label>First EMI Date</label>
                  <input type="date" className="input-field" value={startDate} onChange={e=>setStartDate(e.target.value)}/>
                </div>
                {schedule.length>0 && (
                  <div style={{marginTop:8}}>
                    <p style={{fontSize:12,color:'var(--text-secondary)',marginBottom:6}}>
                      Auto EMI: <strong style={{color:'var(--accent-blue)'}}>{schedule[0]?fmt(schedule[0].emi):''}</strong>
                    </p>
                    <p style={{fontSize:12,color:'var(--text-secondary)'}}>
                      Total Interest: <strong style={{color:'var(--accent-pink)'}}>{schedule.length?fmt(schedule[schedule.length-1].totalInterest):''}</strong>
                    </p>
                  </div>
                )}
                <button onClick={()=>exportCSV(schedule)} className="btn btn-primary"
                  style={{width:'100%',marginTop:12,fontSize:13,display:'flex',alignItems:'center',gap:8,justifyContent:'center'}}
                  disabled={schedule.length===0}>
                  <Download size={15}/> Export to Excel (CSV)
                </button>
              </div>
            </div>

            {schedule.length>0 && (
              <div className="glass-panel" style={{padding:0,overflow:'hidden'}}>
                <div style={{overflowX:'auto'}}>
                  <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
                    <thead>
                      <tr style={{background:'rgba(255,255,255,0.05)'}}>
                        {['#','Date','EMI','Interest','Principal','Balance','Paid So Far','Interest Paid'].map((h, i)=>(
                          <th key={h} style={{padding:'12px 14px',textAlign: i === 0 ? 'left' : 'right',fontWeight:600,color:'var(--text-secondary)',whiteSpace:'nowrap',borderBottom:'1px solid var(--border-color)'}}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((r,i)=>(
                        <tr key={r.month} style={{borderBottom:'1px solid var(--glass-border)',background:i%2===0?'transparent':'rgba(255,255,255,0.01)'}}>
                          <td style={{padding:'10px 14px',color:'var(--text-secondary)'}}>{r.month}</td>
                          <td style={{padding:'10px 14px',whiteSpace:'nowrap'}}>{r.date}</td>
                          <td style={{padding:'10px 14px',textAlign:'right',color:'var(--accent-blue)',fontWeight:500}}>₹{Math.round(r.emi).toLocaleString('en-IN')}</td>
                          <td style={{padding:'10px 14px',textAlign:'right',color:'var(--accent-pink)'}}>₹{Math.round(r.interest).toLocaleString('en-IN')}</td>
                          <td style={{padding:'10px 14px',textAlign:'right',color:'#10b981'}}>₹{Math.round(r.principal).toLocaleString('en-IN')}</td>
                          <td style={{padding:'10px 14px',textAlign:'right'}}>{fmt(r.balance)}</td>
                          <td style={{padding:'10px 14px',textAlign:'right',color:'var(--text-secondary)',fontSize:12}}>{fmt(r.totalPaid)}</td>
                          <td style={{padding:'10px 14px',textAlign:'right',color:'var(--text-secondary)',fontSize:12}}>{fmt(r.totalInterest)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr style={{background:'rgba(255,255,255,0.05)',fontWeight:700}}>
                        <td colSpan={2} style={{padding:'12px 14px',color:'var(--text-secondary)'}}>TOTAL</td>
                        <td style={{padding:'12px 14px',textAlign:'right',color:'var(--accent-blue)'}}>{fmt(schedule.reduce((s,r)=>s+r.emi,0))}</td>
                        <td style={{padding:'12px 14px',textAlign:'right',color:'var(--accent-pink)'}}>{fmt(schedule[schedule.length-1]?.totalInterest||0)}</td>
                        <td style={{padding:'12px 14px',textAlign:'right',color:'#10b981'}}>{fmt(Number(principal))}</td>
                        <td colSpan={3} style={{padding:'12px 14px'}}></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
            {schedule.length===0 && (
              <div className="glass-panel" style={{padding:40,textAlign:'center',color:'var(--text-secondary)'}}>
                Enter loan amount, interest rate and tenure to generate the repayment schedule
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
