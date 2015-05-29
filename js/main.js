$(document).ready(function() {
    change_part("api");

    $("#parts-logo .parts-logo-parts").on("click", function() {
        change_part($(this).data('part'));
    });
});

function change_part(id) {
    // Change part color
    $("#parts-logo .parts-logo-parts").css("background-color", "#979797");
    $("#parts-logo-"+id).css("background-color", "#4383B9");
    
    // Change part content
    $("#parts-descriptions .parts-description").addClass("hidden");
    $("#parts-description-"+id).removeClass("hidden");
}