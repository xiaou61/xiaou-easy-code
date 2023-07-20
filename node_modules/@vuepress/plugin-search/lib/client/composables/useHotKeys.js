import { onBeforeUnmount, onMounted } from 'vue';
import { isFocusingTextControl, isKeyMatched } from '../utils/index.js';
export const useHotKeys = ({ input, hotKeys, }) => {
    if (hotKeys.value.length === 0)
        return;
    const onKeydown = (event) => {
        if (!input.value)
            return;
        if (
        // key matches
        isKeyMatched(event, hotKeys.value) &&
            // event does not come from the search box itself or
            // user isn't focusing (and thus perhaps typing in) a text control
            !isFocusingTextControl(event.target)) {
            event.preventDefault();
            input.value.focus();
        }
    };
    onMounted(() => {
        document.addEventListener('keydown', onKeydown);
    });
    onBeforeUnmount(() => {
        document.removeEventListener('keydown', onKeydown);
    });
};
