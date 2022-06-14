function id<T>(val: T): T {
    return val
}


let str = id<string>('123')
let num = id(10)

// 泛型约束
// 两种方法   extends

function getLen<T>(value: T[]): T[] {
    value.length
    value.push()
    return value
}

getLen([12,23,34])



interface ILength {
    length: number
}

function ids<Type extends ILength>(value: Type): Type {
    console.log(value.length)
    return value
}
ids([1])
ids({
    a: 1,
    length: 1
})
ids('123')
