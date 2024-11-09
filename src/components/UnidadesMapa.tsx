import React from 'react';
import mapImage from '../assets/UnidadesMapaIMG.png';

export const UnidadesMapa: React.FC = () => {
  return (
    <div className="flex items-center justify-center pl-16 min-h-screen bg-gray-100 p-4">
      {/* Texto à esquerda */}
      <div className="text-left max-w-md space-y-2">
        <h1 className="text-6xl font-bold text-gray-800" style={{ fontSize: 'clamp(26px, 3.25vw, 4rem)'}}>Uma Unidade Pertinho de Você!</h1>
        <h2 className="text-4xl text-gray-600" style={{ fontSize: 'clamp(14px, 2.75vw, 2.25rem)' }}>Conveniente e acessível, estamos sempre ao seu lado!</h2>
      </div>

      {/* Imagem à direita com tamanho maior */}
      <div className="ml-8">
<iframe className="w-[60vw] h-[45vw] object-cover rounded-xl max-h-[40rem] max-w-[65rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.12567505263!2d-38.51242769521366!3d-12.986831635719163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604b2c3766005%3A0x46e00bb791872aee!2sBrotas%2C%20Salvador%20-%20BA%2C%2040301-155!5e0!3m2!1spt-BR!2sbr!4v1730724370834!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        {/*<img 
          src={mapImage} 
          alt="Mapa" 
          className="w-[70rem] h-[45rem] object-cover rounded-lg" 
        /> */}

      </div>
    </div>
  );
};
