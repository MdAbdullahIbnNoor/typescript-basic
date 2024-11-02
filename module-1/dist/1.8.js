"use strict";
// destructuring
{
    const user = {
        name: {
            firstName: "Abdullah",
            middleName: "Ibn",
            lastName: "Noor"
        },
        contactNo: "0179653526143",
        age: 25,
        address: "Bangladesh"
    };
    const { name: { middleName: midName }, contactNo: phoneNum } = user;
    // console.log(midName, phoneNum);
    // array destructuring
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe'];
    const [, , bestFriend, ...rest] = myFriends; // by putting comma(,,) we can skip assigning a variable to the friends and by using spread operators then 'rest' rest array elements will be saved as an new array
    console.log(bestFriend, rest);
}
