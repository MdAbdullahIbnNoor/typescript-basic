// Interface
{
    // Type Alias
    type User1 = {
        name : string
        age : number
    }

    // Type Alias can be used for premtive type
    type Role = {
        role : string
    }

    // Intersection between two types
    type UserWithRole1 = User1 & Role

    const user1 : UserWithRole1 = {
        name: 'Abdullah',
        age: 25,
        role: 'student'
    }



    // interface
    interface User2 {
        name : string
        age : number
    }

    // insertion between two type in interface
    interface UserWithRole2 extends User2 { // I can use User1 as well 
        role : string
    }

    const user2 : UserWithRole2 = {
        name: 'Noor',
        age: 29,
        role: 'Teacher'
    }

    // How to decreare type by type alias and interface

    // type alias: 
    type Array1 = number[]

    const roll1 : Array1 = [1, 5, 6, 52, 56]
    //            index -> 0, 1, 2, 3, 4....

    // interface:
    interface Array2 {
        [index: number] : number // it means --> array has index which is number and data which is also a number
    }

    const roll2 : Array2 = [1, 5, 6, 52, 56]

    console.log(roll2);

    // Type Alias for Function

    type Add = (num1 : number, num2 : number) => number

    const add : Add = (num1, num2) => num1 + num2

    // Interface for Function
    interface Sub {
        (num1 : number, num2: number) : number
    }

    const sub : Sub = (num1, num2) => num1 - num2



}