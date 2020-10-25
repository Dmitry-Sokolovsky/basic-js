const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(condition = true) {
    this.condition = condition;
  }

  myError(message, key) {
    if (!message || !key) {
      throw new Error('Where arguments');
    }
  }

  encrypt(message, key) {
    this.myError(message, key);
    let encryptedMessage = "";
    let mLength = message.length;
    let keyLength = key.length;
    message = message.toUpperCase();
    key = key.toUpperCase();

    let memory = 0;
    for (let i = 0; i < mLength; i++) {
      if (message.codePointAt(i) > 64 && message.codePointAt(i) < 91) {
        if (memory === keyLength) {
          memory = 0;
        }
        encryptedMessage += String.fromCodePoint(((message.codePointAt(i) + key.codePointAt(memory)) % 26) + 65);
        memory++;
      }
      else {
        encryptedMessage += message[i];
      }
    }

    if (this.condition) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    this.myError(encryptedMessage, key);
    let dcMessage = "";
    let mLength = encryptedMessage.length;
    let keyLength = key.length;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let memory = 0;
    for (let i = 0; i < mLength; i++) {
      if (encryptedMessage.codePointAt(i) > 64 && encryptedMessage.codePointAt(i) < 91) {
        if (memory === keyLength) {
          memory = 0;
        }
        let code = ((encryptedMessage.codePointAt(i) - (key.codePointAt(memory))) % 26);
        if (code < 0) {
          code = 26 + code;
        }
        dcMessage += String.fromCodePoint(code + 65);
        memory++;
      }
      else {
        dcMessage += encryptedMessage[i];
      }
    }

    if (this.condition) {
       return dcMessage;
    } else {
       return dcMessage.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;