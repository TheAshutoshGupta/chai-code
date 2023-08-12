const name= "hitesh"
const repoCount = 50

console.log(name + repoCount + "ashutosh")

console.log(`hello my name is ${name} and my repoCOunt is ${repoCount}`)
// backticks for string interpolation, we make place values and insert variable name


const gameName=new String('hitesh-hc-com')
//this will create and object and we just called the constructor, 
// so we have protype of functions and object provides large varity of functions
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4); //=>hite , (initial value, end value+1)
console.log(newString);

const anotherString = gameName.slice(-5,-4)//negative accepting function
console.log(anotherString);

const newStringOne= "   hitesh"
console.log(newStringOne.trim());//will affect line terminators and whitespaces

const url = "ashutoshgupt a.com"
console.log(url.replace(' ','%20')) //=> converted "ashutoshgupt a.com" => "ashutoshgupt%20a.com"

console.log(url.includes('ashu')); //=>true


//now we want to split the string into an array
console.log(gameName.split('-'))
