import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Ajuste o caminho se necessário

const Footer: React.FC = () => {
    const navigate = useNavigate();

     // Função personalizada para rolagem suave com requestAnimationFrame
  const scrollToTop = () => {
    const start = window.scrollY;  // Posição atual
    const end = 0;  // Posição final (topo da página)
    const distance = start - end;  // Distância total para rolar
    let startTime: number;

    // Função de animação que será chamada a cada frame
    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;  // Marca o tempo de início
      const progress = timestamp - startTime;  // Progresso da animação
      const scrollPosition = start - (progress / 1000) * distance; // Calcula a nova posição de rolagem

      window.scrollTo(0, scrollPosition);  // Rola para a nova posição

      if (progress < 1100) {  // Duração da rolagem, 1100ms = 1.1 segundos
        requestAnimationFrame(animateScroll);  // Continua chamando a animação
      } else {
        window.scrollTo(0, end);  // Garante que a rolagem chegue ao topo
      }
    };

    // Inicia a animação
    requestAnimationFrame(animateScroll);
  };

  return (
    <div className='bg-orange-500 text-white py-20 flex items-center justify-center flex-col'>
        <div className='flex flex-row justify-between'>
            
                    <div className="cursor-pointer flex justify-start">
                        <svg width="86" height="42" viewBox="0 0 118 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.36755 20.8291C8.73191 20.8291 10.4783 21.0467 11.8154 22.4335C12.8523 23.494 13.3707 25.0711 13.3707 26.5123C13.3707 28.0622 12.825 29.4218 11.9245 30.292C11.2151 30.9718 10.26 31.3797 9.41409 31.5428L15.1171 38.9662H9.25037L4.72069 32.0051V38.9662H0V20.8291H7.36755ZM4.72069 28.9596H5.62117C6.33064 28.9596 7.34027 28.7692 7.9133 28.2254C8.26803 27.8719 8.51362 27.2737 8.51362 26.7026C8.51362 26.1316 8.29532 25.5606 7.88601 25.1799C7.44941 24.7448 6.65808 24.4729 5.62117 24.4729H4.72069V28.9596Z" fill="white"/>
                            <path d="M26.1412 26.8114H30.5071V38.9662H26.1412V37.6338C25.1315 39.0206 23.5489 39.3741 22.3482 39.3741C21.0385 39.3741 19.4285 38.9934 17.955 37.4435C16.7817 36.1926 16.2086 34.8059 16.2086 32.984C16.2086 30.6999 17.1091 29.0955 18.0914 28.1166C19.1284 27.0833 20.7383 26.4035 22.4847 26.4035C24.4494 26.4035 25.6227 27.4096 26.1412 27.9806V26.8114ZM21.5569 30.8902C20.9566 31.4612 20.6837 32.2498 20.6837 32.8752C20.6837 33.5822 20.9839 34.3436 21.5296 34.8602C21.9935 35.2953 22.7576 35.676 23.4943 35.676C24.2311 35.676 24.9132 35.3769 25.459 34.833C25.841 34.4524 26.2776 33.8541 26.2776 32.8752C26.2776 32.3042 26.1139 31.5428 25.4317 30.8902C25.0224 30.5095 24.3948 30.1016 23.467 30.1016C22.9213 30.1016 22.1845 30.292 21.5569 30.8902Z" fill="white"/>
                            <path d="M37.8747 45.1932H33.5087V26.8114H37.8747V28.1438C38.6387 27.1921 39.8121 26.4035 41.613 26.4035C43.414 26.4035 44.9694 27.1921 45.9517 28.171C46.934 29.1499 47.8072 30.7814 47.8072 32.8752C47.8072 34.969 47.0159 36.5461 45.8426 37.6882C44.4782 39.0206 42.8955 39.3741 41.6676 39.3741C40.8763 39.3741 39.239 39.211 37.8747 37.797V45.1932ZM38.5842 30.9174C38.0384 31.4612 37.7382 32.2498 37.7382 32.9296C37.7382 33.6094 38.1203 34.398 38.5842 34.8602C39.1026 35.3769 39.8121 35.676 40.5488 35.676C41.2856 35.676 41.9951 35.3769 42.4862 34.8602C42.9501 34.398 43.3321 33.6638 43.3321 32.9296C43.3321 32.2498 43.032 31.4612 42.4862 30.9174C41.9951 30.4007 41.3129 30.1016 40.5488 30.1016C39.7848 30.1016 39.1026 30.4007 38.5842 30.9174Z" fill="white"/>
                            <path d="M52.5007 19.3064C53.865 19.3064 54.9565 20.394 54.9565 21.7537C54.9565 23.1133 53.865 24.2009 52.5007 24.2009C51.1363 24.2009 50.0448 23.1133 50.0448 21.7537C50.0448 20.394 51.1363 19.3064 52.5007 19.3064ZM54.6836 26.8114V38.9662H50.3177V26.8114H54.6836Z" fill="white"/>
                            <path d="M62.0239 19.1432V27.9806C62.8152 27.1377 63.9885 26.4035 65.6531 26.4035C67.1539 26.4035 68.7638 26.893 69.9644 28.035C71.0832 29.0955 71.9564 30.7814 71.9564 32.848C71.9564 34.7787 71.2197 36.4918 69.9917 37.6882C68.8457 38.8031 67.454 39.3741 65.7076 39.3741C64.8617 39.3741 63.2518 39.211 62.0239 37.6338V38.9662H57.6579V19.1432H62.0239ZM66.6354 34.8602C67.2084 34.2892 67.4813 33.5822 67.4813 32.9568C67.4813 32.141 67.1266 31.3796 66.6354 30.8902C66.2534 30.5095 65.6258 30.1016 64.698 30.1016C63.8794 30.1016 63.1972 30.4007 62.706 30.9174C62.2694 31.3796 61.8874 32.1954 61.8874 32.8752C61.8874 33.6094 62.2422 34.4252 62.8152 34.9418C63.2791 35.3497 63.9885 35.676 64.698 35.676C65.3256 35.676 66.0351 35.4585 66.6354 34.8602Z" fill="white"/>
                            <path d="M86.7461 37.3619C85.1362 38.939 83.2534 39.3741 81.2887 39.3741C79.515 39.3741 77.5503 39.0206 75.8585 37.3619C74.5215 36.0567 73.9757 34.5067 73.9757 32.8752C73.9757 30.6999 74.958 29.2859 75.8585 28.4157C76.8682 27.4368 78.6418 26.4035 81.2887 26.4035C83.9355 26.4035 85.7365 27.464 86.7461 28.4157C87.6466 29.2859 88.6289 30.6999 88.6289 32.8752C88.6289 34.5067 88.0832 36.0567 86.7461 37.3619ZM79.3513 30.8902C78.8055 31.4068 78.5054 32.1682 78.5054 32.8752C78.5054 33.5822 78.8601 34.3164 79.3513 34.8059C79.8697 35.3225 80.5792 35.6216 81.316 35.6216C82.0527 35.6216 82.7349 35.3225 83.2534 34.8059C83.7991 34.2892 84.0993 33.5822 84.0993 32.8752C84.0993 32.2226 83.7991 31.434 83.2534 30.8902C82.7622 30.4279 81.9982 30.1016 81.316 30.1016C80.6338 30.1016 79.8425 30.4279 79.3513 30.8902Z" fill="white"/>
                            <path d="M95.0414 32.3586L90.1024 26.8114H95.7782L97.8793 29.313L100.035 26.8114H105.683L100.635 32.3586L106.748 38.9662H100.963L97.852 35.3497L94.7413 38.9662H88.9564L95.0414 32.3586Z" fill="white"/>
                            <path d="M49.5591 17.5606V0L117.079 0.0380689L117.09 57H49.5591L49.5645 40.9295H55.6005L55.595 51.1048H110.95L110.939 6.09102L55.595 6.09646V17.5606H49.5591Z" fill="#0C4CD1"/>
                        </svg>

                    </div>
                        <div className="px-14 text-left text-2xl font-jost">
                            <h6>123 Brotas. #22B</h6>
                            <h6>Rua Chile, Brotas 446350-565</h6>
                        </div>
                
                
                        <div className='text-left text-1xl font-jost'>
                            <ul className='text-white font-thin text-opacity-90'>
                                <li className='cursor-pointer'>Sobre</li>
                                <li className='cursor-pointer'>Mercado</li>
                                <li className='cursor-pointer'>Parceiros</li>
                                <li className='cursor-pointer'>Contato</li>
                            </ul>
                        </div>
                        <div className='text-left text-1xl font-jost flex flex-row'>
                            <ul className=''  style={{ marginLeft: '10vw', marginRight: '10vw' }}>
                                <li><a href="https://facebook.com" target='_blank' className='text-white hover:text-text-blue-600 active:scale-95 transition-all duration-500'>Facebook</a></li>
                                <li><a href="https://google.com" target='_blank' className='text-white hover:text-text-blue-600 active:scale-95 transition-all duration-500'>Twitter</a></li>
                                <li><a href="https://linkedin.com" target='_blank' className='text-white hover:text-text-blue-600 active:scale-95 transition-all duration-500'>LinkedIn</a></li>
                                <li><a href="https://instagram.com" target='_blank' className='text-white hover:text-text-blue-600 active:scale-95 transition-all duration-500'>Instagram</a></li>
                            </ul>
                
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-up-circle-fill cursor-pointer transition duration-500 hover:text-blue-600" viewBox="0 0 16 16"  onClick={scrollToTop}>
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                                </svg>
                        </div>
            
        </div>

         <div className='flex flex-row pt-20  gap-x-10 md:gap-x-20 lg:gap-x-40 xl:gap-x-60'>
                 <div className='space-y-2 text-left'>
                        <p className='cursor-pointer text-white font-light text-opacity-85 relative group inline-block'>
                                (71) 3356-84321
                                <span className='absolute left-0 -bottom-1 w-full h-px bg-white opacity-70 scale-x-0 group-hover:scale-x-95 transition-transform duration-500 ease-in-out'></span>
                            </p>
                        <p className='cursor-pointer text-white font-light text-opacity-85 relative group'>
                            contatoRapibox@email.com
                            <span className='absolute left-0 -bottom-1 w-full h-px bg-white opacity-70 scale-x-0 group-hover:scale-x-95 transition-transform duration-500 ease-in-out'></span>
                        </p>
                 </div>

                <p className='text-xs text-white font-light text-opacity-75 flex items-end pb-1'>© 2020 Rapibox media. All rights reserved.</p>
         </div>
    </div>

  ); 
};

export default Footer;
