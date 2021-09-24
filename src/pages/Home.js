import React, { useRef, useState, useMemo, useEffect } from 'react'
import Input from '../components/Input'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import Ipf from '../components/Ipf'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/home.scss'
import about from '../assets/about.jpg';
import contact from '../assets/contact.jpg';
import logo from '../assets/ipf_400-100 (1).jpg';
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
    // const staggerRevealForm = (node1, node2, node3, node4, node) => {
    //     gsap.from([node1, node2, node3, node4], {
    //         y: 60,
    //         duration: 1,
    //         delay: 0.4,
    //         opacity: 0,
    //         ease: 'power3.inOut',
    //         stagger: {
    //             amount: 0.1
    //         },
    //         scrollTrigger: {
    //             trigger: node
    //         }

    //     })
    // };
    const Box = (props) => {
        // This reference will give us direct access to the mesh
        const mesh = useRef();

        // Set up state for the hovered and active state 
        const [active, setActive] = useState(false);

        // Rotate mesh every frame, this is outside of React without overhead
        useFrame(() => {
            mesh.current.rotation.y -= 0.01;
        });

        const texture = useMemo(() => new THREE.TextureLoader().load(logo), []);

        return (
            <mesh
                {...props}
                ref={mesh}
                scale={active ? [2, 2, 2] : [1, 1, 1]}
                onClick={(e) => setActive(!active)}
            >
                <cylinderBufferGeometry args={[1, 1, 4, 60]} />
                <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
            </mesh>
        );
    }
    return (
        <div className="home">
            <session className="landing">
                <div className="hero">
                    <Canvas>
                        <ambientLight intensity={0.1} />
                        <pointLight color="blue" intensity={1} position={[10, 10, 10]} />
                        {/* <Box position={[-2, 0, 0]} /> */}
                        {/* <Ipf /> */}
                        <Box position={[0, 1, 0]} />
                        {/* <Box position={[2, 0, 0]} /> */}
                    </Canvas>
                </div>
                <div className="hero-text">
                    <h1>INDUSTRIAL AND PLANNING FORUM</h1>
                </div>
            </session>
            <session ref={el => { aboutRef = el }} className="about">
                <div className="heading">
                    <h1 ref={el => { aboutHeadRef = el }}>About us</h1>
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