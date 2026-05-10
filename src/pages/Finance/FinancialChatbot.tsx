import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export default function FinancialChatbot() {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am your AI Financial Intelligence Assistant. How can I help you plan your investments or analyze the stock market today?"
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { id: crypto.randomUUID(), sender: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Mock AI response logic
    setTimeout(() => {
      let aiResponse = "I'm sorry, I don't have real-time access to that data in this demo. Try asking me about 'NIFTY 50', 'SIP vs Stocks', or 'Retirement'.";
      
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes('nifty') || lowerInput.includes('sensex')) {
        aiResponse = "NIFTY 50 represents the top 50 companies listed on the National Stock Exchange of India. Sensex is the index for the Bombay Stock Exchange. Both are key indicators of Indian market performance. Would you like me to run a technical prediction on current trends?";
      } else if (lowerInput.includes('sip') || lowerInput.includes('mutual fund')) {
        aiResponse = "A Systematic Investment Plan (SIP) in mutual funds is excellent for long-term wealth creation due to rupee-cost averaging and the power of compounding. Historically, equity mutual funds in India have delivered 12-15% annual returns over long periods. Have you tried my SIP calculator tool?";
      } else if (lowerInput.includes('retire') || lowerInput.includes('20000') || lowerInput.includes('20,000')) {
        aiResponse = "Retiring with a ₹20,000 monthly SIP is highly achievable! If you invest ₹20,000 every month at an expected 12% annual return for 20 years, your corpus could grow to approximately ₹1.99 Crores. The key is consistency.";
      }

      setMessages(prev => [...prev, { id: crypto.randomUUID(), sender: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <Bot size={28} color="var(--accent-pink)" />
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-pink)', margin: 0 }}>AI Financial Advisor</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Powered by Financial Intelligence RAG Model</p>
        </div>
      </div>

      <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', maxHeight: '600px' }}>
        
        {/* Chat History */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' }}>
              <div style={{ 
                width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                background: msg.sender === 'user' ? 'var(--accent-blue)' : 'rgba(236, 72, 153, 0.2)',
                color: msg.sender === 'user' ? '#fff' : 'var(--accent-pink)'
              }}>
                {msg.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div style={{ 
                background: msg.sender === 'user' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.05)',
                padding: '12px 18px', borderRadius: '15px', maxWidth: '80%', lineHeight: 1.5,
                borderTopRightRadius: msg.sender === 'user' ? 0 : '15px',
                borderTopLeftRadius: msg.sender === 'ai' ? 0 : '15px',
                color: msg.sender === 'user' ? '#fff' : 'var(--text-primary)',
                border: msg.sender === 'ai' ? '1px solid var(--glass-border)' : 'none'
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(236, 72, 153, 0.2)', color: 'var(--accent-pink)' }}>
                <Sparkles size={18} />
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 18px', borderRadius: '15px', borderTopLeftRadius: 0, color: 'var(--text-secondary)' }}>
                Analyzing market data...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '15px', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              className="input-field" 
              style={{ flex: 1, marginBottom: 0, paddingLeft: '20px' }} 
              placeholder="Ask about SIPs, NIFTY 50, or market trends..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              disabled={isTyping || !input.trim()}
            >
              <Send size={18} />
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Disclaimer: AI can make mistakes. Information provided is for educational purposes and does not constitute financial advice.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
