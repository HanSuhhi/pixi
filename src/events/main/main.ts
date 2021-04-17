import P from "../../utils/P";
import { PixiEvent } from "../../utils/PixiEvent";
import mainFirstBox from '../../components/pixi/main/first/first'
import mainSecondBox from '../../components/pixi/main/second/second'
import mainThirdBox from '../../components/pixi/main/third/third'
import SpriteStore from "../../utils/SpriteStore";

class Main extends PixiEvent {
    public regist() {
        PixiEvent.setComponent("main", this.handle.bind(this))
    }
    public out() {
        PixiEvent.leave("main", "_")
    }
    private handle() {
        P.EventBusName = 'main'

        // 增加输入
        P.stage.addChild(P.input)
        // 增加第一区域
        P.stage.addChild(mainFirstBox)
        // 增加第二区域
        P.stage.addChild(mainSecondBox)
        // 增加第三区域
        P.stage.addChild(mainThirdBox)
    }
}

export default new Main()