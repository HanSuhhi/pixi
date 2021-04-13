import { Sprite } from "pixi.js";
import P from "../../utils/P";
import { PixiComponent } from "../../utils/PixiComponent";

class Cutscene extends PixiComponent {
    public regist() {
        PixiComponent.setComponent("cutscene", this.handle.bind(this))
    }
    public out() {
        PixiComponent.leave("cutscene", "main")
    }
    private handle() {
        P.EventBusName = 'cutscene'
        const pixi = P.sprites.get('pixi') as Sprite
        P.centered(pixi).then(res => this.container.addChild(res))
        P.gsap.TweenMax.fromTo(pixi, 2, { alpha: 0 }, { alpha: 1, yoyo: true, repeat: 1 }).then(this.out)
    }
}

export default new Cutscene()