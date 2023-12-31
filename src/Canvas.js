import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
import { particlesCursor } from 'threejs-toys'; // Use the correct import path based on your project structure

function ThreeJSComponent() {
  const canvasRef = useRef(null);

  const initThreeJS = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.error('Canvas element not found.');
      return;
    }

    // const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    const pc = particlesCursor({
      el: document.getElementById('app'),
      gpuSize: 512,
      colors: [0x1d9ae8, 0x1d9ae8],
      color: 0x1d9ae8,
      coordScale: 0.15,
      alpha: true,
    });
  }

  useEffect(() => {
    initThreeJS();
  }, []);

  return (
    <canvas className='none' ref={canvasRef} />
  );
}

export default ThreeJSComponent;
