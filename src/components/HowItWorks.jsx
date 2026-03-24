import { COBWEBS } from '../config/assets'
import './HowItWorks.css'

const STEPS = [
    {
        num: '01',
        title: 'find something broken',
        body: <>
        your phone screen. your keyboard that skips the letter <em>'e'</em>.
        your toaster having an existential crisis. your code that compiles
        but definitely shouldn't. if it's busted, <em>it counts.</em>
        hardware, software, firmware: all fair game.
        </>,
    },
    {
        num: '02',
        title: 'document your repair',
        body: <>
        no documentation, no points — that's the deal. snap before-and-afters,
        write up what went wrong and how you diagnosed it.{' '}
        <em>the process is the proof.</em> make it honest. even a duct tape
        fix deserves a writeup.
        </>,
    },
    {
        num: '03',
        title: 'earn points. spend wisely.',
        body: <>
        points scale with complexity. a loose headphone jack is not a
        blown mosfet. rack up points, grab tools from the shop,
        or <em>save for the big prize:</em> a ticket to the kludge
        hackathon. your call.
        </>,
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="hiw">
            {/* cobweb slot left edge. */}
            {COBWEBS.howItWorksLeft && (
                <img className="section-cobweb section-cobweb--left" src={COBWEBS.howItWorksLeft} alt="" aria-hidden="true" />
            )}

            <div className="wrap">
                <p className="section-label">how it works</p>
                <h2 className="section-title">three steps. find fix & fun</h2>
                <p className="section-sub" style={{ marginBottom: '52px' }}>
                just a broken thing and the will to fix it.
                </p>

                <div className="hiw-steps">
                {STEPS.map(step => (
                    <div key={step.num} className="step-card">
                    <div className="step-num" aria-hidden="true">{step.num}</div>
                    <span className="step-icon" aria-hidden="true">{step.icon}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-body">{step.body}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
