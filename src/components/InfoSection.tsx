import React from 'react';
import CaminhaoIco from '../assets/CaminhaoIco.png';
import GraficoICO from '../assets/GraficoICO.png';
import CarrinhoICO from '../assets/CarrinhoICO.png';

export const InfoSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
        <div className="flex flex-col items-center bg-white rounded-lg w-72 h-72 p-6 shadow-md border border-black">
          <h1 className="text-xl font-bold text-black mb-2">Entrega Rápida</h1>
          <img src={CaminhaoIco} alt="Entrega Rápida" className="w-14 h-14 mb-4" />
          <hr className="w-full border-t border-black mb-4" />
          <h2 className="text-m text-start text-black">Entregue seus pedidos rapidamente nas maiores capitais do país.</h2>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg w-72 h-72 p-6 shadow-md border border-black">
          <h1 className="text-xl font-bold text-black mb-2">Manutenção de Estoque</h1>
          <img src={GraficoICO} alt="Pagamento Seguro" className="w-14 h-14 mb-4" />
          <hr className="w-full border-t border-black mb-4" />
          <h2 className="text-m text-start text-black">Garanta 100% da manutenção de estoque e tenha controle total assim que os produtos forem entregues.</h2>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg w-72 h-72 p-6 shadow-md border border-black">
          <h1 className="text-xl font-bold text-black mb-2">Pagamento Na Entrega</h1>
          <img src={CarrinhoICO} alt="Fácil Devolução" className="w-14 h-14 mb-4" />
          <hr className="w-full border-t border-black mb-4" />
          <h2 className="text-m text-start text-black">Escolha o pagamento na entrega, adaptando-se às suas necessidades.</h2>
        </div>
      </div>
    </section>
  );
};
