class TodoList {
	constructor() {
		
	}
}



class TodoItem {
	constructor(text) {
		this.$text = text;
		
		this.$todoLI = document.createElement("li");
		this.$todoUL = document.querySelector("ul");
		this.$todoLI.innerHTML = this.$text
		this.$todoUL.appendChild(this.$todoLI)
	

		
	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);