// Partial 的实现

type PartialTest<T> = {
  [key in keyof T]?: T[key]
}
type props = {
  a: number
  b: string
}

type newProps = PartialTest<props>

// Readonly的实现

type ReadonlyTest<T> = {
  readonly [key in keyof T]: T[key]
}

type newProps1 = ReadonlyTest<props>
let a: newProps1 = {
  a: 1,
  b: 'b'
}

