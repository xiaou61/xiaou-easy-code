import { defineComponent, h, resolveComponent } from "vue";
import { useLink } from "vue-router";
import { useRouteLocale } from "@vuepress/client";
import SkipLink from "@theme-hope/components/SkipLink.js";
import { NotFoundIcon } from "@theme-hope/components/icons/index.js";
import { useThemeLocaleData } from "@theme-hope/composables/index.js";
import "../styles/not-found.scss";
export default defineComponent({
    name: "NotFound",
    setup() {
        const routeLocale = useRouteLocale();
        const themeLocale = useThemeLocaleData();
        const getMsg = () => {
            const messages = themeLocale.value.routeLocales["notFoundMsg"];
            return messages[Math.floor(Math.random() * messages.length)];
        };
        const { navigate } = useLink({
            to: themeLocale.value.home ?? routeLocale.value,
        });
        return () => [
            h(SkipLink),
            h(resolveComponent("CommonWrapper"), { sidebar: false }, () => h("main", { class: "page not-found", id: "main-content" }, [
                h(NotFoundIcon),
                h("blockquote", getMsg()),
                h("button", {
                    class: "action-button",
                    onClick: () => {
                        window.history.go(-1);
                    },
                }, themeLocale.value.routeLocales.back),
                h("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home),
            ])),
        ];
    },
});
//# sourceMappingURL=NotFound.js.map