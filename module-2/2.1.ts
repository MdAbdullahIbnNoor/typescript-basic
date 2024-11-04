{
    // Type Assertion
    let anything : any //anything can be assigned to variable 'anything'

    anything = "Next Level Web Development";

    anything = 222;

    (anything as number).toFixed(2)

    const kgToGm = (value : string | number) : string | number | undefined => {
        if(typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return convertedValue
        }
        if(typeof value === 'number') {
            return value * 1000
        }
        
    }

    const result1 = kgToGm('100') as string
    const result2 = kgToGm(10) as number

    console.log(result1, result2);

    // Creating custom type for error message
    type CustomError = {
        message : string
    }

    try {

        
    } catch (error) {
        // console.log(error.message); --> showing error as 'error' type cant be determined
        console.log((error as CustomError).message); //asserting custom tpe of error 
    }
}