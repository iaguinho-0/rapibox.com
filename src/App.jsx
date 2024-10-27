import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ResponsiveNavbar } from './components/ResponsiveNavbar';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            <h1 className="text-2xl text-white font-bold text-center">Tailwind Test</h1>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
