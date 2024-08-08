/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723103923", {
    template: `
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1" style="min-height: 630px;"><div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center"><div id="cta-title-container" class="flex" style=""><h2 id="cta-title" contenteditable="true" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white" style="position: relative;" data-mf-new="true">Create Your Dream Bottle's</h2></div> <div id="cta-subtitle-container" class="flex" style=""><p id="cta-subtitle" contenteditable="true" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg" style="">Design and build custom bottles with our easy-to-use platform.</p></div> <div id="cta-button-container" class="flex" style=""><a id="cta-button" href="#" contenteditable="true" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800" style="">Start Building Bottles</a></div></div></div></section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
