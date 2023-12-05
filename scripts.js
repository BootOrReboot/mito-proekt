function redirect() {
  window.open("./recipe.html", "_self");
}
arrOfProducts = [
  {
    name: "Sarma",
    disc: "One of the staples of traditional Turkish cuisine, sarma consists of a filling that is snugly surrounded by leaves orleafy vegetables.There are numerous versions of this dish but the mixturetypically combines ingredients such as minced meat, rice orbulgur, various herbs, seasonings, red pepper, paprika, groundsumac, or tomato sauce, while the typical wrapping usuallyincludes vine, cabbage, or sauerkraut leaves, or a variety ofleafy vegetables such as collard greens and swiss chard.",
    image: "./images/sarma.png",
    id: 1,
  },
  {
    name: "Tavce gravce",
    disc: "Tavče gravče is the national dish of North Macedonia consisting of beans stewed with onions, oil, dried pepper flakes, anseasonings such as salt, parsley, and black pepper.Although it is primarily a vegetarian dish, some recipes callfor the addition of smoked pork, bacon, sausages, or suhomeso.The dish is baked in an earthenware bowl and usually served init, keeping the beans warm.Tavče gravče is traditionally enjoyed on Fridays or during fasting (the original vegetarian recipe), but in restaurants, it is often served as a side dish to grilled meats.",
    image: "./images/gravce.png",
    id: 2,
  },
];

function initialProducts() {
  const mainDiv = document.getElementById("products");

  arrOfProducts.forEach((el) => {
    if (el.id % 2 != 0) {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("leftContentPage");
      parentDiv.setAttribute("id", el.id);
      const headerName = document.createElement("p");
      headerName.innerHTML = el.id + "." + el.name;
      parentDiv.appendChild(headerName);

      const childDiv = document.createElement("div");
      childDiv.classList.add("leftContent");
      const imageDiv = document.createElement("img");
      imageDiv.src = el.image;
      const discDiv = document.createElement("p");
      discDiv.innerHTML = el.disc;
      childDiv.appendChild(imageDiv);
      childDiv.appendChild(discDiv);
      parentDiv.appendChild(childDiv);
      mainDiv.appendChild(parentDiv);
    } else {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("rightContentPage");
      parentDiv.setAttribute("id", el.id);
      const headerName = document.createElement("p");
      headerName.innerHTML = el.id + "." + el.name;
      parentDiv.appendChild(headerName);

      const childDiv = document.createElement("div");
      childDiv.classList.add("rightContent");
      const imageDiv = document.createElement("img");
      imageDiv.src = el.image;
      const discDiv = document.createElement("p");
      discDiv.innerHTML = el.disc;
      childDiv.appendChild(imageDiv);
      childDiv.appendChild(discDiv);
      parentDiv.appendChild(childDiv);
      mainDiv.appendChild(parentDiv);
    }
  });
  let recipes = JSON.parse(localStorage.getItem("arr"));

  recipes.forEach((el) => {
    if (el.id % 2 != 0) {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("leftContentPage");
      parentDiv.setAttribute("id", el.id);
      const headerName = document.createElement("p");
      headerName.innerHTML = el.id + "." + el.name;
      const deletebtn = document.createElement("div");
      deletebtn.innerHTML = "Delete";
      deletebtn.setAttribute("class", "deleteBtn");
      deletebtn.setAttribute("id", el.id);
      const btnAndHeaderDiv = document.createElement("div");
      btnAndHeaderDiv.style.display = "flex";
      btnAndHeaderDiv.style.justifyContent = "space-between";
      btnAndHeaderDiv.style.alignItems = "center";
      btnAndHeaderDiv.appendChild(headerName);
      btnAndHeaderDiv.appendChild(deletebtn);
      parentDiv.appendChild(btnAndHeaderDiv);

      const childDiv = document.createElement("div");
      childDiv.classList.add("leftContent");
      const imageDiv = document.createElement("img");
      imageDiv.src = el.image;
      const discDiv = document.createElement("p");
      discDiv.innerHTML = el.disc;
      childDiv.appendChild(imageDiv);
      childDiv.appendChild(discDiv);
      parentDiv.appendChild(childDiv);
      mainDiv.appendChild(parentDiv);
    } else {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("rightContentPage");
      parentDiv.setAttribute("id", el.id);
      const headerName = document.createElement("p");
      headerName.innerHTML = el.id + "." + el.name;
      const deletebtn = document.createElement("button");
      deletebtn.innerHTML = "Delete";
      deletebtn.setAttribute("class", "deleteBtn");
      deletebtn.setAttribute("id", el.id);
      const btnAndHeaderDiv = document.createElement("div");
      btnAndHeaderDiv.style.display = "flex";
      btnAndHeaderDiv.style.justifyContent = "flex-end";
      btnAndHeaderDiv.style.alignItems = "center";

      btnAndHeaderDiv.appendChild(headerName);
      btnAndHeaderDiv.appendChild(deletebtn);
      parentDiv.appendChild(btnAndHeaderDiv);

      const childDiv = document.createElement("div");
      childDiv.classList.add("rightContent");
      const imageDiv = document.createElement("img");
      imageDiv.src = el.image;
      const discDiv = document.createElement("p");
      discDiv.innerHTML = el.disc;
      childDiv.appendChild(imageDiv);
      childDiv.appendChild(discDiv);
      parentDiv.appendChild(childDiv);
      mainDiv.appendChild(parentDiv);
    }
  });
}
if (document.getElementById("products")) initialProducts();
function newRecipe() {
  let proName = document.getElementById("1").value;
  let proDesc = document.getElementById("2").value;
  let proImg = document.getElementById("3").value;
  let newRecipe = { name: proName, disc: proDesc, image: proImg };

  return newRecipe;
}
function finishedRecipe() {
  let existingRecipes = JSON.parse(localStorage.getItem("arr")) || [];
  existingRecipes.push(newRecipe());
  existingRecipes.forEach((el, index) => {
    el.id = index + 3;
  });

  localStorage.setItem("arr", JSON.stringify(existingRecipes));

  window.open("./", "_self");
}
let button = document.getElementsByClassName("deleteBtn");

Array.from(button).forEach((button) => {
  button.addEventListener("click", removeRecipe);
});
function removeRecipe(e) {
  const id = e.target.id;
  let allRec = JSON.parse(localStorage.getItem("arr"));
  allRec = allRec.filter((el) => el.id.toString() !== id);
  localStorage.setItem("arr", JSON.stringify(allRec));
  location.reload();
}
