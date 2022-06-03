function calcDays (day1,day2){


	const resultDays= (day2-day1)/(1000*60*60*24);
	return console.log(resultDays);
}

const argDate1=	new Date('September 1, 2022');
const argDate2= new Date('October 1, 2022');


calcDays(argDate1,argDate2); //executes function calcDays
