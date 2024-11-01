"use strict";
{
    // spread operator
    const bros1 = ['Abdullah', 'Ibn', 'Noor'];
    const bros2 = ['Shaima', 'Ashlam', 'Chaity'];
    bros1.push(...bros2, 'Highman');
    // console.log(bros1);
    // for objects
    const Student1 = {
        name: "Abdullah Ibn Noor",
        age: 25,
        religion: 'Islam',
        sex: 'Male'
    };
    const Student2 = {
        name: "Shaima Ashlam Chaity",
        age: 23,
        religion: 'Islam',
        sex: 'Female'
    };
    const studentDetails = [
        Student1,
        Student2,
    ];
    console.log(studentDetails);
    // Rest Operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Abul', 'Kabul', 'Babul', 'Mokbul');
}
