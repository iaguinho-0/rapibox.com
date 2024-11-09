import React, { useState } from 'react';
import banner2 from '../assets/banner02.png';
import logo from '../assets/Logo.png';
import logo2 from '../assets/Logo2.png';
import { ResponsiveNavbar } from '../components/ResponsiveNavbar';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuarioData, setUsuarioData] = useState({
    email: '',
    senha: '',
  });

  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Função para atualizar o estado quando o usuário digitar nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData({ ...usuarioData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });

      if (!response.ok) {
        const text = await response.text();
        console.log(text)
        try{
          const errorData = JSON.parse(text)
          setErro(errorData.mensagem || 'Erro ao logar');
        } catch(e){
          console.error('Erro ao interpretar a resposta:', e);
          setErro('Ocorreu um erro inesperado.');
        }
        setTimeout(() => setErro(''), 5000);
      } else {
        const user = await response.json();
        localStorage.setItem('id', user.id)
        navigate('/SessaoLogada')
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      setErro('Erro de rede, tente novamente.');
      setTimeout(() => setErro(''), 5000);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="flex min-h-screen w-screen overflow-hidden bg-white shadow-lg">
         <ResponsiveNavbar />  
      {/* Seção com imagem de fundo */}
      <div
        className="hidden md:flex w-2/5 h-screen pl-12 contrast-125 hover:contrast-150 cursor-pointer"
        style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: '.5s'}}
      >
        <div className="flex flex-col justify-center items-start w-full h-full p-7 p-8">
          <img src={logo} alt="Logo" className="h-18 mb-8 w-auto" />
          <h1 className="text-start font-bold text-white" style={{ fontSize: 'clamp(26px, 3.25vw, 4rem)' }}>
            Descubra como a Rapibox pode transformar a gestão do seu estoque e a entrega de produtos!
          </h1>
          <h2 className="mt-4 text-white text-start mt-2" style={{ fontSize: 'clamp(14px, 2.75vw, 2.25rem)' }}>
            Venha experimentar a facilidade de gerenciar seu inventário e garantir entregas rápidas e seguras.
          </h2>
        </div>
      </div>

      {/* Caixa de Login */}
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 mt-10 p-8">
        <div className="w-full max-w-md space-y-4 bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <img src={logo2} alt="Logo" className="h-18 mb-8 w-auto" />
          <h1 className="text-4xl font-bold text-black">Acesse sua Conta</h1>
          <h2 className="text-lg text-gray-700 text-start">
            Preencha com seu e-mail e senha para acessar sua conta na plataforma.
          </h2>

           {/* Exibir mensagem de erro se houver */}
           {erro && (
            <div className="bg-red-500 text-white p-2 rounded mb-4">
              {erro}
            </div>
          )}

          <form onSubmit={handleSubmit}>
  <div className="relative mb-4">
    <input
      id="email"
      name="email"
      type="text"
      placeholder=" "
      value={usuarioData.email}
      onChange={handleChange}
      className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
      required
    />
    <label
      htmlFor="email"
      className="absolute left-2 top-2 transition-transform duration-300 transform scale-100 text-gray-500 cursor-text
                 peer-focus:-translate-y-7 peer-focus:scale-75 
                 peer-valid:-translate-y-7 peer-valid:scale-75"
    >
      E-mail
    </label>
  </div>

  <div className="relative mb-4">
    <input
      id="senha"
      name="senha"
      type="password"
      placeholder=" "
      value={usuarioData.senha}
      onChange={handleChange}
      className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
      required
    />
    <label
      htmlFor="senha"
      className="absolute left-2 top-2 transition-transform duration-300 transform scale-100 text-gray-500 cursor-text
                 peer-focus:-translate-y-7 peer-focus:scale-75 
                 peer-valid:-translate-y-7 peer-valid:scale-75"
    >
      Senha
    </label>
  </div>

  <small className="text-gray-500 text-left block mb-2">
    Não tem uma conta? <a href="/register" className="text-blue-600 hover:underline">Registre-se aqui</a>
  </small>

  <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg transition-colors duration-500 hover:bg-orange-700 border-none focus:outline-none"
              disabled={isLoading} //quando o usuario clicar, este botão vai ser desativado, pois se o arrombado ficar clicando infinitamente no botão em tempo de execução com o banco de dados, vai quebrar o sistema
            >
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
</form>
        </div>
      </div>
    </div>
  );
}

export default Login;