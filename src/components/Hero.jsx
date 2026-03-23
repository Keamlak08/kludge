import RustyButton from "./RustyButton";
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            { /* hack club flag */ }
            <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="hc-flag" aria-label="Hack Club">
                <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club" />
            </a>

            <div className="hero-inner">

                <h1 className="hero-title">
                    kludge
                </h1>

                <p className="hero-moto">
                    because duct tape was someone's first fix.
                </p>

                <div className="hero-def">
                    <span className="def-term">kludge</span> <span className="def-pronunciation">/klʌdʒ/</span><br />
                    <span className="def-phonetic">/klʌdʒ/</span>
                    <span className="def-pos">noun</span>
                    <p className="def-body">
                        a hastily assembled collection of mismatched parts that,
                        against all odds, somehow works better than it should.
                    </p>
                </div>

                <div className="hero-cta">
                    <RustyButton href="https://bmqp548m3x.zite.so" variant="solid" target="_blank" rel="noopener noreferrer">rsvp</RustyButton>
                    <RustyButton href="#how-it-works" variant="ghost">how it works</RustyButton>
                </div>

                <span className="hero-badge">
                    made by teens, for teens
                </span>

            </div>

            {/* scroll hint */}
            <div className="scroll-hint" aria-hidden="true">
                <span>scroll</span>
                <div className="scroll-arrow" />
            </div>
        </section>

    )
}