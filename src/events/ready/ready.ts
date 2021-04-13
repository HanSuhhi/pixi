import p from '../../utils/P'
import { PixiComponent } from "../../utils/PixiComponent";
import pixi from '../../assets/pixi.png';

class Ready extends PixiComponent {
    public async regist() {
        PixiComponent.setComponent('ready', this.handle.bind(this))
    }
    public out() {
        PixiComponent.leave("ready", "cutscene")
    }
    protected async handle() {
        p.EventBusName = 'ready'
        p.loader.add(
            'pixi', pixi
        ).load((_, res) => {
            console.log('图片加载完成');
            p.sprites.set("pixi", new p.PIXI.Sprite(res['pixi'].texture))
        }).onComplete.add(this.out)
    }
}

export default new Ready()