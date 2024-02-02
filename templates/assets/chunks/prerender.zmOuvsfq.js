/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderHead, d as renderComponent, e as renderSlot, f as addAttribute } from './astro.BBAPyO9T.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                        */
/* empty css                        */
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import dayjs from 'dayjs';

const $$Astro$4 = createAstro();
const $$NavMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavMenu;
  return renderTemplate`${maybeRenderHead()}<header class="w-full"> <!-- [导航菜单] --> <nav class="w-full grid gap-8" font="bold"> <a href="/" th:href="@{/}" th:text="#{home}">主页</a> <a href="/post" th:href="@{/post}" th:text="#{posts}">文章</a> <a href="/links" th:href="@{/links}" th:text="#{links}">友链</a> </nav> </header>`;
}, "/Users/yorkshire/halo2-dev/themes/theme-zed/src/components/layout/NavMenu.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body bg="white" dark="bg-black" transition="all!"> ${renderComponent($$result, "CyberBackground", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/yorkshire/halo2-dev/themes/theme-zed/src/components/layout/background/CyberBackground.vue", "client:component-export": "default" })} <div class="flex justify-center text-white font-['Monaspace_Krypton']"> <!-- 更改暗色模式 --> ${renderComponent($$result, "SwitchDark", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/yorkshire/halo2-dev/themes/theme-zed/src/components/layout/SwitchDark.vue", "client:component-export": "default" })} ${renderComponent($$result, "NavMenu", $$NavMenu, {})} <!-- <div>
        <a href="/">默认</a>
        <a href="/?language=zh">中文</a>
        <a href="/?language=en">英文</a>
      </div> --> </div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/yorkshire/halo2-dev/themes/theme-zed/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro111.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="text-8xl text-white text-center my-20 select-none nhd" data-astro-cid-j7pv25f6>
ZANE
</div> <!-- 我的信息 --> <span class="prose prose-lg text-white" th:utext="\${singlePageFinder.getByName(theme.config.about.singlePage).content.content}" data-astro-cid-j7pv25f6></span> <ul th:text="\${theme.config.about.singlePage}" data-astro-cid-j7pv25f6> <!-- do something --> </ul> </main> ` })} `;
}, "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/index.astro", void 0);

const $$file$2 = "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/index.astro";
const $$url$2 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Links = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Links;
  const links = [
    {
      id: 1,
      name: "Ryan Wang's Blog",
      url: "https://ryanc.cc/",
      logo: "https://ryanc.cc/avatar",
      description: "Hello Halo",
      team: "",
      priority: 0
    },
    {
      id: 40,
      name: "guqing's blog",
      url: "https://www.guqing.xyz/",
      logo: "https://www.guqing.xyz/avatar",
      description: "\u6BD5\u751F\u6240\u6C42\u65E0\u5B83\uFF0C\u7231\u4E0E\u81EA\u7531\u800C\u5DF2",
      team: "",
      priority: 0
    },
    {
      id: 104,
      name: "JohnNiang's Blog",
      url: "https://johnniang.me",
      logo: "https://johnniang.me/avatar",
      description: "Core contributor of Halo organization.",
      team: "",
      priority: 0
    },
    {
      id: 152,
      name: "\u70DF\u971E\u5FD7",
      url: "https://simplestark.com",
      logo: "https://simplestark.com/avatar",
      description: "\u7A7A\u6709\u70DF\u971E\u4E4B\u5FD7\uFF0C\u53F9\u65E0\u6C34\u4E91\u4E4B\u8EAB\u3002",
      team: "",
      priority: 0
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Links", "data-astro-cid-au7rboj5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-au7rboj5> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" data-astro-cid-au7rboj5> ${links.map((data) => renderTemplate`<a${addAttribute(data.url, "href")} th:href="#{data.url}" target="_blank" data-astro-cid-au7rboj5> <div class="relative rounded border border-gray-300 bg-white px-5 py-4 shadow-sm hover:shadow flex items-center space-x-3 hover:border-gray-400" data-astro-cid-au7rboj5> <div class="flex-shrink-0" data-astro-cid-au7rboj5> <img class="h-12 w-12 rounded-full" th:src="#{data.logo}" th:alt="#{data.name}"${addAttribute(data.logo, "src")}${addAttribute(data.name, "alt")} data-astro-cid-au7rboj5> </div> <div class="flex-1 min-w-0" data-astro-cid-au7rboj5> <div data-astro-cid-au7rboj5> <p class="text-sm font-medium text-gray-900 truncate" th:text="#{data.name}" data-astro-cid-au7rboj5> ${data.name} </p> <p class="text-sm text-gray-500 truncate" th:text="#{data.description}" data-astro-cid-au7rboj5> ${data.description} </p> </div> </div> </div> </a>`)} </div> </main> ` })} `;
}, "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/links.astro", void 0);

const $$file$1 = "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/links.astro";
const $$url$1 = "/links.html";

const links = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostCard",
  setup(__props, { expose: __expose }) {
    __expose();
    const isShowing = ref(true);
    function resetIsShowing() {
      isShowing.value = false;
      setTimeout(() => {
        isShowing.value = true;
      }, 500);
    }
    const __returned__ = { isShowing, resetIsShowing, get TransitionRoot() {
      return TransitionRoot;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><span class="text-xl font-bold" th:text="@{post.title}">Hello Halo</span><div class="flex flex-col items-center py-16"><div class="h-32 w-32">`);
  _push(ssrRenderComponent($setup["TransitionRoot"], {
    show: $setup.isShowing,
    appear: "",
    as: "template",
    enter: "transform transition duration-[400ms]",
    "enter-from": "opacity-0 rotate-[-120deg] scale-50",
    "enter-to": "opacity-100 rotate-0 scale-100",
    leave: "transform duration-200 transition ease-in-out",
    "leave-from": "opacity-100 rotate-0 scale-100 ",
    "leave-to": "opacity-0 scale-95 "
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="h-full w-full rounded-md bg-white shadow-lg"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "h-full w-full rounded-md bg-white shadow-lg" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="mt-8 flex transform items-center rounded-full bg-black bg-opacity-20 px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"><svg class="h-5 w-5 opacity-70" fill="none" viewBox="0 0 20 20"><path d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7" stroke="currentColor" stroke-width="1.5"></path></svg><span class="ml-3">Click to transition</span></button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const now = dayjs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Post Page." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<time>${now}</time> <main> ${renderComponent($$result2, "PostCard", PostCard, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/yorkshire/halo2-dev/themes/theme-zed/src/components/PostCard.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/post.astro", void 0);

const $$file = "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/post.astro";
const $$url = "/post.html";

const post = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Post,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as i, links as l, post as p };
