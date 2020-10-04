const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let message = false;
  
  if (Array.isArray(members)) {
    let name = members.reduce(function (teamName, item) {
      if (typeof(item) === 'string') {
        teamName.push(item.trim()[0].toUpperCase());
      }
      return teamName
    }, []);

    if (name !== []) {
      message = name.sort().join('');
    }
  }

  return message;


};
