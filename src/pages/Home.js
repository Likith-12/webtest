import React, { useRef, useState, useMemo, useEffect,Component } from 'react'
import Input from '../components/Input'
import Slider from '../pages/Slider'
import Footer from '../components/Footer'
import Background from '../components/Background'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import Ipf from '../components/Ipf'
import Logo5 from '../components/Logo5'
import Letter from '../components/Letter'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/home.scss'
import about from '../assets/about.jpg';
import contact from '../assets/contact.jpg';
import logo from '../assets/logo.png';
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';
import arrow3 from '../assets/arrow3.png';
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import FluidAnimation from 'react-fluid-animation'
import "aos/dist/aos.css"
import Aos from 'aos'


const Home = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const onSubmit = (e) => {
        e.preventDefault()

    }
    let nameRef = useRef(null)
    let emailRef = useRef(null)
    let messageRef = useRef(null)
    let btnRef = useRef(null)
    // let aboutImgRef = useRef(null)
    // let aboutInfoRef = useRef(null)
     let aboutRef = useRef(null)
     let aboutHeadRef = useRef(null)
    let contactImgRef = useRef(null)
    let logoImgRef = useRef(null)
    let arrow1ImgRef = useRef(null)
    let arrow2ImgRef = useRef(null)
    let arrow3ImgRef = useRef(null)
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
        <Background/>
        <div className="home" id="home">
            
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
            </session>
            HEAD
            <div className='logo'>
                    <div className='ipf-logo'>
                        <img ref={el => { logoImgRef = el }} src={logo} alt="" />
                    </div>
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
            <session ref={el => { aboutRef = el }} className="about">
                <div className="heading">
                    <h1 ref={el => { aboutHeadRef = el }}>About us</h1>
                </div>
            </session>
            <session className="about">
                <div className="info">
                    <div className="heading">
                        <h1>ABOUT</h1>
                    </div>
                </div> 
            </session>
            {/* <div className="heading">
                    <h1 ref={el => { aboutHeadRef = el }}>About us</h1>
            </div> */}
            <div className="logo">
                  <Letter letter='I'></Letter>
                  <Letter letter='P' ></Letter>
                  <Letter letter='F' ></Letter>
            </div>
            <div className="slider">
            <Slider></Slider>
            </div>
            {/* <session ref={el => { contactRef = el }} className="contact">
                <div className="heading">
                    <h1 ref={el => { contactHeadRef = el }}>Contact us</h1>
                </div>
                <div className="info">
                    <div className="pic">
                        <img ref={el => { contactImgRef = el }} src={contact} alt="" />
                    </div>
                    <div ref={el => { contactInfoRef = el }} className="content">
                        <form action="">
                            <Input ref={el => { nameRef = el }} value={name} onchange={(e) => { setName(e.target.value) }} type="text" name="name" label="Name" />
                            <Input ref={el => { emailRef = el }} value={email} onchange={(e) => { setEmail(e.target.value) }} type="email" name="email" label="E-mail" />
                            <Input ref={el => { messageRef = el }} value={message} onchange={(e) => { setMessage(e.target.value) }} type="text" name="message" label="Message" />
                            <button ref={el => { btnRef = el }} className="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </session> */}
            <session>
                <Footer/>
            </session>
        </div>
        </>
    )
}
export default Home;