/* empty css                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from './astro/server.BC2o93N5.js';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout.DlPGs_Qg.js';
/* empty css                        */

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro111.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="text-8xl text-white text-center my-20 select-none nhd" data-astro-cid-j7pv25f6>
ZANE
</div> <!-- 我的信息 --> <span class="prose prose-lg text-white" th:utext="\${singlePageFinder.getByName(theme.config.about.singlePage).content.content}" data-astro-cid-j7pv25f6></span> <ul th:text="\${theme.config.about.singlePage}" data-astro-cid-j7pv25f6> <!-- do something --> </ul> </main> ` })} `;
}, "/Users/zaneliu/Projects/open-source/theme-zed/src/pages/index.astro", void 0);

const $$file = "/Users/zaneliu/Projects/open-source/theme-zed/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
