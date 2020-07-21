import { Label, Group, ArgAttrs } from 'spritejs';
import Base from './base';
import TextBlock from '../elements/textBlock';

interface Option {
    numberOfShow?: number;
    align?: string;
    space?: number;
}
export default class List extends Base {
    public container: Group = new Group();

    private option: Option = {
        numberOfShow: 10,
        align: 'horizontal', // horizontal/vertical 对齐方式
        space: 10
    };
    public constructor(value: Array<Number> = [], option: Option = {}) {
        super();
        this.option = Object.assign(this.option, option);
        this.createBlock(value);
    }
    public heightLight() {}

    public update() {}

    public attr(attrs: ArgAttrs): void {
        this.container.attr(attrs);
    }
    private createBlock(list: Array<Number>): void {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            console.log(i);
            let block = new TextBlock(String(i));
            console.log(block.container.offsetSize);
            let pos = [0, 0];
            if (this.option.align === 'horizontal') {
                pos[0] = i;
            }

            block.attr({
                pos: pos
            });
            this.container.append(block.container);
        }
    }
}
