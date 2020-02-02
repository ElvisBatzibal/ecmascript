//npm init inicializar proyecto
//npm 

function newFunction(name, age, country)
{
    var name = name || "elvis";
    var age = age|| 25; 
    var country= country|| "GT";

    console.log(name, age,country);
}

newFunction("GEOVANNY",30,"GT");
// es6 Default Params
function newFunction2(name="ELVIS", age=100, country="MX")
{
   console.log(name, age, country);
}

newFunction2();
newFunction2("KLEYMAR",20,"GT");

//Concatenación  
let hello="Hello";
let world="Worl";
let epicPhrase=hello + ' '+ world;

console.log(epicPhrase);
//es6
let epicPhrase2 = `${ hello} ${world}`;
console.log(epicPhrase2);

// LET y CONST, Multilínea, Spread Operator y Desestructuración

let lorem = "Frase epica 1 \n"
 + "linea 2 epica ";

 let lorem2= `frase 1
    frase 2 `;


    console.log(lorem);
    console.log(lorem2);
 
    let person ={
        'name' : 'ELVIS',
        'age':35,
        'country': 'Guatemala'        

    }
    console.log(person.name , person.age);
    //es6
    let { name, age, country } =person;
    console.log(name, age, country);

    //operador de propagación
    let team1=['oscar','julian','ricardo'];
    let team2=['valeria','yessica','camila'];
//propagacion de operador
    let education=['David', ...team1, ...team2];
    console.log(education);
//var disponible de forma global
//let disponible a nivel de scope
{
    var global ="Global var";
}
{
     let globalLet="global let";
     console.log(globalLet);
}
console.log(global);
//const
const a= "b";
//reasignacion
a="a";
console.log(a);

let name="Elvis";
let age =25;
//es5
obj ={name: name, age:age};
//es6
obj2 = {name, age};
console.log(obj2);

//arrow function
const names=[
    { name:"Elvis", age:25},
    { name:"Beatriz", age:24}
];

//map recibe una funcion anonima
let lisOfNames=names.map(function (item)
{
    console.log(item.name);
});

let listOfNames2 = names.map(item=> console.log(item.name));

//const listOfNames3 = parametros
const listOfNames3 = (name,age,country)=>
{
    
}

//const listOfNames4 = parametros
const listOfNames4 = name=> {

}

//const square = parametros
const square = num=> num*num;

//Promesas para trabajas asincronismo // dos eventos no pasan en paralelo
const helloPromise=() =>
{
    return new Promise( (resolve, reject)=>{
        if(true)
        {
            resolve("HEY!");

        }else{
            reject("Algo salio mal");
        }
    });
}

helloPromise()
.then( response => console.log(response))
.then ( () => console.log("Otro then"))
.catch(error => console.log(error))

//Clases, Módulos y Generadores
class calculator{
    constructor()
    {
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA, valueB)
    {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const cal = new calculator();
var sum= cal.sum(5,5);
console.log(sum);
//modulos import and export module.js

import { hello } from './module'
hello();

//generadores * retorna una serie de valores 
function* helloWorld()
{
    if(true)
    {
        yield 'Hola,';
    }
    if(true)
    {
        yield 'Mundo';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);




   