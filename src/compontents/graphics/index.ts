import * as spritejs from 'spritejs';
import List from './dataStructure/list';

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
        let a = new List([1, 2, 3, 4, 5]);

        layer.append(a.container);
    }
}
