import video from '../../assets/video.mp4';
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
        </main>
    );
}

export default Home;
