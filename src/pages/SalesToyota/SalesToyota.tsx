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
  X
} from 'lucide-react';
import { TOYOTA_VEHICLES } from './toyotaData';
import './SalesToyota.css';

export default function SalesToyota() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

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

                  {/* Brochure Action Button */}
                  <div className="card-actions">
                    <a 
                      href={getAssetUrl(vehicle.brochureUrl)}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-brochure"
                    >
                      <FileText size={18} />
                      View e-Brochure (PDF)
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
    </div>
  );
}
