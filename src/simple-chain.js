const CustomError = require("../extensions/custom-error");
let chainMaker = {
  chain: [],

  getLength() { 
    let len = this.chain.length;
    return len;
  },

  addLink(value) { 
    let str = '( )';
    if (value !== undefined) {
      str = '( ' + value + ' )';
    }
    this.chain.push(str);
    return this;
  },

  removeLink(position) { 
    let tp = typeof(position);
    if (tp !== 'number' || position > this.getLength() || position < 1) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() { 
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }

};

module.exports = chainMaker;
