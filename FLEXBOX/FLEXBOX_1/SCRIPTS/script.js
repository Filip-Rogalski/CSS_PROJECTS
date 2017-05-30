//$(document).ready(function () {
//    var cards = $(".gallerycard");
//    for (var i = 0; i < cards.length; i++) {
//        var target = Math.floor(Math.random() * cards.length - 1) + 1;
//        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
//        cards.eq(target).before(cards.eq(target2));
//    }
//});
$(document).ready(function () {
    var items = $(".item");
    for (var i = 0; i < items.length; i++) {
        var target = Math.floor(Math.random() * items.length - 1) + 1;
        var target2 = Math.floor(Math.random() * items.length - 1) + 1;
        items.eq(target).before(items.eq(target2));
    }
});