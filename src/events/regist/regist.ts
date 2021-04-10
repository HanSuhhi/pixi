import { PixiComponent } from "../../utils/PixiComponent";
import P from "../../utils/P";
import { keyEvents } from "./keyEvent";


class Regist extends PixiComponent {
  public regist() {
    PixiComponent.setComponent("regist", this.handle.bind(this))
  }
  protected handle() {
    // 监听键盘事件
    P.listener(true, keyEvents)
  }
  public out() {
    // 取消监听键盘事件
    P.listener(false, keyEvents)
    // 离开组件
    PixiComponent.leave("regist", "loading")
  }
}

export default new Regist()
