import './styles.css';

function Home() {
    return (
        <main className="page-screen home">
            <section className="home-hero">
                <div className="home-hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1662826312329-00bca2d79204?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
                <div className="home-hero-text">
                    <h1>
                        Uma família para
                        <br />
                        <span>pertencer</span>
                    </h1>
                </div>
            </section>
        </main>
    );
}

export default Home;
