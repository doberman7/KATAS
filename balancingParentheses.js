isBalanced("(Sensei says yes!)", "()")       // => True
isBalanced("(Sensei says no!", "()")         // => False

function isBalanced(s, caps) {
  let caps_array = caps.split(""),
   openers = [".*"],
   closers = [];

 for(var i=0; i<caps_array.length; i++) {
   if(i%2==0) {
     openers.push("[\\"+caps_array[i]+"]")
     openers.push(".*")
   } else {
     closers.push("[\\"+caps_array[i]+"]")
     closers.push(".*")
   }
 }
 let regex = openers.concat(closers.reverse()).join("");
 return new RegExp(regex, "g").test(s);
}
