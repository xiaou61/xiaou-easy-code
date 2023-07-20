import type { Ref } from 'vue';
export declare const useSuggestionsFocus: (suggestions: Ref<unknown[]>) => {
    focusIndex: Ref<number>;
    focusNext: () => void;
    focusPrev: () => void;
};
