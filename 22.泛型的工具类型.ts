// Partial<Type>
// 用来构造一个类型，将 Type的所有属性设置为可选
interface Props {
    id: string,
    children: number[]
}
let a:Props = {
    id: '123',
    children: [123,32]
}
type PartialProps = Partial<Props>
let b:Props = {

}
let c:PartialProps = {}


// Readonly<Type>
// 设置类型属性 只读，不能修改
interface Props1 {
    id: string
    children: number[]
}

type ReadonlyProps = Readonly<Props1>
let p1: ReadonlyProps = {
    id: '123',
    children: [2,3,4]
}
p1.id = '321'


// Pick<Type, Keys> 
// 从Type 中选择一组属性来构造新类型
interface Props2 {
    id: number
    title: string
    children: number[]
}
type PickProps = Pick<Props2, 'id' | 'title'>



// Record<Keys,Type>
// 创建一个固定key的类型
type RecordObj = Record<'a' | 'b' | 'c', string>
let obj1: RecordObj = {
    a: '1123',
    b: '11231',
    c: '11232'
}