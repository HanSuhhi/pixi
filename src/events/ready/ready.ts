import p from '../../utils/P'
import { PixiComponent } from "../../utils/PixiComponent";
import inputComponent from '../../components/pixi/input/input'
import P from '../../utils/P';

class Ready extends PixiComponent {
    private input = inputComponent.getInput()
    public regist() {
        PixiComponent.setComponent('ready', this.handle.bind(this))
    }
    public out() {
        PixiComponent.leave("ready", "regist")
    }
    protected async handle() {
        // 增加指令窗口
        p.stage.addChild(p.cmdWindow)
        // 增加输入框
        p.stage.addChild(this.input)
        return Promise.resolve('')
            /** 游戏界面可视 */
            .then(() => p.cmdWindow.visible = true)
            /** 播放 */
            .then(() => p.play())
            /**离开界面 */
            .then(this.out)
    }
}

export default new Ready()