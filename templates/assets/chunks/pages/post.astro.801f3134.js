/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.88aeb453.js';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './index.astro.1e0b05e4.js';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import dayjs from 'dayjs';

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

export { $$Post as default, $$file as file, $$url as url };
