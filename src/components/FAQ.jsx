import { useState } from "react";
import { COBWEBS } from '../config/assets'
import './FAQ.css'

const ITEMS = [
    {
        id: 'what-is-hc',
        q: 'What is hack club?',
        a: <>
        Hack Club is a 501(c)(3) nonprofit and worldwide network of 60,000+
        technical high schoolers. The belief is simple: you learn best by building.
        That's why Hack Club creates community and provides grants so young people
        can make awesome things. They've partnered with GitHub for Summer of Making,
        hosted the world's longest hackathon on land, and ran Canada's largest high
        school hackathon.{' '}
        <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">learn more →</a>
    </>,
    },
    {
        id: 'what-is-ysws',
        q: 'what is a ysws?',
        a: <>
        "you ship, we ship" — Hack Club's program where you build something real
        and they send you something back. a straightforward trade:
        put in the work, get rewarded. kludge runs on the same idea,
        except the currency is broken things made whole again.
        </>,
    },
    {
        id: 'what-counts',
        q: 'what counts as a fix?',
        a: <>
        hardware, software, firmware. if it was broken and you made it not-broken,
        it counts. cracked screens, dying batteries, corrupted drives, printers that
        have been mad since 2017, scripts that segfault on tuesdays. document it,
        show your work, earn points. more complex fix = more points.
        </>,
    },
    {
        id: 'duct-tape',
        q: 'does duct tape count as a valid fix?',
        a: <>
        honestly? sometimes yes. if the thing works when you're done,
        we're not judging. the kludge is in the spirit of it.
        just document <em>why</em> you went the duct tape route.
        "because it worked" is a valid engineering decision and we
        deeply respect it here.
        </>,
    },
    {
        id: 'points',
        q: 'how are points calculated?',
        a: <>
        points scale with complexity and time. replacing a phone battery
        is not the same as diagnosing a blown mosfet on a motherboard.
        a full rubric will be published when the program launches, but
        for now, know that the harder the fix, the bigger the reward.
        </>,
    },
]

// why do i do this to myself.

export default function FAQ() {
    const [openId, setOpenId] = useState(null)

    function toggle(id) {
        // clicking the already-open item closes it.
        // clicking a different item closes the old, opens the new.
        // pretty cool, right?
        setOpenId(prev => prev === id ? null : id)
    }

    return (
        <section id="faq" className="faq">
        {COBWEBS.faqCorner && (
            <img className="section-cobweb section-cobweb--right" src={COBWEBS.faqCorner} alt="" aria-hidden="true" />
        )}

        <div className="wrap">
            <h2 className="section-title" style={{ marginBottom: '40px' }}>questions?</h2>

            <div className="faq-list">
            {ITEMS.map(({ id, q, a }) => {
                const isOpen = openId === id
                return (
                <div key={id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                    className="faq-btn"
                    aria-expanded={isOpen}
                    onClick={() => toggle(id)}
                    >
                    {q}
                    {/* chevron 180 flip | God bless ai for this */}
                    <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </button>

                    {/* answer panel */}
                    <div className="faq-answer">
                    <div className="faq-answer-inner">{a}</div>
                    </div>

                </div>
                )
            })}
            </div>
        </div>
        </section>
    )
}