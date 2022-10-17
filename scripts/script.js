const body = document.getElementById("body");



//. --------------------------   Header   --------------------------------------
{
    var myScrollFunc = function() {

        const header = document.getElementById("header");
        const logo = document.getElementById("logodiv");

        var y = window.scrollY;
        if (y >= 1) {
            header.style.top = '-10px';
            header.style.backgroundColor = 'white';
            //header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            logo.style.width = '100px'
            logo.style.top = '30px'
            ////headerShadow.style.opacity = '90%';
        } else {
            header.style.top = 0;
            header.style.backgroundColor = 'unset';
            //header.style.backdropFilter = 'unset';
            header.style.boxShadow = 'unset';
            logo.style.width = '200px';
            logo.style.top = '20px'
            ////headerShadow.style.opacity = 0;
        }
    };

    window.addEventListener("scroll", myScrollFunc);
}