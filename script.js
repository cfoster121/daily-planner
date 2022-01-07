
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
        $("#t8").addClass("present")
    }
    else if (timeHours > 08) {
        $("#t8").addClass("past")
    }
    else {
        $("#t8").addClass("future")
    }
    if (timeHours == 09) {
        $("#t9").addClass("present")
    }
    else if (timeHours > 09) {
        $("#t9").addClass("past")
    }
    else {
        $("#t9").addClass("future")
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


//On click of each save button, text area for associated time block is stored into unique local storage area specific to time
$("#s08").click(function(){
    let taskValue = $("#t8").val();
    localStorage.setItem("Task08", taskValue);
});
$("#s09").click(function(){
    let taskValue = $("#t9").val();
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


// ****************Step 1*******************************
// - What is the Step
// - Display current date/time at top of page
// - Why am i going to do it
// - Satisfy acceptance criteria 1
// - How am I going to do it
// - Moment.js with setinterval function to display dynamic date/time
//
// ****************Step 2*******************************
// - What is the Step
// - Create time blocks on page from 0800 to 1800 (10 blocks)
// - Why am i going to do it 
// - Satisfy acceptance criteria 2 (organize day in 1 hr sections)
// - How am I going to do it
// - Use bootstrap rows/columns
//
// ****************Step 3*******************************
// - What is the Step
// - Set timeblocks to change colors as time passes
// - Why am i going to do it
// - Indicate whether time block is current, future, or past
// - How am I going to do it
// - Set up function relating each time block to change color based on current time displayed in original dynamic date/time function
//
// ****************Step 4*******************************
// - What is the Step
// - Save tasks when clicking save button
// - Why am i going to do it
// - Save entered tasks to local storage
// - How am I going to do it
// - Create sections in local storage corresponding to time block sections that store data entered in clickable boxes from step 4
//
// Step 5
// - What is the Step
// - Keep saved tasks on page on refresh 
// - Why am i going to do it
// - To keep tasks from deleting if page is refreshed 
// - How am I going to do it
// - Use local storage to display saved item on page load



//## Acceptance Criteria

//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist