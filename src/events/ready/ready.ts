import p from '../../utils/P'
import { PixiComponent } from "../../utils/PixiComponent";
import inputComponent from '../../components/pixi/input/input'
import P from '../../utils/P';

class Ready extends PixiComponent {
    private input = inputComponent.getInput()
    public regist() {
        PixiComponent.setComponent('ready', this.handle.bind(this))
    }
    protected async handle() {
        p.stage.addChild(p.gameWindow)
        p.stage.addChild(this.input)
        return Promise.resolve('')
            /** 游戏界面可视 */
            .then(() => p.gameWindow.visible = true)
            /** 播放 */
            .then(() => p.play())
            /**离开界面 */
            .then(
                PixiComponent.leave.bind(this, "ready", "regist")
            )
    }
}

export default new Ready()