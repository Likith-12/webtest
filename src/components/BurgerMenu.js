import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './css/burger.scss'

const BurgerMenu = ({ state }) => {
    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBg = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)
    let link1 = useRef(null)
    let link2 = useRef(null)
    let link3 = useRef(null)
    let link4 = useRef(null)
    let socialMedia = useRef(null)
    useEffect(() => {
        if (state.clicked === false) {
            // menu.style.display = "none"
            gsap.to([revealMenu, revealMenuBg], {
                duration: 0.8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: { display: 'none' }
            })
        } else if (state.clicked === true || state.clicked === true && state.initial === null) {
            // menu.style.display = "flex"
            gsap.to(menu, {
                duration: 0,
                css: { display: 'flex' }
            })
            gsap.to([revealMenuBg, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"
            })
            staggerReveal(revealMenuBg, revealMenu);
            staggerRevealLink(line1, line2, line3, line4)
            staggerRevealLink(link1, link2, link3, link4)

        }
    }, [state])

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }

        })
    }
    const staggerRevealLink = (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
            y: 60,
            duration: 1,
            delay: 0.4,
            opacity: 0,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }

        })
    }
    return (
        <div ref={el => { menu = el }} className="menu">
            <div ref={el => { revealMenuBg = el }} className="menu-bg-layer"></div>
            <div ref={el => { revealMenu = el }} className="menu-layer">
                <div className="wrapper">
                    <div className="menu-links">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/about" ref={el => { line1 = el }}>About</Link>
                                </li>
                                <li>
                                    <Link to="/about" ref={el => { line2 = el }}>Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/Events" ref={el => { line3 = el }}>Events</Link>
                                </li>
                                <li>
                                    <Link to="/about" ref={el => { line4 = el }}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div ref={el => { socialMedia = el }} className="social-media">
                        {/* <h3>Follow us on:</h3> */}
                        <a ref={el => { link1 = el }}><i className="fa-brands fa-instagram fa-2xl"></i></a>
                        <a ref={el => { link2 = el }}><i className="fa-brands fa-facebook fa-2xl"></i></a>
                        <a ref={el => { link3 = el }}><i className="fa-brands fa-twitter fa-2xl"></i></a>
                        <a ref={el => { link4 = el }}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;
