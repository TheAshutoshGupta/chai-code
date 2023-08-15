/* we dont use var because it leaks the data across the scopes and may create misery 
*/

function one(){
    const username = "hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        //console.log(username+website);
    }
    //console.log(website);
}

//console.log(username)

/* ********************Question/Concept******************** */

    function addONe(num){
        return num+1
    }
    addONe(5)
    /* here addOne(5) could have been written above */
    
    const addTwo=function(num){ //they also get called as expressions
        return num+2
    }
    addTwo(5)
     /* here addTwo(2) could not have been written above */