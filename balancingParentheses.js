isBalanced("(Sensei says yes!)", "()")       // => True
isBalanced("(Sensei says no!", "()")         // => False
// isBalanced("(Sensei [says] yes!)", "()[]")   // => True
// isBalanced("(Sensei [says) no!]", "()[]") // => False
// isBalanced("Sensei says 'yes'!", "''")       // => True
// isBalanced("Sensei say's no!", "''")         // => False
function isBalanced(s, caps) {
  //mapear parentesis
  let map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  //arreglo no para acomodar todo de maneta no enfilada sino  en stack
  let stack = [];
    //separar y hacer arrays
    s = s.split("")
    s.forEach((item, i) => {
        //comparamos cada item con los values del map, para oobtener el signo de ciierre
        if (map[item]) {
          // empujamos signo de cierre al array stack
          stack.push(map[item]);
        } else {
          // console.log(item,stack)
          if (item !== stack[0]) {
            stack.pop()
            //if item is not equal to the first element of the stack return false
            return false;
          }
        }
    });
    //return the stack when its elements have been exhausted
    return stack.length === 0;
}
