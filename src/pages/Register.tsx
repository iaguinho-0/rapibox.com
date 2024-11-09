import React, { useState } from 'react';
import banner2 from '../assets/banner02.png';
import logo from '../assets/Logo.png';
import logo2 from '../assets/Logo2.png';
import { ResponsiveNavbar } from '../components/ResponsiveNavbar';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuarioData, setUsuarioData] = useState({
    nomeCompleto: '',
    email: '',
    nomeUsuario: '',
    senha: '',
    confirmeSenha: '',
  });

  const [erro, setErro] = useState(''); // Estado para armazenar a mensagem de erro
  const navigate = useNavigate(); //Navegar entre as páginas
  const [isLoading, setIsLoading] = useState(false); //Quando o usuario clicar em Cadastrar, mudará o botão para 'Carregando...'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });
      console.log(usuarioData)

      if (!response.ok) {
        const text = await response.text();
        console.log(text);
        try {
            const errorData = JSON.parse(text);
            setErro(errorData.mensagem || 'Erro ao cadastrar');
        } catch (e) {
            console.error('Erro ao interpretar a resposta:', e);
            setErro('Ocorreu um erro inesperado.');
        }
        setTimeout(() => setErro(''), 5000);
    } else {
        console.log('Cadastro realizado com sucesso!');
        //Aqui será responsável por encaminhar as informações do usuario para outra página
        navigate('/login') 
        
    }
    } catch (error) {
      console.error('Erro de rede:', error);
      setErro('Erro de rede, tente novamente.'); // Defina a mensagem de erro para falhas de rede
      setTimeout(() => setErro(''), 5000); // Limpa a mensagem após 5 segundos
    } finally {
      setIsLoading(false);
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
          <h1 className="text-4xl font-bold text-black">Cadastre sua conta</h1>

          {/* Exibir mensagem de erro se houver */}
          {erro && (
            <div className="bg-red-500 text-white p-2 rounded mb-4">
              {erro}
            </div>
          )}

          <form onSubmit={handleSubmit}>
                        
            <div className="relative mb-4">
              <input
                id='nome'
                type="text"
                name="nomeCompleto"
                placeholder=" "
                onChange={handleChange}
                className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
                required
              />
              <label
                  htmlFor="nome"
                  className="absolute left-2 top-2 transition-transform duration-500 cursor-text transform scale-100 text-gray-400 cursor-text
                            peer-focus:-translate-y-7 peer-focus:scale-75
                            peer-valid:-translate-y-7 peer-valid:scale-75"
                >
                Nome Completo
              </label>
            </div>
            
            <div className="relative mb-4">
              <input
                id='email'
                type="email"
                name="email"
                placeholder=" "
                onChange={handleChange}
                className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
                required
              />
              <label
                  htmlFor="email"
                  className="absolute left-2 top-2 transition-transform duration-300 cursor-text transform scale-100 text-gray-400 cursor-text
                            peer-focus:-translate-y-7 peer-focus:scale-75
                            peer-valid:-translate-y-7 peer-valid:scale-75"
                >
                E-mail
              </label>
            </div>

            <div className="relative mb-4">
              <input
                id='user'
                type="text"
                name="nomeUsuario"
                placeholder=" "
                onChange={handleChange}
                className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
                required
              />
              <label
                  htmlFor="user"
                  className="absolute left-2 top-2 transition-transform duration-300 cursor-text transform scale-100 text-gray-400 cursor-text
                            peer-focus:-translate-y-7 peer-focus:scale-75
                            peer-valid:-translate-y-7 peer-valid:scale-75"
                >
                Usuário
              </label>
            </div>


            <div className="relative mb-4">
              <input
                id='senha'
                type="password"
                name="senha"
                placeholder=" "
                onChange={handleChange}
                className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
                required
              />
              <label
                  htmlFor="senha"
                  className="absolute left-2 top-2 transition-transform duration-300 cursor-text transform scale-100 text-gray-400 cursor-text
                            peer-focus:-translate-y-7 peer-focus:scale-75
                            peer-valid:-translate-y-7 peer-valid:scale-75"
                >
                Senha
              </label>
            </div>
            
            <div className="relative mb-6">
              <input
                id='confirmar-senha'
                type="password"
                name="confirmeSenha"
                placeholder=" "
                onChange={handleChange}
                className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
                required
              />
              <label
                htmlFor="confirmar-senha"
                className="absolute left-2 top-2 transition-transform duration-300 cursor-text transform scale-100 text-gray-400 cursor-text
                          peer-focus:-translate-y-7 peer-focus:scale-75
                          peer-valid:-translate-y-7 peer-valid:scale-75"
              >Confirme a senha
              </label>
            </div>


            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg transition-colors duration-500 hover:bg-orange-700 border-none focus:outline-none"
              disabled={isLoading} //quando o usuario clicar, este botão vai ser desativado, pois se o arrombado ficar clicando infinitamente no botão em tempo de execução com o banco de dados, vai quebrar o sistema
            >
              {isLoading ? 'Carregando...' : 'Cadastrar'}
            </button>
          </form>
        </div>
        <h3 className="text-gray-500 text-left block mt-6">
          Já tenho uma conta! <a href="/login" className="text-orange-600 hover:underline">Acessar</a>
        </h3>
      </div>
    </div>
  );
}

export default Login;
