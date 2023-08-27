import "./HeroStyles.css";
import People from "./people.jpg";

export function HeroSection() {
    return (
        <div className="hero-section">
            {/* Hero Section */}
            <div className="hero-section-grid">
                <div className="hero-section-text">
                    <h1>Register now, Vote later.</h1>
                    <div className="hero-section-message">
                        I invite you to continue the movement and discussion with us by joining,
                        Mark Your Presence organisation.
                        Let's keep talking about these issues and supporting one another. Everyone is welcomed.
                    </div>
                    <div className="hero-section-image">
                        <img src={People} alt="Hero section" width={450}/>
                    </div>
                </div>
            </div>
        </div>
    )
}