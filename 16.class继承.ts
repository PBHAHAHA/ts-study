// extends

// implements


interface Singable {
    name: string
    sing: () => void
}
class Person implements Singable {
    name = '123'
    sing() {
        console.log(123);
        return 1
    }
}

const p2 = new Person()

p2.sing()