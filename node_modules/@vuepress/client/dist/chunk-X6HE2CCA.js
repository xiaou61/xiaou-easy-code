// src/composables/pagesData.ts
import { pagesData as pagesDataRaw } from "@internal/pagesData";
import { ref } from "vue";
var pagesData = ref(pagesDataRaw);
var usePagesData = () => pagesData;

// src/composables/pageData.ts
import { readonly, ref as ref2 } from "vue";
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
var pageData = ref2(pageDataEmpty);
var usePageData = () => pageData;
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot)) {
  __VUE_HMR_RUNTIME__.updatePageData = (data) => {
    pagesData.value[data.key] = () => Promise.resolve(data);
    if (data.key === pageData.value.key) {
      pageData.value = data;
    }
  };
}

// src/composables/pageFrontmatter.ts
import { inject } from "vue";
var pageFrontmatterSymbol = Symbol(
  __VUEPRESS_DEV__ ? "pageFrontmatter" : ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};

// src/composables/pageHead.ts
import { inject as inject2 } from "vue";
var pageHeadSymbol = Symbol(
  __VUEPRESS_DEV__ ? "pageHead" : ""
);
var usePageHead = () => {
  const pageHead = inject2(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};

// src/composables/pageHeadTitle.ts
import { inject as inject3 } from "vue";
var pageHeadTitleSymbol = Symbol(
  __VUEPRESS_DEV__ ? "pageHeadTitle" : ""
);
var usePageHeadTitle = () => {
  const pageHeadTitle = inject3(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};

// src/composables/pageLang.ts
import { inject as inject4 } from "vue";
var pageLangSymbol = Symbol(
  __VUEPRESS_DEV__ ? "pageLang" : ""
);
var usePageLang = () => {
  const pageLang = inject4(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};

// src/composables/routeLocale.ts
import { inject as inject5 } from "vue";
var routeLocaleSymbol = Symbol(
  __VUEPRESS_DEV__ ? "routeLocale" : ""
);
var useRouteLocale = () => {
  const routeLocale = inject5(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};

// src/composables/siteData.ts
import { siteData as siteDataRaw } from "@internal/siteData";
import { ref as ref3 } from "vue";
var siteData = ref3(siteDataRaw);
var useSiteData = () => siteData;
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot)) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data) => {
    siteData.value = data;
  };
}

// src/composables/siteLocaleData.ts
import { inject as inject6 } from "vue";
var siteLocaleDataSymbol = Symbol(
  __VUEPRESS_DEV__ ? "siteLocaleData" : ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject6(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};

// src/composables/updateHead.ts
import { inject as inject7 } from "vue";
var updateHeadSymbol = Symbol(
  __VUEPRESS_DEV__ ? "updateHead" : ""
);
var useUpdateHead = () => {
  const updateHead = inject7(updateHeadSymbol);
  if (!updateHead) {
    throw new Error("useUpdateHead() is called without provider.");
  }
  return updateHead;
};

// src/resolvers.ts
import {
  dedupeHead,
  isArray,
  isString,
  resolveLocalePath
} from "@vuepress/shared";
import { reactive } from "vue";
var resolvers = reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await pageDataResolver?.();
    return pageData2 ?? pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title}` : ``}${siteLocale.title ? ` | ${siteLocale.title}` : ``}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales, routePath) => resolveLocalePath(locales, routePath),
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});

// src/components/ClientOnly.ts
import { defineComponent, onMounted, ref as ref4 } from "vue";
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref4(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => isMounted.value ? ctx.slots.default?.() : null;
  }
});

// src/components/Content.ts
import { pagesComponents } from "@internal/pagesComponents";
import { computed, defineComponent as defineComponent2, h } from "vue";
var Content = defineComponent2({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? h(pageComponent.value) : h(
      "div",
      __VUEPRESS_DEV__ ? "Page does not exist. This is a fallback content." : "404 Not Found"
    );
  }
});

// src/components/Vuepress.ts
import { clientConfigs } from "@internal/clientConfigs";
import { isString as isString2 } from "@vuepress/shared";
import { computed as computed2, defineComponent as defineComponent3, h as h2 } from "vue";
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var layouts = clientConfigs.reduce(
  (prev, item) => ({
    ...prev,
    ...item.layouts
  }),
  {}
);
var Vuepress = defineComponent3({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = computed2(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString2(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = LAYOUT_NAME_DEFAULT;
        }
      } else {
        layoutName = LAYOUT_NAME_NOT_FOUND;
      }
      return layouts[layoutName];
    });
    return () => h2(layoutComponent.value);
  }
});

// src/withBase.ts
import { isLinkHttp, removeLeadingSlash } from "@vuepress/shared";
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};

export {
  pagesData,
  usePagesData,
  pageDataEmpty,
  pageData,
  usePageData,
  pageFrontmatterSymbol,
  usePageFrontmatter,
  pageHeadSymbol,
  usePageHead,
  pageHeadTitleSymbol,
  usePageHeadTitle,
  pageLangSymbol,
  usePageLang,
  routeLocaleSymbol,
  useRouteLocale,
  siteData,
  useSiteData,
  siteLocaleDataSymbol,
  useSiteLocaleData,
  updateHeadSymbol,
  useUpdateHead,
  resolvers,
  ClientOnly,
  Content,
  Vuepress,
  withBase
};
