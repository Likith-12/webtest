import React, { Suspense } from 'react'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Background from '../components/Background'
import { Canvas } from '@react-three/fiber'
import Logo from '../components/Logo'
import './css/home.scss'
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';
import arrow3 from '../assets/arrow3.png';
import { OrbitControls } from '@react-three/drei'
import "aos/dist/aos.css"
import { NoToneMapping } from 'three'


const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <Background />
                <session className="landing">
                    <div className="hero">
                        <button style={{ width: '100%', height: '100%', background: 'transparent', border: 'none' }}>
                            <Canvas gl={{ antialias: true, toneMapping: NoToneMapping }} camera={{ fov: 75, position: [7, 0, 0] }} linear>
                                <OrbitControls maxAzimuthAngle={4 * Math.PI / 6} minAzimuthAngle={Math.PI / 3} maxPolarAngle={4 * Math.PI / 6} minPolarAngle={Math.PI / 3} enablePan={false} enableRotate={true} enableZoom={false} />
                                <ambientLight intensity={1} />
                                <Suspense fallback={null}>
                                    <Logo scale={0.8} position={[0, -4, 0]} />
                                </Suspense>
                            </Canvas>
                        </button>
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
                                <img src={arrow1} alt="" />
                            </div>
                            <div className='arrow2'>
                                <img src={arrow3} alt="" />
                            </div>
                            <div className='arrow3'>
                                <img src={arrow2} alt="" />
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