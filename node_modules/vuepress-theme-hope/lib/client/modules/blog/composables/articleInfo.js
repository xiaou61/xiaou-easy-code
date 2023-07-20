import { computed, reactive, toRef } from "vue";
import { getAuthor, getCategory, getDate, getTag, } from "vuepress-shared/client";
import { useCategoryMap } from "./categoryMap.js";
import { useBlogOptions } from "./options.js";
import { useTagMap } from "./tagMap.js";
import { useThemeLocaleData } from "@theme-hope/composables/index.js";
export const useArticleAuthor = (info) => {
    const themeLocale = useThemeLocaleData();
    return computed(() => {
        const { ["a" /* ArticleInfoType.author */]: author } = info.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const useArticleCategory = (info) => {
    const categoryMap = useCategoryMap();
    return computed(() => getCategory(info.value["c" /* ArticleInfoType.category */]).map((name) => ({
        name,
        path: categoryMap.value.map[name].path,
    })));
};
export const useArticleTag = (info) => {
    const tagMap = useTagMap();
    return computed(() => getTag(info.value["g" /* ArticleInfoType.tag */]).map((name) => ({
        name,
        path: tagMap.value.map[name].path,
    })));
};
export const useArticleDate = (info) => computed(() => {
    const { ["d" /* ArticleInfoType.date */]: date } = info.value;
    return date ? getDate(date) : null;
});
export const useArticleInfo = (props) => {
    const info = toRef(props, "info");
    const blogOptions = useBlogOptions();
    const author = useArticleAuthor(info);
    const category = useArticleCategory(info);
    const tag = useArticleTag(info);
    const date = useArticleDate(info);
    const config = reactive({
        author: author.value,
        category: category.value,
        date: date.value,
        localizedDate: info.value["l" /* ArticleInfoType.localizedDate */] || "",
        tag: tag.value,
        isOriginal: info.value["o" /* ArticleInfoType.isOriginal */] || false,
        readingTime: info.value["r" /* ArticleInfoType.readingTime */] || null,
        pageview: props.path,
    });
    const items = computed(() => blogOptions.value.articleInfo);
    return { config, items };
};
//# sourceMappingURL=articleInfo.js.map