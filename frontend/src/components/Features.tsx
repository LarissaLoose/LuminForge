import './Features.css'

function Features() {
    return (
        <section className="features">

            <div className="container">

                <h2>Por que usar o LuminForge?</h2>

                <p>
                    Uma plataforma criada para organizar sua jornada de aprendizado em Inteligência Artificial.
                </p>

                <div className="features-grid">

                    <div className="card">
                        <h3>📚 Aprenda</h3>

                        <p>
                            Organize seus estudos em um único lugar.
                        </p>
                    </div>

                    <div className="card">
                        <h3>🚀 Construa</h3>

                        <p>
                            Desenvolva projetos reais para seu portfólio.
                        </p>
                    </div>

                    <div className="card">
                        <h3>📈 Evolua</h3>

                        <p>
                            Acompanhe sua evolução rumo à carreira em IA.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Features