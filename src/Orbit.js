import { Mesh, MeshBasicMaterial, TorusGeometry } from "three";

export default class Orbit {
  constructor({ planet = undefined }) {
    this.planet = planet;
  }

  _createOrbit() {
    if (!this.planet) return null;
    const [x, y, z] = this.planet.position;
    const orbitTorus = new TorusGeometry();
    const orbitMaterial = new MeshBasicMaterial({ color: 0xfff });
    const orbitMesh = new Mesh(orbitTorus, orbitMaterial);

    orbitMesh.position.set(x, y, z);

    return orbitMesh;
  }

  get orbit() {
    return this._createOrbit();
  }
}
