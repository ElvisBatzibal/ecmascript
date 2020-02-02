//flat
let arraylist=[1,2,3,[1,2,3,[1,2,3]]];

console.log(arraylist.flat(2));

//faltMap
let array = [1,2,3,4,5];
console.log(array.flatMap(value=> [value, value*2]));

let hello = '    hello world';
console.log(hello);
console.log(hello.trimStart());

let hello= 'Hello world      ';
console.log(hello);
console.log(hello.trimEnd());

//catch error
try{

}catch{
    error
    console.log(error);
}
//Conver matriz to object 
let entries= [["name","oscar"], ["age",32]];
console.log(Object.fromEntries(entries));


let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log( symbol.description);


