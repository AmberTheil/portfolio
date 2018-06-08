var taeller = 0;
var erDerKlikketNok = false;

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $("#styletile_container").addClass("styletile_move");
    $("#abe_container").hide();
    $("#skildpadde").hide();
    $("#gorilla_container").hide();
    $("#sten_container").hide();
    $("#baggrund").hide();
    $("#forgrund").hide();
    $("#yes").hide();
    $("#no").hide();
    $("#question").hide();
    $("#help").hide();
    $("#reset_sprite").hide();
    $("#youwin").hide();
    $("#fugl_container").hide();
    $("#lose").hide();
    $("#slutning").hide();
    $("#play_sprite").on("click", start);
    $("#titlesong")[0].play();
    $("#titlesong")[0].volume = .5;
    $("#titlesong")[0].currentTime = 2;

}


function reset() {
    console.log("Restart alt");
    location.reload();
}


function start() {
    console.log("start");
    //Animation for gorilla kommer ind
    $("#play_sprite_move").off("click", start)

    $("#titlesong")[0].pause();
    $("#play_sprite").hide();
    $("#styletile_container").hide();

    $("#gamesong")[0].play();
    $("#gamesong")[0].volume = .5;
    $("#gorillawalk")[0].play();
    $("#gorillawalk")[0].currentTime = 8;

    $("#gorilla_container").show();
    $("#baggrund").show();

    $("#gorilla_container").addClass("moving_gorilla");
    $("#gorilla_sprite").addClass("walk_gorilla");
    $("#baggrund").addClass("baggrund_moves");

    $("#gorilla_container").on("animationend", gorillaSit);

}



function gorillaSit() {
    console.log("gorillaSit");

    $("#gorilla_container").off("animationend", gorillaSit);

    $("#gorilla_sprite").removeClass("walk_gorilla");
    $("#gorilla_sprite").addClass("sit_gorilla");

    $("#abewalk")[0].play();
    $("#abewalk")[0].volume = .3;
    $("#abewalk")[0].currentTime = 2;

    $("#forgrund").show();
    $("#abe_container").show();
    $("#fugl_container").show();

    $("#abe_container").addClass("moving_abe");
    $("#abe_sprite").addClass("walk_banana_abe");
    $("#gorilla_sprite").addClass("gorilla_spis");

    $("#abe_container").on("animationend", abeChock);


}

function abeChock() {
    console.log("abe er i chock")

    $("#abe_container").off("animationend", abeChock);

    $("#gorilla_sprite").removeClass("sit_gorilla");
    $("#abe_sprite").removeClass("walk_banana_abe");

    $("#abe_sprite").addClass("abe_chok");
    $("#abechok")[0].play();
    $("#abechok")[0].volume = .3;


    setTimeout(abeVred, 4000);
}

//Abe bliver vred
function abeVred() {
    console.log("abeVred");

    $("#abe_sprite").removeClass("abe_chok");

    $("#abevred")[0].play();
    $("#abevred")[0].volume = .3;


    $("#abe_sprite").addClass("abe_vred");
    setTimeout(gorillaAv, 2000);
}

function gorillaAv() {
    console.log("gorillaAv");

    $("#gorilla_sprite").removeClass("gorilla_spis");
    $("#gorilla_container").removeClass("moving_gorilla");

    $("#gorillawalk")[0].play();
    $("#gorillawalk")[0].currentTime = 13;

    $("#gorilla_container").addClass("moving_gorilla2");
    $("#gorilla_sprite").addClass("walk_gorilla");
    $("#gorilla_container").on("animationend", skildepaddeInd);

}


function skildepaddeInd() {
    console.log("skildepaddeInd");

    $("#gorilla_container").off("animationend", skildepaddeInd);

    $("#skildpadde").show();

    $("#skildpadde").addClass("skildpadde_falder");
    $("#skildpaddeind")[0].play();


    gorillafaldt();
}

