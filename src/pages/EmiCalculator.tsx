import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Percent, Clock, IndianRupee, PieChart, Car, Home, Bike, Briefcase } from 'lucide-react';

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState<number | ''>(500000);
  const [interestRate, setInterestRate] = useState<number | ''>(8.5);
  const [tenureYears, setTenureYears] = useState<number | ''>(5);
  const [loanType, setLoanType] = useState('custom');

  const applyPreset = (type: string) => {
    setLoanType(type);
    switch (type) {
      case 'home':
        setPrincipal(5000000);
        setInterestRate(8.5);
        setTenureYears(25);
        break;
      case 'car':
        setPrincipal(800000);
        setInterestRate(9.0);
        setTenureYears(7);
        break;
      case 'bike':
        setPrincipal(150000);
        setInterestRate(11.5);
        setTenureYears(3);
        break;
      case 'business':
        setPrincipal(2000000);
        setInterestRate(12.5);
        setTenureYears(5);
        break;
    }
  };

  const results = useMemo(() => {
    const p = Number(principal);
    const r = Number(interestRate);
    const y = Number(tenureYears);

    if (p <= 0 || r <= 0 || y <= 0) {
      return { emi: 0, totalInterest: 0, totalPayment: 0 };
    }

    const ratePerMonth = (r / 12) / 100;
    const totalMonths = y * 12;

    const emi = (p * ratePerMonth * Math.pow(1 + ratePerMonth, totalMonths)) / 
                (Math.pow(1 + ratePerMonth, totalMonths) - 1);
    
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - p;

    return {
      emi,
      totalInterest,
      totalPayment
    };
  }, [principal, interestRate, tenureYears]);

  return (
    <div className="page-wrapper app-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
            EMI <span className="text-gradient">Calculator</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Calculate your Equated Monthly Installments</p>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
          <button 
            className={`btn ${loanType === 'home' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => applyPreset('home')}
          ><Home size={18} /> Home Loan</button>
          <button 
            className={`btn ${loanType === 'car' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => applyPreset('car')}
          ><Car size={18} /> Car Loan</button>
          <button 
            className={`btn ${loanType === 'bike' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => applyPreset('bike')}
          ><Bike size={18} /> Bike Loan</button>
          <button 
            className={`btn ${loanType === 'business' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => applyPreset('business')}
          ><Briefcase size={18} /> Business Loan</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {/* Input Section */}
          <div className="glass-panel" style={{ padding: '30px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calculator className="text-blue-500" /> Loan Details
            </h3>
            
            <div className="input-group">
              <label>Principal Amount (₹)</label>
              <div style={{ position: 'relative' }}>
                <IndianRupee size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="number" 
                  className="input-field" 
                  style={{ paddingLeft: '40px' }}
                  value={principal}
                  onChange={(e) => { setPrincipal(e.target.value === '' ? '' : Number(e.target.value)); setLoanType('custom'); }}
                  min="0"
                />
              </div>
              <input 
                type="range" 
                min="10000" 
                max="10000000" 
                step="10000" 
                value={Number(principal)} 
                onChange={(e) => { setPrincipal(Number(e.target.value)); setLoanType('custom'); }}
                style={{ width: '100%', marginTop: '10px', accentColor: 'var(--accent-blue)' }}
              />
            </div>

            <div className="input-group">
              <label>Interest Rate (% p.a.)</label>
              <div style={{ position: 'relative' }}>
                <Percent size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="number" 
                  className="input-field" 
                  style={{ paddingLeft: '40px' }}
                  value={interestRate}
                  onChange={(e) => { setInterestRate(e.target.value === '' ? '' : Number(e.target.value)); setLoanType('custom'); }}
                  min="0.1"
                  step="0.1"
                />
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="0.1" 
                value={Number(interestRate)} 
                onChange={(e) => { setInterestRate(Number(e.target.value)); setLoanType('custom'); }}
                style={{ width: '100%', marginTop: '10px', accentColor: 'var(--accent-purple)' }}
              />
            </div>

            <div className="input-group" style={{ marginBottom: 0 }}>
              <label>Loan Tenure (Years)</label>
              <div style={{ position: 'relative' }}>
                <Clock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="number" 
                  className="input-field" 
                  style={{ paddingLeft: '40px' }}
                  value={tenureYears}
                  onChange={(e) => { setTenureYears(e.target.value === '' ? '' : Number(e.target.value)); setLoanType('custom'); }}
                  min="1"
                  max="30"
                />
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1" 
                value={Number(tenureYears)} 
                onChange={(e) => { setTenureYears(Number(e.target.value)); setLoanType('custom'); }}
                style={{ width: '100%', marginTop: '10px', accentColor: 'var(--accent-pink)' }}
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PieChart className="text-purple-500" /> Summary
            </h3>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid var(--accent-blue)' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}>Monthly EMI</p>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-blue)' }}>
                  ₹{results.emi > 0 ? results.emi.toFixed(0) : '0'}
                </h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '5px' }}>Principal Amount</p>
                  <h3 style={{ fontSize: '1.2rem' }}>₹{Number(principal).toLocaleString()}</h3>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '5px' }}>Total Interest</p>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-pink)' }}>
                    ₹{results.totalInterest > 0 ? results.totalInterest.toFixed(0) : '0'}
                  </h3>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', marginTop: 'auto' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '5px' }}>Total Amount Payable (Principal + Interest)</p>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                  ₹{results.totalPayment > 0 ? results.totalPayment.toFixed(0) : '0'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
