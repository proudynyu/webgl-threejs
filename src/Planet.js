import { SphereGeometry, MeshBasicMaterial, Mesh, Color } from "three";
import { getRadius } from "./utils/common.js";
// import { Orbit } from "./Orbit.js";

export class Planet {
  constructor(color = 0xe89323, radius = 1, orbitPlanet = undefined) {
    this.color = new Color(color);
    this.radius = radius;
    this.orbitPlanet = orbitPlanet;
  }

  newOrbit(planetX, planetY) {
    if (this.orbitPlanet) {
      const { x, y } = this.orbitPlanet.position;
      console.log({ x, y, planetX, planetY });
      const radius = getRadius(planetX, planetY, x, y);
      console.log(radius);
    }
  }

  createPlanet() {
    const geometry = new SphereGeometry(this.radius);
    const material = new MeshBasicMaterial({
      color: this.color,
      wireframe: true,
    });
    return new Mesh(geometry, material);
  }
}
