function redirect() {
  window.open("./recipe.html", "_self");
}
arrOfProducts = [
  {
    name: "Сарма",
    disc: "Еден од основните елементи на традиционалната турска кујна, сармата се состои од фил кој е цврсто опкружен со лисја или лиснат зеленчук. Постојат бројни верзии на ова јадење, но смесата обично комбинира состојки како мелено месо, ориз или булгур, разни билки, зачини, црвен пипер. , пиперка, мелензумак или сос од домати, додека типичната обвивка обично вклучува лисја од винова лоза, зелка или кисела зелка, или разновиден лиснат зеленчук, како што се зелените и блитвата.",
    image: "./images/sarma.png",
    id: 1,
  },
  {
    name: "Тавче гравче",
    disc: "Тавче гравче е националното јадење на Северна Македонија кое се состои од грав динстан со кромид, масло, снегулки суви пиперки, зачини како сол, магдонос и црн пипер. сланина, колбаси или сухомесо. Јадењето се пече во земјена чинија и обично се служи во него, одржувајќи го гравот топол. Тавче гравче традиционално се ужива во петок или за време на постот (оригиналниот вегетаријански рецепт), но во рестораните често се служи како прилог за месо на скара.",
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
