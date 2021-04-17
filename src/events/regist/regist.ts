import { PixiEvent } from "../../utils/PixiEvent";
import P from "../../utils/P";
import { keyEvents } from "./keyEvent";


class Regist extends PixiEvent {
  public async regist() {
    PixiEvent.setComponent("regist", this.handle.bind(this))
  }
  protected handle() {
    P.EventBusName = 'regist'
    // 增加指令窗口
    P.stage.addChild(P.output)
    // 增加输入框
    P.stage.addChild(P.input)
    // 监听键盘事件
    P.listener(true, keyEvents)
  }
  public out() {
    // 取消监听键盘事件
    P.listener(false, keyEvents)
    // 关闭cmd
    P.stage.removeChild(P.output)
    P.stage.removeChild(P.input)
    // 离开组件
    PixiEvent.leave("regist", "cutscene")
  }
}

export default new Regist()
