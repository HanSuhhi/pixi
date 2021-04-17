import { Sprite } from "pixi.js";
import P from "../../utils/P";
import { PixiEvent } from "../../utils/PixiEvent";

class Cutscene extends PixiEvent {
    public regist() {
        PixiEvent.setComponent("cutscene", this.handle.bind(this))
    }
    public out() {
        PixiEvent.leave("cutscene", "main")
    }
    private handle() {
        P.EventBusName = 'cutscene'
        P.stage.addChild(this.container);
        const pixi = P.sprites.stores.base.get('pixi') as Sprite
        P.centered(pixi).then(res => this.container.addChild(res))
        P.gsap.TweenMax.fromTo(pixi, 2, { alpha: 0 }, { alpha: 1, yoyo: true, repeat: 1 }).then(this.out)
    }
}

export default new Cutscene()