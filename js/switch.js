(function(){

    const btnSwitch = document.querySelector("#switch");

    /*--------{{FUNCIONES----------- */
        var dark = function () {
            document.body.classList.toggle("dark");
            btnSwitch.classList.toggle("active");
        };

    /*------------EVENTOS----------- */
    $(btnSwitch).click(dark);


}())