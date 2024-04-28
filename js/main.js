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
    

    // create trash button
    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);

}

// Delete item from the list
function deleteKitchenItem(event){
    if (event.target.classList[1] === 'fa-trash'){
        let item = event.target.parentElement;
        item.remove();
    }
}



// step 1 :- Add an event listner to the button
addBtn.addEventListener('click',addKitchenItems);
kitchenItemsList.addEventListener('click',deleteKitchenItem)
