import React, { useRef, useState, useMemo, useEffect } from 'react'
import Input from '../components/Input'
import Slider from '../pages/Slider'
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
    let aboutImgRef = useRef(null)
    let aboutInfoRef = useRef(null)
    let aboutRef = useRef(null)
    let aboutHeadRef = useRef(null)
    let contactImgRef = useRef(null)
    let contactHeadRef = useRef(null)
    let contactInfoRef = useRef(null)
    let contactRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        staggerReveal(aboutHeadRef, aboutInfoRef, aboutImgRef, aboutRef)
        staggerReveal(contactHeadRef, contactInfoRef, contactImgRef, contactRef)
        // staggerRevealForm(nameRef, emailRef, messageRef, btnRef, contactRef)
    }, [])
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
            <session ref={el => { aboutRef = el }} className="about">
                <div className="heading">
                    <h1 ref={el => { aboutHeadRef = el }}>About us</h1>
                </div>
                <div className="logo">
                    <Letter letter='I'></Letter>
                    <Letter letter='P'></Letter>
                    <Letter letter='F'></Letter>
                </div>
                <div className="info">
                    <div className="pic">
                        <img ref={el => { aboutImgRef = el }} src={about} alt="" />
                    </div>
                    <div ref={el => { aboutInfoRef = el }} className="content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi totam voluptate, error dolores autem quibusdam ut aperiam expedita ullam beatae libero atque molestias est, quas doloremque fuga quidem! Ut illo dolores animi unde incidunt totam voluptatem natus debitis facilis. Quam hic, velit fugit libero placeat reiciendis alias soluta dolorem nemo et, corrupti voluptates veniam perspiciatis, voluptate officia sapiente fuga enim iure. Fuga laboriosam, repudiandae quos sit vel inventore quasi iure, ea incidunt soluta eius necessitatibus deleniti id perferendis, explicabo quisquam cum eum ab! Alias accusamus sint molestiae facilis nam autem corporis rerum, aut voluptas reiciendis, vel iure, explicabo quas debitis.
                    </div>
                </div>
            </session>
            <session className="slider">
                <div>
                    <Slider></Slider>
                </div>
            </session>
            <session ref={el => { contactRef = el }} className="contact">
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
            </session>
        </div>
    )
}
export default Home;