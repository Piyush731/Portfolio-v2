import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

const ThreeDBackground = () => {
  return (
    <div className="fixed inset-0 -z-50"> {/* Changed to inset-0 and lower z-index */}
      <Canvas>
        <color attach="background" args={['#000']} /> {/* Set black background */}
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Stars
          radius={150}
          depth={100}
          count={10000}
          factor={4}
          fade
          speed={2}
        />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Canvas>
    </div>
  )
}

export default ThreeDBackground