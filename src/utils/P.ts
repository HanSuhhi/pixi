import mitt from 'mitt';
import * as PIXI from 'pixi.js'
import input from "../components/pixi/input/input";
import output from '../components/pixi/output/output'
import { COLORS } from '../libs/colors/colors';
import { HEIGHT, WIDTH } from '../libs/constant';
import * as gsap from 'gsap'
import pLoader from './Loader';
import spriteStore from './SpriteStore'

/**
 * @description 随机生成地名
 * @date 13/04/2021
 * @return {*}  {string}
 */
function randomPlace(): string {
    const begin: string[] = [
        '赤', '鸡', '株', '长'
    ]
    const final: string[] = [
        '山', '树', '国'
    ];
    const other: string[] = [
        '鹿', '青', '丘'
    ]
    const random = Math.random()
    return `${getOneOfArray(begin)}${random < .3 ? getOneOfArray(other) : ''}${getOneOfArray(final)}`
}

function getOneOfArray(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)]
}

class P {
    public width: number = 1280;
    public height: number = 720;
    public PIXI = PIXI;
    public PIXIApp = new PIXI.Application({
        width: this.width,
        height: this.height,
        backgroundColor: 0x000000,
        resolution: 1,
    })
    public stage = this.PIXIApp.stage
    public EventBus = mitt()
    public EventBusName: string = ''
    // 输入框
    public input = input.input
    // 文本输出
    public output = output;
    public gasp = gsap

    public listener = (b: Boolean, event: (this: Window, ev: KeyboardEvent) => any) => {
        b ? window.addEventListener("keydown", event) : window.removeEventListener("keydown", event)
    }

    public showMe = async (inputValue: string) => {
        if (!inputValue) inputValue = "没有说话"
        const text = { text: inputValue, from: "我", color: COLORS.ME }
        this.output.addText(text)
        await this.sleep(300)
    }
    // 存放精灵
    public loader = pLoader
    public sprites = spriteStore;
    public gsap = gsap;
    /**
     * @description 元素居中
     * @date 13/04/2021
     */
    public async centered(e: PIXI.Container, box?: PIXI.Container) {
        const width = e.width;
        const height = e.height;
        e.position.set(
            (box ? box.width / 2 : WIDTH / 2) - width / 2,
            (box ? box.height / 2 : HEIGHT / 2) - height / 2
        );
        console.log(box!.height / 2 - height / 2);

        return e
    }
    public play() {
        this.PIXIApp.start()
    }
    public stop() {
        this.PIXIApp.stop();
    }
    public isTrue(input: string): boolean {
        if (input === 'y' || input === 'yes' || input === '1') return true
        return false
    }
    public sleep(time: number) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    public getPlaces(num: number) {
        let answer: Set<string> = new Set()
        while (answer.size !== 3) {
            answer.add(randomPlace())
        }
        return Array.from(answer)
    }
}

const p = new P();



export default p;