//Spread Operator 
const obj ={
    name: "Oscar",
    age : 32,
    country:"GT",
}

let { name, ...all}= obj;
console.log(name, all);
console.log(all);

const obj =
{
    name:"Oscar",
    age: 32
}
//propagacion anidar elemento, object
const obj1= {
    ...obj,
    country: "GT"
}
console.log(obj1);

//promise finally

const helloWord= ()=>
{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout( ()=>resolve('Hello World'), 3000 ) 
        : reject( new Error('Test Error'))
        ;      

    });
}

helloWord()
.then(response=> console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log("Finalizado"))

//expresiones regulares
const regexData= /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year= match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);


