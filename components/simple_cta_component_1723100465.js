/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723100465", {
    template: `
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1" style="min-height: 310px; border: 2px solid green;"><div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center"><div id="cta-title-container" class="flex" style=""><h2 id="cta-title" contenteditable="true" data-mf-new="true" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white" style="position: relative;">N</h2></div> <div id="cta-subtitle-container" class="flex" style=""><p id="cta-subtitle" contenteditable="true" data-mf-new="true" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg" style="position: relative; border: 2px solid red;">M<span class="plus-icon" style="position: absolute; top: -10px; right: -10px; color: white; background-color: green; text-align: center; display: none; border-radius: 50%; font-size: 15px; width: 20px; height: 20px; font-weight: normal; line-height: 20px; cursor: pointer;">+<div class="options-menu" style="position: absolute; top: 29px; left: -17px; background-color: white; border: 1px solid rgb(204, 204, 204); padding: 5px; border-radius: 5px; min-width: 192px; height: auto; display: none;"><div data-value="add_above" style="color: black; text-align: left; padding: 5px;">1. Add component above this</div><div data-value="modify" style="color: black; text-align: left; padding: 5px;">2. Modify this component</div><div data-value="add_below" style="color: black; text-align: left; padding: 5px;">3. Add component below this</div><div data-value="add_left" style="color: black; text-align: left; padding: 5px;">4. Add component to the left</div><div data-value="add_right" style="color: black; text-align: left; padding: 5px;">5. Add component to the right</div></div></span></p></div> <div id="cta-button-container" class="flex" style=""><a id="cta-button" href="#" contenteditable="true" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800" style="">Start Building Bottles</a></div></div></div></section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
