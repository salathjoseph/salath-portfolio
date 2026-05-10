import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Calculator, Bot, Activity, BrainCircuit } from 'lucide-react';
import SipCalculator from './SipCalculator';
import FinancialChatbot from './FinancialChatbot';
import MarketDashboard from './MarketDashboard';
import PredictionEngine from './PredictionEngine';


type FinanceTab = 'SIP Calculator' | 'AI Chatbot' | 'Market Dashboard' | 'Prediction Engine';

export default function Finance() {
    const [activeTab, setActiveTab] = useState<FinanceTab>('SIP Calculator');

    const tabs: { id: FinanceTab; icon: any; label: string }[] = [
        { id: 'SIP Calculator', icon: <Calculator size={18} />, label: 'SIP Calculator' },
        { id: 'AI Chatbot', icon: <Bot size={18} />, label: 'AI Chatbot' },
        { id: 'Market Dashboard', icon: <Activity size={18} />, label: 'Live Market' },
        { id: 'Prediction Engine', icon: <BrainCircuit size={18} />, label: 'AI Prediction' },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'SIP Calculator': return <SipCalculator />;
            case 'AI Chatbot': return <FinancialChatbot />;
            case 'Market Dashboard': return <MarketDashboard />;
            case 'Prediction Engine': return <PredictionEngine />;
            default: return null;
        }
    };

    return (
        <div className="page-wrapper app-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                        <TrendingUp size={40} className="text-gradient" style={{ color: 'var(--accent-blue)' }} />
                        <span className="text-gradient">Financial Intelligence</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        An AI-driven financial platform delivering investment insights, stock market analytics, and intelligent financial guidance.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area */}
                <div style={{ minHeight: '500px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {renderTabContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </motion.div>
        </div>
    );
}
