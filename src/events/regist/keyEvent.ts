import { MultiText, NormalText, SystemText, textStyle } from "../../components/pixi/text/text";
import { ITexts } from "../../libs/texts/inputTexts";
import MultiStyleText from "pixi-multistyle-text";
import { PERSONS } from "../../libs/persons/persons";
import { TextStyle } from "pixi.js";
import { COLORS } from "../../libs/colors/colors";
import { PECULIARITIES, Peculiarity } from '../../libs/skills/peculiarities'
import { Book, BOOKS } from "../../libs/skills/books";
import { isOrder } from "../../libs/orders/order";
import P from "../../utils/P";
import regist from "./regist";
import { MOMENT, REGIST_BEGIN } from "../../constant";

// 初始语句
let pointer: number = REGIST_BEGIN


const books: Book[] = BOOKS
const peculiarities: Peculiarity[] = PECULIARITIES
let places: string[] = P.getPlaces(3);
// 确认
let bookConfirm: boolean = false;
let peculiarityConfirm: boolean = false;

// 防刷屏锁
let block: Boolean = false
/**
 * @description 监听注册时点击事件
 * @date 11/04/2021
 * @export
 * @param {KeyboardEvent} key
 */
export async function keyEvents(key: KeyboardEvent) {
    let inputValue: string = P.inputValue.value;
    if (key.key === 'Enter') {
        // 如果为指令则无视
        if (isOrder(inputValue)) return
        // 防止无脑刷屏
        if (block) return
        block = true
        setTimeout(() => block = false, MOMENT);
        // main
        switch (pointer) {
            case 1:
                P.gameWindow.addText({
                    text: '日升月落，草木荣枯，天道恒长之理，老幼兴衰之序，自古而固然。人们每日坦然地享受着光芒带来的温暖，至于日升于何处，日归于何方，今人就难以说清，只有有上了年纪的巫觋，尚且记得埋葬在神鬼传说里的只言片语。',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 2:
                P.gameWindow.addText({
                    text: '-------',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 3:
                P.gameWindow.addText({
                    text: '于是族里有学问的年轻人常常前来询问：“日神安属？羲和孰归？”',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 4:
                P.gameWindow.addText({
                    text: '巫觋就轻轻抬起手杖，摇晃着脑袋，低沉地回答道：“出兮汤谷，落兮扶桑。”',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 5:
                P.gameWindow.addText({
                    text: '有一天，部落里神出鬼没的诗人竖亥声称自己找到了巫觋所说的汤谷，他一路追逐太阳历经磨难，终于在地平线所及的最东处，寻觅到了太阳的归宿，原来太阳从汤谷出发，走出黑水青山之地，把光芒洒落到九州的每一片土地上，又回到扶桑树上安然栖息，直到下一个轮回的开始。',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 6:
                P.gameWindow.addText({
                    text: '-------',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 7:
                P.gameWindow.addText({
                    text: '其时族有智者，便站出来讥笑竖亥，质疑他所说的海外都是虚妄的故事，他不可能追逐到太阳沉没之地，竖亥还欲再辩，智者便说：“我听闻太阳每到一处，总在背后的大地上显现出事物的影子，你既说你曾追逐上了太阳，那么，你一定曾超越自己的影子，如今正值日中，你的影子在大地上显露清晰，请你现在就为我们展示一二。”',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 8:
                P.gameWindow.addText({
                    text: '竖亥哑口无言，一时败退，再不言海外之事，诗人与智者的对话很快就传播到全部落人的耳中，从此笃信竖亥故事的人愈发稀少。',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 9:
                P.gameWindow.addText({
                    text: '-------',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 10:
                P.gameWindow.addText({
                    text: '如此又数十年，巫觋亦俱辞世，接任的巫觋也不再把歌谣当真，当年轻人又逐渐长大，为周而复始的太阳所憧憬不已时，巫觋们想起的，常常是智者的话语。',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 11:
                P.gameWindow.addText({
                    text: '于是他们赶忙止住年轻人远行的脚步，拉住年轻人跃跃欲试的身影，语重心长地说：“不必听诗人的谎话，而该遵从智者的教诲，人从来不能追逐自己的影子，人从来不能赶上过去的时光，那么，人又如何能找到太阳的归宿？”',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 12:
                P.gameWindow.addText({
                    text: '——《竖亥寓言 · 第一》',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 13:
            case 14:
                P.gameWindow.addText({
                    text: '-------------------------',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            // 询问姓名
            case 15:
                P.gameWindow.addText({
                    text: '欢迎你，探索世界的旅行者，请问你的名字是？',
                    from: PERSONS.LAOZHE.jiuli,
                    color: COLORS.WINDOW.NORMAL_NPC
                })
                    .then(() => pointer++)
                break
            // 确认姓名
            case 16:
                P.showMe(inputValue)
                    .then(() => {
                        // 错误输入
                        if (inputValue === '') {
                            P.gameWindow.addText({
                                text: "我好像没有听清楚",
                                from: PERSONS.LAOZHE.jiuli,
                                color: COLORS.WINDOW.NORMAL_NPC
                            })
                        }
                        // multiText 语句
                        // 正确输入
                        else {
                            P.gameWindow.addText(new MultiText(`>><from>【${PERSONS.LAOZHE.jiuli}】</from>是叫<name>${inputValue}</name>吗？(y/n)`, {
                                "default": textStyle as TextStyle,
                                "from": {
                                    fill: COLORS.WINDOW.NORMAL_NPC
                                },
                                "name": {
                                    fill: COLORS.ATTENTION.FIRST
                                }
                            }))
                                /** 保存名字 */
                                .then(() => sessionStorage.setItem("name", inputValue))
                                .then(() => pointer = 17)
                        }
                    })
                break
            // 回复确认姓名
            case 17:
                // 输入内容判断
                const result = P.isTrue(inputValue)
                P.showMe(result ? '没错' : '【胡言乱语】')
                    .then(() => pointer = result ? 18 : 15)
                break
            case 18:
                P.gameWindow.addText({
                    text: '我好像听说过你的名字，好像是在三危山的石壁之上，还是黑水青山那些国家的混乱历史中？',
                    from: PERSONS.LAOZHE.jiuli,
                    color: COLORS.WINDOW.NORMAL_NPC
                })
                    .then(() => pointer++)
                break;
            case 19:
                P.gameWindow.addText({
                    text: '不记得了，我已经在这里见证了太多了人来人往。你可以告诉我你的旅行起点吗?',
                    from: PERSONS.LAOZHE.jiuli,
                    color: COLORS.WINDOW.NORMAL_NPC
                })
                    .then(() => pointer++)
                break
            // 输出旅行起点供选择
            case 20:
                places.forEach((v, index) => {
                    P.gameWindow.addText({
                        text: `${index + 1}. ${v}`,
                        from: PERSONS.XITONG,
                        color: COLORS.WINDOW.SYSTEM
                    })
                })
                P.gameWindow.addText({
                    text: "4. 重新选择",
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break
            // 选择出生地址
            case 21:
                switch (inputValue) {
                    // 正确选择
                    case '1':
                    case '2':
                    case '3':
                        P.showMe(places[Number(inputValue) - 1])
                            .then(() => sessionStorage.setItem("place", places[Number(inputValue) - 1]))
                            .then(() => pointer = 22)
                        break;
                    // 重新选择
                    case '4':
                        P.showMe("不是这些地方").then(() => {
                            places = P.getPlaces(3);
                            P.gameWindow.addText({
                                text: `是年岁大了，地名都已记不真切了，那是这些地方吗？`,
                                from: PERSONS.LAOZHE.jiuli,
                                color: COLORS.WINDOW.NORMAL_NPC
                            })
                                .then(() => pointer = 20)
                        })
                        break;
                    // 错误输入
                    default:
                        P.showMe("（说了一些胡言乱语）").then(() => {
                            P.gameWindow.addText({
                                text: "何处？",
                                from: PERSONS.LAOZHE.jiuli,
                                color: COLORS.WINDOW.NORMAL_NPC
                            })
                                .then(() => pointer = 20)
                        })
                        break;
                }
                break;
            // 询问特质
            case 22:
                P.gameWindow.addText({
                    text: '那是一个很不错的地方，将来你一定会遇见很多有意思的人与事。话说回来，你觉得你的特质是什么?',
                    from: PERSONS.LAOZHE.jiuli,
                    color: COLORS.WINDOW.NORMAL_NPC
                })
                    .then(() => pointer++)
                break

            // 输出特质提供选择
            case 23:
                peculiarities.forEach((v, index) => {
                    P.gameWindow.addText({
                        text: `${index + 1}. ${v.title}: ${v.desc}`,
                        from: PERSONS.XITONG,
                        color: COLORS.WINDOW.SYSTEM
                    })
                })
                P.gameWindow.addText({
                    text: "请输入数字进行查看",
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                pointer = 24
                break;
            // 回答特质
            case 24:
                if (inputValue === '0' && !peculiarityConfirm) inputValue = '4';
                switch (inputValue) {
                    // 确认
                    case '0':
                        const choosePeculiarity = sessionStorage.getItem("peculiarity");
                        P.showMe(`确实是「${choosePeculiarity}」`)
                            .then(() => pointer++)
                        break;
                    // 正常选择
                    case '1':
                    case '2':
                    case '3':
                        const peculiarity: Peculiarity = peculiarities[Number(inputValue) - 1];
                        P.showMe(peculiarity.title).then(() => {
                            // 询问确定
                            P.gameWindow.addText({
                                text: `${peculiarity.title}: ${peculiarity.desc}`,
                                from: PERSONS.LAOZHE.jiuli,
                                color: COLORS.WINDOW.NORMAL_NPC
                            })
                            P.gameWindow.addText({
                                text: `是否选择此特质作为初始特质？（所有特质均可在游戏中获取,输入0以确认，输入其他序号可查看其他特质）`,
                                from: PERSONS.XITONG,
                                color: COLORS.WINDOW.SYSTEM
                            })
                            peculiarityConfirm = true
                            sessionStorage.setItem('peculiarity', peculiarity.title)
                        })
                        break;
                    // 错误选择
                    default:
                        P.showMe("（说了一些胡言乱语）")
                            .then(async () => {
                                P.gameWindow.addText({
                                    text: `老咯，听不太清楚了，你可以再说一遍吗？`,
                                    from: PERSONS.LAOZHE.jiuli,
                                    color: COLORS.WINDOW.NORMAL_NPC
                                })
                            })
                            .then(() => pointer = 23)
                            .then(() => peculiarityConfirm = false)
                        break;
                }
                break
            case 25:
                P.gameWindow.addText({
                    text: '你真是个有趣的人，这片世界终究会留下你的名字。最后我这里有几薄前人留下技能书，你选择一本作为我的礼物吧。',
                    from: PERSONS.LAOZHE.jiuli,
                    color: COLORS.WINDOW.NORMAL_NPC
                })
                    .then(() => pointer++)
                break
            // 输出技能提供选择
            case 26:
                books.forEach((v, index) => {
                    P.gameWindow.addText({
                        text: `${index + 1}. 《${v.title}》: ${v.desc}`,
                        from: PERSONS.XITONG,
                        color: COLORS.WINDOW.SYSTEM
                    })
                })
                P.gameWindow.addText({
                    text: "请输入数字进行查看",
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer = 27)
                break
            // 回答技能
            case 27:
                if (inputValue === '0' && !bookConfirm) inputValue = '4';
                switch (inputValue) {
                    // 确认后
                    case '0':
                        P.showMe(`我选择《${sessionStorage.getItem("book")}》`)
                            .then(() => pointer = 28)
                        break;
                    case '1':
                    case '2':
                    case '3':
                        // 技能选择
                        const book: Peculiarity = books[Number(inputValue) - 1];
                        P.showMe(`《${book.title}》看起来很不错`).then(() => {
                            P.gameWindow.addText({
                                text: `是否选择这本技能书？（所有技能均可在游戏中获取,输入0以确认，输入其他序号改变选择）`,
                                from: PERSONS.XITONG,
                                color: COLORS.WINDOW.SYSTEM
                            })
                            bookConfirm = true
                            sessionStorage.setItem('book', book.title)
                        })
                        break;
                    default:
                        // 输入错误
                        P.showMe("（说了一些胡言乱语）")
                            .then(async () => {
                                P.gameWindow.addText({
                                    text: `老咯，听不太清楚了，你可以再说一遍吗？`,
                                    from: PERSONS.LAOZHE.jiuli,
                                    color: COLORS.WINDOW.NORMAL_NPC
                                })
                            })
                            .then(() => pointer = 26)
                            .then(() => bookConfirm = false)
                        break;
                }
                break
            case 28:
                P.gameWindow.addText({
                    text: '眼光不错，那么祝你好运了旅行人。',
                    from: PERSONS.LAOZHE.jiuli,
                    color: COLORS.WINDOW.NORMAL_NPC
                })
                    .then(() => pointer++)
                break
            case 29:
            case 30:
                P.gameWindow.addText({
                    text: '-------------------------',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break;
            case 31:
                P.gameWindow.addText({
                    text: `玩家名称：${sessionStorage.getItem("name")}`,
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() =>
                        P.gameWindow.addText({
                            text: `出生地：${sessionStorage.getItem("place")}`,
                            from: PERSONS.XITONG,
                            color: COLORS.WINDOW.SYSTEM
                        })
                    )
                    .then(() =>
                        P.gameWindow.addText({
                            text: `初始特质：${sessionStorage.getItem("peculiarity")}`,
                            from: PERSONS.XITONG,
                            color: COLORS.WINDOW.SYSTEM
                        })
                    )
                    .then(() =>
                        P.gameWindow.addText({
                            text: `初始技能书：${sessionStorage.getItem("book")}`,
                            from: PERSONS.XITONG,
                            color: COLORS.WINDOW.SYSTEM
                        })
                    )
                    .then(() =>
                        P.gameWindow.addText({
                            text: `是否确定？（输入-1重新创建角色，输入0再次查看, 输入其他确定）`,
                            from: PERSONS.XITONG,
                            color: COLORS.WINDOW.SYSTEM
                        })
                    )
                    .then(() => pointer = 32)
                break
            case 32:
                pointer = inputValue === '-1' ? 1 : inputValue === '0' ? 31 : 33
                break;
            case 33:
                P.gameWindow.addText({
                    text: '开始生成游戏',
                    from: PERSONS.XITONG,
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break
            case 34:
                P.gameWindow.addText({
                    text: '游戏加载完成，进入游戏',
                    from: "系统",
                    color: COLORS.WINDOW.SYSTEM
                })
                    .then(() => pointer++)
                break
            case 35:
                regist.out()
                break
            default:
                break;
        }
    }
}
