const CustomError = require("../extensions/custom-error");

module.exports = function transfor(arr) {

  if (!Array.isArray(arr)) {
    throw Error('Error if the arr is not an Array');
  }

    let a = [];
    let rs = true;

  arr.forEach(function(item, i){

    if (item==='--discard-next'){
      rs = false;
    } 
    
    else if(item==='--discard-prev'){
      a.pop();
    } 
    
    else if(item==='--double-next'){
      if(i<arr.length-1){
        a.push(arr[i+1]);
      }
    } 
    
    else if(item==='--double-prev'){
      if(i>0){
        a.push(arr[i-1]);
      }
    }

      else if(rs){
        a.push(item);
      }

      else{
        rs = true;
      }
  });

  return a;

};
