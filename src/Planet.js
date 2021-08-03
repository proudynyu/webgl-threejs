import { SphereGeometry, MeshBasicMaterial, Mesh, Color } from "three";

export class Planet {
  constructor(color = 0xe89323, radius = 1) {
    this.color = new Color(color);
    this.radius = radius;
  }

  _createPlanet() {
    const geometry = new SphereGeometry(this.radius);
    const material = new MeshBasicMaterial({
      color: this.color,
      wireframe: true,
    });
    return new Mesh(geometry, material);
  }

  get planet() {
    return this._createPlanet();
  }
}
