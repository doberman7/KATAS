// isBalanced("(Sensei says yes!)", "()")       // => True
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
    //iterar n veces igual a la loongitud del string
    s = s.split("")
    s.forEach((item, i) => {
      // item es cada una de las letras del string "s"
         item = s[i];
        //si encontramoos que alguna de las letra del string es igual a lo mapeadoo
        if (map[item]) {
          //lo empujamos al array stack
          stack.push(map[item]);
        } else {
          if (item !== stack.pop()) {
            //if item is not equal to the first element of the stack return false
            return false;
          }
        }
    });
    console.log(stack.length === 0)
    //return the stack when its elements have been exhausted
    return stack.length === 0;
}
