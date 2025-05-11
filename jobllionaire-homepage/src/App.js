import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="animated-bg"></div>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo">Jobllionaire™</div>
          <ul className="nav-links">
            <li>Products</li>
            <li>Solutions</li>
            <li>Developers</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <div className="nav-actions">
            <button className="sign-in">Sign in</button>
            <button className="contact-sales">Contact sales</button>
          </div>
        </nav>
        <div className="hero-section">
          <h1>Financial infrastructure<br />to grow your revenue</h1>
          <p className="subheadline">
            Join the millions of companies that use Jobllionaire™ to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
          </p>
          <form className="email-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Start now</button>
          </form>
        </div>
      </header>
      {/* Add more UI elements as needed */}
    </div>
  );
}

export default App;
