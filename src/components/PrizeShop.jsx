import { COBWEBS } from '../config/assets'
import './PrizeShop.css'

const TOOLS = [
	{ 
		img: 'escrewdriver.png',
		name: 'electric screwdriver kit', 
		desc: 'variable torque, interchangeable bits - the workhorse' 
	},
	{ 
		img: 'solder.png', 
		name: 'soldering iron', 
		desc: 'temperature-controlled. because burns don\'t look good.' 
	},
	{ 
		img: 'ruler.png', 
		name: 'cool ruler', 
		desc: "you can't fix what you can't measure. basic law." 
	},
	{ 
		img: 'pinecil.png', 
		name: '+ more tools', 
		desc: 'shop is subject to change. check back.' 
	},
]

	export default function PrizeShop() {
	return (
		<section id="prize-shop" className="prize">
		{COBWEBS.prizeCorner && (
			<img className="section-cobweb section-cobweb--right" src={COBWEBS.prizeCorner} alt="" aria-hidden="true" />
		)}

		<div className="wrap">
			<p className="section-label">the shop</p>
			<h2 className="section-title">what your points get you</h2>
			<p className="section-sub" style={{ marginBottom: '48px' }}>
			no duct tape in the shop. we promise. (mostly.)
			</p>

			{/* tool grid */}
			<div className="prize-grid">
			{TOOLS.map(t => (
				<div key={t.name} className="prize-card">
					{/* <div className="prize-img-wrap">
						{t.img && <img src={t.img} alt={t.name} className="prize-img" />}
					</div> */}
					<span className="prize-icon" aria-hidden="true">{t.icon}</span>
					<h3 className="prize-name">{t.name}</h3>
					<p className="prize-desc">{t.desc}</p>
				</div>
			))}
			</div>

			{/* hackathon ticket */}
			<div className="prize-ticket">
			<span className="ticket-icon" aria-hidden="true"></span>
			<div>
				<h3 className="ticket-title">the big prize: a hackathon ticket</h3>
				<p className="ticket-desc">
				save your points for an in-person spot at the kludge h ackathon.
				you'll be handed a broken piece of hardware, a clock, and zero hints.
				figure out what happened. fix it. win. details coming if the program is greenlit.
				</p>
				<span className="ticket-badge">details coming soon</span>
			</div>
			</div>
		</div>
		</section>
	)
}
