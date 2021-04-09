import w from './../../components/pixi/window/window'
/**
 * @description 指令类
 * @date 09/04/2021
 * @export
 * @class Order
 */
export class Order {
    static window = w
    constructor(
        public content: string,
        public desc: string,
        public func: Function,
    ) { }
}
/** 指令首 */
const orders: string[] = [
    "page",
    'asd'
]
/**
 * @description 判断是否为指令
 * @date 09/04/2021
 * @export
 * @param {string} word
 * @return {*} 
 */
export function isOrder(word: string) {
    let order: boolean = false
    if (word.indexOf(" ") > 0) {
        word = word.slice(0, word.indexOf(" "))
    }
    orders.forEach(v => {
        if (v === word) order = true;
    })
    return order
}
