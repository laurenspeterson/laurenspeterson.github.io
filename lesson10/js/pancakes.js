let currentDate = new Date();
let currentDateString;
// get day of week
let weekDayNumber = currentDate.getDay();
let daysOfWeek = [
	"Sunday",
	"Monday", 
	"Tueday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"

]

let weekDay = daysOfWeek[weekDayNumber];
currentDateString = weekDay + `,`;
currentDateString = currentDateString + currentDate.getDate();

for(let i = 1; i < 6; i++);
currentDay++;
if (currentDay > 6){
	currentDay = 0;
}
// show/hide pancake
	if (weekDayNumber == 5){
		document.getElementById("Friday").removeAttribute("class","pancakes")
	}