const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    
    let message = 'Unable to determine the time of year!';
    if (arguments.length > 0){
    let month = date.getUTCMonth();
    if(month == 0||month == 1||month == 11){
      message = 'winter';
    }
    else if(month == 2||month == 3||month == 4){
      message = 'spring';
    }
    else if(month == 5||month == 6||month == 7){
      message = 'summer';
    }
    else{
      message = 'autumn';
    }
  }
    return message;

};
