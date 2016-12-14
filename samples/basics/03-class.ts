/* Typescript class **/

class Person{
    name:string ;
    age:number;
    
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    greet(n?:string){
        if(n){
            console.log('Hi '+ n);
        }else{
            console.log('Hello '+this.name);
        }
    }
}

//var p1=new Person(); //Will though error as construct is defied 
var p1=new Person('Raju',30);
var p2=new Person('Ramesh',30);

p1.greet();
p1.greet('Suresh');

p2.greet();
p2.greet('Suresh');


