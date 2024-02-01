'use client';

import React, {useLayoutEffect} from "react";
import * as THREE from "three";

const Page = () => {
  useLayoutEffect(() => {
    const container = document.querySelector('#container_3d')!
    const width = container.clientWidth
    const height = container.clientHeight
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0xC02C38});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement)

    console.log('render');
    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      console.log('dispose');
      renderer.dispose()
    }
  }, [])

  return (
    <div id="container_3d" className="h-full"></div>
  );

}

export default Page
