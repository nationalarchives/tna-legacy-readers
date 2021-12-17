$(document).ready(function(){

$(".census-toggle").click(function(){

    $("#census-banner").toggle();
    $(".census-toggle").html(function(i, text){
        return text === "Show <span class=\"sr-only\">1921 Census links</span>" ? "Hide <span class=\"sr-only\">1921 Census links</span>" : "Show <span class=\"sr-only\">1921 Census links</span>";
    })


});

});