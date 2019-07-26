/*
* 字符串get请求拼接
*/
export function encodeParams(obj) {
  const params = []
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    if (typeof value === 'undefined') {
      value = ''
    }
    params.push([key, encodeURIComponent(value)].join('='))
  })
  return params.join('&')
}
/*
*  对象键值排序
*   a > b > c
*/
export function sortObj(obj){
  let newkey = Object.keys(obj).sort();
  let newObj = {};
  for (let i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
  return newObj;
}