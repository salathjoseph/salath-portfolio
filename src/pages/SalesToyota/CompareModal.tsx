import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, FileText } from 'lucide-react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  compareVehicles: any[];
  getAssetUrl: (path: string) => string;
}

export default function CompareModal({
  isOpen,
  onClose,
  compareVehicles,
  getAssetUrl
}: CompareModalProps) {
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

  if (!isOpen) return null;

  return (
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
          <button onClick={onClose} className="btn-close-modal">
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
                      {v.highlights.map((h: string, i: number) => <li key={i} style={{ fontSize: '0.85rem', marginBottom: '6px' }}>{h}</li>)}
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
  );
}
