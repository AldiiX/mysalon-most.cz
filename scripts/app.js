
new Vue({
    el: "#vueApp",   
    mounted: async function(){
        if(window.location.hash){
            this.currentPage = window.location.hash.substring(1)
        }
        else{
            this.currentPage = "home"
        };



        {   //*     SCROLL UP
            document.addEventListener("keydown", function(event) {
                if(["Esc", "Escape","escape","esc"].includes(event.key)) {

                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
                }
            })
        }

        {  //*      HASHCHANGE
            window.addEventListener('hashchange', async () => {
                if(!window.location.hash) location.href="";
                this.currentPage = window.location.hash.substring(1);
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});

                await this.alwaysActive();
            }, false);
        }


        { // header scroll
            var myScrollFunc = function() {
        
                const header = document.getElementById("HEADER");
        
                var y = window.scrollY;
                if (y >= 1) {
                    header.style.position = 'fixed';
                    header.style.top = '-20px';
                    header.style.backgroundColor = document.documentElement.style.getPropertyValue('--page1-bg');
                    /*header.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.75)';*/
                    header.style.borderBottom = `4px solid ${document.documentElement.style.getPropertyValue('--bg')}`;
                    ////headerShadow.style.opacity = '90%';
                } else {
                    header.style.position = 'absolute';
                    header.style.top = 0;
                    header.style.backgroundColor = 'unset';
                    header.style.backdropFilter = 'unset';
                    header.style.boxShadow = 'unset';
                    header.style.borderBottom = 'transparent 4px solid';
                    ////headerShadow.style.opacity = 0;
                }
            };
        
            window.addEventListener("scroll", myScrollFunc);
        }

        await this.alwaysActive();
    },






    data: {
        currentPage: null,
        webTheme: 'light',
        version: "16-01-2023(1)",
        onlyTopPages: ["test"],
        expandedTopPages: ['home'],






        

        company: {
            name: "MySalon",
            defWp: { dark: { src: "./images/wallpaper.jpg", filters: 'brightness(55%) grayscale()'}, light: { src: "./images/wallpaper.jpg", filters: 'brightness(30%) grayscale() invert()'}},
            logosource: "./images/logo -sh_1.png",
            copyright: "© My Salon - 2022",
            links: [
                { id: "", url: "", logo: "", color: "", isVisible:true, },
            ],
        },

        

        pages: [
            { id: "home", name: "Domů", settings: { onNavbar: true, inFooter: true } },
            { id: "info", name: "Info", settings: { onNavbar: true, inFooter: true } },
            { id: "team", name: "Tým", settings: { onNavbar: true, inFooter: true } },
            { id: "foto", name: "Fotografie", settings: { onNavbar: true, inFooter: true } },
        ],


        team: [
            { 
                name: "Jana Škudrnová",
                photo: "./images/team/jana.png",
                desc: "Praxe v kadeřnickém oboru od roku 1993, certifikovaný kouč (od r. 2021).",
                info: [
                    { txt: "Několikanásobná mistryně a vicemistryně republiky v účesové tvorbě. Reprezentantka ČR na mistrovství světa a na evropském poháru. Účastnice mnoha kadeřnických soutěží."},
                    { txt: "Absolventka seminářů a stáží v USA, Itálii, Francii, Rakousku, Německu. Nominována na kadeřnického ,,Oskara\" Hairdressing awards. Hodnotitelka a trenérka na kadeřnických soutěžích."},
                    { txt: "Technoložka značek Beox, Dusy, Balmain Paris."},
                ]
            },
            {
                name: "Flavie Rippelová",
                desc: "Praxe v kadeřnickém oboru od roku 2018.",
                info: [
                    { txt: "Absolventka seminářů:"},
                    { txt: " • Dusy - módní barvení a melír"},
                    { txt: " • nové techniky střihu"},
                    { txt: " • pánské módní trendy a střihy"},
                    { txt: " • balayage"},
                    { txt: " • blond odstíny"},
                    { txt: " • tónování vlasů"},
                ]
            },
            {
                name: "Lýdie Horynová",
                desc: "Praxe v kadeřnickém oboru od roku 2020. Nejmladší v týmu, v roce 2019 – 2020 jako studentka, byla v My Salonu na praxi.",
                info: [
                    { txt: "Absolventka seminářů:"},
                    { txt: " • Dusy - módní barvení a melír"},
                    { txt: " • nové techniky střihu"},
                    { txt: " • pánské módní trendy a střihy"},
                    { txt: " • blond odstíny"},
                    { txt: " • tónování vlasů"},
                ]
            },
        ],




        info: [
            {
                id: 1,
                name: "Informace ohledně chodu kadeřnictví",
                desc: "Opatření Ministerstva zdravotnictví stanovují povinnosti. Aktualizováno dne 22.11.2021",
                text: [
                    { marginTop:'-40px', bold: true,text: "Opatření Ministerstva zdravotnictví stanovují následující povinnosti. Aktualizováno 22.11. 2021."},
                    { text: ""},
                    { text: ""},
                    { selected: true, noMargin: true, fontSize: '25px', marginBottom: '5px', text: "Při vstupu do provozovny je nezbytné se prokázat jedním z těchto dokumentů:"},
                    { text: "Osoba byla naočkována proti Covid 19, a to tak, že po aplikaci poslední dávky uplynulo nejméně 14 dní - prokazuje se certifikátem EU."},
                    { text: "Osoba prodělala laboratorně potvrzené onemocnění Covid 19 a od prvního pozitivního testu neuplynulo více než 180 dní - prokazuje se potvrzením od lékaře nebo potvrzením o prvním pozitivním testu."},
                    { text: "PCR testem ne starším 72 hodin se mohou prokazovat jen osoby do 18 let věku nebo osoby, které mají potvrzení od lékaře o tom, že nemohou podstoupit očkování nebo osoby, které absolvovaly očkování jednodávkovou vakcínou a neuplynula 14 denní lhůta od aplikace nebo osoby, které absolvovaly očkování první dávkou nebo druhou dávkou dvoudávkové vakcíny a neuplynula 14 dní lhůta od druhé dávky nebo maximální lhůta pro očkování druhou dávkou."},
                    { bold: true, text: "Uvedené podmínky se nevztahují na děti do 12 let, ty se prokazovat nemusí."},
                    { text: ""},
                    { text: ""},
                    { text: ""},
                    { selected: true, noMargin: true, fontSize: '25px', marginBottom: '5px', text: "Děkujeme, že v provozovně respektujete následující pravidla:"},
                    { noMargin: true, text: "Pravidlo 1 zákazníka na 10 metrů (v naší provozovně max. 6 klientů)"},
                    { noMargin: true, text: "Rozestupy od ostatních 1,5 metry"},
                    { noMargin: true, text: "Vstup a pohyb v prostoru provozovny je povolen pouze s ochranou dýchacích cest"},
                    { noMargin: true, text: "Používáte desinfekce, které jsou pro Vás připravené"},
                    { text: ""},
                    { text: ""},
                    { text: ""},
                    { bold:true, text: "VELMI SI VÁŽÍME VAŠÍ DŮVĚRY A DĚKUJEME, ŽE VYUŽÍVÁTE NAŠE SLUŽBY :)"},
                    { text: ""},
                ],
                photo: "./images/info/covid.png",
                showPhoto: true,
                readMore: 'informace-ohledne-chodu-kadernictvi',
            },
            {
                id: 2,
                name: "Objednávky pouze po telefonu",
                desc: "Objednávky přijímáme na telefonu 476 108 686. Pokud se nedovoláte, omluvte nás prosím, pracujeme (např. od barvení vlasů není vhodné odcházet), nebo máme dovolenou :), prosíme o trpělivost.",
                text: [
                    { text: "Objednávky přijímáme na telefonu 476 108 686. Pokud se nedovoláte, omluvte nás prosím, pracujeme (např. od barvení vlasů není vhodné odcházet), nebo máme dovolenou :), prosíme o trpělivost."},
                    { text: "Můžete také zaslat sms s požadavkem objednávky na tel. 736 729 348,  až to bude možné, zavoláme zpět (tuto variantu objednávky preferujeme)."},
                    { text: "SMS zašlete rovněž v případě, že budete chtít zakoupit vlasový produkt, připravíme Vám balíček k vyzvednutí v předem sjednaný čas."},
                    { text: "Pokud jste objednáni, vyčkejte prosím před provozovnou příchodu personálu, víme o Vás :-), dveře jsou zamčené z důvodu dodržení hygienických opatření a vládních nařízení."},
                    { text: "Přečtěte si informace ohledně aktuálních opatření vyvěšené na dveřích. Připravte si prosím doklad o bezinfekčnosti."},
                    { text: ""},
                    { fontSize: '30px', noMargin:true, bold: true, text: "Děkujeme za podporu :)"},
                    { fontSize: '30px', selected: true, text: "Jana a Flavie"},
                    { text: ""},
                    { text: ""},
                    { text: ""},
                    { text: ""},
                ],
                photo: "./images/info/2.png",
                showPhoto: true,
                readMore: 'objednavky-pouze-po-telefonu',
            },
        ],



        photos: [
            { src: "./images/interier/head09.jpg"},
            { src: "./images/interier/head10.jpg"},
            { src: "./images/interier/head11.jpg"},
            { src: "./images/interier/head12.jpg"},
            { src: "./images/interier/interier05.jpg"},
        ],


        photos2: [
            { src: "./images/hair/1.jpg"},
            { src: "./images/hair/2.jpg"},
            { src: "./images/hair/3.jpg"},
            { src: "./images/hair/4.jpg"},
            { src: "./images/hair/5.jpg"},
            { src: "./images/hair/6.jpg"},
            { src: "./images/hair/7.jpg"},
            { src: "./images/hair/8.jpg"},
            { src: "./images/hair/9.jpg"},
            { src: "./images/hair/10.jpg"},
            { src: "./images/hair/11.jpg"},
            { src: "./images/hair/12.jpg"},
            { src: "./images/hair/13.jpg"},
            { src: "./images/hair/14.jpg"},
            { src: "./images/hair/15.jpg"},
            { src: "./images/hair/16.jpg"},
            { src: "./images/hair/17.jpg"},
            { src: "./images/hair/18.jpg"},
        ]
    },





    methods: {
        alwaysActive: function() {
            /* Při načtení stránky se napíše název webu na příslušný název stránky */ { 
                let cp = this.pages.find(x => { return x.id == this.currentPage });
                if(cp) cp = cp.name;
                if(!cp) cp = 'Web';
                document.title = `${cp} • My Salon`;
            };

            this.theme();
            this.topPageHeight();
        },

        theme: function() {
            this.webTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";



            this.root = document.documentElement;
            const page = this.pages.find((obj) => {return obj.id === this.currentPage});
            
            if(this.webTheme == 'dark') {
                this.root.style.setProperty('--bg', '#040404');
                this.root.style.setProperty('--body-bg', '#040404');
                this.root.style.setProperty('--text', 'white');
                this.root.style.setProperty('--page1-bg', '#0C0C0C');
                this.root.style.setProperty('--page2-bg', '#15151E');
                this.root.style.setProperty('--fontp-color', 'rgb(150, 150, 150)');
                this.root.style.setProperty('--footer-bg', '#040404');
                this.root.style.setProperty('--footer-lines', '#3D3D3D');
                this.root.style.setProperty('--text-selected', '#00d30b');
                this.root.style.setProperty('--text-selected-darker', '#269A00');
                this.root.style.setProperty('--font-shadow', '0px 0px 6px #000000');
                this.root.style.setProperty('--slider-color', 'white');
                this.root.style.setProperty('--loading-icon', 'url(../images/loading.svg)');
                this.root.style.setProperty('--mainbg-default', `url(${this.company.defWp[this.webTheme].src}`);
                this.root.style.setProperty('--button-page-bg', 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(204,204,204,0.1) 53%, rgba(91,91,91,0.1) 100%)');
                this.root.style.setProperty('--button-page-border', 'rgba(60, 60, 60, 1)');
                this.root.style.setProperty('--element-background-02', 'rgba(255, 255, 255, 0.2)');
                this.root.style.setProperty('--element-background-01', 'rgba(255, 255, 255, 0.07)');
                this.root.style.setProperty('--element-background-01-alwaysdark', 'rgba(255, 255, 255, 0.1)');
                this.root.style.setProperty('--element-background-005', 'rgba(255, 255, 255, 0.05)');
                this.root.style.setProperty('--element-background-005-alwaysdark', 'rgba(255, 255, 255, 0.05)');
                this.root.style.setProperty('--element-background-01-col', '#1E1E25');
                this.root.style.setProperty('--element-background-01-col-page2', '#15151e');
                this.root.style.setProperty('--element-transparent-background', 'rgba(255, 255, 255, 0.1)');
                this.root.style.setProperty('--element-transparent-background-02', 'rgba(255, 255, 255, 0.2)');
                this.root.style.setProperty('--element-transparent-background-hover', 'rgba(255, 255, 255, 0.4)');
                this.root.style.setProperty('--element-shadow', 'unset');
                this.root.style.setProperty('--element-border', 'solid 1px transparent');
                this.root.style.setProperty('--element-grayscale-bg', 'rgb(17,17,17)');
                this.root.style.setProperty('--waves1', 'url(../images/waves/waves.svg)');
                this.root.style.setProperty('--dbd-child-bg', '#333640');
                this.root.style.setProperty('--igpostmaker-accent-color', '#8F00DB');
                this.root.style.setProperty('--freedombot-status-style-online', '#6bff00');
                this.root.style.setProperty('--freedombot-status-style-offline', 'red');
                this.root.style.setProperty('--default-button-background', 'rgb(34,34,34)');
                this.root.style.setProperty('--pagetransition', 'url(../images/round.svg)');
                this.root.style.setProperty('--pagetransition-footer', 'url(../images/roundFooter.svg)');
                this.root.style.setProperty('--companylogo', 'url(../images/logo.webp)');
                this.root.style.setProperty('--bmshop-oddchild-background', 'rgba(255, 255, 255, 0.05)');
                if(page) if(page.bg) if(page.bg.gsTheme) {this.root.style.setProperty('--pagetransition', 'url(../images/roundGs.svg)')};
            } else if(this.webTheme == 'light') {
                this.root.style.setProperty('--body-bg', 'white');
                this.root.style.setProperty('--bg', 'white');
                this.root.style.setProperty('--text', 'black');
                this.root.style.setProperty('--page1-bg', '#F4F4F4');
                this.root.style.setProperty('--page2-bg', '#E0E3E5');
                this.root.style.setProperty('--fontp-color', 'rgb(90, 90, 90)');
                this.root.style.setProperty('--footer-bg', '#FFFFFF');
                this.root.style.setProperty('--footer-lines', '#C5C5C5');
                this.root.style.setProperty('--font-shadow', 'unset');
                this.root.style.setProperty('--text-selected', '#00d30b');
                this.root.style.setProperty('--text-selected-darker', '#269A00');
                this.root.style.setProperty('--slider-color', 'gray');
                this.root.style.setProperty('--loading-icon', 'url(../images/loading-black.svg)');
                this.root.style.setProperty('--mainbg-default', `url(${this.company.defWp[this.webTheme].src})`);
                this.root.style.setProperty('--button-page-bg', 'linear-gradient(270deg, rgba(255,255,255,0.1) 0%, rgba(204,204,204,0.1) 53%, rgba(150,150,150,0.1) 100%)');
                this.root.style.setProperty('--button-page-border', 'rgba(200, 200, 200, 1)');
                this.root.style.setProperty('--element-background-02', 'rgba(255,255,255)');
                this.root.style.setProperty('--element-background-005', 'rgba(255, 255, 255)');
                this.root.style.setProperty('--element-background-005-alwaysdark', 'rgba(0, 0, 0, 0.03)');
                this.root.style.setProperty('--element-background-01', 'rgba(255,255,255)');
                this.root.style.setProperty('--element-background-01-alwaysdark', 'rgba(0, 0, 0, 0.1)');
                this.root.style.setProperty('--element-background-01-col', 'rgba(255,255,255)');
                this.root.style.setProperty('--element-background-01-col-page2', 'rgba(255,255,255)');
                this.root.style.setProperty('--element-transparent-background', 'rgba(0,0,0, 0.2)');
                this.root.style.setProperty('--element-transparent-background-02', 'rgba(0,0,0, 0.2)');
                this.root.style.setProperty('--element-transparent-background-hover', 'rgba(0,0,0, 0.4)');
                this.root.style.setProperty('--element-shadow', '1px -1px 10px rgba(0, 0, 0, 0.05 )');
                this.root.style.setProperty('--element-border', 'solid 1px rgb(233, 233, 233)');
                this.root.style.setProperty('--element-grayscale-bg', 'rgb(255,255,255)');
                this.root.style.setProperty('--waves1', 'url(../images/waves/waves_light.svg)');
                this.root.style.setProperty('--dbd-child-bg', 'white');
                this.root.style.setProperty('--igpostmaker-accent-color', '#8F00DB');
                this.root.style.setProperty('--freedombot-status-style-online', '#53C800');
                this.root.style.setProperty('--freedombot-status-style-offline', '#b90000');
                this.root.style.setProperty('--default-button-background', '#EDF0F2');
                this.root.style.setProperty('--pagetransition', 'url(../images/pagetransition_light/round.svg)');
                this.root.style.setProperty('--pagetransition-footer', 'url(../images/pagetransition_light/roundFooter.svg)');
                this.root.style.setProperty('--companylogo', 'url(../images/logowhite.webp)');
                this.root.style.setProperty('--bmshop-oddchild-background', 'rgba(240, 240, 240)');
            };

            this.root.style.setProperty('--Ofont-shadow', '0px 0px 3px rgb(0,0,0, 0.8)');
        },

        topPageHeight: function() {
            const top = document.getElementById("TOP");
            const mainbg = document.getElementById("mainbg"); 
            const page1 = document.getElementById("PAGE1");

            top.style.height = '92vh';
            top.style.marginBottom = '0'; 
            mainbg.style.height = '100%';
            if(this.expandedTopPages.includes(this.currentPage)) { top.style.height = '100vh'; top.style.marginBottom = '100px'; mainbg.style.height = 'calc(100% + 100px)'; };
            if(this.onlyTopPages.includes(this.currentPage)) top.style.height = '100vh';
        },

        mainbg: function() {
            const el = document.getElementById('TOP');
            let output = {};
            const theme = this.webTheme;
            const page = this.pages.find((obj) => {return obj.id === this.currentPage});



            if(page) if(page.bg) if(page.bg[theme]) if(page.bg[theme].src) output['backgroundImage'] = `url(${page.bg[theme].src})`;
            if(!page || !page.bg || !page.bg[theme] || !page.bg[theme].src) {
                output['backgroundImage'] = `url(${this.company.defWp[theme].src})`;
            };


            if(page) if(page.bg) if(page.bg[theme]) if(page.bg[theme].filters) output['filter'] = page.bg[theme].filters;
            if(!page || !page.bg || !page.bg[theme] || !page.bg[theme].filters) output['filter'] = this.company.defWp[theme].filters;
            if(page && page.bg && page.bg[theme] && page.bg[theme].filters == "none") output['filter'] = null;


            return output;
        }, 

        openUrl: function(url) {
            return window.open(url);
        },

        homeChangeBlob: function() {
            const el = document.getElementById("home-biglogo");

            const blobs = ["../images/blob.svg","../images/blob2.svg","../images/blob3.svg","../images/blob4.svg"]
            const randomIndex = Math.floor(Math.random() * blobs.length);

            el.style.backgroundImage = `url(../images/logo_white.png), url(${blobs[randomIndex]})`;
        },
    },

    computed: {
        visibleMenuItems: function(){
            return this.menu.items.filter(x => x.isVisible)
        },

        nextPageId: function(){
            let ci = this.menu.items.findIndex(x => x.id === this.currentPage)
            let index = ci + 1
            if(index > this.menu.items.length - 1) index = 0
            return this.menu.items[index].id
        },
    },
})