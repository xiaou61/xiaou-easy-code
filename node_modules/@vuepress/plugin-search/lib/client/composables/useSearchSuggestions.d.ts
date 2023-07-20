import type { ComputedRef, Ref } from 'vue';
import type { SearchIndex } from '../../shared/index.js';
export interface SearchSuggestion {
    link: string;
    title: string;
    header?: string;
}
export declare const useSearchSuggestions: ({ searchIndex, routeLocale, query, maxSuggestions, }: {
    searchIndex: Ref<SearchIndex>;
    routeLocale: Ref<string>;
    query: Ref<string>;
    maxSuggestions: Ref<number>;
}) => ComputedRef<SearchSuggestion[]>;
