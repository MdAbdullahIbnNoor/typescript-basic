{
    // Generic type for function

    // normal function to create an Array
    const createArray = (params: string): string[] => {
        return [params]
    }

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }

    // const createObjectwithGenerics = <T>()

    interface User {
        id: string
        name: string
        role: string
    }

    const res1 = createArray('Bangladesh')
    const res2 = createArrayWithGeneric<string>('Bangladesh')
    const createObj = createArrayWithGeneric<User>({
        id: '13hl43oujscsx34j7g',
        name: 'Pasha Khala',
        role: 'user'
    })
    // console.log(createObj);


    // Creating Tuple with Generics Type
    const createTuplewithGenerics = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const tupleResult1 = createTuplewithGenerics<string, number>('Mr. XYZ', 250)
    const tupleResult2 = createTuplewithGenerics<string, { brand: string }>('Mobile', { brand: "Nokia" })
    // console.log(tupleResult2);

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const result = addCourseToStudent({
        "id": "S12345",
        "name": {
            "firstName": "Alex",
            "lastName": "Johnson"
        },
        "age": 20,
        "gender": "Male",
        "contact": {
            "email": "alex.johnson@example.com",
            "phone": "+1234567890"
        },
        "address": {
            "street": "123 Main St",
            "city": "Springfield",
            "state": "IL",
            "zipCode": "62701",
            "country": "USA"
        },
        "enrollment": {
            "program": "Computer Science",
            "year": 3,
            "gpa": 3.75,
            "graduationYear": 2025
        },
        "activities": [
            {
                "activityId": "A1",
                "activityName": "Coding Club",
                "role": "Member",
                "hoursPerWeek": 5
            },
            {
                "activityId": "A2",
                "activityName": "Student Council",
                "role": "Treasurer",
                "hoursPerWeek": 3
            }
        ],
        "attendance": {
            "totalDays": 180,
            "daysAttended": 170,
            "attendancePercentage": 94.44
        },
        "awards": [
            {
                "awardId": "AW1",
                "awardName": "Dean's List",
                "year": 2023
            },
            {
                "awardId": "AW2",
                "awardName": "Coding Competition Winner",
                "year": 2022
            }
        ]

    })

    const result2 = addCourseToStudent({
        "studentId": "S67890",
        "name": "Maria Smith",
        "age": 21,
        "major": "Mathematics",
        "year": "Senior",
        "email": "maria.smith@example.com",
        "phone": "+9876543210",
        "skills": [
            "Statistics",
            "Algebra",
            "Calculus"
        ],
        "hobbies": [
            "Reading",
            "Photography",
            "Hiking"
        ]
    }
    )

    console.log(result2);
}