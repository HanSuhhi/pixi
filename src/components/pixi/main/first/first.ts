import { INPUT_HEIGHT, MAIN_FIRST_WIDTH } from "../../../../constant";
import { HEIGHT } from "../../../../libs/constant";
import p from "../../../../utils/P";
import * as PIXI from 'pixi.js'
import SpriteStore from "../../../../utils/SpriteStore";
import { EmbossFilter } from '@pixi/filter-emboss';

class MainFirstBox extends p.PIXI.Container {
    constructor(
        private items = {
            0: '同伴',
            1: "技能"
        }
    ) {
        super()
        this.renderBackground()
    }
    private renderBackground() {
        /** 背景颜色 */
        const height = HEIGHT - INPUT_HEIGHT;
        const graphics = new p.PIXI.Graphics()
            .beginFill(0x353334)
            .drawRect(0, 0, MAIN_FIRST_WIDTH, height - 1)
            .endFill();
        this.addChild(graphics)
        /** 背景颜色及边框 */
        p.loader.onComplete.add(() => {
            // 计算背景图片位置
            const img = SpriteStore.stores.test.get('test') as PIXI.Sprite
            const _ = img.width / MAIN_FIRST_WIDTH
            img.alpha = .1
            img.width = img.width / _;
            img.height = img.height / _;
            img.filters = [new EmbossFilter()]
            p.centered(img, this)

            const border = SpriteStore.stores.test.get('border') as PIXI.Sprite
            border.width = MAIN_FIRST_WIDTH;
            border.height = HEIGHT - INPUT_HEIGHT - 1

            this.addChild(img, border)
        })

    }

}

export default new MainFirstBox()