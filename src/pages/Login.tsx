import React from 'react';
import banner2 from '../assets/banner02.png';
import logo from '../assets/Logo.png';

function Login() {
  return (
    <div className="flex min-h-screen w-screen overflow-hidden  bg-white shadow-lg">
      {/* Seção com imagem de fundo */}
     <div 
        className="hidden md:flex w-2/5 h-screen pl-12 contrast-125 hover:contrast-150 cursor-pointer"
        style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      > 
      
        <div className="flex flex-col justify-center items-start  w-full h-full p-7 p-8 ">
        <img src={logo} alt="Logo" className="h-18 mb-8 w-auto  " /> {/* Ajuste a altura conforme necessário */}
          <h1 className="text-6xl text-start font-bold text-white">
            Descubra como a Rapibox pode transformar a gestão do seu estoque e a entrega de produtos!
          </h1>
          <h2 className="text-4xl mt-4 text-white text-start mt-2">
            Venha experimentar a facilidade de gerenciar seu inventário e garantir entregas rápidas e seguras.
          </h2>
        </div>
      </div>

      {/* Caixa de Login */}
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 mt-10 p-8">
        <div className="w-full max-w-md space-y-4 bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-black">Acesse sua Conta</h1>
          <h2 className="text-lg text-gray-700 text-start">
            Preencha com seu e-mail e senha para acessar sua conta na plataforma.
          </h2>

          <input
            type="text"
            placeholder="Usuário"
            className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4"
          />

          <small className="text-gray-500 text-left block">
            Não tem uma conta? <a href="/register" className="text-blue-600 hover:underline">Registre-se aqui</a>
          </small>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-700">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
