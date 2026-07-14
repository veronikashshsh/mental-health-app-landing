import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#373551] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wide">DevelopYourself</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your personal emotional companion for self-growth and mindfulness. 
              Track moods, gain insights, and develop emotional awareness.
            </p>
           
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#support" 
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wide">Stay Updated</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get the latest updates on new features and emotional wellness tips.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 py-2.5 px-3 bg-white/10 text-white text-sm placeholder:text-gray-400 border border-white/20 rounded-l-lg focus:outline-none focus:bg-white/15 focus:border-white/30"
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-2.5  text-white rounded-r-lg transition-colors duration-300 border bg-white/10 border-white/20"
              >
                <span className="text-sm font-medium">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-gray-400">
          © 2025 DevelopYourself. All rights reserved.
        </p>
      </div>
    </footer>
  );
}