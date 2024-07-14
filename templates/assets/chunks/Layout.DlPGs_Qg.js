import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, a as renderComponent, f as renderSlot, d as createAstro } from './astro/server.BC2o93N5.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full"> <!-- [导航菜单] --> <nav class="w-full grid gap-8" font="bold"> <a href="/" th:href="@{/}" th:text="#{home}">主页</a> <a href="/post" th:href="@{/post}" th:text="#{posts}">文章</a> <a href="/links" th:href="@{/links}" th:text="#{links}">友链</a> </nav> </header>`;
}, "/Users/zaneliu/Projects/open-source/theme-zed/src/components/layout/NavMenu.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body bg="white" dark="bg-black" transition="all!"> ${renderComponent($$result, "CyberBackground", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/zaneliu/Projects/open-source/theme-zed/src/components/layout/background/CyberBackground.tsx", "client:component-export": "CyberBackground" })} <div class="flex justify-center text-white font-['Monaspace_Krypton']"> ${renderComponent($$result, "NavMenu", $$NavMenu, {})} <!-- <div>
        <a href="/">默认</a>
        <a href="/?language=zh">中文</a>
        <a href="/?language=en">英文</a>
      </div> --> </div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/zaneliu/Projects/open-source/theme-zed/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
