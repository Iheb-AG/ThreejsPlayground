import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {space} from './space';

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render( scene, camera );
}
function animate(object){
  requestAnimationFrame(animate)
  // object.rotate.x +=0.01
  // scene.rotation.y += 0.01
  scene.rotation.y += Math.sin(Math.PI/2) /1000
  for(let x = 0 ; x<100 ; x++){
  scene.rotation.x += Math.sin(x/2) /1000
}
console.log(scene.rotation.x) 
  // scene.rotation.x += 0.01
  controls.update()
  renderer.render( scene, camera );

}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 10000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

const light = new THREE.AmbientLight(0xf0f0f0);
scene.add(light)

window.addEventListener('resize', onWindowResize, false)

var controls = new OrbitControls(camera,renderer.domElement)
controls.enableDamping = true
controls.campingFactor = 0.25;
controls.enableZoom = true

camera.position.z = 250;

// camera.position.z = 50

const loader = new GLTFLoader();

loader.load(
  // 'assets/asteroidBelt/asteroidBelt.glb',
  // 'assets/asteroids/scene.gltf',
  'assets/asteroidBelt/asteroidBelt.glb',
  function (gltf) {
    scene.add(gltf.scene);

    // model = gltf.scene
    // gltf.animations;
    // gltf.scene;
    // gltf.scenes;
    // gltf.cameras;
    // gltf.asset
  },
  function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
)

loader.load(
  'assets/glowing_smurfware2.glb',
  (gltf)=>{
    let x=Math.sin(Math.PI/2) /1000
    gltf.scene.scale.set(200,200,180)
    gltf.scene.position.set(0,-30,50)
    for(x = 0 ; x<1000 ; x++)
    gltf.scene.rotation.set(x,0,0) 

    scene.add(gltf.scene)

  },null,(error)=>{	console.log( 'An error happened' );}
);


// loading space
scene.add(space)
// scene.add(smurfwareLogo)

document.body.appendChild( renderer.domElement );
animate(loader)
  