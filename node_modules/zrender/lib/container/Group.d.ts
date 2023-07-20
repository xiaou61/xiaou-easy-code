import Element, { ElementOption } from '../Element';
import BoundingRect from '../core/BoundingRect';
import Storage from '../Storage';
export interface GroupOption extends ElementOption {
}
export default class Group extends Element {
    isGroup: boolean;
    type: string;
    private _children;
    __storage: Storage;
    constructor(opts?: GroupOption);
    children(): Element<ElementOption>[];
    childAt(idx: number): Element;
    childOfName(name: string): Element;
    childCount(): number;
    add(child: Element): Group;
    addBefore(child: Element, nextSibling: Element): this;
    _doAdd(child: Element): void;
    remove(child: Element): this;
    removeAll(): this;
    eachChild<Context>(cb: (this: Context, el: Element, index?: number) => void, context?: Context): this;
    traverse<T>(cb: (this: T, el: Element) => void, context?: T): this;
    addChildrenToStorage(storage: Storage): void;
    delChildrenFromStorage(storage: Storage): void;
    dirty(): this;
    getBoundingRect(includeChildren?: Element[]): BoundingRect;
}
