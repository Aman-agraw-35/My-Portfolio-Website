import React, { useRef, useEffect } from 'react';
import {particlesCursor} from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js"
import * as THREE from 'three';
function ThreeJSComponent() {
  // Create a ref to hold a reference to the canvas element
  const canvasRef = useRef(null);

  // Function to initialize your Three.js scene
  const initThreeJS = () => {
    const canvas = canvasRef.current;

    // Check if the canvas element exists
    if (!canvas) {
      console.error('Canvas element not found.');
      return;
    }


    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // Set alpha to true for a transparent background

    const pc = particlesCursor({
        el: document.getElementById('app'),
        gpgpuSize: 512,
        colors: [0x1d9ae8, 0x1d9ae8],
        color: 0x1d9ae8,
        coordScale: 0.15,
        alpha: true ,
     });
    }
  useEffect(() => {
    initThreeJS();
  }, []);

  return (
    <canvas className='none'
      ref={canvasRef}
    />
  );
}

export default ThreeJSComponent;
