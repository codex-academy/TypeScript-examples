"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetings_1 = require("./greetings");
function greet(name, language) {
    let messageMap = new Map();
    messageMap.set('xhosa', greetings_1.xhosaGreeting);
    messageMap.set('afrikaans', greetings_1.afrikaansGreeting);
    let greeter = messageMap.get(language);
    if (greeter)
        return greeter(name);
    return `Invalid language '${language}'`;
}
var s = "xhosa";
console.log(greet('Andre', s));
