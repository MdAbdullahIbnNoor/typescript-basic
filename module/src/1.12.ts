{
    // Never,unknown and nullable type

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching.....");
        } else {
            console.log("Nothing to search");
        }
    }

    // searchName(null)

    // unknown typeof

    const getSpeedInMetrePerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            let convertedSpeed = (value * 1000) / 3600
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if(typeof value === "string") {
            const [speed, unit] = value.split(' ');
            let convertedSpeed = (parseFloat(speed) * 1000) / 3600
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else{
            console.log("Wrong Input");
        }
    }

    getSpeedInMetrePerSecond(null)


    // never type --> that never return any type or value

    const throwError = (msg : string) : never => {
        throw new Error(msg);
    }

    throwError('Mushkil se Error hogaya')

}