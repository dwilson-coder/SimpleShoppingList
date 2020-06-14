// Assigning variables
const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul")
const deleteBtns = document.getElementsByClassName("delete");
const items = ul.getElementsByTagName("li");

// Creating functions
removeParent=(evt)=> {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

getEventTarget=(e)=> {
	e = e || window.event;
	return e.target || e.srcElement;
}

addToListAfterClick=()=> {
	if (inputLength() > 0) {
		createListElement();
	}
}

 addToListAfterKeypress=(event)=> {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// Adding items
 inputLength=() =>{
	return input.value.length;
}

 createListElement=()=> {
	const btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";


}

// Toggle items when done
ul.onclick = (event)=> {
	const target = getEventTarget(event);
	target.classList.toggle("done");
}


// Removing enterItems
for (let i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent, false);
}


// Event listeners
button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);
