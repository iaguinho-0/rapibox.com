import React, { useState } from 'react';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

export const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      pergunta: "Como posso rastrear minha encomenda?",
      resposta: "Para rastrear sua encomenda, acesse o site da transportadora, insira o código de rastreamento fornecido pela loja, e acompanhe as atualizações sobre a localização e o status da entrega."
    },
    {
      pergunta: "Qual é o prazo de entrega para minha região?",
      resposta: "O prazo de entrega para sua região pode variar dependendo da transportadora, do tipo de frete escolhido e da distância entre o remetente e o destinatário. Para obter informações específicas, consulte o site da loja onde fez a compra ou entre em contato com a transportadora, informando seu CEP ou endereço."
    },
    {
      pergunta: "Posso alterar o endereço de entrega depois de enviar?",
      resposta: "Em muitos casos, é possível alterar o endereço de entrega após o envio, mas isso depende da política da transportadora e do estado do envio. "
    },
    {
      pergunta: "O que fazer se meu pacote chegar danificado?",
      resposta: "Se seu pacote chegar danificado, documente o dano com fotos, consulte a política de devolução da loja ou transportadora, e entre em contato com eles informando sobre o problema. Prepare o item para devolução, seguindo as orientações recebidas, e mantenha registros da comunicação e do envio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="h-4/6 bg-gray-50 p-6 flex justify-center">
      <div className="w-1/2 max-w-2xl">
        <h2 className="text-blue-600 text-lg font-medium mb-2">
          Perguntas frequentes
        </h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Dúvidas sobre a RapiBox
        </h1>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-orange-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{item.pergunta}</span>
                {expandedIndex === index ? (
                  <svg 
                    className="h-5 w-5 text-gray-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M20 12H4" 
                    />
                  </svg>
                ) : (
                  <svg 
                    className="h-5 w-5 text-gray-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 pb-4 text-gray-600 bg-white rounded-lg">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};