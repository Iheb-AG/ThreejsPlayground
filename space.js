import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// exporting space globe (huge sphere)
export const space = new THREE.Mesh(
  new THREE.SphereGeometry(500,64,64),
  new THREE.MeshStandardMaterial({
    // map: THREE.ImageUtils.loadTextue('assets/space.jpg'),
    map : new THREE.TextureLoader().load('assets/space.jpg'),
    side: THREE.BackSide
  })
  
  )

