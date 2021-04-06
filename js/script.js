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
let finalArray = [],ingreArray = [],cloneArray = [],getAddIngreObject,creatTd,storeTemp,addDishGet;
let showDataIngredients = document.querySelector("#showDataIngredients");
let getAllDishes = document.querySelector("#getAllDishes");
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
        ingredients.value = quantity.value = units.value = "";
        // It's Show time
        showTime();
    }
});
// show time function
let showTime = () => {
    showDataIngredients.innerHTML = "";
    let row = "";
    for(let i = 0;i<ingreArray.length;i++){
        row+=`<tr><td>${i+1}</td>
            <td>${ingreArray[i].ingreName}</td>
            <td>${ingreArray[i].qty}${ingreArray[i].unit}</td>
            <td><input type="button" class='btn btn-warning' value="Edit"/></td>
            <td><input type="button" class='btn btn-danger' value="Delete" onclick="dltData(${i})"/></td></tr>`;
    }
    showDataIngredients.innerHTML += row;
}
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
            storeTemp = getFinalData(enterDish.value,imgLink.value,ingreArray);
            addDishGet = localStorage.getItem("addDish");
            if(addDishGet){
                let parseData = JSON.parse(addDishGet);
                for(let j=0;j<parseData.length;j++){
                    finalArray.push(parseData[j]);
                }
                finalArray.push(storeTemp);
                localStorage.setItem('addDish',JSON.stringify(finalArray));
                finalArray.splice(0,finalArray.length);
                alert("Data Stored");
            }else{
                localStorage.setItem('addDish',JSON.stringify(storeTemp));
                alert("Data Stored");
                console.log("We dont have found any entry of addDish that's why we created");
            }
            ingreArray.splice(0,ingreArray.length);
            enterDish.value = imgLink.value = "";
            showDataIngredients.innerHTML = "";
        }
    }
});
function addIngre(ingreName,qty,unit){
    return {ingreName,qty,unit,}
}
function getFinalData(dishName,imgLink,Ingredients) {
    return {dishName,imgLink,Ingredients,}
}
// delete work station work
let dltData = (v) => {
    event.preventDefault();
}
// getalldata
getAllDishes.addEventListener('click', () => {
    addDishGet = localStorage.getItem("addDish");
    let parseAddDishGet = JSON.parse(addDishGet);
    for(let m=0;m<parseAddDishGet.length;m++){
        cloneArray.push(parseAddDishGet[m]);
    }
    let lastIndex = cloneArray.length-1;
    let lastIndexIngre = cloneArray[lastIndex].Ingredients;
});