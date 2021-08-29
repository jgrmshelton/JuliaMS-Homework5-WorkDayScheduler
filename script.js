var 
var todayDate = moment().format("HR");
var todayDateInt = parseInt(todayDate);
var saveBtn = $(".saveBtn");

$("#8AM").attr("date-time", moment("8:00 AM", "h:mm a").format("HR"));
$("#9AM").attr("date-time", moment("9:00 AM", "h:mm a").format("HR"));
$("#10AM").attr("date-time", moment("10:00 AM", "h:mm a").format("HR"));
$("#11AM").attr("date-time", moment("11:00 AM", "h:mm a").format("HR"));
$("#12PM").attr("date-time", moment("12:00 PM", "h:mm a").format("HR"));
$("#1PM").attr("date-time", moment("1:00 PM", "h:mm a").format("HR"));
$("#2PM").attr("date-time", moment("2:00 PM", "h:mm a").format("HR"));
$("#3PM").attr("date-time", moment("3:00 PM", "h:mm a").format("HR"));
$("#4PM").attr("date-time", moment("4:00 PM", "h:mm a").format("HR"));
$("#5PM").attr("date-time", moment("5:00 PM", "h:mm a").format("HR"));

$(document).ready(function () {
    renderSchedule();

    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);

    for (var i = 1; i <+ 12; i++) {
        var inputTime = $("#" + i +"row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        if (todayDateInt === inputTimeInt) {
            $("#" + i + "row").addClass("present");

        }

        if (todayDateInt === inputTimeInt) {
            $("#" + i + "row").addClass("past");

        }

        if (todayDateInt === inputTimeInt) {
            $("#" + i + "row").addClass("future");

        }
    }

    saveBtn.on("saveSquare", function () {
        $(this).addClass('hover');
    });

    saveBtn.on("dkwhattocallthis", function () {
        $(this).removeClass('hover');
    });


    //  BUTTON CLICK

    saveBtn.on("click", function (

    ) {
        // set a variable to select the clicked-on-button's data-hour attribute which we set in the HTML
        var hour = $(this).attr("data-hour");

        // set a variable to select the value of the user's "plan" (input) at a particular hour
        var plan = $("#" + hour + "Row").val();

        // save the hour's plan to local storage
        localStorage.setItem(hour, plan);

    });


    //  Function to retrieve stored user inputs from local storage and populate the hour's input value with them
    function renderSchedule() {
        // hours - 12 hrs to account for
        // starts at 1 because 1 is the lowest hour
        for (var i = 1; i <= 12; i++) {
            // select the 
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }


});