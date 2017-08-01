//function to add items to the list 

 function addLi() {

//search for text input

var text = document.getElementById('text_input').value;

//check if texbox is empty

  if(text!=''){

//create new list item
   var newItem = document.createElement("li");

   
//assign value entered to list  
   newItem.innerHTML = text;

  var list = document.getElementById("item-area").appendChild(newItem);
  
  //clicking on a list item deletes it
  newItem.onclick = removeItem;
  
  
}

  }


//function to remove items from the list

function removeItem(){
	document.getElementById("item-area").removeChild(this);
  
}
