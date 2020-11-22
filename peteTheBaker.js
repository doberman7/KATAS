// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
function cakes(recipe, available) {
  //cantidad de pasteles
  let n = [];
  //iterar por cada ingrediente de la receta
  for (key in recipe) {
    //si el ingrediente concuerda con los ingredientes disponibles
    if (key in available) {
      //asignar al cociente redondeada hacia abajo de los ingredientes disponibles entre los de la receta
      let num = Math.floor(available[key] / recipe[key]);
      //empujar resultado en n
      n.push(num);
    } else {
      return 0;
    }
  }
  return parseInt(n.sort((x, y) => x - y).slice(0, 1)); // where direct return Math.min (n);
}
