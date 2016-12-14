/**Any Type of Variable**/
var anyTypeVar;
console.log(anyTypeVar);

anyTypeVar=0;
console.log(anyTypeVar);
anyTypeVar="ra";
console.log(anyTypeVar);

var numberVar:number;
console.log(numberVar);
numberVar=0;
console.log(numberVar);
/** if you try to add other value will cause the error **/
//numberVar="ramesh";
// console.log(numberVar);

/* TypeScript data type we have is 
Boolean
Number
String
Array
Enum
Any
Void

--this void will be used when function is not returning the value */


function promptHellow(){
    console.log('Called promptHellow');
    return "Hellow World";
}



promptHellow();

console.log(promptHellow());

/** in Typescript Style **/

function tspromptHellow():void {
    console.log('Called tspromptHellow with void');
//    return "Hellow World-ts";  //fail if you have retun type
}



tspromptHellow();

console.log(tspromptHellow());

