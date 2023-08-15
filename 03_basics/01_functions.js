// package of code
    function sayName(){
        console.log("H");
        console.log("I");
        console.log("T");
        console.log("E");
        console.log("S");
        console.log("H");
    }

    sayName     //reference of function
    //sayName()    //execution of the function

    function addTwoNumbers(number1,number2  /* parameters */){
        console.log(number1+number2)
    }

    addTwoNumbers(3,4 /* arguments */)
    addTwoNumbers(3,"7")

    /* we can assign a variable to the result of function, only and only if it is 
       returning some value
    */
        function addAgain(number1,number2){
             return number1+number2;
        }
        let temp=addAgain(5,6);
        //console.log(temp)

    function loginUserMessage(username){
        if(username===undefined){
            console.log("Please enter a username")
            return
        }
        return `${username} just logged in`
    }
    console.log(loginUserMessage("hitesh"))     //hitesh just logged in
    // but what if?
    console.log(loginUserMessage())     //undefined just logged in


    
    /* we can give default values */
        function loginUserMessage(username="Ashutosh"){
            //this part wont execute ever
            if(username===undefined){
                console.log("Please enter a username")
                return
            }
            return `${username} just logged in`
        }
