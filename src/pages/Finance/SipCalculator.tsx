import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, PieChart } from 'lucide-react';

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  // SIP Math Calculation
  const P = monthlyInvestment;
  const r = returnRate / 12 / 100;
  const n = years * 12;
  const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const totalInvested = P * n;
  const totalReturns = futureValue - totalInvested;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Calculator size={24} /> Investment Return Calculator
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
        Calculate the future value of your monthly SIP (Systematic Investment Plan) based on compound interest.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Input Section */}
        <div className="glass-panel" style={{ padding: '25px' }}>
          <div className="input-group">
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Monthly Investment (SIP)</span>
              <span style={{ color: 'var(--accent-purple)' }}>{formatCurrency(monthlyInvestment)}</span>
            </label>
            <input 
              type="range" 
              className="slider" 
              min="500" max="100000" step="500"
              value={monthlyInvestment} 
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))} 
            />
          </div>

          <div className="input-group">
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Expected Return Rate (p.a)</span>
              <span style={{ color: 'var(--accent-purple)' }}>{returnRate}%</span>
            </label>
            <input 
              type="range" 
              className="slider" 
              min="1" max="30" step="1"
              value={returnRate} 
              onChange={(e) => setReturnRate(Number(e.target.value))} 
            />
          </div>

          <div className="input-group" style={{ marginBottom: 0 }}>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Time Period</span>
              <span style={{ color: 'var(--accent-purple)' }}>{years} Years</span>
            </label>
            <input 
              type="range" 
              className="slider" 
              min="1" max="40" step="1"
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))} 
            />
          </div>
        </div>

        {/* Output Section */}
        <div className="glass-panel" style={{ padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--accent-pink)' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PieChart size={18} /> Investment Breakdown
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--glass-border)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Invested Amount</span>
              <span style={{ fontWeight: '500' }}>{formatCurrency(totalInvested)}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--glass-border)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Est. Returns</span>
              <span style={{ fontWeight: '500', color: '#10b981' }}>+ {formatCurrency(totalReturns)}</span>
            </div>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Total Future Value</span>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <IndianRupee size={30} /> {formatCurrency(futureValue).replace('₹', '')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
