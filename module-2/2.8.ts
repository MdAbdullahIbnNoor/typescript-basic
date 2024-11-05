{
    // Asynchronous TypeScript

    type Something = { something: string }

    type Todo = {
        userId: number
        id: number
        title: string
        completed: boolean
    }

    // fetching data from APIs
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')

        const data : Todo = await response.json();

        console.log(data);
        return data; 
    }

    getTodo()

    // simulate the promise 
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" }
            if (data) {
                resolve(data)
            } else {
                reject('Failed to load data')
            }
        })
    }

    // calling create promise function
    const showData = async (): Promise<Something> => {
        const result: Something = await createPromise()
        return result
    }

    const output = showData()
    console.log(output);
}