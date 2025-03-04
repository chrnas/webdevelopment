$(function(){
    // Filter items on searchterm
    $("#search-field").on("keyup", function () {
        var searchTerm = $(this).val().toLowerCase();
        // Include all list items that includes the searchterm
        $("#item-list li").each(function () {
            var text = $(this).text().toLowerCase();
            $(this).toggle(text.includes(searchTerm));
        });
    });
});