function gorillafaldt() {
    console.log("gorilla er faldet");

    $("#abe_sprite").removeClass("abe_vred");
    $("#gorilla_sprite").removeClass("walk_gorilla");

    $("#abegriner")[0].play();
    $("#gorillacry")[0].play();
    $("#gorillacry")[0].volume = .7;
    $("#gorillacry")[0].currentTime = 3;


    $("#gorilla_sprite").addClass("gorilla_faldt");
    $("#gorilla_sprite").addClass("gorilla_faldt");
    $("#gorilla_sprite").addClass("gorilla_cry");
    $("#abe_sprite").addClass("abe_griner");

    $("#abe_sprite").on("animationend", abeGriner);
}


function abeGriner() {
    console.log("abeGriner");

    $("#abe_sprite").off("animationend", abeGriner)
    $("#abe_sprite").removeClass("abe_griner");
    $("#abe_sprite").addClass("abe_griner_still");
    Valg();

}

function Valg() {
    console.log("valget");


    $("#yes").fadeIn();
    $("#no").fadeIn();
    $("#question").fadeIn();

    $("#yes").on("click", abe_plaster);
    $("#no").on("click", sten_roll);

}


function abe_plaster() {
    console.log("abe plaster");

    $("#yes").off("click", abe_plaster);

    $("#gorillacry")[0].pause();
    $("#chocklyd")[0].pause();
    $("#yes").fadeOut();
    $("#no").hide();
    $("#question").hide();
    $("#abe_sprite").removeClass("abe_griner");
    $("#gorilla_sprite").removeClass("gorilla_cry");
    $("#gorilla_sprite").removeClass("gorilla_faldt");
    $("#abe_container").removeClass("moving_abe");
    $("#abe_sprite").removeClass("abe_griner_still");

    $("#gorilla_sprite").addClass("gorilla_plaster");
    $("#abe_container").addClass("moving_abe3");
    $("#abe_sprite").addClass("abe_plaster");
    setTimeout(wins, 7000);

    //*skal have god slutning
}

function wins() {
    console.log("YOU WIN");

    $("#abe_container").off("click", wins);

    $("#gamesong")[0].pause();
    $("#baggrund").hide();
    $("#forgrund").hide();
    $("#gorilla_container").hide();
    $("#abe_container").hide();
    $("#skildpadde").hide();
    $("#help").hide();
    $("#sten_container").hide();

    $("#styletile_container").show();
    $("#youwin").fadeIn();
    $("#youwin").addClass("puls");
    $("#reset_sprite").fadeIn();

    $("#titlesong")[0].play();
    $("#titlesong")[0].volume = .5;
    $("#titlesong")[0].currentTime = 2;

    $("#reset_sprite").on("click", reset);
}



function sten_roll() {
    console.log("sten ruller ind");

    $("#no").off("click", sten_roll);

    $("#gorillacry")[0].pause();
    $("#help").hide();
    $("#yes").hide();
    $("#question").hide();
    $("#no").fadeOut();
    $("#abe_sprite").removeClass("abe_griner_still");
    $("#skildpadde").removeClass("skildpadde_falder");

    $("#chocklyd")[0].play();
    $("#chocklyd")[0].volume = .3;
    $("#skildpadde").addClass("puls");

    $("#skildpadde").addClass("skildpadde_still");
    $("#abe_sprite").addClass("abe_chok");
    $("#sten_container").addClass("moving_sten");
    $("#sten_sprite").addClass("sten_walk");


    $("#sten_container").show();
    $("#help").delay(1000).fadeIn();

    timer = setTimeout(tidenergaaet, 7000);
    kanKlikke();


    ///* SKal gå til dårlig slutning

}

function kanKlikke() {
    console.log("kanKlikke");

    $("#skildpadde").on("click", klikPaaKnap);
}

function klikPaaKnap() {
    console.log("klik paa knap");

    $("#skildpadde").off("click", klikPaaKnap);
    $("#skildpadde").removeClass("puls");
    $("#skildpadde").on("animationend", SkildepaddeTryk);
}


function SkildepaddeTryk() {
    console.log("tryk på skildpadden");

    //valgmulighed 2
    $("#skildpadde").off("animationend", SkildepaddeTryk);
    taeller++;
    console.log("har klikket " + taeller + " gange");
    if (taeller >= 1) {
        console.log("wins");
        erDerKlikketNok = true;
        faerdig();

    } else {

        // console.log("klik igen");

        erDerKlikketNok = false;
        kanKlikke();
    }
}

