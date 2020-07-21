import Visualization from './src/compontents/graphics/index';

let dom: HTMLElement = document.getElementById('canvas') as HTMLElement;

let v: Visualization = new Visualization(dom, {
    width: 400,
    height: 400
});
