//Display Dynamic Time on Page
function displayTime() {
    let currentTime = moment().format('MMMM Do YYYY, HH:mm:ss');
    $("#currentDay").text(currentTime);
};
function startTime() {
    setInterval(displayTime, 1000)
}
startTime()

//Color coordinate time blocks for past/present/future
function colorCoordinate() {
    let timeHours = moment().format('HH');

    if (timeHours == 08) {
        $("#t08").addClass("present")
    }
    else if (timeHours > 08) {
        $("#t08").addClass("past")
    }
    else {
        $("#t08").addClass("future")
    }
    if (timeHours == 09) {
        $("#t09").addClass("present")
    }
    else if (timeHours > 09) {
        $("#t09").addClass("past")
    }
    else {
        $("#t09").addClass("future")
    }
    if (timeHours == 10) {
        $("#t10").addClass("present")
    }
    else if (timeHours > 10) {
        $("#t10").addClass("past")
    }
    else {
        $("#t10").addClass("future")
    }
    if (timeHours == 11) {
        $("#t11").addClass("present")
    }
    else if (timeHours > 11) {
        $("#t11").addClass("past")
    }
    else {
        $("#t11").addClass("future")
    }
    if (timeHours == 12) {
        $("#t12").addClass("present")
    }
    else if (timeHours > 12) {
        $("#t12").addClass("past")
    }
    else {
        $("#t12").addClass("future")
    }
    if (timeHours == 13) {
        $("#t13").addClass("present")
    }
    else if (timeHours > 13) {
        $("#t13").addClass("past")
    }
    else {
        $("#t13").addClass("future")
    }
    if (timeHours == 14) {
        $("#t14").addClass("present")
    }
    else if (timeHours > 14) {
        $("#t14").addClass("past")
    }
    else {
        $("#t14").addClass("future")
    }
    if (timeHours == 15) {
        $("#t15").addClass("present")
    }
    else if (timeHours > 15) {
        $("#t15").addClass("past")
    }
    else {
        $("#t15").addClass("future")
    }
    if (timeHours == 16) {
        $("#t16").addClass("present")
    }
    else if (timeHours > 16) {
        $("#t16").addClass("past")
    }
    else {
        $("#t16").addClass("future")
    }
    if (timeHours == 17) {
        $("#t17").addClass("present")
    }
    else if (timeHours > 17) {
        $("#t17").addClass("past")
    }
    else {
        $("#t17").addClass("future")
    }
    if (timeHours == 18) {
        $("#t18").addClass("present")
    }
    else if (timeHours > 18) {
        $("#t18").addClass("past")
    }
    else {
        $("#t18").addClass("future")
    }
}
colorCoordinate()


//Show local storage values in time blocks on page load
$("#t08").val(window.localStorage.getItem("Task08"));
$("#t09").val(window.localStorage.getItem("Task09"));
$("#t10").val(window.localStorage.getItem("Task10"));
$("#t11").val(window.localStorage.getItem("Task11"));
$("#t12").val(window.localStorage.getItem("Task12"));
$("#t13").val(window.localStorage.getItem("Task13"));
$("#t14").val(window.localStorage.getItem("Task14"));
$("#t15").val(window.localStorage.getItem("Task15"));
$("#t16").val(window.localStorage.getItem("Task16"));
$("#t17").val(window.localStorage.getItem("Task17"));
$("#t18").val(window.localStorage.getItem("Task18"));


//On click of each save button, text area for associated time block is stored into unique local storage area specific to time
$("#s08").click(function(){
    let taskValue = $("#t08").val();
    localStorage.setItem("Task08", taskValue);
});
$("#s09").click(function(){
    let taskValue = $("#t09").val();
    localStorage.setItem("Task09", taskValue);
});
$("#s10").click(function(){
    let taskValue = $("#t10").val();
    localStorage.setItem("Task10", taskValue);
});
$("#s11").click(function(){
    let taskValue = $("#t11").val();
    localStorage.setItem("Task11", taskValue);
});
$("#s12").click(function(){
    let taskValue = $("#t12").val();
    localStorage.setItem("Task12", taskValue);
});
$("#s13").click(function(){
    let taskValue = $("#t13").val();
    localStorage.setItem("Task13", taskValue);
});
$("#s14").click(function(){
    let taskValue = $("#t14").val();
    localStorage.setItem("Task14", taskValue);
});
$("#s15").click(function(){
    let taskValue = $("#t15").val();
    localStorage.setItem("Task15", taskValue);
});
$("#s16").click(function(){
    let taskValue = $("#t16").val();
    localStorage.setItem("Task16", taskValue);
});
$("#s17").click(function(){
    let taskValue = $("#t17").val();
    localStorage.setItem("Task17", taskValue);
});
$("#s18").click(function(){
    let taskValue = $("#t18").val();
    localStorage.setItem("Task18", taskValue);
});