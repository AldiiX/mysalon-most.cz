// @ts-ignore
import { scrollToElement } from "/scripts/functions.js";

// @ts-ignore
export const vue: Vue = new Vue({
    el: "#vueApp",
    mounted: function(){
        this.main();
    },






    data: {
        menuExpanded: false,
        temp: {},
    },





    methods: {
        main: function(): void {
            const _this = this as any;
        },

        scrollToElement(elementId: string): void {
            scrollToElement(elementId);
        }
    },

    computed: {
    },
})