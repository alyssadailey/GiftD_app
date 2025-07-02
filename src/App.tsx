// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
// import Gift from './pages/Gift';
// import YourGifts from './pages/YourGifts';
// import YourProfile from './pages/YourGifts';
import Register from './pages/Register';
import Login from './pages/Login';
// import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          {/* <Navbar /> */}
          <main className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } />
              {/* <Route path="/ideas" element={
                <PrivateRoute>
                  <GiftIdeas />
                </PrivateRoute>
              } /> */}
              {/* <Route path="/saved" element={
                <PrivateRoute>
                  <SavedGifts />
                </PrivateRoute>
              } /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;