import './Features.css'

function Features() {
    return (
        <section className="features">

            <div className="container">

                <h2>Por que usar o LuminForge?</h2>
                <p>Uma plataforma criada para organizar sua jornada de aprendizado em Inteligência Artificial.</p>

                <div className="features-grid">

                    <div className="card">
                        <span className="feature-icon">📚</span>
                        <h3>Learn</h3>
                        <p>Organize your AI learning journey with structured roadmaps.</p>
                    </div>

                    <div className="card">
                        <span className="feature-icon">🚀</span>
                        <h3>Build</h3>
                        <p>Create real-world projects to strengthen your portfolio.</p>
                    </div>

                    <div className="card">
                        <span className="feature-icon">📈</span>
                        <h3>Evolve</h3>
                        <p>Track your progress and prepare for an AI career.</p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Features