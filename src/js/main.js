class TodoList {
	constructor() {
		
	}
}

let $todoUL = document.querySelector(`.todo ul`)


class TodoItem {
	constructor(text) {
		this.$text = text
		this.done = false
		
		this.$todoLI = document.createElement("li");
		this.$todoUL = document.querySelector("ul");

		this.$doneButton = document.createElement("button")
		this.$doneButton.textContent = "Done"
		this.$doneButton.classList.add("done")
		this.$todoLI.textContent = this.$text
		this.$todoLI.appendChild(this.$doneButton)
		this.$todoUL.appendChild(this.$todoLI)

		this.$doneButton.addEventListener(`click`, this.changeStatus.bind(this))
		
	}

	changeStatus(){
		this.done = !this.done;
		this.updateView();
	}

	updateView(){
		if (this.done === true){
			this.$todoLI.classList.add("done")
		} else {
			this.$todoLI.classList.remove("done")
		}
	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);