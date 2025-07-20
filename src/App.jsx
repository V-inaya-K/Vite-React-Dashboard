import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { isLoggedIn } from './services/authService';

const App = () => {
  const [auth, setAuth] = useState(isLoggedIn());

  useEffect(() => {
    const listener = () => setAuth(isLoggedIn());
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <LoginPage onLogin={() => setAuth(true)} />} />
        <Route path="/dashboard" element={auth ? <DashboardPage onLogout={() => setAuth(false)} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
