
let a = { value: '22' }
let b = { value: 23 }
const c = { value: null }
let d = { value: (1 / NaN) }
let e = { value: NaN }
let f = { value: function () { } }
let arr = [a, b, c, d, e, f]
function kt(x) {
  switch (typeof x) {
    case 'number': console.log(x + ' la number'); break;
    case 'undefine': console.log(x + ' la undefine'); break;
    case 'null': console.log(x + ' la null'); break;
    case 'string': console.log(x + ' la string'); break;
    case 'object': console.log(x + ' la object'); break;
    case 'NaN': console.log(x + ' la NaN'); break;
    case 'function': console.log(x + ' la function'); break;
  }
}

for (var i = 0; i < arr.length; i++) {
  kt(arr[i].value)
}


console.log(1 / 0)
try {
  console.log(k)
} catch (e) {console.log(e)}
 

console.log(a.value)