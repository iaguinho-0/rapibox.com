// Dashboard.tsx
import React from 'react';

interface SaleItem {
    codigo: string;
    produto: string;
    preco: number;
    quantidade: number;
    faturamento: number;
    lucro: number;
    entrega: number;
    status: 'SS' | 'MR' | 'PE';
}

const Dashboard: React.FC = () => {
    const salesData: SaleItem[] = [
        {
            codigo: '10578668',
            produto: 'Electric Scooter',
            preco: 218.00,
            quantidade: 1,
            faturamento: 300.00,
            lucro: 218.00,
            entrega: 82.00,
            status: 'SS',
        },
        // Adicione mais itens conforme necessário
    ];

    const getStatusLabel = (status: SaleItem['status']) => {
        switch (status) {
            case 'SS':
                return 'Solicitando Serviço';
            case 'MR':
                return 'Motoboy em Rota';
            case 'PE':
                return 'Produto Entregue';
            default:
                return 'Status Desconhecido';
        }
    };

    return (
        <div className="w-full max-w-[1400px] bg-white rounded-lg p-6 shadow-2xl text-black mx-auto min-h-[600px] min-w-[1000px]">
            <h2 className="text-2xl font-bold text-start text-gray-800 mb-6 text-center">
                Pedidos no total: {salesData.length}
            </h2>
            <h3 className="text-1xl font-light text-start text-gray-800 mb-4 text-center">
                Padrão
            </h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-left">Código</th>
                        <th className="border px-4 py-2 text-left">Produto</th>
                        <th className="border px-4 py-2 text-left">Preço (R$)</th>
                        <th className="border px-4 py-2 text-left">Quantidade</th>
                        <th className="border px-4 py-2 text-left">Faturamento (R$)</th>
                        <th className="border px-4 py-2 text-left">Lucro (R$)</th>
                        <th className="border px-4 py-2 text-left">Entrega (R$)</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((item) => (
                        <tr key={item.codigo} className="odd:bg-gray-100">
                            <td className="border px-4 py-2">{item.codigo}</td>
                            <td className="border px-4 py-2">{item.produto}</td>
                            <td className="border px-4 py-2">{item.preco.toFixed(2)}</td>
                            <td className="border px-4 py-2">{item.quantidade}</td>
                            <td className="border px-4 py-2">{item.faturamento.toFixed(2)}</td>
                            <td className="border px-4 py-2">{item.lucro.toFixed(2)}</td>
                            <td className="border px-4 py-2">{item.entrega.toFixed(2)}</td>
                            <td className="border px-4 py-2">{getStatusLabel(item.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
