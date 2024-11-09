import React from 'react';

export const Divider: React.FC = () => {
  return (
    <div className="h-96 flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl text-black font-bold mb-4"> Se interessou? </h1>
        <h1 className="text-6xl text-black font-semibold pt-4 mb-4"> Venha fazer parte da Rapibox. </h1>
        <button className="mt-6 h-14 w-60 bg-orange-500 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-orange-800" >
          Traga sua empresa 
        </button>
      </div>
    </div>
  );
};


