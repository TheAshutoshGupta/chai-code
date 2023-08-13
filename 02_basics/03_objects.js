//singleton
/* Object.create() */


//object literals


    const jsUser={
    name:'hitesh', //key explicitely changes into string
    age:18,
    email:"hitesh@google.com",
    isLoggedIn:false,
    "last Login Days":["Monday","Saturday"]
    }

// how to access these items?
    //console.log(jsUser.email)
    //console.log(jsUser["email"])

    /* 
    both will give same output, just that, see "last login Days" key
    we cant access it with dot operator.

    so, for good practice indexing technique is better
    */
   //console.log(jsUser["last Login Days"])

//how to access symbols

    const mySym=Symbol("key1")

    const jsUser2={
    name:'hitesh', //key explicitely changes into string
    age:18,
    [mySym]:"myKey1",
    email:"hitesh@google.com",
    isLoggedIn:false,
    "last Login Days":["Monday","Saturday"]
    }

    //console.log(jsUser2[mySym])

    /* 
        symbol datatypes will always we implemented as "[mySym]"
        and will be accessed as so
    */

// how to change the values of keys
    jsUser2["name"]="ashutosh"
    //console.log(jsUser2["name"])
    /* we could have user dot operator too */

    //console.log(jsUser2)
    /*  
                        {
                            name: 'ashutosh',
                            age: 18,
                            email: 'hitesh@google.com',
                            isLoggedIn: false,
                            'last Login Days': [ 'Monday', 'Saturday' ],
  see symbol datatype=>     [Symbol(key1)]: 'myKey1'   
                        }

    
    */

// freeze on Objects
    //Object.freeze(jsUser2)
    jsUser2["name"]="ashu" //it wont propogate the changes

    jsUser2.greeting=function()
    {
        console.log(`hello ${this["name"]}`)
    }

    console.log(jsUser2.greeting())

    

    