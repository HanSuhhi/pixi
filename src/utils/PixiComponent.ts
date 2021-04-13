import { Handler } from "mitt";
import p from "./P";

export class PixiComponent {
    public container = new p.PIXI.Container()
    constructor() {
        p.stage.addChild(this.container)
    }
    public regist() { }
    public out() { }
    static setComponent(event: string, func: Handler) {
        p.EventBus.on(event, func);
    }
    static leave(event: string, nextEvent: string) {
        return Promise.resolve(p.EventBus)
            .then(() => p.EventBus.all.delete(event))
            .then(() => p.EventBus.emit(nextEvent))
    }
}
