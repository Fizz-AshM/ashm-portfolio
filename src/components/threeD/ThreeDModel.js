import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeDModel = () => {
  return (
    <div style={{ height: '500px', marginTop: '40px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
