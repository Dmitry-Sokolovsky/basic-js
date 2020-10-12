const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    arr.forEach(element=>{
      if(Array.isArray(element)){
        res = Math.max(res, 1+ this.calculateDepth(element))
      }
    })
      return res;
  }
};