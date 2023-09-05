const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DM calls, crypto, network
    setTimeout(function(){
        console.log("Async task in somplete");
        resolve() //this connects the promise to resolve
    },1000)
}) 

promiseOne.then(function(){
    console.log("Promise consumed");
}) 



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task 2`)
        resolve()
    },1000)
}).then(function(){
    console.log(`async 2 resolve`)
})

const promiseThree= new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username: "Chai",email: "chai@example.com"})
        /* we can pass the data too */
},1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true

        if(!error){
            resolve({username:"hitesh", password:"123"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{   
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(()=>(console.log(`the promise is either resolve or rejected `)))



const promiseFive=new Promise(function(resolve,reject){setTimeout(function(){
    let error= true

    if(!error){
        resolve({username:"javascript", password:"123"})
    }
    else{
        reject('ERROR:Js went wrong')
    }
},1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


/* fetch from try and catch */

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         /* console.log(response) */  //this is not structured or formatted
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error)
//     }
// }
// getAllUsers()


/* fetch from then, catch */

fetch('https://api.github.com/users/theashutoshgupta')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error")
})




/* fetch works with priority task queue and which gives the return first
and when we call fetch it gets busy in two process 

-Data:
    onfulfilled (promise response)
    onrejection (promise reject)

-Web Browser/Node :
    web API aor network API (network request)
*/

