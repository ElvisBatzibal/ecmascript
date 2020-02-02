//object Trailing commas
const data={
    frontend : "Oscar",
    backend:"Isabel",
    design : "Ana",
}
//objet to matriz
const entries =Object.entries(data);
console.log(entries);
console.log(entries.length);

//objet to get values
const data = {
    frontend : "Oscar",
    backend:"Isabel",
    design : "Ana",
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding o concatenar
const string = "Hello";
console.log(string.padStart(7,"Hi"));
console.log(string.padEnd(12,"-----"));

//async await
const helloWorld  = ()=>{

    return new Promise((resolve, reject)=>{

        (true) 
        ? setTimeout( ()=> resolve("Hola Mundo"),3000) 
        : reject(new Error("Test Error"))
        ;
        
      
    });
}

const helloAsync = async ()=>{
    const hello= await helloWorld();
    console.log(hello);
}

helloAsync();


//propuesta 2 
const anotherFunction = async ()=>
{
    try{

        const hello = await helloWorld();
        console.log(hello);
    }catch(error)    
    {
        console.log(error);

    }
};

anotherFunction();
