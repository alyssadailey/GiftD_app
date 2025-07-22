import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/'); // Navigate directly to home after successful registration
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   await register(name, email, password);
  //   navigate('/login');
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      {error && <div className="error">{error}</div>}
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </form>
  );
};

export default Register;