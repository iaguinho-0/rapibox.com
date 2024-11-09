// ItemProduto.tsx - Componente para cada produto
import React from 'react';

interface ItemProdutoProps {
    nome: string;
    imagem: string;
    preco: number;
    onEnviar: () => void;
}

const ItemProduto: React.FC<ItemProdutoProps> = ({ nome, imagem, preco, onEnviar }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-72 md:w-64 lg:w-56 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-black text-center mb-2">{nome}</h3>
            <img src={imagem} alt={nome} className="h-40 object-cover mb-2" />
            <p className="text-lg font-semibold text-gray-700">${preco.toFixed(2)}</p>
            <button
                onClick={onEnviar}
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full hover:bg-orange-600 transition-colors"
            >
                Enviar
            </button>
        </div>
    );
};

export default ItemProduto;
