import { useState } from 'react';

import FooterRing from './FooterRing'
import Contact from '../components/Contact';

import './css/footer.scss'


function Footer() {

    const [show, setshow] = useState(true);

    return (
        <div className="footer" onClick={() => { setshow(false); }}>
            <div>
                {show ? (<div className="footer_text">
                    FEEL FREE TO HIT US UP
                </div>) : (<div className="contact"><Contact /></div>)}
            </div>
            <div className="footer_copyright">
                <span>
                    <span>&copy;</span> {new Date().getFullYear()} IPF All Rights Reserved</span>
            </div>
            <div className="footer_animation_ring">
                <FooterRing />
            </div>
        </div>
    );
}

export default Footer;