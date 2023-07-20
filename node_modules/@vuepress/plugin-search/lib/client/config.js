import { defineClientConfig } from '@vuepress/client';
import { h } from 'vue';
import { SearchBox } from './components/index.js';
import './styles/vars.css';
import './styles/search.css';
const locales = __SEARCH_LOCALES__;
const hotKeys = __SEARCH_HOT_KEYS__;
const maxSuggestions = __SEARCH_MAX_SUGGESTIONS__;
export default defineClientConfig({
    enhance({ app }) {
        // wrap the `<SearchBox />` component with plugin options
        app.component('SearchBox', (props) => h(SearchBox, {
            locales,
            hotKeys,
            maxSuggestions,
            ...props,
        }));
    },
});
