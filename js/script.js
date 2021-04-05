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
let finalArray = [],ingreArray = [],getAddIngreObject;
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
        getAddIngreObject = addIngre(ingredients.value,quantity.value,units.value);
        ingreArray.push(getAddIngreObject);
        console.log(ingreArray);
        alert("Ingredients Added");
        ingredients.value = quantity.value = units.value = "";
    }
});
// store data in localstorage of Enter Dish
addDishData.addEventListener('click', () => {   
    event.preventDefault();
    if(ingreArray.length >= 1){
        if(enterDish.value == "" || enterDish.value == null){
            err[0].innerHTML = "Please Enter any Dish!";
        }else if(imgLink.value == "" || imgLink.value == null){
            err[0].innerHTML = "";
            err[1].innerHTML = "Please Enter the image link!";
        }else{
            err[1].innerHTML = "";
            let storeTemp = getFinalData(enterDish.value,imgLink.value,ingreArray);
            let addDishGet = localStorage.getItem("addDish");
            console.log(addDishGet);
            if(addDishGet){
                let parseData = JSON.parse(addDishGet);
                for(let j=0;j<parseData.length;j++){
                    finalArray.push(parseData[j]);
                }
                finalArray.push(storeTemp);
                localStorage.setItem('addDish',JSON.stringify(finalArray));
                finalArray.splice(0,finalArray.length);
            }else{
                localStorage.setItem('addDish',JSON.stringify(storeTemp));
                console.log("We dont have found any entry of addDish that's why we created");
            }
            ingreArray.splice(0,ingreArray.length);
        }
    }
});
function addIngre(ingreName,qty,unit){
    return {ingreName,qty,unit,}
}
function getFinalData(dishName,imgLink,Ingredients) {
    return {dishName,imgLink,Ingredients,}
}