import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeDImage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a WebGLRenderer and set the background color to white
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set the background color to white (you can use any valid color)
    renderer.setClearColor(0xffffff);

    containerRef.current.appendChild(renderer.domElement);

    // Load your 3D image texture (replace 'image.jpg' with your image file)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("image.png");

    // Create a plane geometry for the image
    const geometry = new THREE.PlaneGeometry(4, 4); // Adjust the size as needed
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Set up animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the image only along the vertical axis (yaw)
      mesh.rotation.y += 0.01; // Adjust the rotation speed as needed

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ backgroundColor: "white" }} />;
};

export default ThreeDImage;
