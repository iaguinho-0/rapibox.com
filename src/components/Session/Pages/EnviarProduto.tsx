// src/components/EnviarProduto.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../../Session/SidebarSession';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';
import InfoPerfil from '../../Session/InfoPerfil';

interface EnviarProdutoProps {
    cadastroLogin: any;
    infoNegocio: any;
    id: number;
    nome: string;
    valor: number;
    descricao: string;
    imagem: string;
    quantidade: number;
    foto: string;
    
   
}

const EnviarProduto: React.FC = () => {
    const { produtoId } = useParams<{ produtoId: string }>();
    const location = useLocation();
    const { produto } = location.state as { produto?: EnviarProdutoProps } || {};
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [quantidade, setQuantidade] = useState(1);
    const [frete, setFrete] = useState(82.0);
    const navigate = useNavigate()
    
    const handleSalvar = () => {
        // Redirecionar para a página X após salvar
        navigate('/SessaoLogada/entregas');
    };

    // Função para cancelar e redirecionar
    const handleCancelar = () => {
        // Redirecionar para a página Y
        navigate('/SessaoLogada/produtos');
    };

    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome);
    }, []);

    useEffect(() => {
        
        if (produto) {
            setQuantidade(produto.quantidade);
            console.log(produto.cadastroLogin?.infoNegocio?.nomeEmpresa)
        }
    }, [produto]);  

    const precoTotal = (produto?.valor || 0) * quantidade + frete;

    return (
        <div className="flex min-h-screen w-full text-black">
            <Sidebar />
            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center mt-6">
                    <h1 className="text-2xl font-bold mb-6">Confirme o Envio</h1>
                    
                    {/* Produto Info */}
                    <div className="mb-4 border border-gray-300 p-4">
                        <p className="text-xl font-semibold">{produto?.nome || "Produto Indisponível"}</p>
                        <p className="text-lg text-orange-600">
                            Valor: R${produto?.valor !== undefined ? produto.valor.toFixed(2) : "Indisponível"}
                        </p>
                        {produto?.foto && (
                            <img
                            src={`data:image/png;base64,${produto.foto}`}
                            alt={produto.nome}
                            className="h-40 object-cover mb-2 rounded-md mx-auto"
                        />
                        )}
                    </div>
                    
                    {/* Form Fields */}
                    <div className="space-y-4 text-left">
                        <textarea
                            placeholder="Observações:"
                            className="w-full p-2 rounded-md text-gray-500 bg-white border border-gray-300 placeholder-gray-500"
                        ></textarea>
                        <input
                            placeholder="Endereço De Entrega"
                            className="w-full p-2 rounded-md text-gray-500 bg-white border border-gray-300 placeholder-gray-500"
                        />
                        
                        {/* Texto de Orientação */}
                        <p className="font-semibold text-gray-700 mb-1">Insira o endereço do <span className="text-[#F0810B]">destinatário.</span></p>
                        
                        {/* Linha Divisória */}
                        <hr className="border-gray-300 my-4" />
                        
                        {/* Endereço da Loja */}
                        <p className="font-semibold text-gray-700 mb-1">Endereço <span className="text-[#F60] underline">da sua Loja.</span></p>
                        <input
                            type="text"
                            value={(produto?.cadastroLogin?.infoNegocio?.rua) + ',' + (produto?.cadastroLogin?.infoNegocio?.bairro) + ',' + (produto?.cadastroLogin?.infoNegocio.cep)}
                            readOnly
                            required
                            placeholder="123 Brotas. #22B Rua Chile, Brotas 446350-565."
                            className="w-full p-2 rounded-md text-gray-500 bg-white border border-gray-300 placeholder-gray-500"
                        />
                        
                        {/* Quantidade and Total */}
                        <div className="flex items-center justify-between mt-4 space-x-2">
                            <div className='flex items-center justify-between space-x-5'>
                                <label htmlFor="quantidade" className="font-semibold">Quantidade</label>
                                <input
                                    type="number"
                                    id="quantidade"
                                    value={produto?.quantidade}
                                    onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
                                    readOnly
                                    required
                                    className="border rounded-md p-2 w-20 text-center text-gray-500 bg-gray-100 border-gray-300"
                                    min={1}
                                />
                            </div>
                            <div className='flex items-center justify-between space-x-5'>
                                <label htmlFor="quantidade" className="font-semibold">R$</label>
                                <input
                                    type="text"
                                    value={`R$ ${(produto?.valor || 0 * quantidade).toFixed(2)}`}
                                    readOnly
                                    required
                                    className="border rounded-md p-2 w-28 text-right text-gray-700 bg-gray-100 border-gray-300"
                                />
                            </div>
                        </div>

                        <hr className="border-gray-300 my-4" />

                        {/* Frete and Total */}
                        <div className="flex flex-col items-start text-lg font-semibold text-right">
                            <p>Valor do Frete <span className="text-[#F0810B]">R$ {frete.toFixed(2)}</span></p>
                            <p>Valor Total: <span className="text-[#F0810B]">R$ {precoTotal.toFixed(2)}</span></p>
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4 mt-6">
                <button 
                    onClick={handleSalvar} 
                    className="w-full py-2 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-600"
                >
                    Salvar
                </button>
                <button 
                    onClick={handleCancelar} 
                    className="w-full py-2 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500"
                >
                    Cancelar
                </button>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnviarProduto;