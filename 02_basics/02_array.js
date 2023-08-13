const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman", "flash", "batman"]

//push
    //marvel_heroes.push(dc)
    //console.log(marvel_heroes[3][1]);


// concat function
    const allHeroes=marvel_heroes.concat(dc)
    //console.log(allHeroes)

//spread function
    const all_new_heroes=[...marvel_heroes,...dc]
    //console.log(all_new_heroes)

//flat function
    const another_array=[1,2,[4,5,6],[1,[2,[8]]]]
    const real_another_array=another_array.flat(Infinity)
    //console.log(real_another_array)

//string to array
    console.log(Array.isArray("hitesh"))
    console.log(Array.from('Hitesh'))

//object to array
    console.log(Array.from(Object.values({name:"hitesh"})))//interesting case

    /*
    To achieve the desired output of ['h','i','t','i','s','h'] using the object {name:"hitesh"}, you can follow these steps:

    const obj = {name: "hitesh"};
    const nameArray = Array.from(obj.name);
    console.log(nameArray); // Outputs: ['h','i','t','i','s','h']

                    or 
    console.log(Array.from(Object.values({name:"hitesh"}).name))

     */

//Array.of function
    let s1=[1,2,3,34]
    let s2=200
    let s3=300
    console.log(Array.of(s1,s2,s3)) 
    /* works same as spread operator */

