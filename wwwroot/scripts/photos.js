// @ts-ignore
import { scrollToElement } from "/scripts/functions.js";
// @ts-ignore
export const vue = new Vue({
    el: "#vueApp",
    mounted: function () {
        this.main();
    },
    data: {
        menuExpanded: false,
        temp: {},
    },
    methods: {
        main: function () {
            const _this = this;
        },
        scrollToElement(elementId) {
            scrollToElement(elementId);
        }
    },
    computed: {},
});
