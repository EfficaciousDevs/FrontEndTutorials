/* 
----- TypeScript ----- 
1) Strong Typing
2) OOPS
3) Compile Time Errors
4) Great Tooling

*/

function doSomething(){
    for(var i = 0;i<10;i++){
        console.log(i);
        
    }
    console.log("Finally : " + i);
}
doSomething();


function doSomethingNew(){
    for(let i = 0;i<10;i++){
        console.log(i);
        
    }
    console.log("Finally : " + i);   // Warning at Compile Time Only
}
doSomethingNew();

// Type Annotations
let count:number = 5;
let str: string = "Typescript";
let ans:boolean = true;
let x:any = 'K';  // any datatype it takes
let arr:number[] = [10,20,30];
let list:any[] = [1,"Cognizant",false,[5,6,7]];

console.log(count);
console.log(str);
console.log(ans);
console.log(x );
console.log(arr);
console.log(list);


const red:number = 0;
const blue:number = 1;
const green:number = 2;

// Enumerations
enum colors{red = 0,blue = 1,green = 2};
let backgroundColor:colors = colors.red;
console.log(backgroundColor);


enum colors2{purple ,red ,blue ,green };
let backgroundColor2:colors2 = colors2.red;
console.log(backgroundColor);


let message:string = "Harley Davidson";

let endsWithN = (<string>message).endsWith('n');
let alternateWay = (message as string).endsWith('n');

// Normal Function in JS
function check(value){
    console.log(value);
    
}

// Arrow Function in Typescript (Equivalent to Lamda Function)
let doArrow = (value:string)=>console.log(value);


// Interface & Class in Tscript
interface Point{
    x:number,
    y:number,
    drawPointer: () => void
}
class dummy implements Point{
    x:number;
    y:number;
    drawPointer(){
        console.log(this.x+this.y);
    }
}

// With Properties and Constructor

class Points{
    constructor(private x?:number,private y?:number){ }
    drawPoint(){
        console.log(this.x+this.y);
    }
    set X(num:number){
        if(num<0){
            throw new Error('Value should not be -ve');
        }
        else
            this.x = num;
    }
    get X(){
        return this.x;
    }
    set Y(num:number){
        if(num<0){
            throw new Error('Value should not be -ve');
        }
        else
            this.y = num;
    }
    get Y(){
        return this.y;
    }
}

let testPoint = new Points(45,15);
testPoint.drawPoint();

// testPoint.x = 12;  *Private members cant be accessed outside class

testPoint.X = 60;  // For Setters
testPoint.Y = 25;

let getX = testPoint.X;  // For Getters
let getY = testPoint.Y;

console.log(getX);
console.log(getY);


// Modules
export class Area{
    constructor(private length?:number,private breadth?:number){}
    set L(x:number){
        if(x<0)
            throw new Error("Length cant be less than Zero")
        this.length = x;
    }
    set B(x:number){
        if(x<0)
            throw new Error("Breadth cant be less than Zero")
        this.breadth = x;
    }
    get L(){
        return this.length;
    }
    get B(){
        return this.breadth;
    }

    getArea(){
        return this.length*this.breadth;
    }
}

/** import {className} from 'RelativePath' **/