function tidenergaaet() {
    console.log("tiden er gaaet");

    if (erDerKlikketNok == false) {
        StenRuller();
    }
}

function faerdig() {
    console.log("faerdig");

    if (erDerKlikketNok == true) {

        console.log("winning");
        skildpaddePop();

    } else {

        (erDerKlikketNok == false);
        console.log("sten ruller videre");
        StenRuller();

    }
}

function StenRuller() {
    console.log("keep roling");

    $("#skildpadde").off("click", klikPaaKnap);
    $("#skildpadde").removeClass("puls");
    $("#chocklyd")[0].pause();
    $("#gorilla_sprite").removeClass("gorilla_faldt");
    $("#gorilla_container").removeClass("moving_gorilla2");
    $("#skildpadde").removeClass("skildpadde_falder");
    $("#help").hide();


    $("#skildpadde").addClass("skildpadde_still");
    $("#gorilla_container").addClass("moving_gorilla4");
    $("#sten_container").addClass("moving_sten2");
    $("#gorilla_sprite").addClass("gorilla_flad");

    $("#gorilla_sprite").on("animationend", Gorillaflad);


}

function Gorillaflad() {
    console.log("gorilla er flad");

    $("#gorilla_sprite").off("animationend", Gorillaflad);

    $("#splat")[0].play();
    $("#splat")[0].volume = .5;
    $("#splat")[0].currentTime = 8;


    $("#sten_sprite").removeClass("sten_walk");
    $("#sten_sprite").addClass("sten_still");

    KlaverFalder();

}

function KlaverFalder() {
    console.log("in your face");

    $("#abe_container").removeClass("moving_abe3");
    $("#abe_sprite").removeClass("abe_chok");

    $("#abe_sprite").addClass("abe_griner_still");
    $("#abegriner2")[0].play();
    $("#abegriner2")[0].volume = .5;
    $("#abegriner2")[0].currentTime = 5;
    $("#abe_container").addClass("moving_abe5");
    $("#abe_sprite").addClass("abe_flad");
    $("#pianolyd")[0].play();
    $("#pianolyd")[0].volume = .5;
    $("#pianolyd")[0].currentTime = 20;
    $("#piano").addClass("piano_move");

    $("#piano").on("animationend", lose);
}

function skildpaddePop() {
    console.log("skildpade pop");

    clearTimeout(timer);
    $("#help").hide();

    $("#skildpadde").removeClass("puls");

    $("#skildpadde").removeClass("skildpadde_still");
    $("#skildpadde").addClass("skildpadde_pop");

    $("#skildpadde").on("animationend", StenRuller2);

}

function StenRuller2() {
    console.log("sten ruller til skildepadde");

    $("#skildpadde").off("animationend", StenRuller2);

    $("#sten_container").removeClass("moving_sten")

    $("#sten_container").addClass("moving_sten3")

    $("#sten_container").on("animationend", StopSkildpadde);

}

function StopSkildpadde() {
    console.log("gorilla er flad");

    $("#sten_container").off("animationend", StopSkildpadde);


    $("#sten_sprite").removeClass("sten_walk");
    $("#sten_sprite").addClass("sten_still");
    setTimeout(slutning, 3000);

}

function slutning() {
    console.log("taber/win");

    $("#gamesong")[0].pause();
    $("#baggrund").hide();
    $("#forgrund").hide();
    $("#gorilla_container").hide();
    $("#abe_container").hide();
    $("skildpadde").hide();
    $("#skildpadde").hide();
    $("#help").hide();
    $("#sten_container").hide();
    $("#piano").hide();
    $("#fugl_container").hide();


    $("#titlesong")[0].play();
    $("#reset_sprite").fadeIn();
    $("#slutning").show();
    $("#reset_sprite").on("click", reset);

}



function lose() {
    console.log("taber");
    $("#piano").on("animationend", lose);

    $("#baggrund").hide();
    $("#forgrund").hide();
    $("#gorilla_container").hide();
    $("#abe_container").hide();
    $("skildpadde").hide();
    $("#skildpadde").hide();
    $("#help").hide();
    $("#sten_container").hide();
    $("#piano").hide();
    $("#fugl_container").hide();

    $("#reset_sprite").fadeIn();
    $("#lose").show();
    $("#reset_sprite").on("click", reset);

}
