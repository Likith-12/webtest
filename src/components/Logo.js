/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const i = useRef()
  const p = useRef()
  const f = useRef()
  const [index, setIndex] = useState(0)
  const palette = [
    {
      i: { r: 0.329, g: 0.396, b: 1 },
      p: { r: 0.474, g: 0.549, b: 1 },
      f: { r: 0.607, g: 0.694, b: 1 }
    },
    {
      i: { r: 0.580, g: 0.109, b: 0.184 },
      p: { r: 0.933, g: 0.823, b: 0.8 },
      f: { r: 0.423, g: 0.603, b: 0.545 }
    },
    {
      i: { r: 0.937, g: 0.278, b: 0.435 },
      p: { r: 1, g: 0.819, b: 0.4 },
      f: { r: 0.023, g: 0.839, b: 0.627 }
    },
    {
      i: { r: 0.870, g: 0, b: 0.047 },
      p: { r: 1, g: 1, b: 1 },
      f: { r: 0.129, g: 0.568, b: 0.494 }
    },

  ]
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Logo.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.entries(actions).forEach(([key, value]) => {
      value.play().setEffectiveTimeScale(0.5)
    });
    // anim()
  }, [])
  // const anim = () => {
  //   requestAnimationFrame(anim)
  //   group.current.rotation.y += 0.01

  //   console.log(group.current.rotation.y);
  // }
  const changecolor = () => {
    const color = palette[index]
    const childI = i?.current?.children;
    const childP = p?.current?.children;
    const childF = f?.current?.children;
    childI?.map((mesh) => mesh.material.color = { r: color.i.r, g: color.i.g, b: color.i.b })
    childP?.map((mesh) => mesh.material.color = { r: color.p.r, g: color.p.g, b: color.p.b })
    childF?.map((mesh) => mesh.material.color = { r: color.f.r, g: color.f.g, b: color.f.b })
    if (index < 3) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }
  return (
    <group ref={group} {...props} dispose={null} onClick={changecolor}>
      <group name="Scene">
        <group ref={i} name='i'>
          <mesh name="I001" geometry={nodes.I001.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I002" geometry={nodes.I002.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I003" geometry={nodes.I003.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I004" geometry={nodes.I004.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I005" geometry={nodes.I005.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I006" geometry={nodes.I006.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I007" geometry={nodes.I007.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I008" geometry={nodes.I008.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="I009" geometry={nodes.I009.geometry} material={materials.Red} position={[0.45, 2.13, 2.08]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />

        </group>
        <group ref={p} name='p' >
          <mesh name="P001" geometry={nodes.P001.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P002" geometry={nodes.P002.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P003" geometry={nodes.P003.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P004" geometry={nodes.P004.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P005" geometry={nodes.P005.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P006" geometry={nodes.P006.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P007" geometry={nodes.P007.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P008" geometry={nodes.P008.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P010" geometry={nodes.P010.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P012" geometry={nodes.P012.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P014" geometry={nodes.P014.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P018" geometry={nodes.P018.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P009" geometry={nodes.P009.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P011" geometry={nodes.P011.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P015" geometry={nodes.P015.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P016" geometry={nodes.P016.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P013" geometry={nodes.P013.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="P017" geometry={nodes.P017.geometry} material={materials.White} position={[0.45, 1.33, 0.64]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.78} />

        </group>
        <group ref={f} name='f'>

          <mesh name="F001" geometry={nodes.F001.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F002" geometry={nodes.F002.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F003" geometry={nodes.F003.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F005" geometry={nodes.F005.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F004" geometry={nodes.F004.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F006" geometry={nodes.F006.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F007" geometry={nodes.F007.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F008" geometry={nodes.F008.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
          <mesh name="F009" geometry={nodes.F009.geometry} material={materials.Green} position={[0.45, 1.31, -0.67]} rotation={[2.09, 0, Math.PI / 2]} scale={0.78} />
        </group>
      </group>
    </group >
  )
}

useGLTF.preload('/Logo.glb')
