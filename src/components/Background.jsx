import { COBWEBS, BG, HANDYMAN } from "../config/assets";
import './Background.css';

export default function Background() {
    return (
        <div className="bg-layer" aria-hidden="true">
            <div
                className="bg-pipes"
                style={BG ? { backgroundImage: `url(${BG})` } : {}}
            />
            <div className="bg-veil" />
            <img 
                className="bg-handyman" 
                src={HANDYMAN} 
                alt="Handyman" 
            />
            <img
                className="bg-cobweb top-left"
                src={COBWEBS.heroTopLeft}
                alt="Cobweb"
            />
            <img
                className="bg-cobweb top-right"
                src={COBWEBS.heroTopRight}
                alt="Cobweb"
            />  
        </div>
    )
}