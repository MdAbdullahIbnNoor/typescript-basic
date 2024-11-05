{
    // generic constraints with keyof operator

    type Vehicle = {
        biCycle : string;
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

    type Owner1 = "biCycle" | 'bike' | 'car' | 'ship' | 'plane' //manually declaring by union operator

    // using keyof
    type Owner2 = keyof Vehicle // do exactly same as mentioned before

    const person1 : Owner1 = "car"

    const person2 : Owner2 = "plane"

    const user = {
        name: 'Abdullah',
        age: 25,
        city: 'Rajshahi'
    }

    const car = {
        brand: 'Toyota',
        model: 'X7-2000',
        licence: 2024
    }

    // here X -> object, Y -> properties of object by using constrains
    // This function return the property value of the given object
    const getPropertyValue2 = <X, Y extends keyof X> (obj: X, key: Y) : any => { 
        return obj[key]
    }

    const result1 = getPropertyValue2(car, 'brand')
    console.log(result1);   
}