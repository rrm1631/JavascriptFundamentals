//date & time
const now = new Date();


//year, month, day, time
console.log('Year: ', now.getFullYear()); //get year 2022
console.log('Month: ', now.getMonth()); //0-11, 0 being january
console.log('Date: ', now.getDate()); //date today dec 16, 2022. 16 is the date
console.log('Day: ', now.getDay()); //day 0-6, 0 being sunday
console.log('Hours: ', now.getHours());
console.log('Minutes: ', now.getMinutes());
console.log('Seconds: ', now.getSeconds());

//timestamps
console.log('Timestamp', now.getTime()); //number of miliseconds


//datestrings
console.log(now.toDateString()); //output: Tue Dec 06 2022
console.log(now.toTimeString()); //output: 14:25:50 GMT+0800 (Philippine Standard Time)
console.log(now.toLocaleDateString()); //output: 12/6/2022