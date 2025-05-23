import F from '../../assets/images/F.png';
import I from '../../assets/images/I.png';
import './styles.css';

function About() {
    return (
        <main className="about">
            <section className="about-paradigm page-screen page-padding">
                <div className="about-paradigm-bg-image">
                    <img src={F} className="" />
                </div>
                <h1>
                    <span>Quem</span>
                    <br />
                    <span>Somos</span>
                </h1>
                <div>
                    <div>
                        <h3>Missão</h3>
                        <p>
                            Ser uma igreja família, que transforma pessoas
                            comuns em discípulos extraordinários de Jesus, e que
                            sejam frutíferos em todas as áreas.
                        </p>
                    </div>
                    <div>
                        <h3>Visão</h3>
                        <p>Ganhar o perdido a qualquer custo.</p>
                    </div>
                    <div>
                        <h3>Valores</h3>
                        <p>
                            Família, honra, amor, generosidade, excelência,
                            gratidão e a fidelidade a palavra
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Nossos pastores</h2>
                <h3>Daniela Pardini</h3>
            </section>
            <section>
                <h3>Felipe Pardini</h3>
            </section>
            <section>
                <h3>Nossa identidade é de adoração</h3>
            </section>
        </main>
    );
}

export default About;
