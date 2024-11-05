{
    // Conditional Type -> a type that depends on another type

    type a1 = null
    type b1 = undefined

    type x = a1 extends null ? true : false //conditional type

    type y = a1 extends number ? true : b1 extends undefined ? false : true //nested conditional type


    type Sheikh = {
        bike : string
        car: string
        ship: string
        plane: string
    }

    type hasVehicle<T> = T extends keyof Sheikh ? true : false

    type hasCar = hasVehicle<"bike"> //conditional type



}