import React from 'react';
import bannerImage from '../assets/BannerFundoRed.png'; // Substitua pelo caminho correto da sua imagem
import smallImage from '../assets/UtilidadesIco.png'; // Substitua pelo caminho correto da sua imagem
import largeImage from '../assets/EstoqueIMG.png'; // Substitua pelo caminho correto da sua nova imagem grande

export const UtilitiesBanner: React.FC = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 flex space-x-8 items-start max-w-4xl w-full">
          {/* Conteúdo de texto */}
          <div className="space-y-8 w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 text-start">Utilidades</h1> {/* Tamanho da fonte aumentado */}
            <ul className="text-gray-600 space-y-2 pt-8">
              <li className="flex items-center space-x-2">
                <img src={smallImage} alt="Envio rápido" className="w-8 h-8  object-cover" />
                <span className='text-3xl text-start font-bold text-black'>Envio rápido.</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={smallImage} alt="Envio seguro" className="w-8 h-8 object-cover" />
                <span className='text-3xl text-start font-bold  text-black'>Envio seguro de itens frágeis.</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={smallImage} alt="Serviço de retirada" className="w-8 h-8 object-cover" />
                <span className='text-3xl text-start font-bold  text-black'>Serviço de retirada e entrega de encomendas.</span>
              </li>
            </ul>
          </div>

          {/* Imagem grande à direita */}
          <div className="w-1/2">
            <img 
              src={largeImage} 
              alt="Imagem Grande" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilitiesBanner;
