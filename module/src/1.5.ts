// Reference Type --> Object

const user : {
    firstName : string,
    middleName ?: string, // It is optional 
    lastName : string
    readonly company: 'Fit For Life' // defining a type --> by declaring like this the quoted string is type now, and it cant be changed. || "Literal Types" 
    // Readonly can make on property unchangeable 
    isMarried : boolean
} = {
    firstName : "Md. Abdullah",
    // middleName : "Ibn",
    lastName: "Noor",
    company: "Fit For Life",
    isMarried: true
}

user.middleName = "PH"

console.log(user);

