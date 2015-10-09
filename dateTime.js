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
  }
  return dateSuffix;
}
console.log('Today is: ' +dayList[today.getDay()]+ ', the ' +date+ getDateSuffix(date));
dates = [1, 2, 3, 21, 22, 23, 31]
dates.forEach(function(localDate) {
  console.log('Today is: ' +dayList[today.getDay()]+ ', the ' +localDate+ getDateSuffix(localDate));  
});




