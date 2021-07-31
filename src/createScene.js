import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

export class CreateScene {
  constructor() {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this._ratio = this.width / this.height;
    this._fov = 75;
    this._nearView = 0.1;
    this._farView = 1000;
    this._renderer = new WebGLRenderer();
    this._scene = new Scene();
    this._camera = new PerspectiveCamera(
      this.fov,
      this.ratio,
      this.nearView,
      this.farView
    );
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get ratio() {
    return this._ratio;
  }

  get fov() {
    return this._fov;
  }

  get nearView() {
    return this.__nearView;
  }

  get farView() {
    return this.__farView;
  }

  get scene() {
    return this._scene;
  }

  get camera() {
    return this._camera;
  }

  get renderer() {
    return this._renderer;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this.height = value;
  }

  set ratio(value) {
    this._ratio = value;
  }

  set fov(value) {
    this._fov = value;
  }

  set nearView(value) {
    this.__nearView = value;
  }

  set farView(value) {
    this.__farView = value;
  }

  _createRenderer() {
    this.renderer.setSize(this.width, this.height);
  }

  buildScene() {
    this._createRenderer();
    document.body.appendChild(this.renderer.domElement);
  }
}
