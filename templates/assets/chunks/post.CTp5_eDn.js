/* empty css                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server.BC2o93N5.js';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout.DlPGs_Qg.js';
import dayjs from 'dayjs';

const $$Post = createComponent(($$result, $$props, $$slots) => {
  const now = dayjs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Post Page." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<time>${now}</time> <main> <!-- <PostCard client:visible /> -->
123123123
</main> ` })}`;
}, "/Users/zaneliu/Projects/open-source/theme-zed/src/pages/post.astro", void 0);

const $$file = "/Users/zaneliu/Projects/open-source/theme-zed/src/pages/post.astro";
const $$url = "/post.html";

export { $$Post as default, $$file as file, $$url as url };
