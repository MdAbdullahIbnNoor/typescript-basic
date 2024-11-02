{
    // Union and Intersection types

    // type FrontendDeveloper = 'fakibaazDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    // type Developer = FrontendDeveloper | FullStackDeveloper

    // const newDeveloper: Developer = 'frontendDeveloper'

    // type User = {
    //     name: string,
    //     email: string
    //     gender: "male" | "female"
    //     bloodGroup: "A+" | "B+" | "O+" | "A-" | "B-" | "O-" | "AB+" | "AB-"
    // }

    // const user1 : User = {
    //     name: "Md. Abdullah Ibn Noor",
    //     email: "abdullah@gmail.com",
    //     gender: "male",
    //     bloodGroup: "A+"
    // }

    type FrontendDeveloper = {
        skills: string[],
        designation1: 'Frontend Developer'
    }
    
    type BackendDeveloper = {
        skills: string[],
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper : FullStackDeveloper = {
        skills : ['HTML','CSS','Reactjs', 'Nodejs', 'Expressjs', 'MongoDB'],
        designation1 : 'Frontend Developer',
        designation2: 'Backend Developer'
    }
}