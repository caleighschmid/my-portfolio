import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex flex-1 justify-between gap-4 items-center" data-svelte-h="svelte-1947go9"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Wine Buddy",
      icon: "fa-solid fa-wine-glass",
      href: "https://github.com/caleighschmid/wine-pairing-app"
    },
    {
      name: "Poké-pedia",
      icon: "fa-solid fa-gamepad",
      href: ""
    },
    {
      name: "Gym Buddy",
      icon: "fa-solid fa-dumbbell",
      href: "https://github.com/caleighschmid/TE-Final-Capstone-GymBuddy"
    }
  ];
  let benefits = [
    {
      name: "A former neuroscientist",
      description: "I graduated from Lafayette College in 2021 with a B.S. in Neuroscience and a B.S. in Spanish.  During college, I performed research with one of my professors, which resulted in a publication in Frontiers of Cellular Neuroscience Journal.  I gained valuable analytical skills and attention to detail through this experience, which make me a strong developer."
    },
    {
      name: "An iberophile",
      description: "What's an iberophile?  Similar to a francophile, an iberophile is someone who loves Spain and Spanish culture.  I studied abroad in Spain during college, and after graduation I took a job teaching English in an elementary school in Granada.  Being thrown into a new and different culture taught me how to grow and thrive even in unfamiliar settings and under a lot of pressure."
    },
    {
      name: "A full-stack bootcamp grad",
      description: "In January 2024, I graduated from Tech Elevator's full-stack Java bootcamp.  This bootcamp included 14 weeks of daily live instruction and homework exercises, two module capstones and one final group capstone, which was to create a full-stack, functional web application.  Some people compare bootcamps to 'drinking from a firehose', but I found the experience fun and fulfilling.  I graduated with a deep understanding of Java, PostgreSQL, and JavaScript with Vue.js."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1gm06i5"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! <br>
                I&#39;m <span class="poppins text-violet-400">Caleigh</span> Schmid,
                <br>
                Full Stack
                <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-large md:text-xl">My <span class="poppins text-violet-400">favorite tech</span> includes
                Java, JavaScript (Vue.js), &amp; PostgreSQL!</p> <a target="_blank" href="https://www.linkedin.com/in/caleighschmid/" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"> <img${add_attribute("src", "images/profile.png", 0)} alt="Profile Image" class="object-cover z-[2] max-h-[70vh]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-q8fle3"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <a href="https://youtu.be/ZxPGCUEugTs?si=Z88tjRnA6JtMwVOG" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200" data-svelte-h="svelte-erco6u"><i class="fa-regular fa-circle-play"></i> <p>My capstone project demo - &quot;Gym Buddy&quot;</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-15u3fzu">Wine Buddy is a wine-pairing guide created with <strong class="text-violet-400">Vue.js, Java, and PostgreSQL.</strong>
                    Wine Buddy takes a user&#39;s inputted food or cuisine and returns
                    wine recommendations using the
                    <strong class="text-violet-400">Spoonacular API.</strong></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-alyecm">Poké-pedia is a Pokémon companion application built in <strong class="text-violet-400">Vue.js and Java</strong>
                    with a
                    <strong class="text-violet-400">PostgreSQL database.</strong>
                    Poké-pedia utilizes the
                    <strong class="text-violet-400">Pokémon API</strong>
                    to provide a list of all Pokémon and details about them.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-g6xmg2">Gym Buddy is a full-stack <strong class="text-violet-400">Vue.js, Java, and PostgreSQL</strong>
                    app that serves as a workout companion, with functionality to
                    start a workout, log reps and weights on various machines, and
                    view past activity by month.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-oo7dtf"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins" data-svelte-h="svelte-xnlcpy">The <span class="text-violet-400 poppins">Complete</span> Package.</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-1lfox15"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200"><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Critical Thought</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Interpersonal Skills</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Programming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
