// @ts-ignore
import { scrollToElement } from "/scripts/functions.js";

// @ts-ignore
export const vue: Vue = new Vue({
    el: "#vueApp",
    mounted: function(){
        this.main();
    },






    data: {
        currentPage: null,
        vueLoaded: true,
        menuExpanded: false,
        webTheme: 'light',
        temp: {},

        team: [],
        reviews: null,
    },





    methods: {
        main: function(): void {
            const _this = this as any;
            fetch('/api/kadernice', { method: 'GET' }).then(response => response.json()).then(data => { _this.team = data; });
            fetch("/api/reviews").then(response => response.json()).then(data => { _this.reviews = data; });
        },

        scrollToElement(elementId: string): void {
            scrollToElement(elementId);
        },
    },

    computed: {
        displayedReviews: function (): any {
            const _this = this as any;
            if (_this.reviews == null) return [];

            return _this.reviews.slice(0, 6);
        }
    },
})