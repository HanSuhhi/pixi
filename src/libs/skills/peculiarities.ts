import { FROM } from "../constant";

export class Peculiarity {
    constructor(public title: string, public desc: string, public from: FROM) { }
}

export const PECULIARITIES = [
    new Peculiarity("一骑宣威", "战斗中每回合开始时，随机使我方1人获得「连击」，持续1回合", FROM.REGIST),
    new Peculiarity("磐石阵", "全队提高22点护甲值", FROM.REGIST),
    new Peculiarity("若愚", "战斗中，队伍智力最高的伙伴受到伤害后，有40%几率进行一次恢复（恢复率80%）", FROM.REGIST),
]
