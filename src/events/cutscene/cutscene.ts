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

    }
}

export const cutscene = new Cutscene()