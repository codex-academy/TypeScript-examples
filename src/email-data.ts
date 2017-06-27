interface EmailData {
    coderName : String
    email : String
    templateName : String
    subject : String
    feedbackSeason : String
}

export default EmailData

export interface Person{
    email? : String     // optional field
    name : String
    surname : String
}

export interface IGreet{
    (person : Person) : String
}

export function yo() : Person{
    return {
        //email : "",
        name : "",
        surname : ""
    }
}
