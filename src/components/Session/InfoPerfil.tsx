// components/InfoPerfil.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ConfiguracaoICO from '../../assets/ConfiguracaoICO.png';
import NotificacaoICO from '../../assets/NotificacaoICO.png';

interface InfoPerfilProps {
    name: string;
    cargo: string;
    profileImage: string; // URL da imagem de perfil
    onNotificationClick: () => void;
}

const InfoPerfil: React.FC<InfoPerfilProps> = ({ name, cargo, profileImage, onNotificationClick }) => {
    const navigate = useNavigate();

    return (
        <div className="absolute top-6 right-6 flex items-center space-x-4 p-2">
            {/* Ícone de Notificação */}
            <button
                onClick={onNotificationClick}
                className="text-gray-600 hover:text-gray-800 bg-transparent"
            >
                <img src={NotificacaoICO} alt="Notificação" className="w-6 h-6" />
            </button>

            {/* Foto de Perfil */}
            <img src={profileImage} alt="Perfil" className="w-16 h-16 rounded-lg" />

            {/* Informações do Perfil */}
            <div className="text-left">
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{cargo}</p>
            </div>

            {/* Botão de Configurações */}
            <button
                onClick={() => navigate('/dados-pessoais')} // Redireciona para /dados-pessoais
                className="hover:text-gray-800 bg-transparent"
            >
                <img src={ConfiguracaoICO} alt="Configurações" className="w-6 h-6" />
            </button>
        </div>
    );
};

export default InfoPerfil;
