// @ts-ignore
import {  } from "./functions";

// @ts-ignore
export const vue: Vue = new Vue({
    el: "#vueApp",
    mounted: function(){
        this.main();
    },






    data: {
        currentPage: null,
        vueLoaded: true,
        webTheme: 'light',
        temp: {},

        team: [],
    },





    methods: {
        main: function(): void {
            const _this = this as any;
            fetch('/api/kadernice', { method: 'GET' }).then(response => response.json()).then(data => { _this.team = data; });
        },
    },

    computed: {
    },
})