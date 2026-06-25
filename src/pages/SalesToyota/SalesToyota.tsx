import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Award, 
  Search, 
  Users, 
  Gauge, 
  Zap, 
  ShieldCheck,
  Fuel,
  GitCompare,
  X,
  Info,
  Layers,
  Compass,
  Cpu,
  Shield,
  Palette,
  Briefcase,
  CheckSquare,
  Settings
} from 'lucide-react';
import { TOYOTA_VEHICLES } from './toyotaData';
import { TOYOTA_VEHICLE_DETAILS } from './toyotaDetailsData';
import './SalesToyota.css';

export default function SalesToyota() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [activeShowroomVehicleId, setActiveShowroomVehicleId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');

  const toggleCompare = (vehicleId: string) => {
    setSelectedCompareIds(prev => {
      if (prev.includes(vehicleId)) {
        return prev.filter(id => id !== vehicleId);
      }
      if (prev.length >= 2) {
        return [prev[1], vehicleId];
      }
      return [...prev, vehicleId];
    });
  };

  const clearCompare = () => {
    setSelectedCompareIds([]);
  };

  const compareVehicles = TOYOTA_VEHICLES.filter(v => selectedCompareIds.includes(v.id));

  const getAssetUrl = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const categories = ['All', 'Luxury', 'SUVs & Pickups', 'Hybrid/Electric', 'MPVs'];

  const filteredVehicles = TOYOTA_VEHICLES.filter(vehicle => {
    const matchesCategory = selectedCategory === 'All' || vehicle.categories.includes(selectedCategory);
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.specs.engine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.specs.fuelType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeClass = (cat: string) => {
    switch(cat.toLowerCase()) {
      case 'luxury': return 'card-badge-luxury';
      case 'hybrid/electric': return 'card-badge-hybrid';
      case 'suvs & pickups': return 'card-badge-suv';
      case 'mpvs': return 'card-badge-mpv';
      default: return '';
    }
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <div className="sales-page-container">
      {/* Hero Header */}
      <div className="sales-hero">
        <div className="badge-salesperson">
          <Award size={14} style={{ color: 'var(--toyota-red)' }} />
          Toyota Premium Consultant
        </div>
        <h1 className="sales-title text-gradient">Toyota Premium Showcase</h1>
        <p className="sales-subtitle">
          Explore our exclusive lineup of elite luxury SUVs, high-performance utility trucks, and leading self-charging hybrid vehicles.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        {/* Category Selector */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="glass-panel" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '8px 16px', 
          width: '100%', 
          maxWidth: '450px',
          border: '1px solid var(--border-color)',
          gap: '12px'
        }}>
          <Search size={18} style={{ color: 'var(--text-secondary)' }} />
          <input
            type="text"
            placeholder="Search by model, engine, spec..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              width: '100%',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-main)'
            }}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Vehicle Grid Display */}
      <AnimatePresence mode="popLayout">
        {filteredVehicles.length > 0 ? (
          <motion.div 
            className="vehicles-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                variants={itemVariants}
                className="glass-panel vehicle-card"
              >
                {/* Vehicle Showcase Photo */}
                <div className="card-image-wrapper">
                  <img 
                    src={getAssetUrl(vehicle.image)} 
                    alt={vehicle.name} 
                    className="card-image"
                    loading="lazy"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCompare(vehicle.id);
                    }}
                    className={`btn-compare-toggle ${selectedCompareIds.includes(vehicle.id) ? 'active' : ''}`}
                    title="Compare vehicle"
                  >
                    <GitCompare size={16} />
                  </button>
                  <div className="card-badges">
                    {vehicle.categories.map(cat => (
                      <span key={cat} className={`card-badge ${getBadgeClass(cat)}`}>
                        {cat === 'Hybrid/Electric' ? 'Hybrid' : cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="card-body">
                  <div className="card-title-row">
                    <h3 className="card-title">{vehicle.name}</h3>
                  </div>
                  <p className="card-tagline">"{vehicle.tagline}"</p>

                  {/* Specifications Grid */}
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">
                        <Gauge size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        Engine / Power
                      </span>
                      <span className="spec-value" title={vehicle.specs.engine}>
                        {vehicle.specs.engine.split(' (')[0]}
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">
                        <Zap size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        Transmission
                      </span>
                      <span className="spec-value" title={vehicle.specs.transmission}>
                        {vehicle.specs.transmission.split(' [')[0]}
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">
                        <Users size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        Seating
                      </span>
                      <span className="spec-value">{vehicle.specs.seating}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">
                        <Fuel size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        Fuel Tech
                      </span>
                      <span className="spec-value">{vehicle.specs.fuelType}</span>
                    </div>
                  </div>

                  {/* Premium Highlights */}
                  <div>
                    <h4 className="highlights-title">Premium Features</h4>
                    <ul className="highlights-list">
                      {vehicle.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Brochure & Showroom Split Action Buttons */}
                  <div className="card-actions" style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveShowroomVehicleId(vehicle.id);
                        setActiveTab('overview');
                      }}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '12px', fontSize: '0.9rem' }}
                    >
                      Explore Showroom
                    </button>
                    <a 
                      href={getAssetUrl(vehicle.brochureUrl)}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary"
                      style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      title="Download Brochure PDF"
                    >
                      <FileText size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}
          >
            <ShieldCheck size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
            <h3>No premium vehicles found matching "{searchQuery}"</h3>
            <p style={{ marginTop: '8px' }}>Try searching for a different model or clearing your active filters.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        {selectedCompareIds.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 100, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 100, x: '-50%' }}
            className="compare-bar glass-panel"
          >
            <div className="compare-bar-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <GitCompare size={20} style={{ color: 'var(--toyota-red)' }} />
                <span>
                  <strong>{selectedCompareIds.length}</strong> {selectedCompareIds.length === 1 ? 'vehicle' : 'vehicles'} selected to compare
                  {selectedCompareIds.length === 1 && <span style={{ color: 'var(--text-secondary)', marginLeft: '8px', fontSize: '0.85rem' }}>(Select 1 more)</span>}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button 
                  onClick={clearCompare}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textDecoration: 'underline'
                  }}
                >
                  Clear
                </button>
                <button 
                  onClick={() => setIsCompareOpen(true)}
                  disabled={selectedCompareIds.length < 2}
                  className="btn btn-primary"
                  style={{
                    padding: '8px 20px',
                    fontSize: '0.9rem',
                    opacity: selectedCompareIds.length < 2 ? 0.5 : 1,
                    cursor: selectedCompareIds.length < 2 ? 'not-allowed' : 'pointer',
                    boxShadow: selectedCompareIds.length < 2 ? 'none' : undefined
                  }}
                >
                  Compare Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      <AnimatePresence>
        {isCompareOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="compare-modal-overlay"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="compare-modal-content glass-panel"
            >
              <div className="compare-modal-header">
                <h2>Vehicle Comparison</h2>
                <button onClick={() => setIsCompareOpen(false)} className="btn-close-modal">
                  <X size={20} />
                </button>
              </div>

              <div className="compare-table-wrapper">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th style={{ width: '20%', border: 'none' }}>Specifications</th>
                      {compareVehicles.map(vehicle => (
                        <th key={vehicle.id} style={{ width: '40%', textAlign: 'center', border: 'none' }}>
                          <img 
                            src={getAssetUrl(vehicle.image)} 
                            alt={vehicle.name} 
                            style={{ width: '100%', maxWidth: '240px', borderRadius: '8px', marginBottom: '12px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                          />
                          <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{vehicle.name}</div>
                          <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontWeight: 400, marginTop: '4px' }}>
                            "{vehicle.tagline}"
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="spec-label-col">Engine / Displacement</td>
                      {compareVehicles.map(v => <td key={v.id}><strong>{v.specs.engine}</strong></td>)}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Max Power</td>
                      {compareVehicles.map(v => <td key={v.id}>{v.specs.power}</td>)}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Max Torque</td>
                      {compareVehicles.map(v => <td key={v.id}>{v.specs.torque}</td>)}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Transmission</td>
                      {compareVehicles.map(v => <td key={v.id}>{v.specs.transmission}</td>)}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Seating Capacity</td>
                      {compareVehicles.map(v => <td key={v.id}>{v.specs.seating}</td>)}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Fuel Technology</td>
                      {compareVehicles.map(v => <td key={v.id}>{v.specs.fuelType}</td>)}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Key Highlights</td>
                      {compareVehicles.map(v => (
                        <td key={v.id}>
                          <ul className="highlights-list" style={{ marginBottom: 0 }}>
                            {v.highlights.map((h, i) => <li key={i} style={{ fontSize: '0.85rem', marginBottom: '6px' }}>{h}</li>)}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="spec-label-col">Brochure</td>
                      {compareVehicles.map(v => (
                        <td key={v.id} style={{ textAlign: 'center' }}>
                          <a 
                            href={getAssetUrl(v.brochureUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-brochure"
                            style={{ display: 'inline-flex', width: 'auto', padding: '10px 24px', fontSize: '0.9rem' }}
                          >
                            <FileText size={16} />
                            View e-Brochure (PDF)
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Showroom Details Modal */}
      <AnimatePresence>
        {activeShowroomVehicleId && (
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
              className="showroom-modal-content glass-panel"
            >
              {/* Header */}
              {(() => {
                const vehicle = TOYOTA_VEHICLES.find(v => v.id === activeShowroomVehicleId);
                const details = TOYOTA_VEHICLE_DETAILS[activeShowroomVehicleId];
                if (!vehicle || !details) return null;

                const tabNames: Record<string, { label: string; icon: React.ReactNode }> = {
                  overview: { label: "Overview", icon: <Info size={16} /> },
                  variants: { label: "Variants", icon: <Layers size={16} /> },
                  design: { label: "Design (Ext/Int)", icon: <Compass size={16} /> },
                  comfort: { label: "Comfort & Connected", icon: <Settings size={16} /> },
                  engine: { label: "Engine & Power", icon: <Cpu size={16} /> },
                  specs: { label: "Dimensions & Chassis", icon: <Gauge size={16} /> },
                  safety: { label: "Safety & ADAS", icon: <Shield size={16} /> },
                  acc: { label: "Colors & Add-ons", icon: <Palette size={16} /> },
                  owner: { label: "Ownership & Comparison", icon: <Briefcase size={16} /> },
                  quick: { label: "Quick Reference", icon: <CheckSquare size={16} /> }
                };

                return (
                  <>
                    <div className="showroom-modal-header">
                      <div className="header-title-area">
                        <h2>{vehicle.name} Showroom</h2>
                        <p>{details.hero.tagline}</p>
                      </div>
                      <button onClick={() => setActiveShowroomVehicleId(null)} className="btn-close-modal">
                        <X size={22} />
                      </button>
                    </div>

                    <div className="showroom-modal-body">
                      {/* Left Sidebar navigation */}
                      <div className="showroom-tabs-bar">
                        {Object.entries(tabNames).map(([key, tab]) => (
                          <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`showroom-tab-btn ${activeTab === key ? 'active' : ''}`}
                          >
                            {tab.icon}
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Right Content Panel */}
                      <div className="showroom-content-panel">
                        
                        {/* Tab 1: Overview & Highlights */}
                        {activeTab === 'overview' && (
                          <div className="showroom-section">
                            <h3 className="showroom-section-title">Overview</h3>
                            <p className="showroom-section-desc">{details.hero.introduction}</p>
                            
                            <h3 className="showroom-section-title">Key Highlights</h3>
                            <ul className="highlights-list" style={{ marginTop: '12px', marginBottom: '24px' }}>
                              {details.hero.highlights.map((h, i) => <li key={i}>{h}</li>)}
                            </ul>

                            <h3 className="showroom-section-title">Market Positioning & Platform</h3>
                            <table className="showroom-spec-table">
                              <tbody>
                                <tr>
                                  <td className="label-col">Vehicle Category</td>
                                  <td className="value-col">{details.overview.category}</td>
                                </tr>
                                <tr>
                                  <td className="label-col">Positioning</td>
                                  <td className="value-col">{details.overview.positioning}</td>
                                </tr>
                                <tr>
                                  <td className="label-col">Platform</td>
                                  <td className="value-col">{details.overview.platform}</td>
                                </tr>
                                <tr>
                                  <td className="label-col">Target Customers</td>
                                  <td className="value-col">{details.overview.targetCustomers}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Tab 2: Variants */}
                        {activeTab === 'variants' && (
                          <div className="showroom-section">
                            <h3 className="showroom-section-title">Available Trim Variants</h3>
                            <p className="showroom-section-desc">Choose from our list of premium variants configured with absolute comfort and styling options.</p>
                            
                            <div className="showroom-feature-grid">
                              {details.variants.map((v, i) => (
                                <div key={i} className="showroom-feature-card">
                                  <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--toyota-red)' }}>{v.name}</h4>
                                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                    {v.fuelType} | {v.transmission} | {v.seating}
                                  </div>
                                  <ul className="highlights-list" style={{ marginBottom: 0 }}>
                                    {v.features.map((f, idx) => (
                                      <li key={idx} style={{ fontSize: '0.8rem', marginBottom: '4px' }}>{f}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tab 3: Design (Ext/Int) */}
                        {activeTab === 'design' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Exterior Design</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Front Profile</td>
                                    <td className="value-col">{details.exterior.front}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Side Profile & Alloys</td>
                                    <td className="value-col">{details.exterior.side} | {details.exterior.alloys}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Rear Profile</td>
                                    <td className="value-col">{details.exterior.rear}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Lighting System</td>
                                    <td className="value-col">{details.exterior.lighting}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Interior Design & Cabin</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Dashboard & Control Panel</td>
                                    <td className="value-col">{details.interior.dashboard}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Instrument Cluster & Multi-Info Display</td>
                                    <td className="value-col">{details.interior.instrumentCluster}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Steering Assembly</td>
                                    <td className="value-col">{details.interior.steering}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Premium Materials & Trim</td>
                                    <td className="value-col">{details.interior.materials}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Seats & Comfort Adjustments</td>
                                    <td className="value-col">{details.interior.seatingDesc}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Cabin Space & Utility Storage</td>
                                    <td className="value-col">{details.interior.cabinSpace} | {details.interior.storage}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Tab 4: Comfort & Connected */}
                        {activeTab === 'comfort' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Comfort & Convenience Features</h3>
                              <div className="showroom-feature-grid" style={{ marginTop: '16px' }}>
                                <div className="showroom-feature-card">
                                  <h4>Climate Control</h4>
                                  <p>{details.comfort.climate}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Sunroof</h4>
                                  <p>{details.comfort.sunroof}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Ventilated Seats</h4>
                                  <p>{details.comfort.ventilation}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Wireless Charger</h4>
                                  <p>{details.comfort.wirelessCharge}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Powered Seats</h4>
                                  <p>{details.comfort.poweredSeats}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Smart Entry & Start</h4>
                                  <p>{details.comfort.smartEntry} | {details.comfort.pushStart}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Rear Passenger Comfort</h4>
                                  <p>{details.comfort.rearComfort}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Infotainment & Connectivity</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Touch Screen Display</td>
                                    <td className="value-col">{details.infotainment.screenSize}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Audio Sound System</td>
                                    <td className="value-col">{details.infotainment.audio}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Smartphone Integration</td>
                                    <td className="value-col">Wireless Apple CarPlay & Android Auto</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Connected Car Telematics</td>
                                    <td className="value-col">{details.infotainment.connectedCar}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Voice Assistants & Navigation</td>
                                    <td className="value-col">{details.infotainment.voiceCommand} | {details.infotainment.navigation}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Tab 5: Engine & Technology */}
                        {activeTab === 'engine' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Engine & Performance Specifications</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Engine Configuration</td>
                                    <td className="value-col">{details.performance.engineType}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Engine Displacement</td>
                                    <td className="value-col">{details.performance.displacement}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Maximum Power Output</td>
                                    <td className="value-col">{details.performance.power}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Maximum Torque Output</td>
                                    <td className="value-col">{details.performance.torque}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Transmission Type</td>
                                    <td className="value-col">{details.performance.transmission}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Drivetrain System</td>
                                    <td className="value-col">{details.performance.drivetrain}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Fuel Efficiency</td>
                                    <td className="value-col">{details.performance.efficiency}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Advanced Propulsion Technology</h3>
                              <p className="showroom-section-desc">{details.performance.techExplanation}</p>
                            </div>
                          </div>
                        )}

                        {/* Tab 6: Dimensions & Chassis */}
                        {activeTab === 'specs' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Dimensions & Capacities</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Length / Width / Height</td>
                                    <td className="value-col">{details.dimensions.length} / {details.dimensions.width} / {details.dimensions.height}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Wheelbase</td>
                                    <td className="value-col">{details.dimensions.wheelbase}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Ground Clearance</td>
                                    <td className="value-col">{details.dimensions.clearance}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Fuel Tank Capacity</td>
                                    <td className="value-col">{details.dimensions.fuelCapacity}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Kerb Weight</td>
                                    <td className="value-col">{details.dimensions.weight}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Suspension & Chassis Setup</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Front Suspension</td>
                                    <td className="value-col">{details.chassis.frontSusp}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Rear Suspension</td>
                                    <td className="value-col">{details.chassis.rearSusp}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Chassis Type</td>
                                    <td className="value-col">{details.chassis.chassisType}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Ride Comfort Quality</td>
                                    <td className="value-col">{details.chassis.rideQuality}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Handling & Steering Dynamics</td>
                                    <td className="value-col">{details.chassis.handling}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Tab 7: Safety & ADAS */}
                        {activeTab === 'safety' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Passive & Active Safety Features</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Airbags System</td>
                                    <td className="value-col">{details.safety.airbags}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">ABS & Braking Systems</td>
                                    <td className="value-col">{details.safety.abs}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Stability Control (VSC)</td>
                                    <td className="value-col">{details.safety.vsc}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Hill Start / Assist</td>
                                    <td className="value-col">{details.safety.hillAssist}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Other Key Safety Features</td>
                                    <td className="value-col">
                                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        {details.safety.otherFeatures.map((f, i) => (
                                          <span key={i} className="card-badge" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)' }}>
                                            {f}
                                          </span>
                                        ))}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {details.safety.adas.hasAdas && (
                              <div>
                                <h3 className="showroom-section-title">Toyota Safety Sense (ADAS Level 2)</h3>
                                <div className="showroom-feature-grid" style={{ marginTop: '16px' }}>
                                  <div className="showroom-feature-card">
                                    <h4>Adaptive Cruise Control</h4>
                                    <p>{details.safety.adas.acc}</p>
                                  </div>
                                  <div className="showroom-feature-card">
                                    <h4>Lane Trace & Assist</h4>
                                    <p>{details.safety.adas.lka}</p>
                                  </div>
                                  <div className="showroom-feature-card">
                                    <h4>Pre-Collision System</h4>
                                    <p>{details.safety.adas.preCollision}</p>
                                  </div>
                                  <div className="showroom-feature-card">
                                    <h4>Blind Spot Monitor</h4>
                                    <p>{details.safety.adas.bsm}</p>
                                  </div>
                                  <div className="showroom-feature-card">
                                    <h4>Rear Cross Traffic Alert</h4>
                                    <p>{details.safety.adas.rcta}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Tab 8: Colors & Accessories */}
                        {activeTab === 'acc' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Available Exterior Colours</h3>
                              <div className="colors-swatch-list">
                                {details.colors.map((c, i) => (
                                  <div key={i} className="color-swatch-item">
                                    <div className="showroom-color-circle" style={{ background: c.hex }} />
                                    <span className="color-swatch-name">{c.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Toyota Genuine Accessories</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Exterior Styling Accents</td>
                                    <td className="value-col">
                                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        {details.accessories.exterior.map((a, i) => <li key={i}>{a}</li>)}
                                      </ul>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Interior Garnish & Utility</td>
                                    <td className="value-col">
                                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        {details.accessories.interior.map((a, i) => <li key={i}>{a}</li>)}
                                      </ul>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Body Protection Kits</td>
                                    <td className="value-col">
                                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        {details.accessories.protection.map((a, i) => <li key={i}>{a}</li>)}
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Tab 9: Ownership & Comparison */}
                        {activeTab === 'owner' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Ownership & Warranty Information</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Standard Warranty</td>
                                    <td className="value-col">{details.ownership.warranty}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Service Interval</td>
                                    <td className="value-col">{details.ownership.intervals}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Service Schedule</td>
                                    <td className="value-col">{details.ownership.schedule}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Additional Benefits</td>
                                    <td className="value-col">
                                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        {details.ownership.benefits.map((b, i) => <li key={i}>{b}</li>)}
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Market Alternatives & Competitors</h3>
                              <table className="showroom-spec-table">
                                <thead>
                                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                                    <th style={{ padding: '14px 20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Feature</th>
                                    <th style={{ padding: '14px 20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>This {vehicle.name}</th>
                                    <th style={{ padding: '14px 20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Internal Alt ({details.comparison.internalAlternative.split(' (')[0]})</th>
                                    <th style={{ padding: '14px 20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Market Competitor ({details.comparison.competitor.split(' / ')[0]})</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {details.comparison.comparisonPoints.map((cp, idx) => (
                                    <tr key={idx}>
                                      <td className="label-col" style={{ paddingLeft: '20px !important' }}>{cp.feature}</td>
                                      <td className="value-col" style={{ color: '#10b981' }}>{cp.thisCar}</td>
                                      <td>{cp.altCar}</td>
                                      <td>{cp.compCar}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Tab 10: Quick Reference */}
                        {activeTab === 'quick' && (
                          <div className="showroom-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                            <div>
                              <h3 className="showroom-section-title">Quick Specifications Cheat Sheet</h3>
                              <table className="showroom-spec-table">
                                <tbody>
                                  <tr>
                                    <td className="label-col">Engine Size</td>
                                    <td className="value-col">{vehicle.specs.engine}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Power / Torque</td>
                                    <td className="value-col">{vehicle.specs.power} / {vehicle.specs.torque}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Transmission</td>
                                    <td className="value-col">{vehicle.specs.transmission}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Fuel Technology</td>
                                    <td className="value-col">{vehicle.specs.fuelType}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Dimensions (L/W/H)</td>
                                    <td className="value-col">{details.dimensions.length} x {details.dimensions.width} x {details.dimensions.height}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Seating Capacity</td>
                                    <td className="value-col">{details.variants[0].seating}</td>
                                  </tr>
                                  <tr>
                                    <td className="label-col">Key Safety</td>
                                    <td className="value-col">{details.safety.airbags} | ABS with EBD | Vehicle Stability Control</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <h3 className="showroom-section-title">Suggested Showroom Media Assets</h3>
                              <div className="showroom-feature-grid" style={{ marginTop: '16px' }}>
                                <div className="showroom-feature-card">
                                  <h4>Exterior Shots</h4>
                                  <p>{details.hero.imageSuggestion}</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Interior Shots</h4>
                                  <p>Panoramic wide-angle view from the center rear seat looking forward showing dashboard layout and dashboard screens.</p>
                                </div>
                                <div className="showroom-feature-card">
                                  <h4>Engine & Technology</h4>
                                  <p>High-resolution close-up of the front engine compartment layout or the hybrid drive inverter module.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
