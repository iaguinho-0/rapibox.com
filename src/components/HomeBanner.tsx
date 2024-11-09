import React from 'react';

import bannerHome from '../assets/BannerHome.png';

export const HomeBanner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] w-full bg-white text-black p-6 mt-14 md:p-12">
      {/* Texto à esquerda */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left pl-4">
        <h1 className="text-4xl md:text-7xl font-bold"  style={{ fontSize: 'clamp(26px, 3.5vw, 4.5rem)' }}>
          Soluções Inteligentes em Manutenção de Estoque e Entrega de Produtos
        </h1>
        <h2 className="text-xl md:text-4xl text-gray-700"  style={{ fontSize: 'clamp(14px, 2.75vw, 2.25rem)' }}>
          A mais nova e disruptiva forma de otimizar estoque e entrega.
        </h2>
      </div>

      {/* Imagem à direita */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={bannerHome}
          alt="Banner Home"
          className="w-[35rem] h-[25rem] md:w-[49rem] md:h-[39rem] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};
