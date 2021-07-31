import * as THREE from "three";
import { CreateScene } from "./createScene.js";

const scene = new CreateScene();
scene.buildScene();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.scene.add(cube);
scene.camera.position.z = 5;

function animateCube() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

function animate() {
  requestAnimationFrame(animate);

  animateCube();

  scene.renderer.render(scene.scene, scene.camera);
}

animate();
