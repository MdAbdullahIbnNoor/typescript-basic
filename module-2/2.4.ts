{
    // Generic Type with interface

    interface Developer<T, B> {
        name: string;
        computer: {
            brand: string
            model: string
            releaseYear: number
        }
        smartWatch: T,
        bike?: B
    }

    interface Smartwatch {
        brand: string
        model: string
        display: string
    }

    const poorDeveloper: Developer<Smartwatch, null> = {
        name: 'Abdullah',
        computer: {
            brand: "Asus",
            model: 'X-411UQ',
            releaseYear: 2017
        },
        smartWatch: {
            brand: 'Xiaomi',
            model: 'kw66-AR',
            display: 'Oled'
        }
    }

    interface AppleWatch {
        brand: string,
        model: string
        display: string
        software: string
        heartRate: boolean
        sleepMetre: boolean
        waterResistance: boolean
    }

    interface Bike {
        brand: string
        model: string
    }

    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: 'Mr. Noor',
        computer: {
            brand: 'Apple',
            model: 'Macbook M1 Pro Max 16D24Y',
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'Apple',
            model: 'Apple Smartwatch Pro',
            display: 'Retina 2.4inch',
            software: 'iOS 24',
            heartRate: true,
            sleepMetre: true,
            waterResistance: true
        },
        bike : {
            brand: 'Royal Enfield',
            model: 'Casino 350'
        }
    }

    console.log({richDeveloper});
}

