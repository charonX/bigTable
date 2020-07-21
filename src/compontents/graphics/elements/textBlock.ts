import { Group, Rect, Label, ArgAttrs } from 'spritejs';
import Base from './base';

export default class TextBlock extends Base {
    public container: Label;
    private attrs: Object = {
        anchor: [0.5, 0.5],
        bgcolor: '#ffcc00',
        padding: [5, 10]
    };
    public constructor(txt: String = 'text', attrs: ArgAttrs = {}) {
        super();
        this.attrs = Object.assign(this.attrs, attrs);
        this.container = new Label(txt);
        this.container.attr(this.attrs);
    }
    public heightLight() {}

    public attr(option: Object) {
        this.container.attr(option);
    }
}
