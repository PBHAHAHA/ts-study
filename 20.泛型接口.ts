interface IdFunc<T> {
    id: (val: T) => T
    ids: () => T[]
}

// 泛型接口指定给泛型类型
// ，否则会报错 let obj: IdFunc


let obj: IdFunc<number> = {
    id(val) {
        return val
    },
    ids() {
        return [1,2]
    }
}



// 
const strs = ['a', 'b']
strs.forEach(item => {})

const nums = [2, 3]
nums.forEach(item => {})