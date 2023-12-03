function redirect() {
  window.open("./recipe.html", "_self");
}

function newRecipe() {
  let proName = document.getElementById("1").value;
  let proDesc = document.getElementById("2").value;
  let proImg = document.getElementById("3").value;
  return { name: proName, disc: proDesc, image: proImg };
}
function finishedRecipe() {
  localStorage.setItem("recipes", JSON.stringify(newRecipe()));
}
function test() {
  console.log(JSON.parse(localStorage.getItem("recipes")));
}
