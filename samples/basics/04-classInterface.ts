/** Interface Example ***/
interface Animal{
    speak():void;
}

class Dog implements Animal{
    speak():void{
        console.log('Hi puppy');
    }
    bark():void{
        console.log('Bow bow...!Bow');
    }
}
var d=new Dog();
d.speak();
d.bark();