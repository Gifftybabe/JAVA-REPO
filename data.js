

//String Literal
let firstName = 'Ngozi'; 
lastName = 'Uloka'; 
let name = firstName + ' ' + lastName;
console.log(name);

let text1 = 'What a very' + ' ';
text1 += 'nice day';
console.log(text1);


//Number Literal
let example = 7.77;
console.log(example);
console.log(parseInt(example));
console.log(parseFloat(example));
console.log(example.toFixed(1));

 //Boolean Literal
 let example1 = false;
 let example2 = true;
 console.log(example1);
 console.log(example2);



//undefined Literal
 let row1 = [5, 7, 6];
 console.log(row1[3]);

 let carName;
 console.log(carName);


 //null Literal
 let anything = null;


 //Object Literal
 let person = {
    firstName: 'Ngozi',
    lastName: 'Uloka',
    age: '27',
    eyeColor: 'Brown'
 };
 console.log(person);
 console.log(Object.values(person));
 console.log(Object.keys(person));

 //Array Literal
 let relationshipStatus = ['single', 'dating', 'married'];
 console.log(relationshipStatus[0]);
 let col1 = [6, 9, 4];
 console.log(col1.length);

//Function Literal
function greet(name) {
    console.log('Hello ' + name);
}
greet('developerekene');

function product(a, b) {
    return a*b;
}
product(2, 4);


