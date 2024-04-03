<script>
    import Step from "./Step.svelte";

    let steps = [
        { name: "Wine Buddy", icon: "fa-solid fa-wine-glass", href: 'https://github.com/caleighschmid/wine-pairing-app'},
        { name: "Poké-pedia", icon: "fa-solid fa-gamepad", href:  ''},
        { name: "Gym Buddy", icon: "fa-solid fa-dumbbell", href:  'https://github.com/caleighschmid/TE-Final-Capstone-GymBuddy'},
    ];

    let benefits = [
        {
            name: "A former neuroscientist",
            description:
                "I graduated from Lafayette College in 2021 with a B.S. in Neuroscience and a B.S. in Spanish.  During college, I performed research with one of my professors, which resulted in a publication in Frontiers of Cellular Neuroscience Journal.  I gained valuable analytical skills and attention to detail through this experience, which make me a strong developer.",
        },
        {
            name: "An iberophile",
            description:
                "What's an iberophile?  Similar to a francophile, an iberophile is someone who loves Spain and Spanish culture.  I studied abroad in Spain during college, and after graduation I took a job teaching English in an elementary school in Granada.  Being thrown into a new and different culture taught me how to grow and thrive even in unfamiliar settings and under a lot of pressure.",
        },
        {
            name: "A full-stack bootcamp grad",
            description:
                "In January 2024, I graduated from Tech Elevator's full-stack Java bootcamp.  This bootcamp included 14 weeks of daily live instruction and homework exercises, two module capstones and one final group capstone, which was to create a full-stack, functional web application.  Some people compare bootcamps to 'drinking from a firehose', but I found the experience fun and fulfilling.  I graduated with a deep understanding of Java, PostgreSQL, and JavaScript with Vue.js.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! <br />
                I'm <span class="poppins text-violet-400">Caleigh</span> Schmid,
                <br />
                Full Stack
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-large md:text-xl">
                My <span class="poppins text-violet-400">favorite tech</span> includes
                Java, JavaScript (Vue.js), & PostgreSQL!
            </p>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/caleighschmid/"
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                ></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                src={"images/profile.png"}
                alt="Profile Image"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
        <a
            href="https://youtu.be/ZxPGCUEugTs?si=Z88tjRnA6JtMwVOG"
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex
        items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
        >
            <i class="fa-regular fa-circle-play"></i>
            <p>My capstone project demo - "Gym Buddy"</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Wine Buddy is a wine-pairing guide created with <strong
                        class="text-violet-400"
                        >Vue.js, Java, and PostgreSQL.</strong
                    >
                    Wine Buddy takes a user's inputted food or cuisine and returns
                    wine recommendations using the
                    <strong class="text-violet-400">Spoonacular API.</strong>
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Poké-pedia is a Pokémon companion application built in <strong
                        class="text-violet-400">Vue.js and Java</strong
                    >
                    with a
                    <strong class="text-violet-400">PostgreSQL database.</strong
                    >
                    Poké-pedia utilizes the
                    <strong class="text-violet-400">Pokémon API</strong>
                    to provide a list of all Pokémon and details about them.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    Gym Buddy is a full-stack <strong class="text-violet-400"
                        >Vue.js, Java, and PostgreSQL</strong
                    >
                    app that serves as a workout companion, with functionality to
                    start a workout, log reps and weights on various machines, and
                    view past activity by month.
                </p>
            </Step>
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3
        before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3
        after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins">Complete</span> Package.</h5>
        <div
            class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
        >
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class="border-b border-solid border-slate-200">
                    <tr class="">
                        <th />
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th
                            class="whitespace-nowrap bg-violet-700 text-white p-4 px-8"
                            >Me</th
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Dedication</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Critical Thought</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Interpersonal Skills</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                            >Programming Ability</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
        <p class="mx-auto">So why not invest?</p>
    </section>
</main>
