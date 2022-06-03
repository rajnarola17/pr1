import React from 'react'

const Data = () => {
    const person0 = {
        name: "Amit",
        age: 25
    }
    
    
    const person1 = [
        {
            name: "Amit",
            age: 25,
        },
        {
            name: "Piyush",
            age: 40,
        },
    
    
    ];
    
    
    const person2 = {
        name: "Amit",
        age: 25,
        course: [
            "C",
            "HTML"
        ]
    }
    
    
    const person3 = [
        {
            name: "Amit",
            age: 25,
            course: [
                "C",
                "HTML"
            ]
        },
        {
            name: "Ajay",
            age: 40,
            course: [
                "Java",
                "JavaScript"
            ]
        }
    ]
    
    
    const myObj = {
        name: "John",
        age: 30,
        cars: {
            car1: "Ford",
            car2: "BMW",
            car3: "Fiat"
        }
    }
    
    const data = {
        personal_info: {
            name: 'amit',
            age: 25,
            city: 'surat'
        },
        courses: ["C", "JavaScript", "React"],
        branches: {
            rwl: {
                admission: 50,
                vacant_seat: 10
            },
            rw2: {
                admission: 30,
                vacant_seat: 20
            },
            rw3: {
                admission: 25,
                vacant_seat: 25
            },
            rw4: {
                admission: 40,
                vacant_seat: 10
            }
        }
    }

    // console.log(person0.name,person0.age);
    for (let p in person0) {
        console.log(person0[p]);
    };

  return (
    <>

    </>
  )
}

export default Data