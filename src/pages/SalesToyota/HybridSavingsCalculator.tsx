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

interface HybridModel {
  id: string;
  name: string;
  priceRange: string;
  mileageBadge: string;
  defaultHybridPrice: number; // Lakhs
  defaultPetrolPrice: number; // Lakhs
  hybridMileage: number;
  petrolMileage: number;
  hybridPremium: number; // Lakhs
  petrolComparisonCar: string;
  depreciationHybrid: number[];
  depreciationPetrol: number[];
  tag: string;
  tagType: 'popular' | 'luxury' | 'mileage';
  note?: string;
}

const HYBRID_MODELS: HybridModel[] = [
  {
    id: 'hycross',
    name: 'Innova Hycross Hybrid',
    priceRange: '₹26.76L to ₹31.84L',
    mileageBadge: '21.0 kmpl',
    defaultHybridPrice: 32, // Lakhs
    defaultPetrolPrice: 25, // Lakhs
    hybridMileage: 21,
    petrolMileage: 14,
    hybridPremium: 4.5, // Lakhs
    petrolComparisonCar: 'Innova Hycross GX Petrol',
    depreciationHybrid: [8, 7, 7, 6, 6, 5, 5, 5, 4, 4],
    depreciationPetrol: [12, 10, 9, 8, 7, 7, 6, 5, 5, 5],
    tag: 'Most Popular',
    tagType: 'popular',
    note: 'Best value hybrid — extremely low running costs, ideal for high-mileage family use'
  },
  {
    id: 'camry',
    name: 'Camry Hybrid',
    priceRange: '₹46.17L to ₹48.87L',
    mileageBadge: '19.0 kmpl',
    defaultHybridPrice: 52, // Lakhs
    defaultPetrolPrice: 44, // Lakhs
    hybridMileage: 19,
    petrolMileage: 12,
    hybridPremium: 8.0, // Lakhs
    petrolComparisonCar: 'Skoda Superb / Honda Accord petrol',
    depreciationHybrid: [10, 8, 7, 7, 6, 6, 5, 5, 4, 4],
    depreciationPetrol: [15, 12, 10, 9, 8, 7, 6, 6, 5, 5],
    tag: 'Luxury',
    tagType: 'luxury',
    note: 'Camry Hybrid holds value exceptionally well in Tamil Nadu — chauffeur and corporate segment demand is very high'
  },
  {
    id: 'vellfire',
    name: 'Vellfire Hybrid',
    priceRange: '₹1.20 Cr',
    mileageBadge: '16.0 kmpl',
    defaultHybridPrice: 135, // Lakhs (1.35 Cr)
    defaultPetrolPrice: 95, // Lakhs
    hybridMileage: 16,
    petrolMileage: 9,
    hybridPremium: 40.0, // Lakhs
    petrolComparisonCar: 'Mercedes V-Class / Kia Carnival petrol',
    depreciationHybrid: [12, 9, 8, 7, 6, 6, 5, 5, 4, 4],
    depreciationPetrol: [18, 14, 12, 10, 9, 8, 7, 6, 5, 5],
    tag: 'Luxury',
    tagType: 'luxury',
    note: 'Vellfire commands the highest resale premium in India\'s luxury MPV segment — VIP and corporate buyers actively seek it'
  },
  {
    id: 'hyryder',
    name: 'Urban Cruiser Hyryder Hybrid',
    priceRange: '₹19.69L to ₹25.99L',
    mileageBadge: '27.0 kmpl',
    defaultHybridPrice: 24, // Lakhs
    defaultPetrolPrice: 18, // Lakhs
    hybridMileage: 27,
    petrolMileage: 14,
    hybridPremium: 3.0, // Lakhs
    petrolComparisonCar: 'Hyryder Petrol / Creta Petrol',
    depreciationHybrid: [10, 9, 8, 7, 6, 6, 5, 5, 4, 4],
    depreciationPetrol: [14, 11, 10, 9, 8, 7, 6, 5, 5, 4],
    tag: 'Best Mileage',
    tagType: 'mileage',
    note: 'Hyryder hybrid is the most fuel-efficient SUV in its segment — fastest break-even point of all Toyota hybrids'
  }
];

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
  const [selectedCarId, setSelectedCarId] = useState<string>('hycross');
  const [comparisonType, setComparisonType] = useState<'petrol' | 'diesel'>('petrol');
  const [kmPerYear, setKmPerYear] = useState<number>(15000);
  const [petrolPrice, setPetrolPrice] = useState<number | "">(108);
  const [petrolMillage, setPetrolMillage] = useState<number | "">(14);
  const [dieselPrice, setDieselPrice] = useState<number | "">(94);
  const [dieselMillage, setDieselMillage] = useState<number | "">(12);
  const [hybridMillage, setHybridMillage] = useState<number | "">(21);
  const [pricePremiumLakhs, setPricePremiumLakhs] = useState<number | "">(4.5);
  const [hybridOnRoadPrice, setHybridOnRoadPrice] = useState<number | "">(32);
  const [petrolOnRoadPrice, setPetrolOnRoadPrice] = useState<number | "">(25);

  // Auto-fill inputs when car model changes
  useEffect(() => {
    const car = HYBRID_MODELS.find(m => m.id === selectedCarId);
    if (car) {
      setHybridOnRoadPrice(car.defaultHybridPrice);
      setPetrolOnRoadPrice(car.defaultPetrolPrice);
      setHybridMillage(car.hybridMileage);
      setPetrolMillage(car.petrolMileage);
      setPricePremiumLakhs(car.hybridPremium);
    }
  }, [selectedCarId]);

  // Update premium when either price is edited
  useEffect(() => {
    if (hybridOnRoadPrice !== "" && petrolOnRoadPrice !== "") {
      setPricePremiumLakhs(parseFloat((hybridOnRoadPrice - petrolOnRoadPrice).toFixed(2)));
    }
  }, [hybridOnRoadPrice, petrolOnRoadPrice]);

  // Reset handler
  const handleReset = () => {
    setComparisonType('petrol');
    setKmPerYear(15000);
    setPetrolPrice(108);
    setDieselPrice(94);
    setDieselMillage(12);
    // Find active car defaults
    const car = HYBRID_MODELS.find(m => m.id === selectedCarId);
    if (car) {
      setPetrolMillage(car.petrolMileage);
      setHybridMillage(car.hybridMileage);
      setPricePremiumLakhs(car.hybridPremium);
      setHybridOnRoadPrice(car.defaultHybridPrice);
      setPetrolOnRoadPrice(car.defaultPetrolPrice);
    }
  };

  // Format amount in Lakhs (e.g. ₹4.50L or -₹3.20L)
  const formatLakhs = (val: number) => {
    const absVal = Math.abs(val);
    const lakhVal = absVal / 100000;
    const prefix = val < 0 ? '-₹' : '₹';
    return `${prefix}${lakhVal.toFixed(2)}L`;
  };

  // Perform computations for Years 1 to 10
  const { yearsData, breakEvenYear, premiumAmount, comparisonLabel, activeCar } = useMemo(() => {
    const premium = (pricePremiumLakhs || 0) * 100000;
    const car = HYBRID_MODELS.find(m => m.id === selectedCarId) || HYBRID_MODELS[0];

    // Extract active comparison fuel parameters based on selected comparison type
    const compFuelPriceVal = comparisonType === 'petrol' ? (petrolPrice || 0) : (dieselPrice || 0);
    const compFuelMillageVal = comparisonType === 'petrol' ? (petrolMillage || 0) : (dieselMillage || 0);
    const compLabel = comparisonType === 'petrol' ? 'Petrol' : 'Diesel';

    const petrolPriceVal = petrolPrice || 0;
    const hybridMillageVal = hybridMillage || 0;

    // Annual fuel consumed in Litres - prevent division by zero
    const compAnnualLitres = compFuelMillageVal > 0 ? kmPerYear / compFuelMillageVal : 0;
    const hybridAnnualLitres = hybridMillageVal > 0 ? kmPerYear / hybridMillageVal : 0;

    // Annual cost in Rupees (Hybrid always uses petrolPriceVal)
    const compAnnualCost = compAnnualLitres * compFuelPriceVal;
    const hybridAnnualCost = hybridAnnualLitres * petrolPriceVal;

    let activeHybridResale = (hybridOnRoadPrice || 0) * 100000;
    let activePetrolResale = (petrolOnRoadPrice || 0) * 100000;
    let cumHybridPct = 100;
    let cumPetrolPct = 100;

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year, index) => {
      const compCost = compAnnualCost * year;
      const hybridFuelCost = hybridAnnualCost * year;
      const hybridTotalCost = hybridFuelCost + premium; // upfront premium is treated as initial capital expenditure
      const fuelSaved = compCost - hybridFuelCost;
      const netSavings = fuelSaved - premium;

      // Resale value depreciation schedules
      const depH = car.depreciationHybrid[index] || 0;
      const depP = car.depreciationPetrol[index] || 0;

      activeHybridResale = activeHybridResale * (1 - depH / 100);
      activePetrolResale = activePetrolResale * (1 - depP / 100);
      cumHybridPct = cumHybridPct * (1 - depH / 100);
      cumPetrolPct = cumPetrolPct * (1 - depP / 100);

      const resaleGap = activeHybridResale - activePetrolResale;
      const netResaleBenefit = resaleGap - premium;
      const grandTotalBenefit = fuelSaved + resaleGap - premium;

      return {
        year,
        yearLabel: `Yr ${year}`,
        compCost,
        hybridFuelCost,
        hybridTotalCost,
        fuelSaved,
        netSavings,
        // Resale and benefit values
        hybridResaleValue: activeHybridResale,
        petrolResaleValue: activePetrolResale,
        hybridRetainedPct: cumHybridPct,
        petrolRetainedPct: cumPetrolPct,
        resaleGap,
        netResaleBenefit,
        grandTotalBenefit,
        // Chart values in Lakhs (numbers for Recharts axis scaling)
        'Comparison Fuel Cost': parseFloat((compCost / 100000).toFixed(2)) || 0,
        'Hybrid Total Cost (incl. Premium)': parseFloat((hybridTotalCost / 100000).toFixed(2)) || 0
      };
    });

    // Find first year where fuel saved is greater than or equal to the upfront price premium
    const foundBreakEven = premium > 0 ? data.find(d => d.fuelSaved >= premium) : data[0];
    const beYear = foundBreakEven ? foundBreakEven.year : null;

    return {
      yearsData: data,
      breakEvenYear: beYear,
      premiumAmount: premium,
      comparisonLabel: compLabel,
      activeCar: car
    };
  }, [selectedCarId, comparisonType, kmPerYear, petrolPrice, petrolMillage, dieselPrice, dieselMillage, hybridMillage, pricePremiumLakhs, hybridOnRoadPrice, petrolOnRoadPrice]);

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

          {/* SELECT YOUR TOYOTA HYBRID */}
          <div className="car-selector-container" style={{ marginBottom: '24px' }}>
            <h4 className="card-section-title" style={{ marginBottom: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              SELECT YOUR TOYOTA HYBRID
            </h4>
            <div className="calculator-car-selector">
              {HYBRID_MODELS.map((car) => {
                const isActive = car.id === selectedCarId;
                return (
                  <div
                    key={car.id}
                    onClick={() => setSelectedCarId(car.id)}
                    className={`car-select-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="car-card-header">
                      <span className="car-card-name">🚗 {car.name}</span>
                      <span className={`car-card-tag tag-${car.tagType}`}>
                        {car.tag}
                      </span>
                    </div>
                    <div className="car-card-footer">
                      <span className="car-card-price">{car.priceRange}</span>
                      <span className="car-card-mileage">{car.mileageBadge}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TOP SECTION: Two columns side by side (Inputs on left | Break-even summary on right) */}
          <div className="calculator-top-row">

            {/* Left inputs panel */}
            <div className="calculator-inputs-panel glass-panel">
              <div className="panel-title-row">
                <Coins size={18} style={{ color: 'var(--toyota-red)' }} />
                <h3>Driving & Cost Inputs</h3>
              </div>

              {/* Compare Fuel Toggle selector */}
              <div className="input-group">
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Compare Hybrid with:</label>
                <div className="fuel-type-toggle-bar">
                  <button
                    type="button"
                    onClick={() => setComparisonType('petrol')}
                    className={`fuel-type-btn ${comparisonType === 'petrol' ? 'active' : ''}`}
                  >
                    Petrol Car
                  </button>
                  <button
                    type="button"
                    onClick={() => setComparisonType('diesel')}
                    className={`fuel-type-btn ${comparisonType === 'diesel' ? 'active' : ''}`}
                  >
                    Diesel Car
                  </button>
                </div>
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

              {comparisonType === 'petrol' ? (
                <>
                  {/* Input: Petrol Price */}
                  <div className="input-group">
                    <div className="input-label-row">
                      <label htmlFor="petrol-price-input">Petrol Price (per Litre)</label>
                      <span className="value-badge font-mono">₹ {petrolPrice || 0} / L</span>
                    </div>
                    <div className="input-number-wrapper">
                      <span className="input-prefix">₹</span>
                      <input
                        id="petrol-price-input"
                        type="number"
                        value={petrolPrice}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPetrolPrice(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (petrolPrice === "") setPetrolPrice(0);
                        }}
                        className="calculator-number-input font-mono"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Input: Mileage grid */}
                  <div className="mileage-grid">
                    <div className="input-group">
                      <div className="input-label-row">
                        <label htmlFor="petrol-mileage-input">Petrol Mileage</label>
                        <span className="value-badge font-mono">{petrolMillage || 0} kmpl</span>
                      </div>
                      <input
                        id="petrol-mileage-input"
                        type="number"
                        min="0"
                        max="100"
                        value={petrolMillage}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPetrolMillage(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (petrolMillage === "") setPetrolMillage(0);
                        }}
                        className="calculator-number-input font-mono"
                      />
                      <span className="mileage-tip">Default: 11 kmpl</span>
                    </div>

                    <div className="input-group">
                      <div className="input-label-row">
                        <label htmlFor="hybrid-mileage-input">Hybrid Mileage</label>
                        <span className="value-badge font-mono">{hybridMillage || 0} kmpl</span>
                      </div>
                      <input
                        id="hybrid-mileage-input"
                        type="number"
                        min="0"
                        max="100"
                        value={hybridMillage}
                        onChange={(e) => {
                          const val = e.target.value;
                          setHybridMillage(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (hybridMillage === "") setHybridMillage(0);
                        }}
                        className="calculator-number-input font-mono"
                      />
                      <span className="mileage-tip">Default: 21 kmpl</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Input: Diesel Price */}
                  <div className="input-group">
                    <div className="input-label-row">
                      <label htmlFor="diesel-price-input">Diesel Price (per Litre)</label>
                      <span className="value-badge font-mono">₹ {dieselPrice || 0} / L</span>
                    </div>
                    <div className="input-number-wrapper">
                      <span className="input-prefix">₹</span>
                      <input
                        id="diesel-price-input"
                        type="number"
                        value={dieselPrice}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDieselPrice(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (dieselPrice === "") setDieselPrice(0);
                        }}
                        className="calculator-number-input font-mono"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Input: Petrol Price (for Hybrid) */}
                  <div className="input-group">
                    <div className="input-label-row">
                      <label htmlFor="petrol-price-hybrid-input">Petrol Price (Hybrid - per Litre)</label>
                      <span className="value-badge font-mono">₹ {petrolPrice || 0} / L</span>
                    </div>
                    <div className="input-number-wrapper">
                      <span className="input-prefix">₹</span>
                      <input
                        id="petrol-price-hybrid-input"
                        type="number"
                        value={petrolPrice}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPetrolPrice(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (petrolPrice === "") setPetrolPrice(0);
                        }}
                        className="calculator-number-input font-mono"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Input: Mileage grid for Diesel */}
                  <div className="mileage-grid">
                    <div className="input-group">
                      <div className="input-label-row">
                        <label htmlFor="diesel-mileage-input">Diesel Mileage</label>
                        <span className="value-badge font-mono">{dieselMillage || 0} kmpl</span>
                      </div>
                      <input
                        id="diesel-mileage-input"
                        type="number"
                        min="0"
                        max="100"
                        value={dieselMillage}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDieselMillage(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (dieselMillage === "") setDieselMillage(0);
                        }}
                        className="calculator-number-input font-mono"
                      />
                      <span className="mileage-tip">Default: 12 kmpl</span>
                    </div>

                    <div className="input-group">
                      <div className="input-label-row">
                        <label htmlFor="hybrid-mileage-input">Hybrid Mileage</label>
                        <span className="value-badge font-mono">{hybridMillage || 0} kmpl</span>
                      </div>
                      <input
                        id="hybrid-mileage-input"
                        type="number"
                        min="0"
                        max="100"
                        value={hybridMillage}
                        onChange={(e) => {
                          const val = e.target.value;
                          setHybridMillage(val === "" ? "" : parseFloat(val));
                        }}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => {
                          if (hybridMillage === "") setHybridMillage(0);
                        }}
                        className="calculator-number-input font-mono"
                      />
                      <span className="mileage-tip">Default: 21 kmpl</span>
                    </div>
                  </div>
                </>
              )}

              {/* Inputs: On-Road price comparison */}
              <div className="mileage-grid">
                <div className="input-group">
                  <div className="input-label-row">
                    <label htmlFor="petrol-onroad-input">On-Road {comparisonLabel} Cost</label>
                    <span className="value-badge font-mono">{petrolOnRoadPrice || 0}L</span>
                  </div>
                  <div className="input-number-wrapper">
                    <input
                      id="petrol-onroad-input"
                      type="number"
                      step="0.1"
                      min="0"
                      value={petrolOnRoadPrice}
                      onChange={(e) => {
                        const val = e.target.value;
                        setPetrolOnRoadPrice(val === "" ? "" : parseFloat(val));
                      }}
                      onFocus={(e) => e.target.select()}
                      onBlur={() => {
                        if (petrolOnRoadPrice === "") setPetrolOnRoadPrice(0);
                      }}
                      className="calculator-number-input font-mono"
                      style={{ paddingLeft: '16px' }}
                    />
                    <span className="input-suffix">Lakhs</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-label-row">
                    <label htmlFor="hybrid-onroad-input">On-Road Hybrid Cost</label>
                    <span className="value-badge font-mono">{hybridOnRoadPrice || 0}L</span>
                  </div>
                  <div className="input-number-wrapper">
                    <input
                      id="hybrid-onroad-input"
                      type="number"
                      step="0.1"
                      min="0"
                      value={hybridOnRoadPrice}
                      onChange={(e) => {
                        const val = e.target.value;
                        setHybridOnRoadPrice(val === "" ? "" : parseFloat(val));
                      }}
                      onFocus={(e) => e.target.select()}
                      onBlur={() => {
                        if (hybridOnRoadPrice === "") setHybridOnRoadPrice(0);
                      }}
                      className="calculator-number-input font-mono"
                      style={{ paddingLeft: '16px' }}
                    />
                    <span className="input-suffix">Lakhs</span>
                  </div>
                </div>
              </div>

              {/* Input: Price Difference */}
              <div className="input-group">
                <div className="input-label-row">
                  <label htmlFor="price-premium-input">Hybrid Price Premium</label>
                  <span className="value-badge font-mono">{formatLakhs((pricePremiumLakhs || 0) * 100000)}</span>
                </div>
                <div className="input-number-wrapper">
                  <input
                    id="price-premium-input"
                    type="number"
                    step="0.1"
                    min="0"
                    value={pricePremiumLakhs}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPricePremiumLakhs(val === "" ? "" : parseFloat(val));
                    }}
                    onFocus={(e) => e.target.select()}
                    onBlur={() => {
                      if (pricePremiumLakhs === "") setPricePremiumLakhs(0);
                    }}
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

            {/* Right Break-even summary & Benefit cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', boxSizing: 'border-box' }}>
              
              {/* Card 1: Break-even summary banner */}
              <div
                className={`savings-hero-banner ${breakEvenYear ? 'break-even-green' : 'break-even-orange'}`}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', margin: 0 }}
              >
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
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px', fontStyle: 'italic', margin: 0 }}>
                      💡 Tip: Increasing your annual driving distance will speed up your return on investment.
                    </p>
                  </>
                )}
              </div>

              {/* Card 2: Grand Total True Benefit Card */}
              <div className="glass-panel benefit-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, boxSizing: 'border-box' }}>
                <div>
                  <h4 className="card-section-title" style={{ fontSize: '0.85rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                    <Coins size={16} style={{ color: 'var(--toyota-red)' }} />
                    10-Year Grand Total Benefit
                  </h4>
                  <div className="benefit-breakdown" style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem', marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>10-Yr Fuel Savings:</span>
                      <span className="font-mono text-green" style={{ fontWeight: 'bold' }}>+{formatLakhs(yearsData[9].fuelSaved)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Resale Value Gap (H vs P):</span>
                      <span className="font-mono text-green" style={{ fontWeight: 'bold' }}>+{formatLakhs(yearsData[9].resaleGap)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Upfront Hybrid Premium:</span>
                      <span className="font-mono text-red" style={{ fontWeight: 'bold' }}>-{formatLakhs(premiumAmount)}</span>
                    </div>
                    <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '6px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', fontWeight: 'bold' }}>
                      <span>Net True Benefit:</span>
                      <span className={`font-mono ${yearsData[9].grandTotalBenefit >= 0 ? 'text-green' : 'text-red'}`}>
                        {formatLakhs(yearsData[9].grandTotalBenefit)}
                      </span>
                    </div>
                  </div>
                </div>

                {activeCar.note && (
                  <div className="benefit-note" style={{ marginTop: '12px', padding: '8px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--toyota-red)', fontSize: '0.72rem', lineHeight: '1.35', color: 'var(--text-secondary)', boxSizing: 'border-box' }}>
                    💡 <strong>OBV Market Insight:</strong> {activeCar.note}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* BOTTOM SECTION: Bar chart — full width */}
          <div className="glass-panel chart-card-container" style={{ marginTop: '24px' }}>
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
                    dataKey="Comparison Fuel Cost"
                    fill="#ea580c"
                    radius={[6, 6, 0, 0]}
                    name={`${comparisonLabel} Spend`}
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

          {/* MIDDLE SECTION: Resale Value Comparison Table — full width */}
          <div className="glass-panel table-card-container" style={{ marginTop: '24px' }}>
            <h4 className="card-section-title">
              <TrendingUp size={16} style={{ color: 'var(--toyota-red)', marginRight: '8px' }} />
              Estimated Resale Value Retained (OBV Valuation Schedules)
            </h4>
            <p className="card-section-desc">
              Toyota Hybrids historically depreciate slower, retaining more value than competitors. Below is the projected residual value based on Tamil Nadu resale market data.
            </p>
            <div className="table-wrapper">
              <table className="savings-table">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Year</th>
                    <th style={{ width: '20%' }}>Hybrid Resale Value (Retained %)</th>
                    <th style={{ width: '20%' }}>{comparisonLabel} Resale Value (Retained %)</th>
                    <th style={{ width: '20%' }}>Resale Value Gap (H vs P)</th>
                    <th style={{ width: '20%' }}>Net Resale Benefit (Gap vs Premium)</th>
                  </tr>
                </thead>
                <tbody>
                  {yearsData.map((row) => {
                    const isBenefitNegative = row.netResaleBenefit < 0;
                    return (
                      <tr key={row.year}>
                        <td className="font-mono">Year {row.year}</td>
                        <td className="font-mono text-green">
                          {formatLakhs(row.hybridResaleValue)} <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>({row.hybridRetainedPct.toFixed(1)}%)</span>
                        </td>
                        <td className="font-mono text-orange">
                          {formatLakhs(row.petrolResaleValue)} <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>({row.petrolRetainedPct.toFixed(1)}%)</span>
                        </td>
                        <td className="font-mono text-green" style={{ fontWeight: 'bold' }}>
                          {formatLakhs(row.resaleGap)}
                        </td>
                        <td className={`font-mono ${isBenefitNegative ? 'text-red' : 'text-green'}`} style={{ fontWeight: 'bold' }}>
                          {isBenefitNegative ? '▼ ' : '▲ '}{formatLakhs(row.netResaleBenefit)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* LAST SECTION: Financial Analysis Table — full width (spanning both columns) */}
          <div className="glass-panel table-card-container" style={{ marginTop: '24px' }}>
            <h4 className="card-section-title">
              <Info size={16} style={{ color: 'var(--toyota-red)', marginRight: '8px' }} />
              Financial Analysis Table
            </h4>
            <div className="table-wrapper">
              <table className="savings-table">
                <thead>
                  <tr>
                    <th style={{ width: '14.28%' }}>Year</th>
                    <th style={{ width: '14.28%' }}>Total KMs</th>
                    <th style={{ width: '14.28%' }}>{comparisonLabel} Spend</th>
                    <th style={{ width: '14.28%' }}>Hybrid Fuel Cost</th>
                    <th style={{ width: '14.28%' }}>Cumulative Saved</th>
                    <th style={{ width: '14.28%' }}>True Savings After Premium</th>
                    <th style={{ width: '14.28%' }}>Status</th>
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
                        <td className="font-mono text-orange">{formatLakhs(row.compCost)}</td>
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
              Based on <strong>{kmPerYear.toLocaleString()} km/year</strong> ·{' '}
              {comparisonType === 'petrol' ? (
                <>
                  <strong>₹{petrolPrice || 0}/L petrol</strong> · <strong>Petrol {petrolMillage || 0} kmpl</strong>
                </>
              ) : (
                <>
                  <strong>₹{dieselPrice || 0}/L diesel</strong> · <strong>₹{petrolPrice || 0}/L petrol (Hybrid)</strong> · <strong>Diesel {dieselMillage || 0} kmpl</strong>
                </>
              )}{' '}
              · <strong>Hybrid {hybridMillage || 0} kmpl</strong>
            </div>
            <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4' }}>
              ⚠️ <strong>Disclaimer:</strong> Depreciation rates based on Orange Book Value (OBV) market data and Tamil Nadu regional used car trends. Actual resale values may vary based on condition, colour, service history and market demand at time of sale. Petrol price used: ₹{petrolPrice || 0}/L
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
