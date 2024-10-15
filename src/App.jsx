import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Check, Coins, Users, Ticket, KeyRound, Hash, RotateCcw } from 'lucide-react';
import { Dice1, Dice6 } from 'lucide-react';

const tools = [
  { name: 'Dice', icon: () => (
    <div className="flex">
      <Dice1 size={12} className="mr-1" />
      <Dice6 size={12} />
    </div>
  ), description: 'Roll virtual dice', href: '/tools/dice' },
  { name: 'Yes/No', icon: Check, description: 'Get a random yes or no answer', href: '/tools/yes-no' },
  { name: 'Heads-Tails', icon: Coins, description: 'Flip a virtual coin', href: '/tools/heads-tails' },
  { name: 'Random Names', icon: Users, description: 'Generate random names', href: '/tools/random-names' },
  { name: 'Lotto', icon: Ticket, description: 'Generate lottery numbers', href: '/tools/lotto' },
  { name: 'Password Generator', icon: KeyRound, description: 'Create secure passwords', href: '/tools/password-generator' },
  { name: 'Random Number', icon: Hash, description: 'Generate random numbers', href: '/tools/random-number' },
  { name: 'Spin the Wheel', icon: RotateCcw, description: 'Make decisions with a spinning wheel', href: '/tools/spin-the-wheel' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-text">ToolBox</div>
            </div>
            <nav className="hidden md:flex space-x-4">
              {['Home', 'Tools', 'About', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button onClick={toggleMenu} className="md:hidden p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-col space-y-2">
            {['Home', 'Tools', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white p-2 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold gradient-text mb-12">Our Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <a key={tool.name} href={tool.href} className="tool-card group block p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mr-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                  {typeof tool.icon === 'function' ? tool.icon() : <tool.icon size={24} />}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{tool.name}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
              <span className="text-indigo-600 dark:text-indigo-400 group-hover:underline">Open &gt;</span>
            </a>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About ToolBox</h3>
              <p className="text-sm">ToolBox provides a variety of useful online tools to help with your daily tasks and creative projects.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Advertising Disclosure</h3>
              <p className="text-sm">This website uses Google Ads to provide you with free tools. We appreciate your support by clicking on relevant ads that interest you.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
            &copy; 2023 ToolBox. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;