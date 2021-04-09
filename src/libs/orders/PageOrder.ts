import { Order } from './order'
const window = Order.window;

class PageOrder extends Order {
    constructor(content: string, desc: string, func: Function) {
        super(content, desc, func)
    }
}

export const pageOrders: Array<PageOrder> = [
    new PageOrder("page last", "返回上一页", () => {
        window.changePage()
    }),
    new PageOrder("page next", '查看下一页', () => {
        window.changePage(window.pageNow + 1)
    })
]