$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    $("#start").on("click", start);
    $("#kissing").hide();
    $("#send").hide();
    $("#sendikke").hide();
    $("#kissing2").hide();
    $("#hjerte2").hide();
    $("#4").hide();
    $("#chokface").hide();
    $("#chokface1").hide();
    $("#chokface2").hide();
    $("#chokface3").hide();
    $("#chokface4").hide();
    $("#chokface5").hide();
    $("#chokface6").hide();
    $("#iphone1").hide();
    $("#iphone2").hide();
    $("#cry").hide();
    $("#politisur").hide();
    $("#polititext").hide();
    $("#af").hide();
    $("#logo1").hide();
    $("#logo2").hide();
    $("#retry").hide();
    $("#sweet")[0].play();
    $("#sweet")[0].volume = .5;
}

function reset() {
    console.log("Restart alt");
    location.reload();
}

function start() {
    console.log("vi er startet");

    $("#forside").hide();
    $("#kissing").show();
    $("#start").hide();

    setTimeout(kiss, 2000);
}



function kiss() {
    console.log("vi kisser");


    $("#kissing").hide();
    $("#hjerte").hide();
    $("#moerke").addClass("dark_scene");
    $("#kissing2").show();
    $("#hjerte2").show();
    $("#kiss")[0].play();
    $("#kiss")[0].currentTime = 5;

    setTimeout(senere, 7000);

}

function senere() {
    console.log("vi er 4 måneder senere");
    $("#moerke").removeClass("dark_scene");
    $("#kissing2").hide();
    $("#hjerte2").hide();
    $("#4").show();

    setTimeout(Valg, 5000);
}


function Valg() {
    console.log("valg");


    $("#4").hide();
    $("#iphone1").show();
    $("#send").fadeIn();
    $("#sendikke").fadeIn();

    $("#send").on("click", sendt);
    $("#sendikke").on("click", ikkeSendt);

}


function sendt() {
    console.log("beskeden er sendt");

    $("#iphone1").hide();
    $("#send").hide();
    $("#sendikke").hide();
    $("#iphone2").show();
    $("#phonesound")[0].play();

    setTimeout(chokface1, 5000);
}

function chokface1() {
    console.log("chockende ansigt1");

    $("#iphone2").hide();
    $("#chokface1").show();
    $("#gasp")[0].play();

    setTimeout(chokface2, 0500);
}

function chokface2() {
    console.log("chockende ansigt2");

    $("#chokface2").show();

    setTimeout(chokface3, 0500);
}

function chokface3() {
    console.log("chockende ansigt3");

    $("#chokface3").show();

    setTimeout(chokface4, 0500);
}

function chokface4() {
    console.log("chockende ansigt4");

    $("#chokface4").show();

    setTimeout(chokface5, 0500);
}

function chokface5() {
    console.log("chockende ansigt5");

    $("#chokface5").show();
    setTimeout(chokface6, 0500);
}

function chokface6() {
    console.log("chockende ansigt6");

    $("#chokface6").show();
    setTimeout(cry, 3000);
}

function cry() {
    console.log("græder");


    $("#crying")[0].play();
    $("#cry").show();
    setTimeout(politi, 7000);
}

function politi() {
    console.log("politi")

    $("#chokface1").hide();
    $("#chokface2").hide();
    $("#chokface3").hide();
    $("#chokface4").hide();
    $("#chokface5").hide();
    $("#chokface6").hide();
    $("#cry").hide();
    $("#politisur").show();
    $("#politilyd")[0].play();
    $("#af").show();
    $("#logo2").show();
    $("#retry").show();

    $("#retry").on("click", reset);

}


function ikkeSendt() {
    console.log("beskeden er ikke sendt")

    $("#iphone1").hide();
    $("#send").hide();
    $("#sendikke").hide();

    $("#polititext").show();
    $("#politiglad")[0].play();
    $("#af").show();
    $("#logo1").show();
    $("#retry").show();

    $("#retry").on("click", reset);


}
