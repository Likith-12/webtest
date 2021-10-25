import React, { useRef, useState, useMemo, useEffect,Component } from 'react'
import Input from '../components/Input'
import Slider from '../pages/Slider'
import Footer from '../components/Footer'
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
import logo from '../assets/ipf_400-100 (1).jpg';
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
    // let aboutRef = useRef(null)
    // let aboutHeadRef = useRef(null)
    let contactImgRef = useRef(null)
    let contactHeadRef = useRef(null)
    let contactInfoRef = useRef(null)
    let contactRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    
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
        <div className="home">
            
            <session className="landing">
                <div className="hero">
                    <Canvas>
                        <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
                        <Camera position={[10, 0, 0]} />
                        <ambientLight />
                        {/* <pointLight color="white" intensity={1} position={[15, 15, 15]} /> */}
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
            <session className="slider">
                <div>
                    <Slider></Slider>
                </div>
            </session>
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
                <Footer></Footer>
            </session>
            
        </div>
    )
}
export default Home;