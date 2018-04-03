var cardHeight = 0;
$(".card").each(
    function(index) {
        var tallest = $(this).height();
        if (tallest > cardHeight) {
            cardHeight = tallest
        }
    });
$(".ie > .card").css("height", cardHeight + "px");