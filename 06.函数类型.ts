function add(num1: number, num2: number):number {
    return num1 + num2
}

console.log(add(1, 2)) 
// 函数无返回值 使用 void 定义返回类型
function addVoid(num1: number, num2: number):void {
    console.log(num1,num2)
    // return num1 + num2
}

addVoid(2,3)

// 可选参数
function mySlice(start?:number, end?: number): void {
    console.log('起始索引：' + start, '结束索引：'+ end)
}
mySlice(0)