// @ts-ignore
import { scrollToElement } from "/scripts/functions.js";
// @ts-ignore
export const vue = new Vue({
    el: "#vueApp",
    mounted: function () {
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
        main: function () {
        },
        scrollToElement(elementId) {
            scrollToElement(elementId);
        },
        kaderniceShowInfoAdd: function (uuid) {
            const _this = this;
            _this.temp.kaderniceShowInfo.push(uuid);
            _this.temp.kaderniceShowInfo = Array.from(new Set(_this.temp.kaderniceShowInfo));
            console.warn("psuhed");
        },
        kaderniceShowInfoRemove: function (uuid) {
            const _this = this;
            _this.temp.kaderniceShowInfo = _this.temp.kaderniceShowInfo.filter((x) => x !== uuid);
        },
        kaderniceShowInfoIncludes: function (uuid) {
            const _this = this;
            return _this.temp.kaderniceShowInfo.includes(uuid);
        },
        kaderniceShowInfoToggle: function (uuid) {
            const _this = this;
            if (_this.kaderniceShowInfoIncludes(uuid)) {
                _this.kaderniceShowInfoRemove(uuid);
            }
            else {
                _this.kaderniceShowInfoAdd(uuid);
            }
        },
    },
    computed: {},
});
