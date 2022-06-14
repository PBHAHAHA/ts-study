//  映射类型 通过 in 关键字 声明映射关系
// 1. 通过 联合类型 
type PropKeys = 'x' | 'y' | 'z'
type Type2 = {
  [Key in PropKeys]: number
}
// 映射类型只能在 类型别名  type 中使用，不能在接口中使用
interface Type3 {
  [Key in PropKeys]: number
}
// 2.通过对象类型 通过keyof转化为联合类型
type Props = {
  a: number
  b: string
  c: boolean
}
type Type4 = {
  [key in keyof Props]: number
}
