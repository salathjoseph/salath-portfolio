import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Expenses from './pages/Expenses/Expenses';
import EmiCalculator from './pages/Emi/EmiCalculator';
import PromptGenerator from './pages/Prompt/PromptGenerator';
import AdvancedImagePrompt from './pages/Prompt/AdvancedImagePrompt';
import Portfolio from './pages/Portfolio/Portfolio';
import Finance from './pages/Finance/Finance';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/emi-calculator" element={<EmiCalculator />} />
            <Route path="/prompt-generator" element={<PromptGenerator />} />
            <Route path="/advanced-image-prompt" element={<AdvancedImagePrompt />} />
            <Route path="/finance" element={<Finance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
