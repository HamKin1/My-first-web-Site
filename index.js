//console.log(" ");/*It will show when you check inspect on the site*/
//console.log("I love my work");

//window.alert("This is an alert");
//window.alert("i like pizza");/*use to show alert on the web page browser*/

document.getElementById("myH1").textContent= "Hello";
document.getElementById("myp").textContent= "ade";

//Varible
let x;
x = 130;
console.log(x);

let date = 25;
let price = 39;
console.log(`you are ${date} years old`);
console.log(`your price is ${price}`);
console.log(typeof date);

//Strings
let firstName = "HamKin";
console.log(typeof firstName);
console.log(firstName);
console.log(`your name is ${firstName}`);

//booleans
let online = true;//true or false

console.log(typeof online);
console.log(`Bro is online: ${online}`);

//Variables on webpage
let fullName = 'HamKin';
let age = 25;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;

//Arithmetic operations
let students =15;  
students = students * 2; //or students -=2;
 /*add plus(+) 
or minus(-) 
or multiply (*) 
or divid(/)
or remainder (%)
or power(**) 2 to the current students
*/

console.log(students);

//operators precedence
let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);


//How to accept user input
    //un professional
/*let username;

username = window.prompt("What is your user name?");

console.log(username);
*/
    //Professional way
let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("text").value;
    //console.log(username);
    document.getElementById('myH1').textContent = `Hello ${username}`
}

//type conversion
/*let ages = window.prompt("How old are you?");
ages = Number(ages);
ages+=1;

console.log(ages, typeof ages);

let a = "bolu";
let b = "ola";
let c = "ayo";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
*/

//const
const PI = 3.14159;
let radius;
let circumfrence;

//radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);
circumfrence = 2 * PI * radius;
console.log(circumfrence);
document.getElementById("sub").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumfrence + `cm`;
}

//counter program
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countlabel = document.getElementById("count");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

//If statement

const myAge = document.getElementById("myAge");
const subM = document.getElementById("subM");
const resultElement = document.getElementById("resultElement");
let and;


subM.onclick = function(){
    and = myText.value;
    and = Number(and);
    if(and >=18){
        //console.log( "You are old enough to ente the site");
        resultElement.textContent = `You are old enough to ente the site`
    }
    else{
        //console.log("You must be 18+ to use the site");
        resultElement.textContent = `You must be 18+ to use the site`
    }
}

let time = 3;
if(time < 12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}

//.checked box
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

    mySubmit.onclick = function(){

        if(myCheckBox.checked){
            subResult.textContent = `You are subscribed`;
        }
        else{
            subResult.textContent = `You are not subscribed`;
        }

        if(visaBtn.checked){
            paymentResult.textContent = `You are paying with Visa`;
        }
        else if(payPalBtn.checked){
            paymentResult.textContent = `You are paying with Paypal`;
        }
        else{
            paymentResult.textContent = `You must select a payment type`;
        }
    }
//Method chaining
//let usernam = window.prompt("Enter your username");

//No method chainig
/*usernam = usernam.trim();
let letter = usernam.charAt(0);
letter = letter.toUpperCase();

let extraChars = usernam.slice(1);
extraChars = extraChars.toLowerCase();
usernam = letter + extraChars;

console.log(usernam);
*/

//Method chaining
usernam = usernam.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowercase;
console.log(usernam);


//Temperature conversion problem


const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const results = document.getElementById("results");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        results.textContent = temp.toFixed(1) + "ºF";
    }
    else if (toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        results.textContent = temp.toFixed(1) + "ºC";
    }
    else{
        results.textContent = `select a unit`;
    }
}


    