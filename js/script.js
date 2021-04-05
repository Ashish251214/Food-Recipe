let enterDish = document.querySelector("#enterDish");
let imgLink = document.querySelector("#imgLink");
let ingredients = document.querySelector("#ingredients");
let quantity = document.querySelector("#quantity");
let units = document.querySelector("#units");
let selectedItem = document.querySelector("#selectedItem");
let showIngredients = document.querySelector("#showIngredients");
let err = document.getElementsByClassName("err");
let ingreErr = document.getElementsByClassName("ingreErr");
let addDishData = document.querySelector("#addDishData");
let addIngredientsData = document.querySelector("#addIngredientsData");
let ingreArray = [];
// Add Ingredients Data
addIngredientsData.addEventListener("click",() => {
    event.preventDefault();
    if(ingredients.value == "" || ingredients.value == null){
        ingreErr[0].innerHTML = "Please Enter Ingredients";
    }else if(quantity.value == "" || quantity.value == null){
        ingreErr[0].innerHTML = "";
        ingreErr[1].innerHTML = "Please Enter The Quantity of Ingredients";
    }else if(units.value == "" || units.value == null){
        ingreErr[1].innerHTML = "";
        ingreErr[2].innerHTML = "Please Select any Units";
    }else{
        ingreErr[2].innerHTML = "";
        let getAddIngreObject = addIngre(ingredients.value,quantity.value,units.value);
        ingreArray.push(getAddIngreObject);
    }
});
// store data in localstorage of Enter Dish
addDishData.addEventListener('click', () => {   
    event.preventDefault();
    if(addIngre.length >= 1){
        if(enterDish.value == "" || enterDish.value == null){
            err[0].innerHTML = "Please Enter any Dish!";
        }else if(imgLink.value == "" || imgLink.value == null){
            err[0].innerHTML = "";
            err[1].innerHTML = "Please Enter the image link!";
        }else{
            err[1].innerHTML = "";
            let temp = createObject(enterDish.value,imgLink.value);
            // console.log(localStorage.setItem(`${enterDish.value}`,JSON.stringify(temp)));
        }
    }
});
// addIngredients
function addIngre(ingreName,qty,unit){
    return {
        ingreName,
        qty,
        unit,
    }
}