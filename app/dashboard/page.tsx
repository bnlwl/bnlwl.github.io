'use client';

import React, {useLayoutEffect} from "react";
import * as THREE from "three";

const Page = () => {
  useLayoutEffect(() => {
    const container = document.querySelector('#container_3d')
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
        container!.appendChild(renderer.domElement);
  }, [])

  return (
    <div id="container_3d"></div>
  );

}

export default Page
