import React from 'react';

interface DeliveryItem {
    codigo: string;
    produto: string;
    quantidade: number;
    dataEmissao: string;
    dataEntrega: string;
    enderecoEntrega: string;
    status: 'SS' | 'MR' | 'PE';
}

interface DashboardEntregasProps {
    onEntregaClick: (status: DeliveryItem['status']) => void;
}

const DashboardEntregas: React.FC<DashboardEntregasProps> = ({ onEntregaClick }) => {
    const deliveryData: DeliveryItem[] = [
        {
            codigo: '3354654654526',
            produto: 'Cadeira Gamer - Fortrek',
            quantidade: 51,
            dataEmissao: '15/08/2025',
            dataEntrega: '16/09/2025',
            enderecoEntrega: 'Av. Exemplo, 123 - Cidade, Estado',
            status: 'SS',
        },
        {
            codigo: '2384654654789',
            produto: 'Mouse Gamer',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'MR',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        {
            codigo: '238462354654789',
            produto: 'BOLA',
            quantidade: 10,
            dataEmissao: '20/08/2025',
            dataEntrega: '25/09/2025',
            enderecoEntrega: 'Rua Exemplo, 456 - Cidade, Estado',
            status: 'PE',
        },
        // Adicione mais itens conforme necessário
    ];

    const getStatusLabel = (status: DeliveryItem['status']) => {
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
            <h2 className="text-1xl font-bold text-start text-gray-800 ">
            {deliveryData.length} Pedidos no total
            </h2>
            <h2 className="text-1xl font-semibold text-start text-gray-400 mb-6">
                Padrão
            </h2>

            <h2 className="text-1xl font-medium text-start text-gray-800 mt-6 mb-4">
            Clique no item para <span className="text-blue-600">rastrear.</span>
            </h2>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-left">Código</th>
                        <th className="border px-4 py-2 text-left">Produto</th>
                        <th className="border px-4 py-2 text-left">Quantidade</th>
                        <th className="border px-4 py-2 text-left">Data de Emissão</th>
                        <th className="border px-4 py-2 text-left">Data de Entrega</th>
                        <th className="border px-4 py-2 text-left">Endereço de Entrega</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryData.map((item) => (
                        <tr
                            key={item.codigo}
                            className="odd:bg-gray-100 cursor-pointer"
                            onClick={() => onEntregaClick(item.status)} // Chama onEntregaClick ao clicar na linha
                        >
                            <td className="border px-4 py-2">{item.codigo}</td>
                            <td className="border px-4 py-2">{item.produto}</td>
                            <td className="border px-4 py-2">{item.quantidade}</td>
                            <td className="border px-4 py-2">{item.dataEmissao}</td>
                            <td className="border px-4 py-2">{item.dataEntrega}</td>
                            <td className="border px-4 py-2">{item.enderecoEntrega}</td>
                            <td className="border px-4 py-2">{getStatusLabel(item.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardEntregas;
