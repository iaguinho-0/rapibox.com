import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Session/SidebarSession';
import InfoPerfil from '../../Session/InfoPerfil';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';
import ProdutoItem from '../ItemProduto';
import ExampleProductImage from '../../../assets/ProfilePerfilMock2.png';

const Produtos: React.FC = () => {
    const userId = localStorage.getItem('id');
    const [produtos, setProdutos] = useState<any[]>([]);
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const itemsPerPage = 12;
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:8080/produtos/${userId}`) 
            .then(response => response.json())
            .then(data => {
                setProdutos(data);
                console.log(data)
                
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }, []);

    const handleEnviarClick = (produto: { id: any; }) => {
        navigate(`/enviar-produto/${produto.id}`, { state: { produto } });
    };

    const handleNextClick = () => {
        if ((currentPage + 1) * itemsPerPage < produtos.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = produtos.slice(startIndex, endIndex);

    return (
        <div className="flex min-h-screen w-full">
            <div className="w-100 fixed h-screen">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full p-6 bg-white items-center ml-[20vw]">
                <div className="w-full max-w-screen-xl px-4">

                    <div className="mt-16 max-w-full">
                        <h1 className="text-2xl font-bold text-start mb-6 text-gray-800">
                            Exibindo produtos {startIndex + 1} a{" "}
                            {Math.min(endIndex, produtos.length)} de {produtos.length} no
                            total.
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                            {currentProducts.map((produto) => (
                                <ProdutoItem
                                    key={produto.id}
                                    nome={produto.nome}
                                    imagem={produto.foto ? `data:image/jpeg;base64,${produto.foto}` : ExampleProductImage}
                                    preco={produto.valor}
                                    onEnviar={() => handleEnviarClick(produto)}
                                />
                            ))}
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={handlePreviousClick}
                                disabled={currentPage === 0}
                            >
                                Previous
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={handleNextClick}
                                disabled={(currentPage + 1) * itemsPerPage >= produtos.length}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produtos;
