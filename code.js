
(()=>{

    const addBtn=document.getElementById("add-button");
    const input=document.getElementById("new-item");
    const list=document.getElementById("item-list");
    
    // adding event listener to the add button
    addBtn.addEventListener("click",()=>{


        // create li tag & add input value
        const item=document.createElement("li")
        item.innerHTML=input.value

        // clear the input
        input.value=''

        // create a delete button for all
        const deleteBtn=document.createElement("button")
        deleteBtn.innerText="Delete"

        item.appendChild(deleteBtn)

        list.appendChild(item)

        // add event listner to the delete button
        deleteBtn.addEventListener("click",()=>{
            list.removeChild(item)

        })
        
    });

})()






