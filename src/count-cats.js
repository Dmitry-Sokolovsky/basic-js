const CustomError = require("../extensions/custom-error");

module.exports = function countCats(Array) {
  let number =0;
    for (let subArr of Array){
      for (let elem of subArr){
          if(typeof elem === "string" || elem instanceof String){
              if(!elem.indexOf('^^')){
              number += 1;
              }
          }
      }
    }
    if(number!=0){
    return number;
    }
    else{
        return 0;
    }
};
