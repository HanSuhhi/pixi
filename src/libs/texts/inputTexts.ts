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
