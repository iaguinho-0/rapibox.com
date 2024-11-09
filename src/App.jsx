import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ResponsiveNavbar } from './components/ResponsiveNavbar';
import { HomeBanner } from './components/HomeBanner.tsx';
import { UtilitiesBanner } from './components/UtilidadesBanner.tsx';
import { Divider } from './components/Divider.tsx';
import { InfoSection } from './components/InfoSection.tsx';
import { UnidadesMapa } from './components/UnidadesMapa.tsx';
import { Faq } from './components/Faq.tsx';

import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Footer from './components/Footer.tsx';

import SessaoLogada from './pages/SessaoLogada.tsx';
import Dashboard from './components/Session/Dashboard.tsx';
import Produtos from './components/Session/Pages/Produtos.tsx';
import Cadastrar from './components/Session/Pages/Cadastrar.tsx';
import Entregas from './components/Session/Pages/Entregas.tsx';
import DadosPessoais from './components/Session/Pages/DadosPessoais.tsx';
import EnviarProduto from './components/Session/Pages/EnviarProduto';
import RastreioPage from './components/Session/RastreioPage.tsx'; // Certifique-se de importar o componente

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <link
                href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap"
                rel="stylesheet"
            />
            
            <Routes>
                <Route path="/" element={
                    <>
                        <ResponsiveNavbar />    
                        <HomeBanner/>
                        <UtilitiesBanner/>
                        <Divider/>
                        <InfoSection/>
                        <UnidadesMapa/>
                        <Faq/>
                        <Footer/>
                    </>
                } />
                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Session Routes */}
                <Route path="/SessaoLogada" element={<SessaoLogada />} />
                <Route path="/SessaoLogada/produtos" element={<Produtos />} /> 
                <Route path="/SessaoLogada/cadastrar" element={<Cadastrar />} /> 
                <Route path="/SessaoLogada/entregas" element={<Entregas />} /> 
                
                {/* Adicione as rotas do dashboard */}
                <Route path="/dashboard/*" element={<Dashboard />} /> 
                <Route path="/dados-pessoais" element={<DadosPessoais />} />

                {/* Nova rota para a página de envio do produto */}
                <Route path="/enviar-produto/:produtoId" element={<EnviarProduto />} />
                
                {/* Nova rota para RastreioPage */}
                <Route path="/rastreio" element={<RastreioPage />} />
            </Routes>
        </Router>
    );
}

export default App;
