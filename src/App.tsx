import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Expenses from './pages/Expenses/Expenses';
import EmiCalculator from './pages/Emi/EmiCalculator';
import PromptGenerator from './pages/Prompt/PromptGenerator';
import AdvancedImagePrompt from './pages/Prompt/AdvancedImagePrompt';
import Portfolio from './pages/Portfolio/Portfolio';
import Finance from './pages/Finance/Finance';
import Tasks from './pages/Tasks/Tasks';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/emi-calculator" element={<EmiCalculator />} />
            <Route path="/prompt-generator" element={<PromptGenerator />} />
            <Route path="/advanced-image-prompt" element={<AdvancedImagePrompt />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
