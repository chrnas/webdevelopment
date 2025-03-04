$(function () {
    // Filter items on button click
    $(".menu-button").click(function () {
        var category = $(this).attr("filter"); // Get category from data-filter
        // Show only items that match the selected category
        $("#item-list li").each(function () {
            var itemCategory = $(this).attr("filter");
            $(this).toggle(itemCategory.includes(category)); // Show matching category
        });
    });
});