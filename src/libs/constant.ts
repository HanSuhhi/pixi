export enum FROM {
    "REGIST"
}
/**
 * @description 技能类型
 * 每个伙伴回合开始 - 准备阶段 - 实施阶段 - 战斗阶段 - 结算阶段
 * 判定各项控制及被动技能是否生效
 * 判定主动技能是否生效
 * 发挥主动技能
 * 进行普通攻击
 * 回合结束前结算，并触发一些反制技能
 * @date 29/03/2021
 * @export
 * @enum {number}
 */
export enum skillTypes {
    "ZHUDONG",
    "BEIDONG",
    "FANZHI"
}

export const HEIGHT: number = 720;
export const WIDTH: number = 1280