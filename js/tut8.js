console.log('We are at tut 8 : CONDITIONAL & SWITCHES');
const age=25
if(age==19){
    console.log('Age is 19')
}
else if(age == 65)
{
    console.log('Age is 65')
}
else
{
    console.log('Age is not 19 or 65')
}

/*
== , !=     <-- checks value
=== , !==   <-- checks value as well as type
65 == '65' TRUE
65 === '65' FALSE
*/

//AND OR operators
if( age > 19 && age<25)
{
    console.log('AND condition true')
}
else
{
    console.log('AND condition false')
}
if( age > 19 || age<25)
{
    console.log('OR condition true')
}
else
{
    console.log('OR condition false')
}

//Ternary operators
console.log(age==45 ? 'Age is 45' : 'Age is not 45')


//SWITCH CASE

switch(age)
{
    case 18:
        console.log('Your age is 18')
        break;
    case 25:
        console.log('Your age is 25')
        break;
    default:
        console.log('Unknown age')
        break;
}

