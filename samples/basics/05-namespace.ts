/** Namespace is */
namespace forest{
    export interface Animal{
        whoAmI():void;
    }
    export interface Plats{
        howTallIm():void;
    }    
    export class tiger implements Animal{
        whoAmI():void{
            console.log("I'm Tiger and 'm  Animal");
        }
    }
    export class Deer implements Animal{
        whoAmI():void{
            console.log("I'm Deer and 'm  Animal");
        }
    }
    export class mango implements Plats{
        howTallIm():void{
            console.log("I'm mango and 'm  tree and 10fee tall");
        }
    } 
    export class grass implements Plats{
        howTallIm():void{
            console.log("I'm grass and 'm  very small plat");
        }
    }

}

var t:forest.tiger = new forest.tiger();

t.whoAmI();