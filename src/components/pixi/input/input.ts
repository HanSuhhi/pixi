import textInput from 'pixi-text-input';
import p from '../../../utils/P'
import PIXI from 'pixi.js'
import P from '../../../utils/P';
import { pageOrders } from '../../../libs/orders/PageOrder';

class Input {
    private input: PIXI.Container | any;
    constructor() {
        const input: PIXI.Container | any = new textInput({
            input: {
                fontSize: '14pt',
                padding: '4px',
                width: `${p.width}px`,
                color: "#F9F1A5"
            },
            box: {
                fill: 0x000,
                stroke: {
                    color: 0xffffff
                }
            }
        })
        /** 第一处理级 指令相关 */
        input.on("keydown", (number: number) => {
            // 回车时解析语句
            if (number === 13) {
                pageOrders.forEach(v => {
                    if (v.content === this.input.text) {
                        v.func();
                    }
                })
                P.inputValue.value = this.input.text;
                input.text = '';
            }
        })
        input.position.set(undefined, p.height - input.height)
        this.input = input;
    }
    public getInput() {
        return this.input;
    }
    static height: number = 30;
}

export default new Input()