//  keyof 关键字 接受一个对象类型，生成健名 名称的 联合类型
function getProp<T , K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let p1 = {
    name: 'rose',
    age: 18
}
getProp('asfghg',1)

getProp(p1,'age')