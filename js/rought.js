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