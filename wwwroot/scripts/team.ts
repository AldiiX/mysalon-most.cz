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
        webTheme: 'light',
        temp: {
            kaderniceShowInfo: [],
        },

        team: [],
    },





    methods: {
        main: function(): void {
        },

        scrollToElement(elementId: string): void {
            scrollToElement(elementId);
        },

        kaderniceShowInfoAdd: function(uuid: string) {
            const _this = this as any;

            _this.temp.kaderniceShowInfo.push(uuid as never);
            _this.temp.kaderniceShowInfo = Array.from(new Set(_this.temp.kaderniceShowInfo));

            console.warn("psuhed")
        },

        kaderniceShowInfoRemove: function(uuid: string) {
            const _this = this as any;
            _this.temp.kaderniceShowInfo = _this.temp.kaderniceShowInfo.filter((x: string) => x !== uuid) as never;
        },

        kaderniceShowInfoIncludes: function(uuid: string) {
            const _this = this as any;
            return _this.temp.kaderniceShowInfo.includes(uuid);
        },

        kaderniceShowInfoToggle: function(uuid: string) {
            const _this = this as any;

            if (_this.kaderniceShowInfoIncludes(uuid)) {
                _this.kaderniceShowInfoRemove(uuid);
            } else {
                _this.kaderniceShowInfoAdd(uuid);
            }
        },
    },

    computed: {
    },
})