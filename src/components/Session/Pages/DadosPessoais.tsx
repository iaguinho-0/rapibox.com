import React, { useEffect, useState } from 'react';
import SidebarSession from '../../Session/SidebarSession';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';

const DadosPessoais: React.FC = () => {
    // Variáveis de estado
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [fotoUsuario, setFotoUsuario] = useState(null);
    const [previewFoto, setPreviewFoto] = useState(ProfilePerfilMock);
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [erro, setErro] = useState(null);
    const [aviso, setAviso] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Obter ID do usuário do localStorage
    const userId = localStorage.getItem('id');

    // useEffect para buscar dados do usuário
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/usuarios/${userId}`);
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                const userData = await response.json();
                console.log(userData)
                setNomeCompleto(userData.nomeCompleto || '');
                setEmail(userData.email || '');
                setTelefone(userData.telefone || '');
                setNomeEmpresa(userData.infoNegocio.nomeEmpresa || '');
                setCnpj(userData.infoNegocio.cnpj || '');
                setCep(userData.infoNegocio.cep || '');
                setCidade(userData.infoNegocio.cidade || '');
                setEstado(userData.infoNegocio.estado || '');
                setRua(userData.infoNegocio.rua || '');
                setBairro(userData.infoNegocio.bairro || '');
                if (userData.fotoUsuario) {
                    setPreviewFoto(`data:image/jpeg;base64,${userData.fotoUsuario}`);
                }
            } catch (error) {
                console.log(error)
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    const handleFotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFotoUsuario(file);
            setPreviewFoto(URL.createObjectURL(file));
        }
    };

    const handleSave = async () => {
        setIsLoading(true)
        if (!telefone || !nomeEmpresa || !cnpj || !cep || !cidade || !estado || !rua || !bairro) {
            setErro('Por favor, preencha todos os campos obrigatórios.');
            setTimeout(() => {
                setErro(null); // Limpa a mensagem de erro após 3 segundos
            }, 3000);
            return;
        }
        const formData = new FormData();
        formData.append('telefone', telefone);
        formData.append('nomeEmpresa', nomeEmpresa);
        formData.append('cnpj', cnpj);
        formData.append('cep', cep);
        formData.append('cidade', cidade);
        formData.append('estado', estado);
        formData.append('rua', rua);
        formData.append('bairro', bairro);
        if (fotoUsuario) {
            formData.append('fotoUsuario', fotoUsuario);
        }

        try {
            const response = await fetch(`http://localhost:8080/usuarios/${userId}/atualizar-telefone-foto`, {
                method: 'PUT',
                body: formData,
            });

            console.log("Resposta: ", response)

            if (!response.ok) {
                const errorText = await response.text(); // Captura a mensagem de erro
                throw new Error(errorText);
            }
            const userData = await response.json();

            console.log('Dados do usuário recebidos:', userData);
            setAviso('Perfil atualizado!'); // Define o aviso
            setTimeout(() => {
                setAviso('');
            }, 3000);
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            setErro(error.message);
            setTimeout(() => setErro(null), 3000);
        } finally{
            setIsLoading(false)
        }
    };

    const handleCancel = () => {
        window.history.back();
    };

    return (
        <div className="flex flex-col md:flex-row w-screen h-screen">
            <SidebarSession />
            
            <div className="flex-1 p-4 md:p-10 bg-gray-100 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-2xl shadow-gray-400 p-6 md:p-8">
                {aviso && <div className="bg-green-500 text-white p-2 rounded mb-4">{aviso}</div>}
                {erro && <div className="bg-red-500 text-white p-2 rounded mb-4">{erro}</div>}
                    <h2 className="text-3xl md:text-5xl text-start font-bold text-black mb-4">Perfil</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                        <div className="relative w-48 h-48 md:w-96 md:h-72 mb-4 md:mb-0">
                            <img src={previewFoto} alt="Perfil" className="rounded-lg object-cover w-full h-full" />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFotoChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white py-1 cursor-pointer">
                                Alterar Foto(Opcional)
                            </div>
                        </div>
                        <div className="md:ml-8 flex flex-col space-y-4 w-full">
                            <h2 className="text-3xl md:text-5xl text-start font-semibold text-gray-800">Dados Pessoais</h2>
                            <input
                                type="text"
                                placeholder="Nome Completo"
                                value={nomeCompleto}
                                readOnly
                                className="bg-gray-100 p-2 rounded-lg w-full text-black cursor-default"
                            />
                            <input
                                type="email"
                                placeholder="E-Mail"
                                value={email}
                                readOnly
                                className="bg-gray-100 p-2 rounded-lg w-full text-black cursor-default"
                            />
                            <input
                                type="tel"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required
                                className="bg-gray-100 p-2 rounded-lg w-full text-black"
                            />
                        </div>
                    </div>

                    <hr className="my-6" />

                    <h2 className="text-3xl md:text-5xl text-start font-semibold text-gray-800 mb-4">Informações Do Negócio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nome Da Empresa"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="CEP"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            required
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                    </div>

                    <div className="flex justify-center space-x-4 mt-8">
                    <button
                            onClick={handleSave}
                            className="bg-orange-500 text-white w-48 py-2 rounded-lg font-semibold text-lg transition-colors duration-500 hover:bg-orange-700"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Aguarde...' : 'Salvar'}
                        </button>
                        <button onClick={handleCancel} className="bg-gray-400 text-white w-48 py-2 rounded-lg font-semibold text-lg">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DadosPessoais;