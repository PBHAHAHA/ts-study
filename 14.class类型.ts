class Person {
    age: number
    gender: '男' | '女' = '男'

    constructor(age: number, gender: '男' | '女' ){
        this.age = age
        this.gender = gender
        console.log(this.age, this.gender)
    }
}

const p = new Person(15,'女')