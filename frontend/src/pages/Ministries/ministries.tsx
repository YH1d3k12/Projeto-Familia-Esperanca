/*Documentação
Autor: Iago Tramontin
Data: 22/05/2025
Descrição: Tela de ministérios
*/

import './styles.css';
import image from '../../assets/images/G.png'

function Ministries() {
    const ministerios = [
        { titulo: 'Metanoia: rede de Jovens', texto: '(a partir de 18 anos) se reúne quinzenalmente, sempre aos sábados, às 19h.' },
        { titulo: 'Visionárias: rede de mulheres', texto: 'Encontros mensais para mulheres, em busca do resgate de suas identidades como filhas de Deus e de um relacionamento mais profundo com o Amado de nossas almas - Jesus! Mensalmente as sextas-feiras.' },
        { titulo: 'Homens de Honra: rede de Homens', texto: 'Com base na Palavra de Deus, os encontros formam homens bem posicionados em seus papéis na família e na sociedade. Mensalmente às sextas.' },
        { titulo: 'Shout: Rede de Adolescentes', texto: 'A galera mais animada da Família! Shout (13 a 17 anos). Acontece quinzenalmente aos sábados, às 18h.' },
        { titulo: 'Plug: Rede para crianças de 3 a 8 anos', texto: 'Acontece simultaneamente às nossas celebrações aos domingos, às 18h, no Instituto Esperança.' },
        { titulo: 'GPS: Rede de juniores de 9 a 12 anos', texto: 'Acontece simultaneamente à celebração aos domingos, às 18h, na Nossa Casa.' },
    ];

    return (
        <main className="ministries">
            <div className="content">
                <img src={image} alt="Faixa Etária" className="image" />
                <div className="text-content">
                    <h2 className="title">FAIXA ETÁRIAS</h2>
                    <p className="verse">"O maior entre vocês deverá ser servo."</p>
                    <span className="reference">Mateus 23:11</span>
                </div>
            </div>

            {/* Renderiza as divs dinamicamente */}
            <div className="ministerios-list">
                {ministerios.map((item, index) => (
                    <div key={index} className="ministerio-card">
                        <h3>{item.titulo}</h3>
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Ministries;
