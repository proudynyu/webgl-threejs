import * as THREE from "three";

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const FOV = 75
const NEAR_VIEW = 0.1
const FAR_VIEW = 1000

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(FOV, WIDTH / HEIGHT, NEAR_VIEW, FAR_VIEW);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement)

const particlesGeometry = new THREE.BufferGeometry;
const particlesCount = 5000 * 3;
const particlesPositionArray = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount * 3; i++) {
  particlesPositionArray[i] = (Math.random() - 0.5) * (Math.random() * 20)
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositionArray, 3))

const geometry = new THREE.SphereGeometry();
const pointsMaterial = new THREE.PointsMaterial({ size: 0.005 })
const geometryMaterial = new THREE.MeshBasicMaterial({ color: 0xe89323, wireframe: true })
const particlesMesh = new THREE.Points(particlesGeometry, pointsMaterial)
const mesh = new THREE.Mesh(geometry, geometryMaterial);
scene.add(mesh, particlesMesh);
camera.position.z = 5;

function animateCube() {
  // sphere.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  particlesMesh.position.z += 0.001
}

function animate() {
  requestAnimationFrame(animate);

  animateCube();

  renderer.render(scene, camera);
}

animate();
