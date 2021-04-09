import * as PIXI from 'pixi.js'
import { HEIGHT } from '../../../libs/constant';
import { ITexts } from '../../../libs/texts/registTexts';
import { MultiText, NormalText, SystemText } from '../text/text';

class Window extends PIXI.Container {
    public pageHeight: number = 660;
    public page: number = 1;
    public pageNow: number = 1;
    private marks: NormalText[] = []
    constructor() {
        super()
        this.visible = false;
        this.addPageMarker(1)
    }
    /**
     * @description 添加句子
     * @date 31/03/2021
     * @param {(ITexts | MultiText)} text
     */
    public addText(text: ITexts | MultiText) {
        const _text = 'from' in text ? new SystemText(text.text, { name: text.from, color: text.color }) : text;
        // 翻页
        if (this.height + _text.height > (this.page - 1) * HEIGHT + this.pageHeight - 10) this.createNewPage()
        this.suitPosition<SystemText>(_text)
        this.addChild(_text)
    }
    /**
     * @description 新的一页
     * @date 31/03/2021
     * @private
     */
    private createNewPage() {
        this.position.y -= HEIGHT
        this.page += 1
        this.addPageMarker(this.page, true).then(res => {
            this.pageNow++
        })
    }
    /**
     * @description 查询页数
     * @date 31/03/2021
     * @param {number} [page=this.page - 1]
     * @return {*} 
     */
    public changePage(page: number = this.pageNow - 1) {
        if (page > this.page) return;
        if (page === 0) return;
        let marker = this.marks[page]
        this.removeChild(marker)
        this.addPageMarker(page, page === 1 ? false : true)
        if (page < this.page) {
            this.position.y += HEIGHT * (this.pageNow - page)
        } else {
            this.position.y -= HEIGHT * (this.page - this.pageNow)

        }
        this.pageNow = page
    }
    /**
     * @description 调整句子格式
     * @date 31/03/2021
     * @param {PIXI.Container} component
     * @param {boolean} [newPage=false]
     * @return {*} 
     */
    public suitPosition<T>(component: T | any, newPage: boolean = false): T {
        if (newPage) {
            component.position.set(component.x, component.y + HEIGHT * (this.page - 1))
        } else {
            component.position.set(component.x, component.y + this.height)
        }
        component.position.y += 10;
        return component
    }
    /**
     * @description 添加页面提示器
     * @date 31/03/2021
     * @param {number} page
     * @param {boolean} [newPage=false]
     */
    private async addPageMarker(page: number, newPage: boolean = false) {
        const marker = new NormalText(`页数：[${page}/${this.page}]`)
        marker.position.set(marker.x + 5, newPage ? marker.y + HEIGHT * (page - 1) + 10 : marker.y + 10)
        this.marks[page] = marker
        this.addChild(marker)
        return marker
    }
}
export default new Window()