let kitchenInput=document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
// create an empty array
let data=[];
let itemData;

function buildUI(){

    kitchenItemsList.textContent="";
    data.forEach((item)=>{
        console.log(item);
        let li = document.createElement("li");
        let spanEl = document.createElement("span");
        spanEl.classList.add("kitchenItem");
        li.appendChild(spanEl);
        
        spanEl.innerText=item
        // li.innerText = itemData;
        li.style.cssText = "animation-name:slideIn;";
        kitchenItemsList.appendChild(li);
        kitchenInput.value="";
        kitchenInput.focus();


        // create update button
        let editBtn = document.createElement('i');
        editBtn.classList.add('fas','fa-edit');
        li.appendChild(editBtn);
        

        // create delete button
        let trashBtn = document.createElement('i');
        trashBtn.classList.add('fas','fa-trash');
        li.appendChild(trashBtn);
    })

    



    
}


function setLocalStorage(){
    localStorage.setItem("item",JSON.stringify(data));
}

function getLocalStorage(){
   
    if (localStorage.getItem("item")){
        data = JSON.parse(localStorage.getItem("item"));
        buildUI();
    }
    
}

function updateLocalStorage(){
    localStorage.setItem("item",JSON.stringify(data));
}



// step 2 :- Add kitchen Items
function addKitchenItems(){
    itemData = kitchenInput.value;
    
    data.push(itemData);
    // set to localstorage
    setLocalStorage()
    

    // get from localstorage
    getLocalStorage()




    // create dom elements
    

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
        if (editedValue !== null){
            let item = event.target.parentElement;
            let itemIndex = data.indexOf(item.querySelector("span").innerText)
            if (itemIndex !== -1){
                data[itemIndex] = editedValue;
                updateLocalStorage();
                item.querySelector('span').innerText = editedValue
            }
        }
       
        // event.target.parentElement.firstChild.textContent=editedValue ;
        let spanItem = item.querySelector("span");
        spanItem.innerText = editedValue;
        
    }
}



// step 1 :- Add an event listner to the button
addBtn.addEventListener('click',addKitchenItems);
kitchenItemsList.addEventListener('click',deleteKitchenItem);
kitchenItemsList.addEventListener('click',editKitchenItem);
getLocalStorage();


// local storage


// set data to local storage
// localStorage.setItem("name","Rajkumar");   


// get data from local storage

// let s = localStorage.getItem("name");