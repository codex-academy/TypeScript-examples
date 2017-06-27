import EmailData from "./email-data"
import {Person, IGreet} from "./email-data"

function emailSender(emailData : EmailData){
    // use NodeMailer
}

emailSender({
    coderName : "",
    email : "",
    templateName : "",
    feedbackSeason : "",
    subject : ""
});


function greet(person:Person) : String{
    //console.log(person);
    return "Hello, " + person.name + " " + person.surname + " @ " + person.email;
}

function doGreet(greeter : IGreet){
    greeter({name : "Jo", surname : "Ntombi", email : "andre@email.com"})
}

console.log(greet({ name : "Andre", surname : "Botha", email : "andre@botha.com"}));

//console.log(greet({ name : "Andre"}));
