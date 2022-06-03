import React from 'react'

const Data = () => {
    const person = {
        name: "Amit",
        age: 25
    };
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
    };
   
    const person3 = [
        {
            name: "Amit",
            age: 25,
            course: ["C", "HTML"]
        },
        {
            name: "Ajay",
            age: 40,
            course: ["Java", "JavaScript"]
        }
    ];
    
    const myObj = {
        name: "John",
        age: 30,
        cars: {
            car1: "Ford",
            car2: "BMW",
            car3: "Fiat"
        }
    };
   
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
    

    for (let p in person) {
        console.log(person[p]);
    };
    console.log(person.age,person.name);

    person1.forEach(p => {
        console.log(p.name);
        console.log(p.age);
    });

    for (let p in person2) {
        if (p === "course") {
            person2[p].forEach(v => {
                console.log(v);
            });
        } else {
            console.log(person2[p]);
        };
    };
    person3.forEach(p => {
        console.log(p.name, p.age);
        p.course.forEach((p1) => {
            console.log(p1);
        })
    });
    for (let k in myObj) {

        if (k === "cars") {
            for (let k1 in myObj[k]) {
                console.log(myObj[k][k1]);
            }
        } else {
            console.log(myObj[k]);
        }
    }
    for (let d in data) {
        if (d === "personal_info") {
            for (let d1 in data[d]) {
                console.log(data[d][d1]);
            }
        } else if (d === "courses") {
            data[d].forEach(v => console.log(v));
        } else if (d === "branches") {
            for (let d1 in data[d]) {
                console.log(data[d][d1].admission, data[d][d1].vacant_seat);
            }
        }
    }
  return (
    <>

    </>
  )
}

export default Data