import { Handler } from "mitt";
import p from "./P";

export class PixiComponent {
    private eve = ""
    public regist() { }
    public out() { }
    static setComponent(event: string, func: Handler) {
        p.EventBus.on(event, func);
        p.EventBusName = event
    }
    static leave(event: string, nextEvent: string) {
        return Promise.resolve(p.EventBus)
            .then(() => p.EventBus.all.delete(event))
            .then(() => p.EventBus.emit(nextEvent))
    }
}
