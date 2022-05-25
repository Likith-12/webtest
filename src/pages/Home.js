import React, { useRef, useState, useEffect, Suspense } from 'react'
// import Slider from '../pages/Slider'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Background from '../components/Background'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Logo5 from '../components/Logo5'
import Letter from '../components/Letter'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/home.scss'
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';
import arrow3 from '../assets/arrow3.png';
import { OrbitControls } from '@react-three/drei'
import "aos/dist/aos.css"


const Home = () => {

    let logoImgRef = useRef(null)
    let arrow1ImgRef = useRef(null)
    let arrow2ImgRef = useRef(null)
    let arrow3ImgRef = useRef(null)
    let contactImgRef = useRef(null)
    let contactHeadRef = useRef(null)
    let contactInfoRef = useRef(null)
    let contactRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    const { innerWidth: width, innerHeight: height } = window;

    const staggerReveal = (node3, node1, node2, node) => {
        gsap.from([node3, node1, node2], {
            duration: 0.8,
            opacity: 0,
            y: "20%",
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            },
            scrollTrigger: {
                trigger: node
            }

        })
    };

    function Camera(props) {
        const ref = useRef()
        const set = useThree(state => state.set)
        // Make the camera known to the system
        useEffect(() => void set({ camera: ref.current }), [])
        // Update it every frame
        useFrame(() => ref.current.updateMatrixWorld())
        return <perspectiveCamera ref={ref} {...props} />
    }

    return (
        <>
            <div className="home" id="home">
                <Background />
                <session className="landing">
                    <div className="hero">
                        <Canvas>
                            <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
                            <Camera position={[10, 0, 0]} />
                            <ambientLight />
                            <Suspense fallback={null}>
                                <Logo5 scale={0.6} position={[0, -3, 0]} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="hero-text">
                        <h1>INDUSTRIAL</h1>
                        <div className="hero-grid">
                            <div className="symbol">
                                <h1>&</h1>
                            </div>
                            <div className="text">
                                <div className="big">
                                    <h1>PLANNING</h1>
                                </div>
                                <div className="small">
                                    <h3>FORUM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='logo1'>
                        <div className="arrows">
                            <div className='arrow1'>
                                <img ref={el => { arrow1ImgRef = el }} src={arrow1} alt="" />
                            </div>
                            <div className='arrow2'>
                                <img ref={el => { arrow2ImgRef = el }} src={arrow3} alt="" />
                            </div>
                            <div className='arrow3'>
                                <img ref={el => { arrow3ImgRef = el }} src={arrow2} alt="" />
                            </div>
                        </div>
                    </div>
                </session>
                <session className="about">
                    <div className="info">
                        <div className="heading">
                            <h1>ABOUT</h1>
                        </div>
                        <div className="content">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam dolore nam voluptatibus inventore laborum, ipsa quam eaque, aliquam cum aperiam doloribus nisi, deleniti molestiae enim voluptates explicabo culpa eos necessitatibus voluptate in voluptas nostrum minima! Dignissimos consequatur, dolore veritatis fugit sequi reprehenderit labore quisquam alias, similique dolor deserunt sunt amet molestiae voluptatem saepe accusantium officiis ducimus commodi fuga, quibusdam recusandae quis et. Incidunt, aspernatur voluptas. Quam consequuntur eos maxime culpa, magnam esse iusto totam repudiandae optio perferendis perspiciatis illum consequatur explicabo cupiditate repellat sed aspernatur quisquam architecto molestiae veniam minus. Ipsam est, reprehenderit eligendi ducimus sapiente nostrum rem possimus!
                        </div>

                    </div>
                </session>
                {/* <div className="heading">
                    <h1 ref={el => { aboutHeadRef = el }}>About us</h1>
            </div> */}
                {/* <div className="logo">
                    <Letter letter='I'></Letter>
                    <Letter letter='P' ></Letter>
                    <Letter letter='F' ></Letter>
                </div> */}
                <div className="slider">
                    <Slider />
                </div>
                <session>
                    <Footer />
                </session>
            </div>
        </>
    )
}
export default Home;