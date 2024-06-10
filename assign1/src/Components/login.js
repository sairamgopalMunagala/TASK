import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validation logic
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
    } else {
      // Your login logic here
      console.log('Logging in...');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Sticky Header</h1>
        {/* Add your navbar here */}
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <h2>Login</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
      <footer className="footer">Sticky Footer</footer>
    </div>
  );
}

export default App;