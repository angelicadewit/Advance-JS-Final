class TodoList {
	constructor() {
		
	}
}



class TodoItem {
	constructor(text) {
		this.$text = text;
		
		this.$todoUL = document.createElement("ul");
		this.$todoLI = document.createElement("li");
		this.$todoLI.innerHTML = this.$text
		this.$todoUL.appendChild(this.$todoLI)
	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);