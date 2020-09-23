var data = JSON.parse(localStorage.getItem("data")) || []
var timeSlots = document.getElementsByClassName("timeSlot");
$(document).ready(function () {



    var update = function () {

        $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
        $("#currentTime").text(moment().format("h:mm a"));
    };
    update();
    setInterval(update, 1000);

    console.log(update)

    function hourTracker() {
        var currentHour = moment().hour();

        var dh = $('*[data-hour]');

        dh.each(function () {
            //var blockHour = parseInt($(this).attr("id").split("timeOfDay")[1]);
            // console.log($(this).data("hour"));
            // console.log(moment().hour())
            var blockHour = ($(this).data("hour"));

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();

    var textAreaArray = document.querySelectorAll(".timeSlot");
    textAreaArray.forEach(function (elem, index) {
        //console.log(elem, index);
        //console.log(data[index]);
        $(elem).val(data[index]);
    })

    var elementsArray = document.querySelectorAll(".fa-calendar-check");
    //console.log("elementsArray", elementsArray)
    elementsArray.forEach(function (elem, index) {
        elem.addEventListener("click", function () {

            var textActivity = $(this).closest("tr").find("textarea").val();
            data[index] = textActivity;
            var jsonStr = JSON.stringify(data);

            localStorage.setItem("data", jsonStr)

            //console.log("this",$(this).closest("tr").find("textarea").val());
            //console.log(textActivity);
            //console.log(data);
        });
    })

    var elementsArray = document.querySelectorAll(".fa-calendar-times");
    //console.log("elementsArray", elementsArray)
    elementsArray.forEach(function (elem, index) {
        elem.addEventListener("click", function () {
            //alert(index);
            var textActivity = $(this).closest("tr").find("textarea").val("");
            data[index] = textActivity;
            var jsonStr = JSON.stringify(data);

            localStorage.setItem("data", jsonStr)

        });
    });
});
