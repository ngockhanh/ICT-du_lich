var arr = [ 'FF', 'FA', 'AA', 21, 12, 2**53-1, 2**53]
function toBinary(a) {
  return parseInt(a, 16).toString(2);
}
for (var i = 0; i < arr.length; i++) {
  if (Number.isSafeInteger(parseInt(arr[i],16))) {
    console.log(toBinary(arr[i]));
  }
  else {
    console.log('so nay khong phai so an toan');
  }

}
console.log(parseInt(2**53,16));






