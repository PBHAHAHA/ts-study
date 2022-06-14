// 类型声明文件，为已存在的JS库提供能型信息
// 这样在TS项目中使用这些库，就能有代码提示，类型保护

import axios from 'axios'
axios({
  url: '',
  method: 'DELETE'
})

import _ from 'lodash'

_.forEach


import React from 'react'

// 第三方库的类型声明文件
// 存在形式
// 1.自有类型声明文件
// 2.通过 DefinitelyTyped 仓库下载 例如： npm i @types/lodash -D