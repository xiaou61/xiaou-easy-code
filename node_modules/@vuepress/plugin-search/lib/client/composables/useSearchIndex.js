import { searchIndex as searchIndexRaw } from '@internal/searchIndex';
import { ref } from 'vue';
export const searchIndex = ref(searchIndexRaw);
export const useSearchIndex = () => searchIndex;
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot)) {
    __VUE_HMR_RUNTIME__.updateSearchIndex = (data) => {
        searchIndex.value = data;
    };
}
