const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let message = false;

  if (typeof(sampleActivity) === 'string') {
    let sumSampleActivity = parseFloat(sampleActivity);

    if (sumSampleActivity < MODERN_ACTIVITY && sumSampleActivity > 0) {
      const lt = 0.693;
      const a = lt / HALF_LIFE_PERIOD;
      const b = Math.log(MODERN_ACTIVITY / sumSampleActivity) / a;
      message = Math.ceil(b);
    }
  }
  return message;
};

