// Function

// normal function
function add(num1 : number, num2 : number) : number{
    return num1 + num2;
}

add(2, 4)

// Arrow function

const addNumber = (num1:number, num2:number) : number => num1 + num2

// Object --> function --> Method

const poorUser = {
    name: "Abdullah",
    balance: 0,
    addBalance(balance: number) : string {
        return `My new balance is ${this.balance + balance}`
    },
}

// array mapping

const arr: number[] = [1, 4, 25]

const newArray: number[] = arr.map((elem : number) : number => elem * elem)