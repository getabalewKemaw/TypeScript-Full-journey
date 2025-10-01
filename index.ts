// these is my first  ever type script code 

interface User{
    name:string;
    id:number;
    email:string;
} 

const user :User={
    name:"abebe",
    id:10,
    email:"gech12kemaw@gmail.com"
}
console.log(user)


// declare with type union  for diffrent data handling in in typescript

// basisc types in typescript

// the number types it includes all the numbers and all the floats so with numbers we can handle both  data types


let num1:number=45;
let num2:number=3.14555;
console.log(num2,num1);
// the string types  we can  use these when you are gonna use string parematry or in genral datatypes


let myName:string="getabalew kemaw amare ";
let gretting :string=`hello dev :${myName}`;
console.log(myName,gretting);

// the boolean types as you know we use these when we are gonan to use the varible that require the true or false output one of the two output

let isActive:boolean=true;
let isLoggedIn :boolean=false;
console.log(isActive,isLoggedIn);


// the any types it  it not recommended to use any types with these becuase  it for the porpose of when declaring for any types

let sth:any;

sth="hello";
console.log(sth);
sth=12;
console.log(sth);
sth=true;
console.log(sth);
sth=undefined;
console.log(sth);

// the type unknown which is safer than any and ts forces that we use the types before gonna to the oprations

let myN:unknown=8;
if(typeof myN=="string"){
    console.log(myN.toUpperCase());
}
else{
    console.log("please make sure check before gonan to the  method  becuse ts enfore it😊😊😊😁")
    }
    // the void is used  the function and it return nothing  so use it for that mattees

 function demoVoid(name:string):void{
    console.log(" yeap these  function  return s  nothing  oops 😁😁😁😁" +name);
 }

 demoVoid("getch the pro");

 // the null and the undefined 
 // we must handle the types to use those when  we handle it 

 let n:null=null;
 let u:undefined=undefined;
 console.log(n,u);

 // the never type  which  is used for the function on whcih it is never return and used for whn we throw  erros and we use  for the infinte loops


//  function neverReturn( message:string):never{
//     throw new Error(message);

//  }
//  neverReturn("opps getch | what shall i do  i can not fix the issues what we are  getting with")

// the array  types;

let myArray:number[]=[1,2,2]; //
// the another way
let man:Array<string>=["getabalew ","his laptops 😊"];
console.log(myArray,man)

// tupelse is like arrays but it is used for when we need to declare  diffrent types 

let VIP:[string,number]=["getabalew",23];
console.log(typeof VIP,VIP);
// the union types  is used when we need to decalre a variable that is one of the listed union types 

let myId:string|number="DBU1601202";
console.log(myId);
myId=1601202;
console.log(myId);
// the  other  types is union with array

let data:(string|number)[]=["getcha",1601202,"IP",1601202];
console.log(data);
// union  with null and undefined
let userName:string|null=null;
console.log(userName)
userName="gechSif"
console.log(userName);


// type alliases it allow  u to create it s own types it is just like interface and it is perfect with union

type ID=string|number;
let userId:ID="getchStack😊";
console.log(userId.length);


// objexts with type aliases


type DmMe={
 name:string;
 title:string;
 tgUserName:string
    }

let myInput:DmMe={
    name:"gechThePro",
    title:"😁😁",
    tgUserName:"secret"

}
console.log(myInput);



// the literal types -restrict a  variable to specific types

let direction:"up"|"down"|"right"|"left";
direction="up";
console.log(direction)

// the instersection types combine multiple types in to one

type PER={name:string};
type EMP={employeID:number}
type staff=PER & EMP;

let staffMem:staff={name:"getcha",employeID:12};
console.log(staffMem);

// assertions  use the as thing 
let sth1:unknown="abth";
let strLength:number=(sth1 as string).length;

// Generics allow you to write functions, classes, or interfaces that work with any type, while still keeping type safety.
//thinks of like a placeholder for types
// we do not specify the types  upfront but typescript inforce when to use it

//for  eg.

function identity<T>(arg:T):T{
    return arg;
}
let num =identity<number>(43);
let myName1=identity<string>("getabalew ");
console.log(num,myName1);
// generics with the multiple keys
// you can use more than one generic is perfect for key value pair  tuples map and objects


function pair<K,V>(key:K,value:V):[K,V]{
    return [key,value];
}
let myUser=pair<string,number>("id",1601202);
console.log(myUser);
function nameG<FN,LN>(firstname:FN,lastname:LN):[FN,LN]{
    return[firstname,lastname];}
let getcho=nameG<string,string>("getabalew","kemaw");
console.log(getcho);

//u can use the  generic interface 


interface Box<F>{
    value:F;
}
let numberBox:Box<number>={value:23};
let stringBox:Box<string>={value:"getcho the great "};
console.log(numberBox,stringBox);
// generic function with defualt types
function generateFullName<T =string>(fname:T,lname:T):T[]{
    return [fname,lname];

}
  let  mYname=generateFullName("getabalew","kemaw");
console.log(mYname);

// lets for example  when fetching api responses 
interface ApiResponse<T> {
  data: T;
  error?: string;
}

const response1: ApiResponse<string> = { data: "Success" };
const response2: ApiResponse<{ id: number; name: string }> = {
  data: { id: 101, name: "Getabalew" },
};
console.log(response1,response2)






