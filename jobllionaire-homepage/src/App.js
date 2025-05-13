import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <div className="animated-bg"></div>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo">
            <motion.span
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
              style={{
                filter: "brightness(1.2) contrast(1.1)",
                textShadow: "0 0 4px #a21caf33, 0 0 2px #3b82f633",
                fontSize: '1.7rem',
                fontWeight: 900,
                letterSpacing: '-1px',
                background: 'linear-gradient(90deg, #3b82f6, #a21caf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                cursor: 'pointer',
                verticalAlign: 'middle',
              }}
              onClick={() => window.location.reload()}
            >
              Jobllionaire™
            </motion.span>
          </div>
          <ul className="nav-links">
            <li>Layoffs</li>
            <li>Homemakers</li>
            <li>Veterans</li>
            <li>Handicapped</li>
            <li>Undergraduates</li>
            <li>High Schoolers</li>
          </ul>
          <div className="nav-actions">
            <motion.button
              className="contact-sales glass-btn"
              whileHover={{ scale: 1.04, y: -3 }}
              style={{
                opacity: 0.98,
                boxShadow: '0 4px 32px 0 rgba(60,40,120,0.14), 0 2px 0 #fff',
                fontWeight: 900,
              }}
            >
              Sign in
            </motion.button>
          </div>
        </nav>
        <div className="hero-section">
          <div className="hero-intro">Instead of you finding jobs,</div>
          <h1 className="hero-gradient">Jobs Find You.</h1>
          <p className="subheadline">
            Discover a new era of opportunity where top jobs come to you, powered by Jobllionaire™.
          </p>
          <form className="email-form">
            <div className="glow-border-wrapper">
              <motion.button
                type="submit"
                className="glass-btn flashy-btn"
                whileHover={{ scale: 1.04, y: -3 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                Start Your Journey
              </motion.button>
              <div className="glow-border"></div>
            </div>
          </form>
        </div>
      </header>
      {/* Add more UI elements as needed */}
    </div>
  );
}

export default App;
