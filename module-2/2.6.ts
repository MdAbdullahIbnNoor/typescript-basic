{
    // constrains --> a rule enforced on something

    const addCourseToStudent = <T extends { // by this extension i am creating a constrains on this function so that it can only add specific type
        id: string;
        name: string;
        age: number;
        gender: string;
        email: string;
        phone: string;
    }>(student: T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const result = addCourseToStudent({
        "id": "S12345",
        "name": "Alex Johnson",
        "age": 20,
        "gender": "Male",
        "email": "alex.johnson@example.com",
        "phone": "+1234567890",
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
        "id": "S67890",
        "name": "Maria Smith",
        "age": 21,
        "gender": "Female",
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

    const result3 = addCourseToStudent({
        'id': 'SD323',
        'name': 'Something',
        'email': 'mail@gmail.com',
        'age': 25,
        'phone': '2464448',
        'gender': 'male'
    })
}