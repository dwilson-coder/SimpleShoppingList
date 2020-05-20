// Assigning variables
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

// Creating functions
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

function addToListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addToListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// Adding items
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";


}

// Toggle items when done
ul.onclick = function(event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


// Removing enterItems
for (var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent, false);
}


// Event listeners
button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);
