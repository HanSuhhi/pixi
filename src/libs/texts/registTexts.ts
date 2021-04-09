import { COLORS } from "../colors/colors";
import { PERSONS } from "../persons/persons";

/**
 * @description 命令窗口输出Text格式
 * @date 25/03/2021
 * @export
 * @interface ITexts
 */
export interface ITexts {
    text: string;
    from: string;
    color: string | number
}

export /** @type {*} 注册文本 */
    const registTexts: Map<number, ITexts> = new Map([
        [1, { text: '日升月落，草木荣枯，天道恒长之理，老幼兴衰之序，自古而固然。人们每日坦然地享受着光芒带来的温暖，至于日升于何处，日归于何方，今人就难以说清，只有有上了年纪的巫觋，尚且记得埋葬在神鬼传说里的只言片语。', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [2, { text: '-------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [3, { text: '于是族里有学问的年轻人常常前来询问：“日神安属？羲和孰归？”', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [4, { text: '巫觋就轻轻抬起手杖，摇晃着脑袋，低沉地回答道：“出兮汤谷，落兮扶桑。”', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [5, { text: '有一天，部落里神出鬼没的诗人竖亥声称自己找到了巫觋所说的汤谷，他一路追逐太阳历经磨难，终于在地平线所及的最东处，寻觅到了太阳的归宿，原来太阳从汤谷出发，走出黑水青山之地，把光芒洒落到九州的每一片土地上，又回到扶桑树上安然栖息，直到下一个轮回的开始。', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [6, { text: '-------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [7, { text: '其时族有智者，便站出来讥笑竖亥，质疑他所说的海外都是虚妄的故事，他不可能追逐到太阳沉没之地，竖亥还欲再辩，智者便说：“我听闻太阳每到一处，总在背后的大地上显现出事物的影子，你既说你曾追逐上了太阳，那么，你一定曾超越自己的影子，如今正值日中，你的影子在大地上显露清晰，请你现在就为我们展示一二。”', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [8, { text: '竖亥哑口无言，一时败退，再不言海外之事，诗人与智者的对话很快就传播到全部落人的耳中，从此笃信竖亥故事的人愈发稀少。', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [9, { text: '-------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [10, { text: '如此又数十年，巫觋亦俱辞世，接任的巫觋也不再把歌谣当真，当年轻人又逐渐长大，为周而复始的太阳所憧憬不已时，巫觋们想起的，常常是智者的话语。', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [11, { text: '于是他们赶忙止住年轻人远行的脚步，拉住年轻人跃跃欲试的身影，语重心长地说：“不必听诗人的谎话，而该遵从智者的教诲，人从来不能追逐自己的影子，人从来不能赶上过去的时光，那么，人又如何能找到太阳的归宿？”', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [12, { text: '——《竖亥寓言 · 第一》', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [13, { text: '-------------------------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [14, { text: '-------------------------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [15, { text: '欢迎你，探索世界的旅行者，请问你的名字是？', from: PERSONS.LAOZHE.jiuli, color: COLORS.WINDOW.NORMAL_NPC }],
        [16, { text: '我好像听说过你的名字，好像是在三危山的石壁之上，还是黑水青山那些国家的混乱历史中？', from: PERSONS.LAOZHE.jiuli, color: COLORS.WINDOW.NORMAL_NPC }],
        [17, { text: '不记得了，我已经在这里见证了太多了人来人往。你可以告诉我你的旅行起点吗?', from: PERSONS.LAOZHE.jiuli, color: COLORS.WINDOW.NORMAL_NPC }],
        [18, { text: '那是一个很不错的地方，将来你一定会遇见很多有意思的人与事。话说回来，你觉得你的特质是什么?', from: PERSONS.LAOZHE.jiuli, color: COLORS.WINDOW.NORMAL_NPC }],
        [19, { text: '你真是个有趣的人，这片世界终究会留下你的名字。最后我这里有几薄前人留下技能书，你选择一本作为我的礼物吧。', from: PERSONS.LAOZHE.jiuli, color: COLORS.WINDOW.NORMAL_NPC }],
        [20, { text: '眼光不错，那么祝你好运了旅行人。', from: PERSONS.LAOZHE.jiuli, color: COLORS.WINDOW.NORMAL_NPC }],
        [21, { text: '-------------------------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [22, { text: '-------------------------', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [23, { text: '开始生成游戏', from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM }],
        [24, { text: '游戏加载完成，进入游戏', from: "系统", color: COLORS.WINDOW.SYSTEM }]
    ]);