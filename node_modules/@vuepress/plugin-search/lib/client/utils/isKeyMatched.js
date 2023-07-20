import { isString } from '@vuepress/shared';
export const isKeyMatched = (event, hotKeys) => hotKeys.some((item) => {
    if (isString(item)) {
        return item === event.key;
    }
    const { key, ctrl = false, shift = false, alt = false } = item;
    return (key === event.key &&
        ctrl === event.ctrlKey &&
        shift === event.shiftKey &&
        alt === event.altKey);
});
