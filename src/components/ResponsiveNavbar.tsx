import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Ajuste o caminho se necessário

export const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen flex items-center justify-between p-4 bg-orange-500 text-white fixed top-0 left-0 z-10 shadow-lg">
      {/* Logo */}
      <div
        className="cursor-pointer px-14 flex items-center"
        onClick={() => navigate('/')} // Navega para a Home ao clicar
      >
        <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Ajuste a altura conforme necessário */}
      </div>

      {/* Menu Icon for Mobile */}
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Menu */}
      <ul
        className={`flex gap-x-8 md:flex md:static md:flex-row ${
          isOpen ? 'flex flex-col items-center absolute top-16 left-0 w-full bg-gray-800' : 'hidden'
        }`}
      >
        <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
        <li className="cursor-pointer" onClick={() => navigate('/')}>Produtos</li>
        <li className="cursor-pointer" onClick={() => navigate('/')}>Central de Ajuda</li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4 px-10">
        <button
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-900 hover:bg-blue-700"
          onClick={() => navigate('/register')}
        >
          Cadastre-se
        </button>
      </div>
    </nav>
  );
};
