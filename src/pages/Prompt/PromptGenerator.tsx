import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Image as ImageIcon, Video, Mail, Briefcase, Code, Copy, CheckCircle2 } from 'lucide-react';

type Category = 'Image' | 'Video' | 'Email' | 'Business' | 'Software';

export default function PromptGenerator() {
  const [activeCategory, setActiveCategory] = useState<Category>('Image');
  const [copied, setCopied] = useState(false);

  // Form States
  const [imageForm, setImageForm] = useState({ type: 'Photorealistic', style: 'Cinematic', color: 'Vibrant', subject: '' });
  const [videoForm, setVideoForm] = useState({ style: 'Cinematic', camera: 'Tracking Shot', lighting: 'Natural', scene: '' });
  const [emailForm, setEmailForm] = useState({ purpose: 'Cold Outreach', tone: 'Professional', info: '' });
  const [businessForm, setBusinessForm] = useState({ target: 'B2B', tone: 'Consultative', service: '' });
  const [softwareForm, setSoftwareForm] = useState({ type: 'SaaS', tech: 'React & Node.js', features: '' });

  const categories: { id: Category; icon: any; label: string }[] = [
    { id: 'Image', icon: <ImageIcon size={18} />, label: 'Image' },
    { id: 'Video', icon: <Video size={18} />, label: 'Video' },
    { id: 'Email', icon: <Mail size={18} />, label: 'Email' },
    { id: 'Business', icon: <Briefcase size={18} />, label: 'Business' },
    { id: 'Software', icon: <Code size={18} />, label: 'Software' },
  ];

  const generatedPrompt = useMemo(() => {
    switch (activeCategory) {
      case 'Image':
        return `Generate a ${imageForm.type} image of ${imageForm.subject || '[insert subject]'}. The style should be highly detailed and ${imageForm.style}, using a ${imageForm.color} color palette. Ensure maximum resolution, 8k, highly polished, masterpiece.`;
      
      case 'Video':
        return `Create a ${videoForm.style} video prompt. Scene description: ${videoForm.scene || '[insert scene]'}. The camera movement should be a ${videoForm.camera}, capturing the scene with ${videoForm.lighting} lighting. 4k resolution, smooth 60fps motion.`;
      
      case 'Email':
        return `Write a ${emailForm.tone} email for the purpose of ${emailForm.purpose}. \n\nKey information to include: ${emailForm.info || '[insert key details]'}. \n\nEnsure the structure is clean, easy to read, and includes a strong call to action at the end.`;
      
      case 'Business':
        return `Create a ${businessForm.tone} sales quotation / proposal for the following service or product: ${businessForm.service || '[insert service]'}. \n\nThe target audience is ${businessForm.target}. Outline the value proposition clearly, include a structured pricing breakdown, and end with next steps.`;
      
      case 'Software':
        return `Act as a Senior Software Architect. I want to build a ${softwareForm.type} application using ${softwareForm.tech}. \n\nCore features include: ${softwareForm.features || '[insert features]'}. \n\nPlease provide a high-level system architecture, a step-by-step implementation plan, and a recommended database schema.`;
      
      default:
        return '';
    }
  }, [activeCategory, imageForm, videoForm, emailForm, businessForm, softwareForm]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputStyle = {
    paddingLeft: '15px'
  };

  return (
    <div className="page-wrapper app-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
            Prompt <span className="text-gradient">Generator</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Craft highly optimized AI prompts for any use case</p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Configurator Section */}
          <div className="glass-panel" style={{ padding: '30px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wand2 size={24} /> Configure {activeCategory}
            </h3>

            {activeCategory === 'Image' && (
              <>
                <div className="input-group">
                  <label>Image Type</label>
                  <select className="input-field" style={inputStyle} value={imageForm.type} onChange={e => setImageForm({...imageForm, type: e.target.value})}>
                    <option>Photorealistic</option><option>3D Render</option><option>Illustration</option><option>Vector Art</option><option>Sketch</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Art Style</label>
                  <select className="input-field" style={inputStyle} value={imageForm.style} onChange={e => setImageForm({...imageForm, style: e.target.value})}>
                    <option>Cinematic</option><option>Cyberpunk</option><option>Minimalist</option><option>Fantasy</option><option>Steampunk</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Color Palette</label>
                  <select className="input-field" style={inputStyle} value={imageForm.color} onChange={e => setImageForm({...imageForm, color: e.target.value})}>
                    <option>Vibrant</option><option>Neon</option><option>Pastel</option><option>Dark Mode</option><option>Monochromatic</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Subject / Description</label>
                  <textarea className="input-field" style={{...inputStyle, minHeight: '100px'}} placeholder="E.g. A futuristic sports car racing through a rainy cyberpunk city" value={imageForm.subject} onChange={e => setImageForm({...imageForm, subject: e.target.value})}></textarea>
                </div>
              </>
            )}

            {activeCategory === 'Video' && (
              <>
                <div className="input-group">
                  <label>Video Style</label>
                  <select className="input-field" style={inputStyle} value={videoForm.style} onChange={e => setVideoForm({...videoForm, style: e.target.value})}>
                    <option>Cinematic</option><option>3D Animation</option><option>Anime</option><option>Documentary</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Camera Movement</label>
                  <select className="input-field" style={inputStyle} value={videoForm.camera} onChange={e => setVideoForm({...videoForm, camera: e.target.value})}>
                    <option>Tracking Shot</option><option>Drone Shot</option><option>Slow Pan</option><option>Static Zoom</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Lighting</label>
                  <select className="input-field" style={inputStyle} value={videoForm.lighting} onChange={e => setVideoForm({...videoForm, lighting: e.target.value})}>
                    <option>Natural</option><option>Studio</option><option>Moody</option><option>Neon</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Scene Description</label>
                  <textarea className="input-field" style={{...inputStyle, minHeight: '100px'}} placeholder="E.g. An astronaut floating gently through a vibrant nebula" value={videoForm.scene} onChange={e => setVideoForm({...videoForm, scene: e.target.value})}></textarea>
                </div>
              </>
            )}

            {activeCategory === 'Email' && (
              <>
                <div className="input-group">
                  <label>Purpose</label>
                  <select className="input-field" style={inputStyle} value={emailForm.purpose} onChange={e => setEmailForm({...emailForm, purpose: e.target.value})}>
                    <option>Cold Outreach</option><option>Follow-up</option><option>Newsletter</option><option>Apology</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Tone</label>
                  <select className="input-field" style={inputStyle} value={emailForm.tone} onChange={e => setEmailForm({...emailForm, tone: e.target.value})}>
                    <option>Professional</option><option>Friendly</option><option>Urgent</option><option>Persuasive</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Key Information to Include</label>
                  <textarea className="input-field" style={{...inputStyle, minHeight: '120px'}} placeholder="E.g. We are launching a new AI tool next week, offering 20% discount to early adopters." value={emailForm.info} onChange={e => setEmailForm({...emailForm, info: e.target.value})}></textarea>
                </div>
              </>
            )}

            {activeCategory === 'Business' && (
              <>
                <div className="input-group">
                  <label>Target Audience</label>
                  <select className="input-field" style={inputStyle} value={businessForm.target} onChange={e => setBusinessForm({...businessForm, target: e.target.value})}>
                    <option>B2B</option><option>B2C</option><option>Enterprise</option><option>Small Business</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Tone</label>
                  <select className="input-field" style={inputStyle} value={businessForm.tone} onChange={e => setBusinessForm({...businessForm, tone: e.target.value})}>
                    <option>Consultative</option><option>Formal</option><option>Aggressive Sales</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Service / Product Description</label>
                  <textarea className="input-field" style={{...inputStyle, minHeight: '120px'}} placeholder="E.g. Full-stack development services for a custom inventory management system." value={businessForm.service} onChange={e => setBusinessForm({...businessForm, service: e.target.value})}></textarea>
                </div>
              </>
            )}

            {activeCategory === 'Software' && (
              <>
                <div className="input-group">
                  <label>Project Type</label>
                  <select className="input-field" style={inputStyle} value={softwareForm.type} onChange={e => setSoftwareForm({...softwareForm, type: e.target.value})}>
                    <option>SaaS</option><option>E-commerce</option><option>Landing Page</option><option>Social Media App</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Target Tech Stack</label>
                  <select className="input-field" style={inputStyle} value={softwareForm.tech} onChange={e => setSoftwareForm({...softwareForm, tech: e.target.value})}>
                    <option>React & Node.js</option><option>Next.js & Vercel</option><option>React Native</option><option>Python Django</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Core Features</label>
                  <textarea className="input-field" style={{...inputStyle, minHeight: '120px'}} placeholder="E.g. User authentication, real-time chat, and payment gateway integration." value={softwareForm.features} onChange={e => setSoftwareForm({...softwareForm, features: e.target.value})}></textarea>
                </div>
              </>
            )}

          </div>

          {/* Output Section */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-purple)' }}>
                Generated Prompt
              </h3>
              <button 
                onClick={copyToClipboard}
                className="btn btn-secondary"
                style={{ padding: '8px 15px', display: 'flex', gap: '8px', alignItems: 'center', borderColor: copied ? '#10b981' : 'var(--glass-border)', color: copied ? '#10b981' : 'var(--text-primary)' }}
              >
                {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            
            <div style={{ 
              background: 'rgba(0,0,0,0.3)', 
              border: '1px solid var(--glass-border)',
              borderRadius: '12px', 
              padding: '25px', 
              flex: 1,
              whiteSpace: 'pre-wrap',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)'
            }}>
              {generatedPrompt}
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
