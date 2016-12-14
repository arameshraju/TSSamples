var globalVal="TypeScript Application";
var goblaValMulti="Javascript Application";
let goblaValLet="Javascript Application";
const developer:String ="Ramesh Raju Alluri";
function changeGolbalval():void{
    var goblaValMulti= "Thanks you";
    let goblaValLet= "Thanks you";
    console.log('globalVal : Value in side function is : '+ globalVal );
    console.log('goblaValMulti :Previous Value in side function is : '+ goblaValMulti );
    console.log('goblaValLet :Previous Value in side function is : '+ goblaValLet );
    console.log('developer :Previous Value in side function is : '+ developer );
//    developer="Alluyri";  /* error if you try to modify the constant*/
    globalVal="Typescript Value modified insde the scope";
    console.log('globalVal :current Value in side function is : '+ globalVal );
}

changeGolbalval();
 console.log('globalVal : current Value out side function is : '+ globalVal );

 console.log('goblaValMulti : Value out side function is : '+ goblaValMulti );
 console.log('goblaValLet : Value out side function is : '+ goblaValLet );
 console.log('developer : Value out side function is : '+ developer );