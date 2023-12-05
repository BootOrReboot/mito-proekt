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
function initalProducts() {
  const mainDiv = document.getElementById("products");

  arrOfProducts.forEach((el) => {
    if (el.id % 2 != 0) {
      console.log(el.id);
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("leftContentPage");
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
      console.log(el.id);
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("rightContentPage");
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
}
initalProducts();
function newRecipe() {
  let proName = document.getElementById("1").value;
  let proDesc = document.getElementById("2").value;
  let proImg = document.getElementById("3").value;
  return { name: proName, disc: proDesc, image: proImg };
}
function finishedRecipe() {
  arrOfProducts.push(newRecipe());
  initalProducts();
}
function test() {
  console.log(JSON.parse(localStorage.getItem("recipes")));
}
