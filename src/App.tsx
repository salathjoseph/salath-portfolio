import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Expenses from './pages/Expenses';
import EmiCalculator from './pages/EmiCalculator';

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
