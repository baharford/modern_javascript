// timestamps
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log(now.getTime(), before.getTime());

// how to find difference between these 2 dates
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60); // 1000 miliseconds in a second, 60 seconds in a minute
console.log('mins', mins);

const hours = Math.round(mins / 60);
console.log('hours', hours);

const days = Math.round(hours / 24);
console.log('days', days);

// Converting timestamps into date objects
const timestamp = 1656528286143;
console.log(new Date(timestamp));

