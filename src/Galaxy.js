import { BufferAttribute, BufferGeometry, PointsMaterial, Points } from "three";

export class Galaxy {
  constructor(particlesQuantity = 5000, particlesSize = 0.005) {
    this.particlesCount = particlesQuantity;
    this.particlesSize = particlesSize;
  }

  _createGalaxy() {
    const particlesGeometry = new BufferGeometry();
    const particlesCount = this.particlesCount * 3;
    const particlesPositionArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      particlesPositionArray[i] = (Math.random() - 0.5) * (Math.random() * 20);
    }

    particlesGeometry.setAttribute(
      "position",
      new BufferAttribute(particlesPositionArray, 3)
    );

    const pointsMaterial = new PointsMaterial({ size: this.particlesSize });
    return new Points(particlesGeometry, pointsMaterial);
  }

  get galaxy() {
    return this._createGalaxy();
  }
}
