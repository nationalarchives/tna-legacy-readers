$(document).ready(function(){

$(".census-toggle").click(function(){

    $("#census-banner").toggle();
    $(".census-toggle").text(function(i, text){
        return text === "Show" ? "Hide" : "Show";
    })


});

});