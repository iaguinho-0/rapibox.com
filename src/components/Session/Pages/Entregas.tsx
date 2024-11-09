import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação
import Sidebar from '../SidebarSession';
import InfoPerfil from '../InfoPerfil';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';
import DashboardEntregas from '../DashboardEntregas';

interface SessaoLogadaProps {}

const Entregas: React.FC<SessaoLogadaProps> = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const navigate = useNavigate(); // Instancia o hook para navegação

    // Função para lidar com o clique em um item de entrega
    const handleEntregaClick = (status: string) => {
        // Redireciona para a página Rastreio passando o status como propriedade
        navigate('/rastreio', { state: { status } });
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-16">
                {/* Perfil do Usuário */}
                <div className="flex justify-end mb-6 pt-28">

                </div>

                {/* Dashboard de Entregas */}
                <DashboardEntregas onEntregaClick={handleEntregaClick} />
            </div>
        </div>
    );
};

export default Entregas;
