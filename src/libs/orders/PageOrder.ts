import { Order } from './order'
const output = Order.output;

class PageOrder extends Order {
    constructor(content: string, desc: string, func: Function) {
        super(content, desc, func)
    }
}

export const pageOrders: Array<PageOrder> = [
    new PageOrder("page last", "返回上一页", () => {
        output.changePage()
    }),
    new PageOrder("page next", '查看下一页', () => {
        output.changePage(output.pageNow + 1)
    })
]