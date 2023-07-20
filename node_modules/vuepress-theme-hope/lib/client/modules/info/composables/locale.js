import { computed } from "vue";
import { useThemeLocaleData } from "@theme-hope/composables/index.js";
export const useMetaLocale = () => {
    const themeLocale = useThemeLocaleData();
    return computed(() => themeLocale.value.metaLocales);
};
//# sourceMappingURL=locale.js.map