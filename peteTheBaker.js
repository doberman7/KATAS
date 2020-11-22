// must return 2
 let a = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 console.log(a)
// must return
let b = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
console.log(b);
function cakes(recipe, available) {
  //cantidad de pasteles
  let n = [];
  //iterar por cada ingrediente de la receta
  for (key in recipe) {
    //si el ingrediente concuerda con los ingredientes disponibles
    if (key in available) {
      //asignar al cociente redondeado hacia abajo de los ingredientes disponibles entre los requeridos en la receta
      let num = Math.floor(available[key] / recipe[key]);
      //empujar resultado de n
      n.push(num);
    } else {//si no hay suficiente materia prima para la receta
      return 0;
    }
  }
  //convertir  acomodar n de menor a mayor y traer un nuevo array que incluye el 1 er elemento
  return parseInt(n.sort((x, y) => x - y).slice(0, 1)); // acomo
}
