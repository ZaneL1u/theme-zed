/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent, e as renderSlot, m as maybeRenderHead } from '../astro.88aeb453.js';
import 'html-escaper';
import 'clsx';
/* empty css                          */
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body bg="white" dark="bg-#010400" transition="all"> ${renderComponent($$result, "CyberBackground", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/home/zaneliu/halo2-dev/themes/theme-zed/src/components/layout/CyberBackground.vue", "client:component-export": "default" })} <div class="flex justify-center text-white font-['Monaspace_Krypton']"> <!-- 更改暗色模式 --> <!-- <SwitchDark client:only /> --> <nav class="grid grid-cols-3 gap-8 mt-8 font-bold"> <a href="/" th:href="@{/}">Home</a> <a href="/post" th:href="@{/post}">Post</a> <a href="/links" th:href="@{/links}">Links</a> </nav> <!-- <div>
        <a href="/">默认</a>
        <a href="/?language=zh">中文</a>
        <a href="/?language=en">英文</a>
      </div> --> </div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/zaneliu/halo2-dev/themes/theme-zed/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro111.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="text-8xl text-white text-center my-20 nhd" data-astro-cid-j7pv25f6>ZANE</div> <!-- 我的信息 --> <span class="prose prose-lg text-white" th:utext="\${singlePageFinder.getByName(theme.config.about.singlePage).content.content}" data-astro-cid-j7pv25f6></span> <ul th:text="\${theme.config.about.singlePage}" data-astro-cid-j7pv25f6> <!-- do something --> </ul> </main> ` })} `;
}, "/home/zaneliu/halo2-dev/themes/theme-zed/src/pages/index.astro", void 0);

const $$file = "/home/zaneliu/halo2-dev/themes/theme-zed/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
