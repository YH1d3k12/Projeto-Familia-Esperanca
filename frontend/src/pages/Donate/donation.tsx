import { FaLongArrowAltRight } from 'react-icons/fa';
import video from '../../assets/video.mp4';
import A from '../../assets/images/A.jpg';
import B from '../../assets/images/B.jpg';
import C from '../../assets/images/C.jpg';
import './styles.css';

function Donate() {
  return (
    <main className="donate page-padding">
      <h1>Doe para a Igreja Família Esperança</h1>
      <p>
        Sua contribuição nos ajuda a manter nossas atividades, projetos sociais e infraestrutura.
      </p>
      {/* aqui você pode adicionar botões, formulários ou links de pagamento */}
      <button className="donate-button">Quero doar</button>
    </main>
  );
}

export default Donate;
