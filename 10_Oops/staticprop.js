class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username ${this.username}`);
    }
    static /* for not giving the access */ createId(){
        return `123`
    }
}
const hitesh = new User("hitesh")
console.log(hitesh.logMe())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher("Iphone","iphone@com" )
iphone.logMe()

