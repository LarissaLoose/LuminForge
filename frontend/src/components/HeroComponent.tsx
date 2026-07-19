import './Hero.css'
function HeroComponent() {
    return (
        <section className="hero">

            <div className="container hero-content">

                <h1>LuminForge</h1>

                <h2>Forge your AI future.</h2>

                <p>
                    Organize seus estudos, construa projetos reais e acompanhe sua evolução rumo à carreira em Inteligência Artificial.
                </p>


                <div className="hero-buttons">

                    <button className="btn btn-primary">
                        Começar Agora
                    </button>

                    <button className="btn btn-secondary">
                        Ver Github
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent