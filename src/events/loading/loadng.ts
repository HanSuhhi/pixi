import P from "../../utils/P";
import { PixiComponent } from "../../utils/PixiComponent";

class Loading extends PixiComponent {
    public regist() {
        PixiComponent.setComponent("loading", this.handle.bind(this))
    }

    private handle() {
        console.log(1);

    }
}

export const loading = new Loading()