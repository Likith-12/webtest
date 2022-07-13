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
    let line5 = useRef(null)
    let link1 = useRef(null)
    let link2 = useRef(null)
    // let link3 = useRef(null)
    let link4 = useRef(null)
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
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
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
            staggerRevealLink(line1.current, line2.current, line3.current, line4.current, line5.current)
            // staggerRevealLink(link1, link2, link3, link4)

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

    const staggerRevealLink = (node1, node2, node3, node4, node5) => {
        gsap.from([node1, node2, node3, node4, node5], {
            y: 60,
            duration: 1,
            delay: 0.5,
            opacity: 0,
            ease: "power3.inOut",
            stagger: {
                amount: 0.3,
            },
        });
    };
    return (
        <div ref={el => { menu = el }} className="menu">
            <div ref={el => { revealMenuBg = el }} className="menu-bg-layer"></div>
            <div ref={el => { revealMenu = el }} className="menu-layer">
                <div className="wrapper">
                    <div className="menu-links">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" ref={line1}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/blogs" ref={line2}>Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/events" ref={line3}>Events</Link>
                                </li>
                                <li>
                                    <Link to="/series" ref={line4}>Series</Link>
                                </li>
                                <li>
                                    <Link to="/teams" ref={line5}>Team</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="social-media">
                        {/* <h3>Follow us on:</h3> */}
                        <a href='https://www.instagram.com/accounts/login/?next=/ipf.nitc/' ref={el => { link1 = el }}><i className="fa-brands fa-instagram fa-2xl"></i></a>
                        <a href='https://m.facebook.com/ipfnitc/?_rdr' ref={el => { link2 = el }}><i className="fa-brands fa-facebook fa-2xl"></i></a>
                        
                        <a href='https://www.linkedin.com/company/industrial-and-planning-forum-nit-calicut/' ref={el => { link4 = el }}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;
