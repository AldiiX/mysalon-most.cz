
new Vue({
    el: "#vueApp",   
    mounted: function(){
        if(window.location.hash){
            this.currentPage = window.location.hash.substring(1)
        }
        else{
            this.currentPage = "home"
        };



        { // Při načtení stránky se napíše název webu na příslušný název stránky
            const currentPage = this.currentPage;
            let cp = this.pages.find(x => { return x.id === currentPage});
            if(cp) cp = cp.text;
            if(!cp) cp = 'Web';
            document.title = `${cp} • My Salon`;
        }
    },






    data: {
        currentPage: null,
        webTheme: 'dark',
        version: "270120221",
        fsTopPages: ['home'],





        

        company: {
            name: "MySalon",
            defWp: { dark: { src: "./images/wallpaper.jpg", filters: 'brightness(70%) grayscale()'}},
            logosource: "./images/logo -sh_1.png",
            copyright: "© My Salon - 2022",
            links: [
                { id: "", url: "", logo: "", color: "", isVisible:true, },
            ],
        },

        

        pages: [
            { id: "team", name: "Tým", settings: {} }
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
        mainbg: function() {
            const el = document.getElementById('TOP');
            let output = {};
            const theme = this.webTheme;
            const page = this.pages.find((obj) => {return obj.id === this.currentPage});



            if(page) if(page.bg) if(page.bg[theme]) if(page.bg[theme].src) output['backgroundImage'] = `url(${page.bg[theme].src})`;
            if(!page || !page.bg || !page.bg[theme] || !page.bg[theme].src) {
                output['backgroundImage'] = `url(${this.company.defWp[theme].src})`;
                if(this.webTheme == 'dark') output['backgroundAttachment'] = 'fixed';
            };


            if(page) if(page.bg) if(page.bg[theme]) if(page.bg[theme].filters) output['filter'] = page.bg[theme].filters;
            if(!page || !page.bg || !page.bg[theme] || !page.bg[theme].filters) output['filter'] = this.company.defWp[theme].filters;
            if(page && page.bg && page.bg[theme] && page.bg[theme].filters == "none") output['filter'] = null;


            return output;
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