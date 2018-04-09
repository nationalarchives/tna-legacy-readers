function equalHeight(group) {
    var tallestCard = 0;
    group.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallestCard) {
            tallestCard = thisHeight;
        }
    });
    group.height(tallestCard);
}
$(document).ready(function() {
    equalHeight($(".equal-heights > .ie > .card"));
    equalHeight($(".ie > div > div"));
    equalHeight($(".last > div > div"));
});
