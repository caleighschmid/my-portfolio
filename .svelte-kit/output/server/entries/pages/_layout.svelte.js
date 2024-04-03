import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-1d1ix5w"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p class=""><b class="pr-2">Email</b> calanne14@gmail.com</p> <p class=""><b class="pr-2">Github</b> <a href="https://github.com/caleighschmid" class="text-violet-400" target="_blank">caleighschmid<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p class=""><b class="pr-2">Linkedin</b> <a href="https://www.linkedin.com/in/caleighschmid/" class="text-violet-400" target="_blank">Caleigh Schmid<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [{ name: "Projects", link: "#projects" }, { name: "About me", link: "#about" }];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950" : " py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-75izm1"><b class="font-bold poppins">Caleigh</b> Schmid</h1> <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a target="_blank" href="https://www.linkedin.com/in/caleighschmid/" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-y8nyyh"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch</h4></a></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  let innerHeight = 0;
  return `<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer" data-svelte-h="svelte-hi10en"><i class="fa-solid fa-arrow-up"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y, innerHeight }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
