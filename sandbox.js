// dates and times
const now = new Date(); // new goes before constructor to 'new' it up

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth()); // 0 based, so the month is always 1 behind what you would expect
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay()); // starts from Sunday (0) and goes through days

console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamp', now.getTime()); // number of miliseconds since Jan 1, 1970

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
