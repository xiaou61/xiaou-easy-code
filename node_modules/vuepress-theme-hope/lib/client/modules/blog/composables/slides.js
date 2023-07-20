import { inject, provide } from "vue";
import { useBlogType } from "vuepress-plugin-blog2/client";
export const slidesSymbol = Symbol.for("slides");
/**
 * Inject slides
 */
export const useSlides = () => {
    const slides = inject(slidesSymbol);
    if (!slides) {
        throw new Error("useSlides() is called without provider.");
    }
    return slides;
};
/**
 * Provide slides
 */
export const setupSlides = () => {
    const slides = useBlogType("slide");
    provide(slidesSymbol, slides);
};
//# sourceMappingURL=slides.js.map