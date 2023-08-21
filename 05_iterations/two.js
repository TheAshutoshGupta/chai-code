// for of

const arr=[1,2,3,4,5]
/* for (const iterator of object(anything)) {
    console.log(num);
} */

for(const num of arr){
    console.log(num);
}

const greetings = "hellow world!"
for(const greet of greetings){
    //console.log(`Each char is ${great}`)
}

//Maps (key value pairs )

const map=new Map(); //no duplicate keys 
map.set('IN',"india")
map.set('USA',"united STates of America")
map.set('I',"india")

//console.log(map);
// can we apply for loop here

for(const key of map){
    console.log(key);
}

//destructure the map
for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}

/* for(const [key,value] of myObject){
    console.log(ke,':-',value);
} */

/* we cannot iterate the object this way  */