import React from 'react';
import banner2 from '../assets/banner02.png';
import logo from '../assets/Logo.png';
import logo2 from '../assets/Logo2.png';

function Login() {
  return (
    <div className="flex min-h-screen w-screen overflow-hidden  bg-white shadow-lg">
      {/* Seção com imagem de fundo */}
     <div 
        className="hidden md:flex w-2/5 h-screen pl-12 contrast-125 hover:contrast-150 cursor-pointer"
        style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: '.5s' }}
      > 
      
        <div className="flex flex-col justify-center items-start  w-full h-full p-7 p-8 ">
        <img src={logo} alt="Logo" className="h-18 mb-8 w-auto  " /> {/* Ajuste a altura conforme necessário */}
          <h1 className="text-start font-bold text-white" style={{fontSize: 'clamp(26px, 3.7vw, 4rem)'}}>
            Descubra como a Rapibox pode transformar a gestão do seu estoque e a entrega de produtos!
          </h1>
          <h2 className="mt-4 text-white text-start mt-2"  style={{fontSize: 'clamp(14px, 3vw, 2.25rem)'}}>
            Venha experimentar a facilidade de gerenciar seu inventário e garantir entregas rápidas e seguras.
          </h2>
        </div>
      </div>

      {/* Caixa de Login */}
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 mt-10 p-8">
        <div className="w-full max-w-md space-y-4 bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
        <img src={logo2} alt="Logo" className="h-18 mb-8 w-auto" />{}
          <h1 className="text-4xl font-bold text-black">Acesse sua Conta</h1>
          <h2 className="text-lg text-gray-700 text-start">
            Preencha com seu e-mail e senha para acessar sua conta na plataforma.
          </h2>

          <div className="relative mb-4">
            <input
              id="username" // Adicione um id ao input
              type="text"
              placeholder=" "
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
              required
            />
            <label
              htmlFor="username" // Associa o label ao input
              className="absolute left-2 top-2 transition-transform duration-500 ease-in-out transform origin-top-left scale-100 text-gray-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-500 peer-valid:-translate-y-6 peer-valid:scale-75 peer-valid:text-orange-500 cursor-text"
            >
              Usuário
            </label>
          </div>

          <div className="relative mb-4">
            <input
              id="password" // Adicione um id ao input
              type="password"
              placeholder=" "
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg transition duration-300 ease-in-out focus:border-orange-500 focus:ring-0 focus:outline-none shadow-sm peer text-black"
              required
            />
            <label
              htmlFor="password" // Associa o label ao input
              className="absolute left-2 top-2 transition-transform duration-500 ease-in-out transform origin-top-left scale-100 text-gray-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-orange-500 peer-valid:-translate-y-6 peer-valid:scale-75 peer-valid:text-orange-500 cursor-text"
            >
              Senha
            </label>
          </div>
          


          <small className="text-gray-500 text-left block">
            Não tem uma conta? <a href="/register" className="text-blue-600 hover:underline">Registre-se aqui</a>
          </small>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg transition-colors duration-500 hover:bg-orange-700 border-none">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
