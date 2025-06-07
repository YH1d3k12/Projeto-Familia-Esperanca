import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { FaPix } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

import './styles.css';

function Donate() {
  const [pixMessageVisible, setPixMessageVisible] = useState(false);

  const handleCopy = (value: string, label: string, feminino = false) => {
    navigator.clipboard.writeText(value);
    const sufixo = feminino ? 'copiada!' : 'copiado!';

    // Para pix, usamos o estado para mostrar mensagem customizada
    if (label === 'Pix') {
      setPixMessageVisible(true);
      setTimeout(() => setPixMessageVisible(false), 3000);
    } else {
      alert(`${label} ${sufixo}`);
    }
  };

  return (
    <main className="donate page-padding">
      <h1>CONTRIBUA</h1>

      <div className="container">
        <p>Banco: Coop Sicredi</p>

        <p>
          Agência: 2602
          <button
            className="copy-icon-button"
            onClick={() => handleCopy('2602', 'Agência', true)}
            title="Copiar Agência"
          >
            <FaRegCopy />
          </button>
        </p>

        <p>
          Conta: 16949-8
          <button
            className="copy-icon-button"
            onClick={() => handleCopy('169498', 'Conta', true)}
            title="Copiar Conta"
          >
            <FaRegCopy />
          </button>
        </p>

        <br />

        <p>
          <FaPix className="pix-icon" />
          Chave Pix: 62.955.505/0256-66
        </p>

        {pixMessageVisible && (
          <div className="pix-message">
            Pix copiado!
          </div>
        )}

        <button
          className="donate-button"
          onClick={() => handleCopy('62955505025666', 'Pix')}
        >
          <IoDocumentText className="donate-icon" />
          COPIAR PIX
        </button>
      </div>
      <div className='bloquinhuu'>
        <h2>“O generoso prosperará; quem dá alívio aos outros, alívio receberá.”</h2>
        <p className="verse">Provérbios 11:25</p>
      </div>
    </main>
  );
}

export default Donate;
