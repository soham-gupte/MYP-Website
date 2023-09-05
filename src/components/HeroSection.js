import "./HeroStyles.css";
import People from "./people.jpg";
import { Countdown } from "./Countdown";

export function HeroSection() {
    return (
        <div className="hero-section">
            <Countdown/>
            {/* Hero Section */}
            <div className="hero-section-grid">
                <div className="hero-section-text">
                    <h1>Register now, Vote later.</h1>
                    {/* <div className="hero-section-message"> */}
                        <p>"I invite you to continue the movement and discussion with us by joining,
                        Mark Your Presence organisation.
                        Let's keep talking about these issues and supporting one another. Everyone is welcomed."</p>
                        <p>- Chaitanya Prabhu<br/>
                        Founder, Mark Your Presence</p>
                    {/* </div> */}
                </div>
                <img className="hero-section-image" src={People} alt="Hero section"/>
            </div>
        </div>
    )
}