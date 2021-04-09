import mitt from 'mitt';
import * as PIXI from 'pixi.js'
import win from '../components/pixi/window/window'

class InputValue {
    public value: string = '';
    public clearValue() {
        this.value = ''
    }
}

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
    public inputValue = new InputValue()
    public gameWindow = win;
    public listener = (b: Boolean, event: (this: Window, ev: KeyboardEvent) => any) => {
        b ? window.addEventListener("keydown", event) : window.removeEventListener("keydown", event)
    }

    public play() {
        this.PIXIApp.start()
    }
    public stop() {
        this.PIXIApp.stop();
    }
    public isTrue(input: string): boolean {
        if (input === 'y' || input === 'yes' || input === '1' || input === '') return true
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
export default new P();