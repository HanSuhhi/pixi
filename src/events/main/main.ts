import P from "../../utils/P";
import { PixiComponent } from "../../utils/PixiComponent";

class Main extends PixiComponent {
    public regist() {
        PixiComponent.setComponent("main", this.handle.bind(this))
    }
    public out() {
        PixiComponent.leave("main", "_")
    }
    private handle() {
        P.EventBusName = 'main'
        console.log(1);
    }
}

export default new Main()