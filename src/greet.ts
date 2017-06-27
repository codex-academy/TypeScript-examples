

interface IGreetCtor{
    new(name: String) : IGreet
}

interface IGreet{
    greet() : String
}

class XhosaGreeter implements IGreet{
    private name : String;
    constructor(name:String) {
        this.name = name;
    }

    greet() : String{
        return "Hello, " + this.name;
    }
}

import IGreeter from "./igreeter";
import {afrikaansGreeting, xhosaGreeting} from "./greetings"

//function

type Language = "afrikaans" | "english" | "xhosa"

function greet(name:String, language:Language) : String{

    let messageMap = new Map<String, IGreeter>();
    messageMap.set('xhosa', xhosaGreeting);
    messageMap.set('afrikaans', afrikaansGreeting);

    let greeter = messageMap.get(language);
    if (greeter)
        return greeter(name);
    return `Invalid language '${language}'`;

}

export default greet


var s : Language = "xhosa";

console.log(greet('Andre', s));
