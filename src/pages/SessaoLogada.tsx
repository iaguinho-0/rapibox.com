// SessaoLogada.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Session/SidebarSession.tsx';
import DashBoard from '../components/Session/Dashboard.tsx';
import InfoPerfil from '../components/Session/InfoPerfil.tsx';
import ProfilePerfilMock from '../assets/ProfilePerfilMock2.png';

interface SessaoLogadaProps {}

const SessaoLogada: React.FC<SessaoLogadaProps> = () => {
    const userId = localStorage.getItem('id');
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [fotoUsuario, setFotoUsuario] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/usuarios/${userId}`);
                if (!response.ok) {
                    const text = await response.text();
                    console.log(text);
                }
                const userData = await response.json();
                
                setNomeUsuario(userData.nomeUsuario || '');

    
                if (userData.fotoUsuario) {
                    setFotoUsuario(`data:image/jpeg;base64,${userData.fotoUsuario}`);
                } else {
                    setFotoUsuario(ProfilePerfilMock);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    return (
        <div className="flex">
            <Sidebar />

            <InfoPerfil 
                name={nomeUsuario || ''} 
                cargo={'admin'} 
                profileImage={fotoUsuario || ProfilePerfilMock} // Passar a foto do usuário
                onNotificationClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
            <DashBoard/> 
        </div>
    );
};

export default SessaoLogada;
