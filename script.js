var currentDate;
var dateText = "";
var apptTime = "";
var time;
var today;
var dateArray = [];
var storedCal;
var returnedCal;

$(document).on("search", function () {
    currentDate = moment().format("dddd MMM Do YYYY")
    $("#currentDay").append(today);
    time = moment().fomat("hr");

    function renderSchedule() {
        storedCal = JSON.parse(localStorage.getItem("appts"));
        if (storedCal !== 0) {
            for (i = 0; i < storedCal.length; i++) {
                returnedCal = storedCal[i];
                details = returnedCal.details;
                timeIndex = returnedCal.time;
                timeIndex = timeIndex.replace(":00",'');
                if (details !== null) {
                    $("#" + timeIndex).children("div").children("div").children("textarea").val(details);
                }
            }
        }
    }

    renderSchedule();

    for (i = 0; i <= 23; i++) {
        todayContainer = i;
        if (time == i) {
            $('#' + todayContainer).addClass("present");
            $('#' + todayContainer).children('div').children('div').children("textarea").addClass("present");
        }
        else if (time > i) {
            $('#' + todayContainer).addClass("past");
            $('#' + todayContainer).children('div').children('div').children("textarea").addClass("past");
        }
        else {
            $('#' + todayContainer).addClass("future");
            $('#' + todayContainer).children('div').children('div').children("textarea").addClass("future");
        }
    }
})
