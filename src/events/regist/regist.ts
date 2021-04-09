import { PixiComponent } from "../../utils/PixiComponent";
import P from "../../utils/P";
import { MultiText, NormalText, SystemText, textStyle } from "../../components/pixi/text/text";
import { ITexts, registTexts } from "../../libs/texts/registTexts";
import MultiStyleText from "pixi-multistyle-text";
import { PERSONS } from "../../libs/persons/persons";
import { TextStyle } from "pixi.js";
import { COLORS } from "../../libs/colors/colors";
import { PECULIARITIES, Peculiarity } from '../../libs/skills/peculiarities'
import { Book, BOOKS } from "../../libs/skills/books";
import { isOrder } from "../../libs/orders/order";

const books: Book[] = BOOKS
const peculiarities: Peculiarity[] = PECULIARITIES
let block: boolean = false;
let pointer: number = 21
let bookConfirm: boolean = false;
let places: string[] = P.getPlaces(3);
let peculiarityConfirm: boolean = false;
class Regist extends PixiComponent {
  public regist() {
    PixiComponent.setComponent("regist", this.handle.bind(this))
  }
  protected handle() {
    // 初始化第一句话
    const text_1 = registTexts.get(1)
    P.gameWindow.addText(text_1 as ITexts)
    // 监听键盘事件
    P.listener(true, keyEvents)
  }

  private keyEvent() {

  }
}

const regist = new Regist();

