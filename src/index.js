import * as THREE from "three";
import { Galaxy } from "./Galaxy.js";
import { Planet } from "./Planet.js";

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

const sun = new Planet().createPlanet();
const earth = new Planet("#3264a8", 0.3).createPlanet();

earth.position.set(3, 3, 0);
sun.rotateX(180);
earth.rotateX(180);

camera.position.z = 5;

scene.add(galaxy, sun, earth);

function animation() {
  galaxy.rotation.z += 0.0001;
  sun.rotation.y -= 0.001;
}

function animate() {
  requestAnimationFrame(animate);

  animation();

  renderer.render(scene, camera);
}

animate();
