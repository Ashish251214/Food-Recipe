function gettingData() {
    for (let i = 0; i < 100; i++) {
        localStorage.setItem(i,`${i}Ashish`);
        // const key = localStorage.key(i); localStorage.length
        // console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

gettingData();


// create function
// function createObject(dishName,imgLink) {
//     return {
//         dishName,
//         imgLink,
//     }
// }
// function setIngredients(){

// }
// addIngredients in same dish object
    // function gettingData() {
    //     for (let i = 0; i < localStorage.length; i++) {
    //         const key = localStorage.key(i);
    //         if(key == "22"){
    //             console.log(`${key}: ${localStorage.getItem(key)}`);
    //         }
    //     }
    // }

    // gettingData();


    let dltBtn = document.getElementsByClassName("dltBtn");
    for(let g = 0;g<dltBtn.length;g++){
        dltBtn[g].addEventListener('click', function(){
            event.preventDefault();
            // this.parentNode.parentNode.remove();
            console.log("from dlete function ",cloneArray[g]);
            // cloneArray.splice(g,1);
            // showTime();
            for(let i in cloneArray[g]){
                if(isObject(cloneArray[g][i])){
                    let temp = cloneArray[g][i];
                    for(let e in temp){
                        console.log("temp val",e,temp[e])
                    }
                }
            }
        });
    }







    for(let e=0;e<cloneArray.length;e++){
        for(let key in cloneArray[e]){
            if(key == "Ingredients"){
                for(let data in cloneArray[e][key]){
                    abc = cloneArray[e][key][data];
                    createTd = "<tr>";
                    let counter = 0;
                    for(let k in abc){
                        if(counter == 0){
                            createTd += `<th scope="row">${abc[k]}</th>`;
                            counter++;
                        }else{
                            createTd += `<td>${abc[k]}</td>`;
                        }
                    }
                    createTd += `<td>
                                    <button class='btn btn-success'>Edit</button>
                                </td>`;
                    createTd += `<td>
                                    <button class='btn btn-danger' onclick="dltData(${e})">X</button>
                                </td>`;
                    createTd += "</tr>";
                    showDataIngredients.innerHTML += createTd;
                }
            }
        }
    }





    addDishGet = localStorage.getItem("addDish");
    let parseAddDishGet = JSON.parse(addDishGet);
    for(let m=0;m<parseAddDishGet.length;m++){
        cloneArray.push(parseAddDishGet[m]);
    }
    let lastIndex = cloneArray.length-1;
    let lastIndexIngre = cloneArray[lastIndex].Ingredients;










    for(let i = 0;i<cloneArray.length;i++){
        if(v==i){
            console.log(v);
            let temp = cloneArray[v].Ingredients;
            for(let j = 0;j<temp.length;j++){
                console.log("This is in temp j loop",temp[j].ingreName);
            }
        }
    }












    addDishGet = localStorage.getItem("addDish");
    let parseAddDishGet = JSON.parse(addDishGet);
    for(let m=0;m<parseAddDishGet.length;m++){
        cloneArray.push(parseAddDishGet[m]);
    }






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