"use strict";
function emailSender(emailData) {
    // use NodeMailer
}
emailSender({
    coderName: "",
    email: "",
    templateName: "",
    feedbackSeason: "",
    subject: ""
});
function greet(person) {
    //console.log(person);
    return "Hello, " + person.name + " " + person.surname + " @ " + person.email;
}
function doGreet(greeter) {
    greeter({ name: "Jo", surname: "Ntombi", email: "andre@email.com" });
}
console.log(greet({ name: "Andre", surname: "Botha", email: "andre@botha.com" }));
//console.log(greet({ name : "Andre"}));
