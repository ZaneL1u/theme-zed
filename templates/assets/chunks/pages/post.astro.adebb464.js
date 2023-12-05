/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.ccad35f2.js';
import 'html-escaper';
import 'clsx';
import { P as PostCard, $ as $$Layout } from './index.astro.bc06dda9.js';
import dayjs from 'dayjs';

const $$Astro = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const now = dayjs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Post Page." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<time>${now}</time> <main> ${renderComponent($$result2, "PostCard", PostCard, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/yorkshire/halo2-dev/themes/theme-zed/src/components/PostCard.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/post.astro", void 0);

const $$file = "/Users/yorkshire/halo2-dev/themes/theme-zed/src/pages/post.astro";
const $$url = "/post.html";

export { $$Post as default, $$file as file, $$url as url };
