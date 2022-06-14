// 通过 type 声明类型别名
// type NumStrArr = (number | string)[]
type NumStrArr = Array<number | string>
let arr: NumStrArr = [1,'a', 3]
