import ThreeBase from "@/app/utils/threeBase";

// public 内部外部都可访问
// protected 内部或者子类(不可跨级)
// private 仅内部，但可以跨实例的相同实例访问
// static 静态属性 (除 Function.Prototype 的属性外)无限制
class DripWord extends ThreeBase{
  public set container(dom:Element){
    this.domElement = dom
  }
}

export default DripWord
