import textInput from 'pixi-text-input';
import p from '../../../utils/P'
import PIXI from 'pixi.js'
import P from '../../../utils/P';
import { pageOrders } from '../../../libs/orders/PageOrder';
import { MOMENT } from '../../../constant';

class Input {
    private input: PIXI.Container | any;
    private block: Boolean = false;
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
                // 判断语句是否为指令
                pageOrders.forEach(v => {
                    if (v.content === this.input.text) {
                        v.func();
                    }
                })
                // 开关锁
                if (this.block) return
                this.block = true
                setTimeout(() => {
                    this.block = false;
                }, MOMENT);
                // 保存并还原值
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
    public focus() {
        this.input.focus()
    }
    static height: number = 30;
}

export default new Input()