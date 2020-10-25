const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, opt) {
    str = String(str);
  
    let fank = {
      repeatTimes: ('repeatTimes' in opt && typeof(opt.repeatTimes) === 'number') ? opt.repeatTimes : 1,
      separator: 'separator' in opt ? opt.separator : '+',
      addition: 'addition' in opt ? String(opt.addition) : '',
      additionRepeatTimes: ('additionRepeatTimes' in opt && typeof(opt.additionRepeatTimes) === 'number') ? opt.additionRepeatTimes : 1,
      additionSeparator: 'additionSeparator' in opt ? opt.additionSeparator : '|' 
    };
  
    let res = '';
    if (fank.additionRepeatTimes > 0) {
      res = fank.addition;
      for (let i = 1; i < fank.additionRepeatTimes; i++) {
        res += fank.additionSeparator + fank.addition
      }
    }
    let message = str + res;
      for (let i = 1; i < fank.repeatTimes; i++) {
        message += fank.separator + str + res;
      }
    
    return message;
  };

  