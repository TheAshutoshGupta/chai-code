const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function (item) {
    console.log(item)
} )
/* we can implement arrow function also in for each loop */

coding.forEach((item)=>{
    console.log(item);
})

/* can we pass the explicit function also in for each */
function printme(item){
    console.log(item)
}

coding.forEach(printme)//dont execute it, just give the reference


/*
can we use this for each loop when 
array contains the objects
*/
const myCoding=[{
    languageName:"javaScript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
}
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName)
}
)



