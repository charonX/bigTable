import { ArgAttrs } from 'spritejs';
export default abstract class Base {
    // public constructor();
    public abstract heightLight(): void;
    public abstract update(): void;
    public abstract attr(attrs: ArgAttrs): void;
}
