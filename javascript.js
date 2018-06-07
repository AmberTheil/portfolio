$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", openNav);
    $(".closebtn").on("click", closeNav);
    $("#billede-container").addClass("fade");
    $("#billede2-container").addClass("fade");
    $("#billede3-container").addClass("fade");
    $(".text_div").addClass("textside");
    $("#styletile_container").addClass("styletile_move");



    setTimeout(stopfade, 5000);
}

function stopfade() {
    $("#billede-container").removeClass("fade");
    $("#billede2-container").removeClass("fade");
    $("#billede3-container").removeClass("fade");
    $(".text_div").removeClass("textside");
}

function openNav() {
    $("#mySidenav").addClass("show");
}

function closeNav() {
    $("#mySidenav").removeClass("show");
}
