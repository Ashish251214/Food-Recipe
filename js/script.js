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
let firstForm = document.querySelector(".firstForm");
let secondForm = document.querySelector(".secondForm");
let goBack = document.querySelector(".goBack");
let showAllData = document.querySelector("#showAllData");
let searchItemsHere = document.querySelector("#searchItemsHere");
let updateIngre = document.querySelector("#updateIngre");
// Add Ingredients Data
function getIngre(){
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
}
// show time function
let showTime = () => {
    showDataIngredients.innerHTML = "";
    let row = "";
    for(let i = 0;i<ingreArray.length;i++){
        row+=`<tr><td>${i+1}</td>
            <td>${ingreArray[i].ingreName}</td>
            <td>${ingreArray[i].qty}${ingreArray[i].unit}</td>
            <td><input type="button" class='btn btn-warning' value="Edit" onclick="editData(${i})"/></td>
            <td><input type="button" class='btn btn-danger' value="Delete" onclick="dltData(${i})"/></td></tr>`;
    }
    showDataIngredients.innerHTML += row;
}
// dltData
// delete work station work
let dltData = (v) => {
    event.preventDefault();
    ingreArray.splice(v,1);
    showTime();
}
// editdata
let makeData;
let indexValue;
let editData = (v) => {
    // setting the values into filed from array
    ingredients.value = ingreArray[v].ingreName;
    quantity.value = ingreArray[v].qty;
    units.value = ingreArray[v].unit;
    addIngredientsData.style.display = "none";
    updateIngre.style.display = "block";
    indexValue = v;
}
updateIngre.addEventListener('click',() => {
    event.preventDefault();
    console.log(indexValue);
    makeData = addIngre(ingredients.value,quantity.value,units.value);
    console.log(makeData , "We got this and val is: ",indexValue);
    ingreArray.splice(indexValue,1,makeData);
    addIngredientsData.style.display = "block";
    updateIngre.style.display = "none";
    ingredients.value = quantity.value = units.value = "";
    showTime();
});
// store data in localstorage of Enter Dish
function finalSubmit() {   
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
}
function addIngre(ingreName,qty,unit){
    return {ingreName,qty,unit,}
}
function getFinalData(dishName,imgLink,Ingredients) {
    return {dishName,imgLink,Ingredients,}
}
// getalldata
getAllDishes.addEventListener('click',() => {
    showAllData.innerHTML = ""; 
    firstForm.style.display = "none";
    secondForm.style.display = "block";
    getAllDataLocalStorage();
});
let getAllDataLocalStorage = () => {
    showAllData.innerHTML = ""; 
    let parseGetDataLocal = JSON.parse(localStorage.getItem('addDish'));
    if(parseGetDataLocal != null){
        for(let m=0;m<parseGetDataLocal.length;m++){
            cloneArray.push(parseGetDataLocal[m]);
        }
        // putting data into their field
        let row,ingreTemp;
        for(let i=0;i<cloneArray.length;i++){
            let tempData = cloneArray[i];
            row = "<tr>";
            row += `  
                <td>${i+1}</td>  
                <td>${tempData.dishName}</td>        
                <td>${tempData.imgLink}</td>
            `;
            ingreTemp = tempData.Ingredients;
            row += "<td><ol>";
            for(let j=0;j<ingreTemp.length;j++){
                row += `<li>${ingreTemp[j].ingreName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ingreTemp[j].qty}${ingreTemp[j].unit}</li>`;  
            }
            row += `</ol></td>  
                <td><button class="btn btn-success" onclick='editBtn(${i})'>Edit</button></td>        
                <td><button class="btn btn-danger" onclick='dltBtn(${i})'>Delete</button></td>
            `;
            row += "</tr>";
            showAllData.innerHTML += row;
        }
        cloneArray.splice(0,cloneArray.length);
    }
}
// goBack
goBack.addEventListener('click',() => {
    showAllData.innerHTML = ""; 
    firstForm.style.display = "block";
    secondForm.style.display = "none";
});
// dltBtn delete work station
let dltBtn = (v) => {
    alert(v+1);
}
// edit complete Work station
let editBtn = (v) => {
    alert(v+1);
}
// clearAllData from localStorage
let clearAllData = () => {
    let localData = JSON.parse(localStorage.getItem('addDish'));
    let isTrue = confirm("Do you want to clear all data");
    if(localData.length >= 1){
        if(isTrue){
            localStorage.clear();
            getAllDataLocalStorage();
        }
    }
}
// search button