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
    let spanEl = document.createElement("span");
    spanEl.classList.add("kitchenItem")
    li.appendChild(spanEl);
    
    spanEl.innerText=itemData
    // li.innerText = itemData;
    li.style.cssText = "animation-name:slideIn;"
    kitchenItemsList.appendChild(li);
    kitchenInput.value="";
    kitchenInput.focus();


    // create update button
    let editBtn = document.createElement('i');
    editBtn.classList.add('fas','fa-edit');
    li.appendChild(editBtn)
    

    // create delete button
    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);



    

}

// Delete item from the list
function deleteKitchenItem(event){
    if (event.target.classList[1] === 'fa-trash'){
        let item = event.target.parentElement;
        item.classList.add('slideOut');
        item.addEventListener('transitionend',function(){
            // console.log("animation has been completed");
            item.remove();
        });
        // item.remove();
    }
}


// function for edit kitchen item
function editKitchenItem(event){
    if (event.target.classList[1] === 'fa-edit'){
        let editedValue = prompt("update the item ");
        console.log(event);
        let item = event.target.parentElement;
        // event.target.parentElement.firstChild.textContent=editedValue ;
        let spanItem = item.querySelector("span");
        spanItem.innerText = editedValue;
        
    }
}



// step 1 :- Add an event listner to the button
addBtn.addEventListener('click',addKitchenItems);
kitchenItemsList.addEventListener('click',deleteKitchenItem)
kitchenItemsList.addEventListener('click',editKitchenItem)
          