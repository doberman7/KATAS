//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns fals
scramble('rkqodlw', 'world') // ==> True
//scramble('cedewaraaossoqqyt', 'codewars')// ==> True
//scramble('katas', 'steak')// ==> False
function scramble(str1, str2) {
  let n = null
  let str2original = str2.split('')
  str1 = str1.split('')
  str2 = str2.split('')
  let equals = []
  str1.forEach((itemUno, i) => {
    str2.forEach((itemDos, i) => {
      if (itemUno == itemDos) {
        equals.push(itemDos);
      }
    });
  });
  str2original = str2original.sort();
  str2original = str2original.toString()
  equals = equals.sort();
  equals = equals.toString()

  n = equals.localeCompare(str2original);
  console.log(n);
  // switch (n) {
  //   case 0:
  //     return true
  //     break;
  //   case 0:
  //     return true
  //     break;
  //   default: "?"
  //
  // }

}
