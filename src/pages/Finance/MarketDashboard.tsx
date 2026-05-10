import { motion } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockIndices = [
  { name: 'NIFTY 50', value: 24350.25, change: 125.40, percent: 0.52, isUp: true },
  { name: 'BANK NIFTY', value: 52100.80, change: -150.20, percent: -0.28, isUp: false },
  { name: 'SENSEX', value: 80120.50, change: 420.10, percent: 0.53, isUp: true },
  { name: 'INDIA VIX', value: 14.20, change: -0.45, percent: -3.07, isUp: false },
];

const topGainers = [
  { symbol: 'RELIANCE', price: 3120.50, change: 2.5 },
  { symbol: 'TCS', price: 4250.00, change: 1.8 },
  { symbol: 'HDFCBANK', price: 1680.25, change: 1.2 },
];

const topLosers = [
  { symbol: 'INFY', price: 1420.10, change: -1.5 },
  { symbol: 'ITC', price: 410.80, change: -1.1 },
  { symbol: 'WIPRO', price: 480.30, change: -0.9 },
];

export default function MarketDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
          <Activity size={24} /> Live Market Dashboard
        </h2>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '5px 10px', borderRadius: '20px' }}>
          Market Open • Delayed by 15 mins
        </span>
      </div>

      {/* Indices Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {mockIndices.map((idx, i) => (
          <div key={i} className="glass-panel" style={{ padding: '20px', borderTop: `3px solid ${idx.isUp ? '#10b981' : '#ef4444'}` }}>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '10px', fontSize: '0.9rem' }}>{idx.name}</h4>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '5px', color: 'white' }}>
              {idx.value.toLocaleString('en-IN')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: idx.isUp ? '#10b981' : '#ef4444', fontSize: '0.9rem', fontWeight: 500 }}>
              {idx.isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {idx.change} ({idx.percent}%)
            </div>
          </div>
        ))}
      </div>

      {/* Gainers and Losers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Gainers */}
        <div className="glass-panel" style={{ padding: '25px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981' }}>
            <TrendingUp size={20} /> Top Gainers
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {topGainers.map((stock, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontWeight: 500 }}>{stock.symbol}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'white' }}>₹{stock.price.toFixed(2)}</div>
                  <div style={{ color: '#10b981', fontSize: '0.85rem' }}>+{stock.change}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Losers */}
        <div className="glass-panel" style={{ padding: '25px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444' }}>
            <TrendingDown size={20} /> Top Losers
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {topLosers.map((stock, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontWeight: 500 }}>{stock.symbol}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'white' }}>₹{stock.price.toFixed(2)}</div>
                  <div style={{ color: '#ef4444', fontSize: '0.85rem' }}>{stock.change}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
