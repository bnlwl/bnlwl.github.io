import * as THREE from 'three';
import type {WebGLRendererParameters} from "three";

interface PerspectiveCameraOption {
    type: 'perspective',
    fov?: number,
    aspect?: number,
    near?: number,
    far?: number
}

interface StereoCameraOption {
    type: 'stereo',
    fov?: number,
    aspect?: number,
    near?: number,
    far?: number
}

type CameraOption = PerspectiveCameraOption | StereoCameraOption

interface Option {
    element?: Element,
    camera?: CameraOption,
    rendererParams?: WebGLRendererParameters
}

const defaultPerspectiveCameraOption: PerspectiveCameraOption = {
  type:'perspective',
  fov: 75,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 1000,
}


// public 内部外部都可访问
// protected 内部或者子类(不可跨级)
// private 仅内部，但可以跨实例的相同实例访问
// static 静态属性 (除 Function.Prototype 的属性外)无限制
class ThreeBase {
  public scene: THREE.Scene
  public camera: THREE.Camera
  public renderer: THREE.WebGLRenderer
  public domElement?: Element

  constructor(options: Option) {
    const {element, camera, rendererParams} = options
    this.scene = this.createScene()
    this.camera = this.createCamera(camera)
    this.renderer = this.createRenderer(rendererParams)
    this.domElement = element

    this.render()
  }

  private createScene() {
    return new THREE.Scene();
  }

  private createCamera(option?: CameraOption) {
    const {type} = option || {type: 'perspective'}

    switch (type) {
    case 'perspective':
      const {fov, aspect, near, far} = Object.assign(defaultPerspectiveCameraOption, option)
      return new THREE.PerspectiveCamera(fov, aspect, near, far);
    case "stereo":
      return new THREE.StereoCamera();
    default:
      throw new Error(`不支持该类型的相机:【类型${type}】`)
    }
  }

  private createRenderer(option?: WebGLRendererParameters) {
    const renderer = new THREE.WebGLRenderer(option);
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer
  }

  public render(dom?: Element) {
    const renderDom = dom || this.domElement
    if(!renderDom) {
      throw new Error('容器不存在')
    }
    dom?.appendChild(this.renderer.domElement)
  }
}

export default ThreeBase
