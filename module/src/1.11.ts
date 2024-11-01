import { Result } from './../../node_modules/arg/index.d';
{
    // Ternary, optional chaining & nullish coalescing operator

    const age: number = 15

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    // console.log({ isAdult });

    // nullish coalescing operator
    // null | undefined ---> decision making

    const isAuthenticating = ""
    const Result1 = isAuthenticating ?? 'Guest' //nullish coalescing operator only work if the value is null or undefined
    const Result2 = isAuthenticating ? isAuthenticating : 'Guest'
    console.log({ Result1 }, { Result2 }); //if the isAuthenticating is null / undefined 


    type User = {
        name: string
        address: {
            city: string
            road: string
            presentAddress: string
            permanentAddress?: string
        }
    }

    const user1: User = {
        name: "Noor",
        address: {
            city: "Rajshahi",
            road: "Baliapukur",
            presentAddress: "Pabna Sadar"
        }
    }

    const permanentAddress = user1?.address?.permanentAddress ?? 'No Permanent Address'

    console.log({ permanentAddress });
}