var total = 0;
var prices_day = {
    'auger': 80,
    'nailgun': 40,
    'tilesaw': 60,
    'air_comp': 120,
    'generator': 200
};
var prices_week = {
    'auger': 40,
    'nailgun': 30,
    'tilesaw': 45,
    'air_comp': 90,
    'generator': 150
};
var prices_month = {
    'auger': 20,
    'nailgun': 15,
    'tilesaw': 30,
    'air_comp': 60,
    'generator': 100
};
$(function () {
    $("#submit").click(function () {
        var selectedText = $("#tools").find("option:selected").text();
        var selectedValue = $("#tools").val();
        var enteredDays = $("#num_days").val();
        if (enteredDays === 1) {
            total=(prices_day[selectedValue]*enteredDays)*1.07
        }
        else if (enteredDays > 1 && enteredDays < 8) {
            total=(prices_week[selectedValue]*enteredDays)*1.07
        }
        else {
                total=(prices_month[selectedValue]*enteredDays)*1.07
        }
        $("#rented_modal").html("Item: " + selectedText + "<br/>Days Renting: " + enteredDays + "<br/>Amount Owed: $" + (total).toFixed(2));
    });
});
