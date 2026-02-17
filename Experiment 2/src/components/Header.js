import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>My App</h1>
        <div>
          <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/logs" style={{ marginRight: '1rem' }}>Logs</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;