class TodoList {
	constructor() {
		
	}
}



class TodoItem {
	constructor(text) {
		this.$text = text
		this.done = false
		
		this.$todoLI = document.createElement("li");
		this.$todoUL = document.querySelector("ul");

		this.$doneButton = document.createElement("button")
		this.$doneButton.textContent = "Done"
		this.$doneButton.classList.add("done")
		this.$todoLI.innerHTML = this.$text
		this.$todoLI.appendChild(this.$doneButton)
		this.$todoUL.appendChild(this.$todoLI)
		
	}

	updateView(){

	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);