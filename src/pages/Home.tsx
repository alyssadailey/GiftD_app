// import React from 'react';
import { useAuth } from '../context/AuthContext';
// import './Home.css';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="home-container">
      <h1>Welcome to GiftD 🎁</h1>
      <p className="home-subtitle">
        {user ? `Welcome back, ${user.name}!` : 'Plan, save, and discover gifts for every occasion.'}
      </p>

       {user && (
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;