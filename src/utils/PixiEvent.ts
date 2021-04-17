import { Handler } from "mitt";
import p from "./P";

export class PixiEvent {
    public container = new p.PIXI.Container()
    constructor() { }
    public regist() { }
    public out() { }
    static setComponent(event: string, func: Handler) {
        p.EventBus.on(event, func);
    }
    static leave(event: string, nextEvent: string) {
        return Promise.resolve(p.EventBus)
            .then(() => p.stage.removeChildren())
            .then(() => p.EventBus.all.delete(event))
            .then(() => p.EventBus.emit(nextEvent))
    }
}
