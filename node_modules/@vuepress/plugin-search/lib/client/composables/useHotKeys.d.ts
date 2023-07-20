import type { Ref } from 'vue';
import type { HotKeyOptions } from '../../shared/index.js';
export declare const useHotKeys: ({ input, hotKeys, }: {
    input: Ref<HTMLInputElement | null>;
    hotKeys: Ref<(string | HotKeyOptions)[]>;
}) => void;
