let getAddIngreObject,
    creatTd,
    storeTemp,
    addDishGet,
    enterDish = document.querySelector("#enterDish"),
    imgLink = document.querySelector("#imgLink"),
    ingredients = document.querySelector("#ingredients"),
    quantity = document.querySelector("#quantity"),
    units = document.querySelector("#units"),
    selectedItem = document.querySelector("#selectedItem"),
    showIngredients = document.querySelector("#showIngredients"),
    err = document.getElementsByClassName("err"),
    ingreErr = document.getElementsByClassName("ingreErr"),
    addDishData = document.querySelector("#addDishData"),
    addIngredientsData = document.querySelector("#addIngredientsData"),
    finalArray = [],
    ingreArray = [],
    cloneArray = [],
    showDataIngredients = document.querySelector("#showDataIngredients");
function addIngre(e, n, t) {
    return { ingreName: e, qty: n, unit: t };
}
function getFinalData(e, n, t) {
    return { dishName: e, imgLink: n, Ingredients: t };
}
addIngredientsData.addEventListener("click", () => {
    event.preventDefault(),
        "" == ingredients.value || null == ingredients.value
            ? (ingreErr[0].innerHTML = "Please Enter Ingredients")
            : "" == quantity.value || null == quantity.value
            ? ((ingreErr[0].innerHTML = ""), (ingreErr[1].innerHTML = "Please Enter The Quantity of Ingredients"))
            : "" == units.value || null == units.value
            ? ((ingreErr[1].innerHTML = ""), (ingreErr[2].innerHTML = "Please Select any Units"))
            : ((ingreErr[2].innerHTML = ""),
              (getAddIngreObject = addIngre(ingredients.value, quantity.value, units.value)),
              ingreArray.push(getAddIngreObject),
              console.log(ingreArray),
              alert("Ingredients Added"),
              (ingredients.value = quantity.value = units.value = ""));
}),
    addDishData.addEventListener("click", () => {
        if ((event.preventDefault(), ingreArray.length >= 1))
            if ("" == enterDish.value || null == enterDish.value) err[0].innerHTML = "Please Enter any Dish!";
            else if ("" == imgLink.value || null == imgLink.value) (err[0].innerHTML = ""), (err[1].innerHTML = "Please Enter the image link!");
            else {
                if (((err[1].innerHTML = ""), (storeTemp = getFinalData(enterDish.value, imgLink.value, ingreArray)), (addDishGet = localStorage.getItem("addDish")), console.log(addDishGet), addDishGet)) {
                    let e = JSON.parse(addDishGet);
                    for (let n = 0; n < e.length; n++) finalArray.push(e[n]);
                    finalArray.push(storeTemp), localStorage.setItem("addDish", JSON.stringify(finalArray)), finalArray.splice(0, finalArray.length);
                } else localStorage.setItem("addDish", JSON.stringify(storeTemp)), console.log("We dont have found any entry of addDish that's why we created");
                ingreArray.splice(0, ingreArray.length), (showDataIngredients.innerHTML = ""), (addDishGet = localStorage.getItem("addDish"));
                let e = JSON.parse(addDishGet);
                for (let n = 0; n < e.length; n++) cloneArray.push(e[n]);
                for (let e = 0; e < cloneArray.length; e++)
                    for (let n in cloneArray[e])
                        if ("Ingredients" == n)
                            for (let t in cloneArray[e][n]) {
                                (abc = cloneArray[e][n][t]), (createTd = "<tr>");
                                let r = 0;
                                for (let e in abc) 0 == r ? ((createTd += `<th scope="row">${abc[e]}</th>`), r++) : (createTd += `<td>${abc[e]}</td>`);
                                (createTd += "<td>\n                                            <button class='btn btn-success'>Edit</button>\n                                        </td>"),
                                    (createTd += "<td>\n                                            <button class='btn btn-danger'>X</button>\n                                        </td>"),
                                    (createTd += "</tr>"),
                                    (showDataIngredients.innerHTML += createTd);
                            }
            }
    });
