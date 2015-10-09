var today = new Date();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dateSuffix = 'th';
var date = today.getDate();

function getDateSuffix(d){
  switch ((d % 30) % 20){
    case 1:
      dateSuffix = 'st';
      break;
    case 2:
      dateSuffix = 'nd';
      break;
    case 3:
      dateSuffix = 'rd';
      break;
    default:
      dateSuffix = 'th';
  }
  return dateSuffix;
}
console.log('Today is: ' +dayList[today.getDay()]+ ', the ' +date+ getDateSuffix(date));
dates = [1, 2, 3, 21, 22, 23, 31, 12, 13]
dates.forEach(function(localDate) {
  console.log('Checking date suffixes:  ' +localDate+ getDateSuffix(localDate));
});
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var hourSuffix;
if ((today/1000) % 43200 === 0){
  if (hours === 12){hourSuffix = 'Noon'}
  else {hourSuffix = 'Midnight'}
}
else {
  if (hours < 12){hourSuffix = 'AM'}
  else {
    hourSuffix = 'PM';
    hours = hours - 12;
  }
}
console.log('Current time is:  ' +hours+ ' ' +hourSuffix+ ' : ' +minutes+ ' : ' +seconds);
