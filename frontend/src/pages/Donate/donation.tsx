// import { FaLongArrowAltRight } from 'react-icons/fa';
// import video from '../../assets/video.mp4';
// import A from '../../assets/images/A.jpg';
// import B from '../../assets/images/B.jpg';
// import C from '../../assets/images/C.jpg';

import './styles.css';

function Donate() {
  return (
    <main className="donate page-padding">
      <h1>Doe para a Igreja Família Esperança</h1>
      <p>
        Sua contribuição nos ajuda a manter nossas atividades, projetos sociais e infraestrutura.
      </p>

      <div className='container'>
        <p><strong>Banco:</strong> Coop Sicredi</p>
        <p><strong>Agência:</strong> 2602</p>
        <p><strong>Conta:</strong> 16949-8</p><br />
        <p><strong>Chave Pix:</strong> 62.955.505/0256-66</p>
        <button className="donate-button">Quero doar</button>
      </div>
    </main>
  );
}


export default Donate;