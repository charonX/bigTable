import { Group, Rect, Label } from 'spritejs';
import Base from './base';

export default class TextBlock extends Base {
    public container: Label;
    private defaultAttrs: Object = {
        anchor: [0.5, 0.5],
        bgcolor: '#ffcc00',
        padding: [5, 10]
    };
    public constructor(txt: String = 'text') {
        super();
        this.container = new Label(txt);
        this.container.attr(this.defaultAttrs);
    }
    public heightLight() {}

    public attr(option: Object) {
        this.container.attr(option);
    }
}
