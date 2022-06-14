class GenericNumber<NumType> {
    defaultValue: NumType
    add: (x: NumType,y: NumType) => NumType

    constructor(value: NumType) {
        this.defaultValue = value
    }
}

// const m = new GenericNumber<number>()
// m.defaultValue = 12

// 当class中有 constructor 那么能做类型推断
const m = new GenericNumber(1)
m.defaultValue = '2'
