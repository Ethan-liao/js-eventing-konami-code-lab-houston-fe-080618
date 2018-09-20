//up ,up ,down ,down ,left ,right ,left,right,b,a
// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


// function init() {
  
// }


//up ,up ,down ,down ,left ,right ,left,right,b,a
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 

let index = 0;
 
function init(){
document.body.addEventListener('keydown', (e) => {
  const key = parseInt(e.which);
  console.log('e.key:', e.key)
  console.log('e.which:', e.which)
  console.log('e.detail:', e.detail)
  console.log(index)
  if (key === code[index]) {
    index++;
console.log(index)
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
})
}

init()
document.addEventListener('keydown', onKeyDownHandler);


// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//   alert('keydown event\n\n' + 'key: ' + keyName);
// });
