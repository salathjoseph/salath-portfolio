import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Calculator,
  TrendingUp,
  Info,
  Coins
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface HybridSavingsCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HybridSavingsCalculator({ isOpen, onClose }: HybridSavingsCalculatorProps) {
  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Input states with specified defaults
  const [kmPerYear, setKmPerYear] = useState<number>(15000);
  const [petrolPrice, setPetrolPrice] = useState<number>(108);
  const [petrolMillage, setPetrolMillage] = useState<number>(11);
  const [hybridMillage, setHybridMillage] = useState<number>(21);
  const [pricePremiumLakhs, setPricePremiumLakhs] = useState<number>(4.5);

  // Reset handler
  const handleReset = () => {
    setKmPerYear(15000);
    setPetrolPrice(108);
    setPetrolMillage(11);
    setHybridMillage(21);
    setPricePremiumLakhs(4.5);
  };

  // Format amount in Lakhs (e.g. ₹4.50L or -₹3.20L)
  const formatLakhs = (val: number) => {
    const absVal = Math.abs(val);
    const lakhVal = absVal / 100000;
    const prefix = val < 0 ? '-₹' : '₹';
    return `${prefix}${lakhVal.toFixed(2)}L`;
  };

  // Perform computations for Years 1 to 10
  const { yearsData, breakEvenYear, premiumAmount } = useMemo(() => {
    const premium = pricePremiumLakhs * 100000;

    // Annual fuel consumed in Litres
    const petrolAnnualLitres = kmPerYear / petrolMillage;
    const hybridAnnualLitres = kmPerYear / hybridMillage;

    // Annual cost in Rupees
    const petrolAnnualCost = petrolAnnualLitres * petrolPrice;
    const hybridAnnualCost = hybridAnnualLitres * petrolPrice;

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(year => {
      const petrolCost = petrolAnnualCost * year;
      const hybridFuelCost = hybridAnnualCost * year;
      const hybridTotalCost = hybridFuelCost + premium; // upfront premium is treated as initial capital expenditure
      const fuelSaved = petrolCost - hybridFuelCost;
      const netSavings = fuelSaved - premium;

      return {
        year,
        yearLabel: `Yr ${year}`,
        petrolCost,
        hybridFuelCost,
        hybridTotalCost,
        fuelSaved,
        netSavings,
        // Chart values in Lakhs (numbers for Recharts axis scaling)
        'Petrol Fuel Cost': parseFloat((petrolCost / 100000).toFixed(2)),
        'Hybrid Total Cost (incl. Premium)': parseFloat((hybridTotalCost / 100000).toFixed(2))
      };
    });

    // Find first year where fuel saved is greater than or equal to the upfront price premium
    const foundBreakEven = data.find(d => d.fuelSaved >= premium);
    const beYear = foundBreakEven ? foundBreakEven.year : null;

    return {
      yearsData: data,
      breakEvenYear: beYear,
      premiumAmount: premium
    };
  }, [kmPerYear, petrolPrice, petrolMillage, hybridMillage, pricePremiumLakhs]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="showroom-modal-overlay"
    >
      <motion.div
        initial={{ scale: 0.96, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 20 }}
        className="showroom-modal-content glass-panel calculator-modal-content"
      >
        {/* Modal Header */}
        <div className="showroom-modal-header" style={{ padding: '20px 24px' }}>
          <div className="header-title-area">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calculator style={{ color: 'var(--toyota-red)' }} size={24} />
              Toyota Hybrid Savings Calculator
            </h2>
            <p>Calculate your custom cumulative fuel savings and find your break-even point</p>
          </div>
          <button onClick={onClose} className="btn-close-modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="showroom-modal-body calculator-modal-body" style={{ overflowY: 'auto', display: 'block', padding: '24px' }}>
          <div className="calculator-grid">

            {/* Left inputs panel */}
            <div className="calculator-inputs-panel glass-panel">
              <div className="panel-title-row">
                <Coins size={18} style={{ color: 'var(--toyota-red)' }} />
                <h3>Driving & Cost Inputs</h3>
              </div>

              {/* Input: Km driven per year */}
              <div className="input-group">
                <div className="input-label-row">
                  <label htmlFor="km-driven-slider">Annual Driving distance</label>
                  <span className="value-badge font-mono">{kmPerYear.toLocaleString()} km</span>
                </div>
                <input
                  id="km-driven-slider"
                  type="range"
                  min="5000"
                  max="60000"
                  step="1000"
                  value={kmPerYear}
                  onChange={(e) => setKmPerYear(parseInt(e.target.value))}
                  className="calculator-slider"
                />
                <div className="slider-limits font-mono">
                  <span>5k km</span>
                  <span>30k km</span>
                  <span>60k km</span>
                </div>
              </div>

              {/* Input: Petrol Price */}
              <div className="input-group">
                <div className="input-label-row">
                  <label htmlFor="petrol-price-input">Petrol Price (per Litre)</label>
                  <span className="value-badge font-mono">₹ {petrolPrice} / L</span>
                </div>
                <div className="input-number-wrapper">
                  <span className="input-prefix">₹</span>
                  <input
                    id="petrol-price-input"
                    type="number"
                    value={petrolPrice}
                    onChange={(e) => setPetrolPrice(Math.max(1, parseFloat(e.target.value) || 0))}
                    className="calculator-number-input font-mono"
                    min="1"
                  />
                </div>
              </div>

              {/* Input: Mileage grid */}
              <div className="mileage-grid">
                <div className="input-group">
                  <div className="input-label-row">
                    <label htmlFor="petrol-mileage-input">Petrol Mileage</label>
                    <span className="value-badge font-mono">{petrolMillage} kmpl</span>
                  </div>
                  <input
                    id="petrol-mileage-input"
                    type="number"
                    min="5"
                    max="30"
                    value={petrolMillage}
                    onChange={(e) => setPetrolMillage(Math.max(1, parseFloat(e.target.value) || 0))}
                    className="calculator-number-input font-mono"
                  />
                  <span className="mileage-tip">Default: 11 kmpl</span>
                </div>

                <div className="input-group">
                  <div className="input-label-row">
                    <label htmlFor="hybrid-mileage-input">Hybrid Mileage</label>
                    <span className="value-badge font-mono">{hybridMillage} kmpl</span>
                  </div>
                  <input
                    id="hybrid-mileage-input"
                    type="number"
                    min="10"
                    max="50"
                    value={hybridMillage}
                    onChange={(e) => setHybridMillage(Math.max(1, parseFloat(e.target.value) || 0))}
                    className="calculator-number-input font-mono"
                  />
                  <span className="mileage-tip">Default: 21 kmpl</span>
                </div>
              </div>

              {/* Input: Price Difference */}
              <div className="input-group">
                <div className="input-label-row">
                  <label htmlFor="price-premium-input">Hybrid Price Premium</label>
                  <span className="value-badge font-mono">{formatLakhs(pricePremiumLakhs * 100000)}</span>
                </div>
                <div className="input-number-wrapper">
                  <input
                    id="price-premium-input"
                    type="number"
                    step="0.1"
                    min="0"
                    value={pricePremiumLakhs}
                    onChange={(e) => setPricePremiumLakhs(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="calculator-number-input font-mono"
                    style={{ paddingLeft: '16px' }}
                  />
                  <span className="input-suffix">Lakhs</span>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="btn btn-secondary btn-reset-calc"
              >
                Reset to Standard Defaults
              </button>
            </div>

            {/* Right output panel */}
            <div className="calculator-results-panel">

              {/* Savings Announcement Banner */}
              <div className={`savings-hero-banner ${breakEvenYear ? 'break-even-green' : 'break-even-orange'}`}>
                {breakEvenYear ? (
                  <>
                    <h3 className="banner-savings-headline text-gradient-green">
                      🎉 You start saving from Year {breakEvenYear}!
                    </h3>
                    <p className="banner-savings-sub">
                      Cumulative fuel savings will fully offset the upfront <strong>{formatLakhs(premiumAmount)}</strong> hybrid premium in Year {breakEvenYear} of ownership.
                    </p>
                    <div className="savings-stats-row">
                      <div className="stat-card">
                        <span className="stat-label">10-Yr Fuel Savings</span>
                        <span className="stat-val font-mono" style={{ color: '#10b981' }}>
                          {formatLakhs(yearsData[9].fuelSaved)}
                        </span>
                      </div>
                      <div className="stat-card">
                        <span className="stat-label">10-Yr Net Profit</span>
                        <span className="stat-val font-mono" style={{ color: '#10b981' }}>
                          {formatLakhs(yearsData[9].netSavings)}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="banner-savings-headline text-gradient-orange">
                      ℹ️ Break-even occurs after Year 10
                    </h3>
                    <p className="banner-savings-sub">
                      Based on driving <strong>{kmPerYear.toLocaleString()} km/year</strong>, cumulative fuel savings do not fully offset the <strong>{formatLakhs(premiumAmount)}</strong> premium within 10 years.
                    </p>
                    <div className="savings-stats-row">
                      <div className="stat-card">
                        <span className="stat-label">10-Yr Fuel Savings</span>
                        <span className="stat-val font-mono" style={{ color: '#ef4444' }}>
                          {formatLakhs(yearsData[9].fuelSaved)}
                        </span>
                      </div>
                      <div className="stat-card">
                        <span className="stat-label">Remaining Premium</span>
                        <span className="stat-val font-mono" style={{ color: '#ef4444' }}>
                          {formatLakhs(premiumAmount - yearsData[9].fuelSaved)}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px', fontStyle: 'italic' }}>
                      💡 Tip: Increasing your annual driving distance will speed up your return on investment.
                    </p>
                  </>
                )}
              </div>

              {/* Chart Visual Section */}
              <div className="glass-panel chart-card-container">
                <h4 className="card-section-title">
                  <TrendingUp size={16} style={{ color: 'var(--toyota-red)', marginRight: '8px' }} />
                  Cumulative Total Cost Comparison (Fuel + Initial Premium)
                </h4>
                <p className="card-section-desc">
                  Hybrid total cost includes the upfront premium ({formatLakhs(premiumAmount)}). When the green bar is shorter than the red/orange bar, Hybrid wins.
                </p>

                <div className="chart-wrapper">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={yearsData}
                      margin={{ top: 20, right: 25, left: -10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                      <XAxis
                        dataKey="yearLabel"
                        stroke="rgba(255,255,255,0.4)"
                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                      />
                      <YAxis
                        stroke="rgba(255,255,255,0.4)"
                        tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                        tickFormatter={(val) => `₹${val}L`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          color: '#fff'
                        }}
                        formatter={(value: any, name: any) => [
                          `₹${parseFloat(value).toFixed(2)} Lakhs`,
                          name
                        ]}
                      />
                      <Legend
                        wrapperStyle={{ paddingTop: '15px', fontSize: '0.85rem' }}
                        formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.7)' }}>{value}</span>}
                      />
                      <Bar
                        dataKey="Petrol Fuel Cost"
                        fill="#ea580c"
                        radius={[6, 6, 0, 0]}
                        name="Petrol Spend"
                      />
                      <Bar
                        dataKey="Hybrid Total Cost (incl. Premium)"
                        fill="#10b981"
                        radius={[6, 6, 0, 0]}
                        name="Hybrid Total Cost (Fuel + Upfront Premium)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Tabular Data View */}
              <div className="glass-panel table-card-container">
                <h4 className="card-section-title">
                  <Info size={16} style={{ color: 'var(--toyota-red)', marginRight: '8px' }} />
                  Financial Analysis Table
                </h4>
                <div className="table-wrapper">
                  <table className="savings-table">
                    <thead>
                      <tr>
                        <th style={{ width: '10%' }}>Year</th>
                        <th style={{ width: '15%' }}>Total KMs Driven</th>
                        <th style={{ width: '15%' }}>Petrol Spend (Fuel)</th>
                        <th style={{ width: '15%' }}>Hybrid Fuel Cost</th>
                        <th style={{ width: '15%' }}>Cumulative Saved</th>
                        <th style={{ width: '18%' }}>True Savings After Premium Cost</th>
                        <th style={{ width: '12%' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearsData.map((row) => {
                        const isBe = row.year === breakEvenYear;
                        const isNegative = row.netSavings < 0;
                        const isPaidOff = row.year === breakEvenYear;
                        return (
                          <tr
                            key={row.year}
                            className={isBe ? 'highlight-be-row' : ''}
                            style={{ fontWeight: isBe ? 'bold' : 'normal' }}
                          >
                            <td className="font-mono">
                              Year {row.year} {isBe && <span className="be-table-badge">Break-even</span>}
                            </td>
                            <td className="font-mono" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              {(kmPerYear * row.year).toLocaleString()} km
                            </td>
                            <td className="font-mono text-orange">{formatLakhs(row.petrolCost)}</td>
                            <td className="font-mono">{formatLakhs(row.hybridFuelCost)}</td>
                            <td className="font-mono text-green" style={{ fontWeight: 'bold' }}>
                              {formatLakhs(row.fuelSaved)}
                            </td>
                            <td className={`font-mono ${isNegative ? 'text-red' : 'text-green'}`} style={{ fontWeight: 'bold' }}>
                              {isNegative ? '▼ ' : '▲ '}{formatLakhs(row.netSavings)}
                            </td>
                            <td>
                              {isNegative ? (
                                <span className="calc-pill pill-recovering">Still Recovering</span>
                              ) : isPaidOff ? (
                                <span className="calc-pill pill-paid-off">Paid Off</span>
                              ) : (
                                <span className="calc-pill pill-saving">Saving {formatLakhs(row.netSavings)}</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                  Based on <strong>{kmPerYear.toLocaleString()} km/year</strong> · <strong>₹{petrolPrice}/L petrol</strong> · <strong>Petrol {petrolMillage} kmpl</strong> · <strong>Hybrid {hybridMillage} kmpl</strong>
                </div>
              </div>

            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
