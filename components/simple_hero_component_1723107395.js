/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
Vue.component("simple_hero_component_1723107395", {
    template: `
        <section id="hero-section" style="min-height: 550px"     class="bg-white dark:bg-gray-900 flex-1" style=""><div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28" style=""><div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7"><div id="hero-title-container-text" class="flex" style=""><h1 id="hero-title" contenteditable="true" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white" style="position: relative;" data-mf-new="true">Create Powerful Bottle's</h1></div> <div id="hero-subtitle-container" class="flex" style=""><p id="hero-subtitle" contenteditable="true" class="flex-1 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" style="">Our intuitive platform makes building bottle apps effortless</p></div> <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4" style=""><div id="hero-button-1-container" class="flex"><a id="hero-button-1" href="https://github.com/themesberg/landwind" contenteditable="true" class="flex-1  items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Get Started for Free</a></div> <div id="hero-button-2-container" class="flex"><a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" contenteditable="true" class="flex-1  items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Examples</a></div></div></div> <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex" style=""><img id="hero-image" src="./images/hero.png" alt="hero image" style=""></div></div></section>            
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