/** 键盘事件 */
const keyEvents = async (key: KeyboardEvent) => {
  let text: ITexts | MultiStyleText;
  let inputValue: string;
  if (key.key === 'Enter') {
    if (block) return
    if (isOrder(P.inputValue.value)) return
    switch (pointer) {
      case 14:
        P.inputValue.value = ''
        P.gameWindow.addText(registTexts.get(++pointer) as ITexts);
        break;
      case 15:
        inputValue = P.inputValue.value
        showMe(inputValue).then(() => {
          if (inputValue === '') {
            text = {
              text: "我好像没有听清楚（请重新输入）",
              from: PERSONS.LAOZHE.jiuli,
              color: COLORS.WINDOW.NORMAL_NPC
            }
            P.gameWindow.addText(text)
          } else {
            P.gameWindow.addText(new MultiText(`>><from>【${PERSONS.LAOZHE.jiuli}】</from>是叫<name>${inputValue}</name>吗？(y/n)`, {
              "default": textStyle as TextStyle,
              "from": {
                fill: COLORS.WINDOW.NORMAL_NPC
              },
              "name": {
                fill: COLORS.ATTENTION.FIRST
              }
            }))
            pointer = 999;
          }
        })
        break
      case 17:
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
        pointer = 998
        P.inputValue.value = ""
        break
      case 18:
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
        pointer = 997
        break;
      case 19:
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
        pointer = 996
        break
      case registTexts.size:
        PixiComponent.leave("regist", "loading")
        P.listener(false, keyEvents)
        break
      // 回答技能
      case 996:
        inputValue = P.inputValue.value;
        if (!inputValue) {
          waitAMoment()
          P.gameWindow.addText({ text: "请输入数字进行查看", from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM })
          break;
        }
        if (inputValue === '0' && !bookConfirm) inputValue = '4';
        switch (inputValue) {
          case '0':
            pointer = 20;
            const chooseBook = sessionStorage.getItem("chooseBook");
            showMe(`我选择${chooseBook}`).then(() => {
              flashPage()
            })
            break;
          case '1':
          case '2':
          case '3':
            const book: Peculiarity = books[Number(inputValue) - 1];
            showMe(`《${book.title}》看起来很不错`).then(() => {
              P.gameWindow.addText({
                text: `是否选择这本技能书？（所有技能均可在游戏中获取,输入0以确认，输入其他序号改变选择）`,
                from: PERSONS.XITONG,
                color: COLORS.WINDOW.SYSTEM
              })
              bookConfirm = true
              sessionStorage.setItem('chooseBook', book.title)
            })
            break;
          default:
            showMe("（说了一些胡言乱语）").then(async () => {
              P.gameWindow.addText({
                text: `老咯，听不太清楚了，你可以再说一遍吗？`,
                from: PERSONS.LAOZHE.jiuli,
                color: COLORS.WINDOW.NORMAL_NPC
              })
              waitAMoment()
              setTimeout(() => {
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
                pointer = 996
              }, 10);
              bookConfirm = false
            })
            break;
        }
        break
      // 回答特质
      case 997:
        inputValue = P.inputValue.value;
        if (!inputValue) {
          waitAMoment()
          P.gameWindow.addText({ text: "请输入数字进行查看", from: PERSONS.XITONG, color: COLORS.WINDOW.SYSTEM })
          break;
        }
        if (inputValue === '0' && !peculiarityConfirm) inputValue = '4';
        switch (inputValue) {
          case '0':
            pointer = 19;
            const choosePeculiarity = sessionStorage.getItem("choosePeculiarity");
            showMe(`确实是「${choosePeculiarity}」`).then(() => {
              flashPage()
            })
            break;
          case '1':
          case '2':
          case '3':
            const peculiarity: Peculiarity = peculiarities[Number(inputValue) - 1];
            showMe(peculiarity.title).then(() => {
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
              sessionStorage.setItem('choosePeculiarity', peculiarity.title)
            })
            break;
          default:
            showMe("（说了一些胡言乱语）").then(async () => {
              P.gameWindow.addText({
                text: `老咯，听不太清楚了，你可以再说一遍吗？`,
                from: PERSONS.LAOZHE.jiuli,
                color: COLORS.WINDOW.NORMAL_NPC
              })
              waitAMoment()
              setTimeout(() => {
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
                pointer = 997
              }, 10);
              peculiarityConfirm = false
            })
            break;
        }
        break
      // 选择出生地址
      case 998:
        inputValue = P.inputValue.value;
        switch (inputValue) {
          case '1':
          case '2':
          case '3':
            showMe(places[Number(inputValue) - 1]).then(async () => {
              pointer = 18;
              flashPage()
              P.inputValue.value = ""
            })
            break;
          case '4':
            showMe("不是这些地方").then(() => {
              places = P.getPlaces(3);
              P.gameWindow.addText(text = {
                text: `是年岁大了，地名都已记不真切了，那是这些地方吗？`,
                from: PERSONS.LAOZHE.jiuli,
                color: COLORS.WINDOW.NORMAL_NPC
              })
              waitAMoment()
              setTimeout(() => {
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
                pointer = 998
                P.inputValue.value = ""
              }, 10)
            })
            break;
          default:
            showMe("（说了一些胡言乱语）").then(() => {
              P.gameWindow.addText(text = {
                text: `何处？`,
                from: PERSONS.LAOZHE.jiuli,
                color: COLORS.WINDOW.NORMAL_NPC
              })
              waitAMoment()
              setTimeout(() => {
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
                pointer = 998
                P.inputValue.value = ""
              }, 10)
            })
            break;
        }
        break;
      // 回答姓名
      case 999:
        inputValue = P.inputValue.value.toLocaleLowerCase()
        if (P.isTrue(inputValue)) {
          inputValue = "没错"
          pointer = 16;
        } else {
          inputValue = '【胡言乱语】'
          pointer = 15;
        }
        showMe(inputValue).then(() => {
          P.inputValue.value = ""
          flashPage()
          waitAMoment()
        })
        break
      case 16:
      default:
        pointer++
        flashPage()
    }
  }
}

const flashPage = () => {
  const text = registTexts.get(pointer) as ITexts
  P.gameWindow.addText(text as ITexts)
}
const showMe = async (inputValue: string) => {
  if (!inputValue) inputValue = "没有说话"
  const text = { text: inputValue, from: "我", color: COLORS.ME }
  P.gameWindow.addText(text)
  waitAMoment()
  await P.sleep(10)
}
const waitAMoment = (second = 10) => {
  block = true
  setTimeout(() => {
    block = false
  }, second)
}

export default regist
