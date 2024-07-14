/* empty css                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server.BC2o93N5.js';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout.DlPGs_Qg.js';
/* empty css                        */

const $$Links = createComponent(($$result, $$props, $$slots) => {
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
}, "/Users/zaneliu/Projects/open-source/theme-zed/src/pages/links.astro", void 0);

const $$file = "/Users/zaneliu/Projects/open-source/theme-zed/src/pages/links.astro";
const $$url = "/links.html";

export { $$Links as default, $$file as file, $$url as url };
