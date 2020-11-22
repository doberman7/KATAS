isBalanced("(Sensei says yes!)", "()") // => True
isBalanced("(Sensei says no!", "()") // => False

function isBalanced(s, caps) {
  //en caso de estar vacio está valanceado
  if (!caps) {
    return true;
  }
  //si los signos empareja con al 1era o segunda occurrencia, es decir abren y cierran, meter en un array
  const capsArr = caps.match(/.{1,2}/g);
  //convertir el string en array
  const sArr = s.split("");
  const results = [];
  //iterar en el string d entrada
  for (let i = 0; i < sArr.length; i++) {

    //si alguno de cararcteres del string es igual al signo de cierre
    if (sArr[i] == results[results.length - 1]) {
      //sacar el signo de cierre
      results.pop();
      continue;
    }
    //iterar en los signos a comparar
    for (let j = 0; j < capsArr.length; j++) {
      //si el elemento del string input es igual al signo de ciierre faltante Y diferente a la logitud del array
      if (sArr[i] == capsArr[j][1] && capsArr[j][0] !== capsArr[j][1] && !results.length) {
        return false;
      } else if (sArr[i] == capsArr[j][0]) {
        results.push(capsArr[j][1]);
      }
    }
  }

  return results.length === 0;
}
