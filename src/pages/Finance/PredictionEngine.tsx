import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Search, BarChart3, AlertTriangle } from 'lucide-react';

export default function PredictionEngine() {
  const [asset, setAsset] = useState('NIFTY 50');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handlePredict = () => {
    setIsAnalyzing(true);
    setResult(null);

    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        asset,
        trend: Math.random() > 0.5 ? 'Bullish' : 'Bearish',
        probability: Math.floor(Math.random() * (95 - 65 + 1) + 65), // 65-95%
        support: 24100,
        resistance: 24500,
        rsi: 62.4,
        macd: 'Positive Crossover'
      });
    }, 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <BrainCircuit size={24} /> AI Prediction Engine
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
        Utilize our LSTM neural network models and technical indicators to forecast short-term market movements.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Configuration */}
        <div className="glass-panel" style={{ padding: '25px', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white' }}>Select Asset</h3>
          
          <div className="input-group">
            <select className="input-field" style={{ paddingLeft: '15px' }} value={asset} onChange={(e) => setAsset(e.target.value)}>
              <option>NIFTY 50</option>
              <option>BANK NIFTY</option>
              <option>RELIANCE</option>
              <option>HDFCBANK</option>
              <option>TCS</option>
            </select>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
            onClick={handlePredict}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div className="spinner" style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 1s linear infinite' }} /> Analyzing...
              </span>
            ) : (
              <><Search size={18} /> Generate Prediction</>
            )}
          </button>
        </div>

        {/* Results */}
        <div className="glass-panel" style={{ padding: '25px', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
          {!result && !isAnalyzing && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
              <BarChart3 size={48} style={{ marginBottom: '15px', opacity: 0.5 }} />
              <p>Select an asset and generate a prediction to view AI insights.</p>
            </div>
          )}

          {isAnalyzing && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)' }}>
              <BrainCircuit size={48} style={{ marginBottom: '15px', animation: 'pulse 1.5s infinite' }} />
              <p>Running Time-Series Forecasting Models...</p>
              <style>{`
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; transform: scale(1.1); } 100% { opacity: 0.5; } }
              `}</style>
            </div>
          )}

          {result && !isAnalyzing && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid var(--glass-border)' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'white', margin: 0 }}>{result.asset}</h3>
                <span style={{ 
                  background: result.trend === 'Bullish' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: result.trend === 'Bullish' ? '#10b981' : '#ef4444',
                  padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold' 
                }}>
                  {result.trend} Trend
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AI Confidence</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-blue)' }}>{result.probability}%</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>RSI Indicator</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{result.rsi}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Support Level</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 500, color: 'white' }}>₹{result.support.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Resistance Level</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 500, color: 'white' }}>₹{result.resistance.toLocaleString('en-IN')}</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,200,0,0.1)', borderLeft: '4px solid #fbbf24', padding: '15px', borderRadius: '8px', display: 'flex', gap: '10px' }}>
                <AlertTriangle size={20} color="#fbbf24" style={{ flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong>Disclaimer:</strong> This prediction is generated using historical data models and technical indicators (MACD: {result.macd}). It is highly speculative and should not be used as financial advice.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
