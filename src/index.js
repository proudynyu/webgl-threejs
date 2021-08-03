import * as THREE from "three";
import { Planet } from "./Planet.js";
import { Galaxy } from "./Galaxy.js";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const FOV = 75;
const NEAR_VIEW = 0.1;
const FAR_VIEW = 1000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  FOV,
  WIDTH / HEIGHT,
  NEAR_VIEW,
  FAR_VIEW
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

const { galaxy } = new Galaxy();
galaxy.position.z = -1;

const sun = new Planet();
sun.planet.position.set(0, 0, 0);

camera.position.z = 5;

scene.add(galaxy, sun.planet);

function animation() {
  galaxy.rotation.z += 0.0001;
}

function animate() {
  requestAnimationFrame(animate);

  animation();

  renderer.render(scene, camera);
}

animate();
