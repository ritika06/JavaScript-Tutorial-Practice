console.log('We are at tut 6');
const name='Ritika'
const greeting='Good morning '
console.log(greeting+name)

let html;
html="<h> Heading </h> "+"<p> Paragraph </p> " 
html=html.concat('this',' str2')
console.log(html)
console.log('length ',html.length);
console.log('Upper case : ',html.toUpperCase());
console.log(html[1])
console.log(html.indexOf('<'))
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3))
console.log(html.endsWith('sad'))
console.log(html.includes('sad'))
console.log(html.substring(1,6)) //substring(n,m)..gives string at index n to m-1
console.log(html.slice(0,4))
console.log(html.split(' ')) //makes an array of split data
console.log(html.replace('str2','is it'))  //replaces first occurence only

//TEMPLATE LITERAL

let f1='Mango'
let f2='Orange'

let myHtml= `Hello ${name}
            <h1> This is heading </h1>
            <p> You like ${f1} and ${f2} </p>
`; // `` this is backtick..inside this we can write our html code. $ symbol is used to write a variable name
document.body.innerHTML=myHtml;



