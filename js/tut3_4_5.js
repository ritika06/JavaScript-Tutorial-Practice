console.log('tut3')

//variables in java
//var,let,const

var namen = 'ritika'
console.log(namen)

/*
const ownername = 'Ritika'              <- this value can't be changed now. if some other value is assigned then it'll give error.
*/

var city ='Patna'
console.log(city)
const ownerName = 'Ritika' 
console.log(ownerName)

/* let,const, var : 3 ways to declare a variable
const : keeps the value constant
var : has global scope
let : has blokck level scope
use const and let more
*/

{
    let city ='Delhi'
    city= 'Mumbai'
    console.log(city)
}
console.log(city)

// with const we can use push and pop in case of array type... but can't change any data already stored

console.log('tut 4')

//Data types
//Primitive data types 
console.log('PRIMITIVE DATA TYPES')

//String
let name="Ritika"
console.log("My name is "+name);
console.log("Data type of name :"+ typeof(name));


//Number
let marks=80
console.log("My score is " + marks);
console.log("Data type is :"+ typeof(marks));


//boolean
let isStudent= false
console.log("Data type is :"+ typeof(isStudent));

//null - null has bogus return type
let nullVar= null
console.log("Data type is :"+ typeof(nullVar));

//undefined
let undef;
console.log("Data type is :"+ typeof(undef));

//REFERENCE DATA TYPES
console.log('REFERENCE DATA TYPES')

//Arrays

let myarr=[1,2,3,4,false,"abc"]
console.log("Data type :" + typeof(myarr))

//ObjectLiterals

let stMarks = {
    ritika : 80,
    jay : 85,
    piggu : 90
}
console.log('Data type :' + typeof(stMarks))

function findName()
{}
console.log('Data type :' + typeof(findName))



//Type conversion and type Coercion


console.log('tut 5')
console.log("Type conversion and Type coercion")
let myvar;
myvar=34
console.log(myvar,(typeof(myvar)));
myvar=Boolean(34);
console.log(myvar,(typeof(myvar)));
let i=8;
console.log(i.toString(),typeof(i))
let j=34.09765
console.log(j.toFixed(3))


//Type Coercion

let mystr="698"
let mynum=34;

console.log(mystr,mynum,mystr+mynum)

let mystr2=Number("698")
let mynum2=34;

console.log(mystr2,mynum2,mystr2+mynum2)



