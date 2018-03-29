/*
(function( $ ) {
    // the sameHeight functions makes all the selected elements of the same height
    $.fn.sameHeight = function() {
        var selector = this;
        var heights = [];

        // Save the heights of every element into an array
        selector.each(function(){
            var height = $(this).height();
            heights.push(height);
        });

        // Get the biggest height
        var maxHeight = Math.max.apply(null, heights);
        // Show in the console to verify
        console.log(heights,maxHeight);

        // Set the maxHeight to every selected element
        selector.each(function(){
            $(this).height(maxHeight);
        });
    };

}( jQuery ));

$('.card').sameHeight();
$(window).resize(function(){
    $('.card').sameHeight();
});*/

var tallestcopy = 0;
$(".card").each(
    function(index) {
        var tallest = $(this).height();
        if (tallest > tallestcopy) {
            tallestcopy = tallest
        }
    });
$(".card").css("height", tallestcopy + "px");