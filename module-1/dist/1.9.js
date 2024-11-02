"use strict";
// type alias
{
    const student1 = {
        name: "Abdullah",
        age: 25,
        gender: "Male",
        contactNo: "0416496651631",
        address: "Gulshan, Dhaka"
    };
    const student2 = {
        name: "Noor",
        age: 35,
        gender: "Male",
        address: "Mirpur Dhaka"
    };
    const student3 = {
        name: "Chaity",
        age: 35,
        gender: "Female",
        address: "Rajshahi"
    };
    const userName = "Khalid Ibn Al Walid"; //using "UserName" as an alias here
    const isAdmin = true;
    const add = (num1, num2) => num1 + num2;
    const sum = add(30, 20);
    console.log(sum);
}
