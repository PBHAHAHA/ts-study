
// type Person = {
//     name?: string; 
//     age?: number; 
//     sayHi(): void ;
//     greet(name: string): void
// }

interface Person {
    name?: string; 
    age?: number; 
    sayHi(): void ;
    greet(name: string): void
}
let person: Person = {
    // name: 'pubing',
    // age: 18,
    sayHi() {
        console.log("hi")
    },
    greet(name){
        console.log(name)
    }
}

person.sayHi()