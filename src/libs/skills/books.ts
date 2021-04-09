import { FROM, skillTypes } from "../constant";

export class Book {
    constructor(public title: string, public type: skillTypes, public probability: number, public desc: string, public from: FROM,) { }
}
// （体力）
// 物理伤害（武力）（护甲）
// 法术伤害（智力）
// 真实伤害
// 信仰高，造成狂热伤害提高，受到狂热伤害降低，受到畏惧伤害增加
export const BOOKS = [
    new Book("古神言", skillTypes.ZHUDONG, 0.4, "吟唱古神教诲，使对方单体每回合受到畏惧伤害，持续2回合", FROM.REGIST),
    new Book("假药", skillTypes.BEIDONG, 1, "战斗前三回合陷入「癫狂」状态，并在实施阶段对随机一名伙伴造成一次狂热伤害。第四回合对自身进行一次恢复", FROM.REGIST),
    new Book("释劳", skillTypes.FANZHI, 1, "我方队伍进行普通攻击及释放技能累计6次时，对随机一名我方伙伴进行一次恢复", FROM.REGIST),
]