import * as spritejs from 'spritejs';
import TextBlock from './elements/textBlock';

interface Option {
    width: Number;
    height: Number;
}
export default class Visualization {
    public scene: spritejs.Scene;
    public constructor(container: HTMLElement, option: Option) {
        this.scene = new spritejs.Scene({
            container,
            width: option.width || 400,
            height: option.height || 400
        });

        let layer = this.scene.layer();
        let a = new TextBlock('abc');

        a.attr({
            anchor: [0.5, 0.5],
            bgcolor: '#ffcc00',
            x: 20,
            y: 20
        });
        layer.append(a.container);
    }
}
