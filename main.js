var removeBtn = '<i class="icon-trash-2"></i>';
var completeBtn = '<i class="icon-ok-squared"></i>';

//user clicked on the add button
//if there is any text inside the item field, add that text to the todo list
var addBtn = document.getElementById('addItem');
addBtn.addEventListener('click', function(){
var x = document.getElementById('item').value;
if(x) {
	addItemTodo(x);
	document.getElementById('item').value = '';
}
});	

function removeItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
}

function completeItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;

	var target = (id ==='todo') ? document.getElementById('completed') : document.getElementById('todo');;

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

//add a new item to the todo list
function addItemTodo(text){

var list = document.getElementById('todo');

var item = document.createElement('li');
item.innerText = text;

var buttons = document.createElement('div');
buttons.classList.add('buttons');

var remove =document.createElement('button');
remove.classList.add('remove');
remove.innerHTML = removeBtn;

//add click event for removing item
remove.addEventListener('click', removeItem);

var complete =document.createElement('button');
complete.classList.add('complete');
complete.innerHTML = completeBtn;

//add click event for completing items
complete.addEventListener('click', completeItem);

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

list.insertBefore(item, list.childNodes[0]);
}



					
			


