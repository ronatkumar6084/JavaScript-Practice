const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const date= '2023-05-05';
console.log(dateRegex.test(date));
const date2= '05-07-2023';
console.log(dateRegex.test(date2));
