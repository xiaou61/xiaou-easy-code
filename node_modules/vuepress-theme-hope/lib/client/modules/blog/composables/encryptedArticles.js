import { inject, provide } from "vue";
import { useBlogType } from "vuepress-plugin-blog2/client";
export const encryptedArticlesSymbol = Symbol.for("encryptedArticles");
/**
 * Inject encryptedArticles
 */
export const useEncryptedArticles = () => {
    const encryptedArticles = inject(encryptedArticlesSymbol);
    if (!encryptedArticles) {
        throw new Error("useEncryptedArticles() is called without provider.");
    }
    return encryptedArticles;
};
/**
 * Provide encryptedArticles
 */
export const setupEncryptedArticles = () => {
    const encryptedArticles = useBlogType("encrypted");
    provide(encryptedArticlesSymbol, encryptedArticles);
};
//# sourceMappingURL=encryptedArticles.js.map