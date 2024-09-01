// @ts-ignore
import { scrollToElement } from "/scripts/functions.js";
// @ts-ignore
export const vue = new Vue({
    el: "#vueApp",
    mounted: function () {
        this.main();
        console.warn('Vue mounted');
    },
    data: {
        currentPage: null,
        vueLoaded: true,
        webTheme: 'light',
        temp: {},
        team: [],
    },
    methods: {
        main: function () {
            const _this = this;
            fetch('/api/kadernice', { method: 'GET' }).then(response => response.json()).then(data => { _this.team = data; });
        },
        scrollToElement(elementId) {
            scrollToElement(elementId);
        }
    },
    computed: {},
});
