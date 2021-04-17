import { INPUT_HEIGHT, MAIN_FIRST_WIDTH, MAIN_SECOND_WIDTH } from "../../../../constant";
import { HEIGHT } from "../../../../libs/constant";
import p from "../../../../utils/P";
import input from "../../input/input";

class MainSecondBox extends p.PIXI.Container {
    constructor(
        private items = {
            0: '同伴',
            1: "技能"
        }
    ) {
        super()
        const height = HEIGHT - INPUT_HEIGHT;
        const graphics = new p.PIXI.Graphics()
            .beginFill(0x654321)
            .drawRect(MAIN_FIRST_WIDTH, 0, MAIN_SECOND_WIDTH, height - 1)
            .endFill();
        this.addChild(graphics)
    }


}

export default new MainSecondBox()