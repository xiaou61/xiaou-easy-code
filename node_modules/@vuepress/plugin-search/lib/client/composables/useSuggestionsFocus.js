import { ref } from 'vue';
export const useSuggestionsFocus = (suggestions) => {
    const focusIndex = ref(0);
    const focusNext = () => {
        if (focusIndex.value < suggestions.value.length - 1) {
            focusIndex.value += 1;
        }
        else {
            focusIndex.value = 0;
        }
    };
    const focusPrev = () => {
        if (focusIndex.value > 0) {
            focusIndex.value -= 1;
        }
        else {
            focusIndex.value = suggestions.value.length - 1;
        }
    };
    return {
        focusIndex,
        focusNext,
        focusPrev,
    };
};
