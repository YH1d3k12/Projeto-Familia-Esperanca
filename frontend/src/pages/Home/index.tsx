import video from '../../assets/video.mp4';
import A from '../../assets/images/A.jpg';
import B from '../../assets/images/B.jpg';
import C from '../../assets/images/C.jpg';
import './styles.css';

function Home() {
    return (
        <main className="multi-page-container home">
            <section className="home-hero page-screen">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src={video} type="video/mp4" />
                </video>

                <div className="home-hero-text">
                    <h1>
                        Uma família para
                        <br />
                        <span>pertencer</span>
                    </h1>
                </div>
            </section>
            <section className="home-mission page-padding">
                <h3>Nossa missão é...</h3>
                <p>
                    <i>
                        Transformar pessoas comuns em discípulos extraordinários
                        de Jesus
                    </i>
                </p>
            </section>
            <section className="home-about page-screen page-padding">
                <div className="home-about-images-container">
                    <img src={A} className="home-about-image" />
                    <img src={B} className="home-about-image" />
                    <img src={C} className="home-about-image" />
                </div>
                <h3>
                    Nossas
                    <br />
                    <strong>Celebrações</strong>
                </h3>
                <ul className="home-about-list">
                    <li>
                        <strong>Domingo</strong>
                        <hr />
                        9h & 18h
                    </li>
                    <li>
                        <strong>Quinta</strong>
                        <hr />
                        20h
                    </li>
                    <li>
                        <strong>Shout</strong>
                        <hr />
                        Sábado - 18h
                    </li>
                    <li>
                        <strong>Metanoia</strong>
                        <hr />
                        Sábado - 19h
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Home;
