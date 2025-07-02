import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or show a spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;