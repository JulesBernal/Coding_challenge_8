function calcDays (day1,day2){ //

	const resultDays= Math.abs((day1-day2)/(1000*60*60*24));	//Finds the difference between the two dates, subtracting them.
													//Then dividing by 1000 to convert milliseconds to seconds,
													//60 to turn the value into minutes, 60 again to turn the value to hours
													//finally 24 to convert the result into Days.
	return console.log(`The difference between Dates 1 & 2: ${resultDays}`); //returns the results of the difference of the two dates.
}

const argDate1=	new Date('September 1, 2022'); //Creates
const argDate2= new Date('October 1, 2022'); //Date instance

console.log(`Date 1: ${argDate1} \nDate 2: ${argDate2}\n`);
calcDays(argDate1,argDate2); //executes function calcDays, passing argDate1,argDate2 as arguments.
