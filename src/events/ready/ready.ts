import p from "../../utils/P";
import { PixiEvent } from "../../utils/PixiEvent";
import pixi from "../../assets/pixi.png";
import test from "../../assets/bg/main/first/_test.png";
import border from '../../assets/bg/main/first/_border.png'
import SpriteStore from "../../utils/SpriteStore";

class Ready extends PixiEvent {
    constructor() {
        super();
        p.loader
            // .loadImg(SpriteStore.stores.test, 'test', test)
            .loadImg([
                {
                    store: SpriteStore.stores.base,
                    name: "pixi",
                    img: pixi,
                },
                {
                    store: SpriteStore.stores.test,
                    name: "test",
                    img: test,
                },
                {
                    store: SpriteStore.stores.test,
                    name: "border",
                    img: border
                }
            ])
            .onComplete.add(this.out);
    }
    public async regist() {
        PixiEvent.setComponent("ready", this.handle.bind(this));
    }
    public out() {
        PixiEvent.leave("ready", "main");
    }
    protected async handle() {
        p.EventBusName = "ready";
    }
}

export default new Ready();
