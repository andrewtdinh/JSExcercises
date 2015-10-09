var today = new Date();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dateSuffix = 'th';
var date = today.getDate();

switch ((date % 30) % 20){
  case 1:
    dateSuffix = 'st';
    break;
  case 2:
    dateSuffix = 'nd';
    break;
  case 3:
    dateSuffix = 'rd';
}
console.log('Today is: ' +dayList[today.getDay()]+ ', the ' +date+ dateSuffix);
dates = [1, 2, 3, 21, 22, 23, 31]
dates.forEach(function(localDate) {
  console.log('Today is: ' +dayList[today.getDay()]+ ', the ' +localDate+ dateSuffix);  
});




