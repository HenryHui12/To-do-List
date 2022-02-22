const subbtn = document.getElementById("submit");
const table = document.getElementById("list");
const deleteBtn = document.getElementsByClassName("delete");

let listArray = [];

subbtn.addEventListener("click",(event) => {
    event.preventDefault();
    console.log(item.value);
    let itemValue = item.value;
    item.value = '';

    let list = document.createElement("li");
    list.classList.add("item");
    let listElement = document.createTextNode(itemValue);
    list.appendChild(listElement);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("close");
    deleteBtn.innerHTML = '&times;';
    list.appendChild(deleteBtn);

    table.appendChild(list);
    
    deleteBtn.addEventListener("click", function() {
        deleteBtn.parentElement.style.display = 'none';
    });
});




// item.addEventListener("keyup",(e) => {
//     if (e.keyCode === 13){   
//         let itemValue = item.value;
//         item.value = '';
//         console.log(item);
//         let orderList = document.createElement("ul");
//         let list = document.createElement("li");
//         let listElement = document.createTextNode(itemValue);
//         list.appendChild(listElement);
//         orderList.appendChild(list);
//         table.appendChild(orderList);
//     }

// })


