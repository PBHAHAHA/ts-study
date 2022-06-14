// 通过[] 查询属性类型
type Props = {
  a: number
  b: string
  c: boolean
}

type Type2 = Props['a']

// 同时查询多个索引
type Type3 = Props['a' | 'b']
type Type4 = Props[keyof Props]
