import React, { useState } from 'react';

export const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen flex items-center justify-between p-4 bg-orange-500 text-white fixed top-0 left-0 z-10 shadow-lg">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer px-10 ">Minha Logo</div>

      {/* Menu Icon for Mobile */}
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Menu */}
      <ul className={`flex gap-x-8 md:flex md:static md:flex-row ${isOpen ? 'flex flex-col items-center absolute top-16 left-0 w-full bg-gray-800' : 'hidden'}`}>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Produtos</li>
        <li className="cursor-pointer">Central de Ajuda</li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4 px-10">
        <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">Login</button>
        <button className="px-4 py-2 rounded bg-blue-900 hover:bg-blue-700">Cadastre-se</button>
      </div>
    </nav>
  );
};
