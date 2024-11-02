// type alias

{

    type Student = {
        // this type alias can be reused for every object type
        name: string
        age: number
        gender: string
        contactNo?: string
        address: string
    }


    const student1: Student = {
        name: "Abdullah",
        age: 25,
        gender: "Male",
        contactNo: "0416496651631",
        address: "Gulshan, Dhaka"
    }

    const student2: Student = {
        name: "Noor",
        age: 35,
        gender: "Male",
        address: "Mirpur Dhaka"
    }

    const student3: Student = {
        name: "Chaity",
        age: 35,
        gender: "Female",
        address: "Rajshahi"
    }


    // type alias for String

    type UserName = string

    const userName: UserName = "Khalid Ibn Al Walid" //using "UserName" as an alias here

    type IsAdmin = boolean

    const isAdmin: IsAdmin = true


    // type alias for function

    type Add = (x: number, y: number) => number

    const add : Add = (num1, num2) => num1 + num2

    const sum = add(30, 20)

    console.log(sum);


}