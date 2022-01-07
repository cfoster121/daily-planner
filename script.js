

// Step 1
// - What is the Step
// - Display current date/time at top of page
// - Why am i going to do it
// - Satisfy acceptance criteria 1
// - How am I going to do it
// - Moment.js with setinterval function to display dynamic date/time
//
// Step 2
// - What is the Step
// - Create time blocks on page from 0800 to 1800 (10 blocks)
// - Why am i going to do it 
// - Satisfy acceptance criteria 2 (organize day in 1 hr sections)
// - How am I going to do it
// - Use bootstrap rows/columns
//
// Step 3
// - What is the Step
// - Set timeblocks to change colors as time passes
// - Why am i going to do it
// - Indicate whether time block is current, future, or past
// - How am I going to do it
// - Set up function relating each time block to change color based on current time displayed in original dynamic date/time function
//
// Step 4
// - What is the Step
// - Create list items when clicking into time blocks
// - Why am i going to do it
// - Assign tasks to certain times
// - How am I going to do it
// - Use jquery ui widgets to make sections contain clickable boxes that accept string values
//
// Step 5
// - What is the Step
// - Save tasks when clicking save button
// - Why am i going to do it
// - Save entered tasks to local storage
// - How am I going to do it
// - Create sections in local storage corresponding to time block sections that store data entered in clickable boxes from step 4
//
// Step 6
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