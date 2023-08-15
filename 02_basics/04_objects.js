//const tinderUser=new Object()
    const tinderUser={}

    tinderUser.id="123abc"
    tinderUser.name="Sammy"
    tinderUser.isLoggedIn=false

// console.log(tinderUser);

    const regularUser={
        email:"some@gmail.com",
        fullname:{
            userFullName:{
                firstName:"hitesh",
                lastname:"chaudhary"
            }
        }
    }

// console.log(regularUser.fullname.userFullName.firstName)
// combining the objects
    const obj1 = {1:"a",2:"b"}
    const obj2 = {3:"a",4:"b"}

    const obj3 = {6:"a",9:"k"}
    const obj4=Object.assign({},obj1,obj2,obj3)//correct way to combine 2 objects

    const obj5={...obj1,...obj2,...obj3}; //spread operator (latest, easiest)


    //console.log(obj5);


// array od objects
    const users=[
        {
            id:1,
            email:"h@gmail.com"
        },
        {
            id:2,
            email:"i@gmail.com"
        },
        {
            id:3,
            email:"k@gmail.com"
        },
        {
            id:4,
            email:"l@gmail.com"
        },
    ]

    // how to access them
        users[1].email

        //console.log(tinderUser);    // { id: '123abc', name: 'Sammy', isLoggedIn: false }

        //console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]
        /* this returns the value of all kets in array form */

        //console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
        /* this returns the value of all values in array form */

        //console.log(Object.entries(tinderUser));    //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
        /* returns all key value pairs in individual arrays */

        //console.log(tinderUser.hasOwnProperty('isLoggedIn'));   /* searches the particular key */

        const course={
            courseName:"js in hindi",
            price:"999",
            courseInstructor:"hitesh"
        }

        // to access we can use "course.courseInstructor"

            const{courseInstructor}=course

            console.log(courseInstructor)

            const{courseInstructor:instructor}=course

            console.log(instructor);

/* *****************************************API************************** */

    /* it is in the form of object where its name is not defined for example */
    {
        "name":"ashu",
        "age":"21",
        "address":"ayodhya"
    }
    
    // or
    [
        {},
        {},
        {}
    ]

