$(document).ready(function(){

$(".census-toggle").click(function(){

    $("#census-banner").toggle();
    $(".census-toggle").html(function(i, text){
        return text === "Show <span class=\"sr-only\">1921 census banner</span>" ? "Hide <span class=\"sr-only\">1921 census banner</span>" : "Show <span class=\"sr-only\">1921 census banner</span>";
    })


});

});