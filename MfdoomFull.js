/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mfdoomFull.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mask.geometry} material={materials.StainlessSteel} position={[0, 1, -0.5]} />
    </group>
  )
}

useGLTF.preload('/mfdoomFull.glb')
