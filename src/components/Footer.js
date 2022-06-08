import React,{useEffect,useState} from 'react';

import Footer_ring from '../components/Footer_ring'
import Contact from '../components/Contact';

import './css/footer.scss'


function Footer(){

    const [show,setshow] = useState(true);

    return(
        <div className="footer">
        <div>
        {show?(<div className="footer_text" onClick={() => {setshow(false);}}>
            FEEL FREE TO HIT US UP
            </div>):(<div className="contact"><Contact/></div>)}    
        </div>
        {/* <div className="footer_copyright">
                    <span>Copyright
                        2021 IPF All Rights Reserved</span>
        </div> */}
        <div className="footer_animation_ring">
        <Footer_ring/>
        </div>
        </div>
    );
}

export default Footer;