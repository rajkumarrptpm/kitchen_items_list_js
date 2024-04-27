let kitchenInput=document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
// create an empty array
let data=[];

// step 2 :- Add kitchen Items
function addKitchenItems(){
    let itemData = kitchenInput.value;
    data.push(itemData);
    // create dom elements
    let li = document.createElement("li");
    li.innerText = itemData;
    li.style.cssText = "animation-name:slideIn;"
    kitchenItemsList.appendChild(li);
    kitchenInput.value="";
    kitchenInput.focus();
    console.log(li);
    console.log(data)
}


// step 1 :- Add an event listner to the button
addBtn.addEventListener('click',addKitchenItems);