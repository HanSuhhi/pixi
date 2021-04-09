import MultiStyleText, { TextStyleExtended, TextStyleSet } from 'pixi-multistyle-text'
import * as PIXI from 'pixi.js'
import { BASE_FONT_SIZE } from '../../../constant'
import { WIDTH } from '../../../libs/constant'
export const textStyle: Partial<PIXI.ITextStyle> | PIXI.TextStyle | undefined = {
    fill: "white",
    fontSize: BASE_FONT_SIZE,
    wordWrap: true,
    breakWords: true,
    wordWrapWidth: WIDTH,
    lineHeight: 19
}
export class NormalText extends PIXI.Text {
    constructor(text: string | undefined, canvas?: HTMLCanvasElement | undefined) {
        super(`${text}`, textStyle, canvas)
        if (this.width > WIDTH - 30)
            this.width = WIDTH - 30
    }
    public resetPosition(text: PIXI.Text | PIXI.Container) {
        this.position.set(text.x + text.width, text.y)
    }
}

export class SystemText extends NormalText {
    constructor(text: string, options: { name: string, color: string | number }) {
        super(text)
        Promise.resolve(options.name.length * 1.5 + 5)
            .then(res => {
                let lens = ''
                for (let i = 0; i < res; i++) {
                    lens += String.fromCharCode(0x2800);
                }
                this.text = lens + this.text
            }).then(() => {
                const title = new NormalText(`>>`)
                this.addChild(title)
                return title
            })
            .then((title) => {
                const a = new NormalText(`【${options.name}】`)
                a.style.fill = options.color
                a.resetPosition(title)
                this.addChild(a)
            })
        this.position.y += 5
        this.position.x += 5
    }
}

export class MultiText extends MultiStyleText {
    constructor(text: string, styles: TextStyleSet) {
        super(text, styles)
        this.position.y += 5;
        this.position.x += 5;
    }
}
