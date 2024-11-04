{
    // generic type
    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [3, 6, 8, 10]
    const rollNumber: GenericArray<number> = [3, 6, 8, 10]

    // const mentors: string[] = ['Mr. x', 'Mr. Y', 'Mr. Z']
    const mentors: GenericArray<string> = ['Mr. x', 'Mr. Y', 'Mr. Z']

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    // Generic type for object

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Noor',
            age: 110
        },
        {
            name: 'Abdullah',
            age: 50
        }
    ]

    // Generic Tuple 
    type GeenricTuple<X, Y> = [X, Y]

    const human: GeenricTuple<string, string> = ['Mr. X', 'Mr. Y']

    const UserWithObjects: GeenricTuple<number, { name: string, age: number, isStudent: boolean }> = [
        12321,
        {
            name: 'Mr. User',
            age: 22,
            isStudent: true
        }
    ]

}