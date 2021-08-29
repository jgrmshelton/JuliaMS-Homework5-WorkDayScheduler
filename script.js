var todayDate = moment().format("HR");
var todayDateInt = parseInt(todayDate);
var saveBtn = $(".saveBtn");

$("#1").attr("date-time", moment("8:00 AM", "h:mm a").format("HR"));
$("#2").attr("date-time", moment("9:00 AM", "h:mm a").format("HR"));
$("#3").attr("date-time", moment("10:00 AM", "h:mm a").format("HR"));
$("#4").attr("date-time", moment("11:00 AM", "h:mm a").format("HR"));
$("#5").attr("date-time", moment("12:00 PM", "h:mm a").format("HR"));
$("#6").attr("date-time", moment("1:00 PM", "h:mm a").format("HR"));
$("#7").attr("date-time", moment("2:00 PM", "h:mm a").format("HR"));
$("#8").attr("date-time", moment("3:00 PM", "h:mm a").format("HR"));
$("#9").attr("date-time", moment("4:00 PM", "h:mm a").format("HR"));
$("#10").attr("date-time", moment("5:00 PM", "h:mm a").format("HR"));

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

    saveBtn.on("click", function () {
        console.log($(this).parent().parent().attr("id"))
        // set a variable to select the clicked-on-button's data-hour attribute which we set in the HTML
        var hour = $(this).parent().parent().attr('id')
       
        // set a variable to select the value of the user's "plan" (input) at a particular hour
        var plan = $(this).siblings("textarea").val()
        console.log($(this).siblings("textarea").val())
        // var plan = $("#" + hour + "Row").val();
       
        // save the hour's plan to local storage
            localStorage.setItem(hour, plan);
       
       
    });

    //  Function to retrieve stored user inputs from local storage and populate the hour's input value with them
    function renderSchedule() {
        // 8 being the first hour so it's 1
        for (var i = 1; i <= 1; i++) {
             
            $("#" + i + "Row").val(localStorage.getItem("1 2 3 4 5 6 7 8 9 10"));
        }
    }


});