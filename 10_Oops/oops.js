 const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
 
    getUserDetails: function(){
    console.log(`Got user details from database of ${this.username}`)
    }
}
 console.log(user.getUserDetails())

function User(name, loginCount, isLoggedIn)
{
    this.username=name
    this.loginCount=loginCount
    this.SignedIn=isLoggedIn


}

const userOne=new User("hitesh",12,true)
const userTwo=new User("chai aor code", 15,true)
console.log(userOne)
console.log(userTwo)