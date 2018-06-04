class TodoList {

	constructor() {
		this.$field = document.querySelector('input[name="new-item"]')
		this.todoItems = []
		this.$field.addEventListener(`keypress`, (e) => {
			if (e.keyCode === 13){
				this.addNewItem()
			}
		  });
	}

	addNewItem(){
		this.newItem = this.$field.value
		this.todoItems.push(this.newItem)
		console.log(this.todoItems)
		this.$field.value = ""
		this.updateView()
	}

	updateView(){

		this.todoItems.forEach($todoItem => {
			this.done = false
			
			this.$todoLI = document.createElement("li");
			this.$todoUL = document.querySelector("ul");
	
			this.$doneButton = document.createElement("button")
			this.$doneButton.textContent = "Done"
			this.$doneButton.classList.add("done")
			this.$todoLI.textContent = this.newItem
			this.$todoLI.appendChild(this.$doneButton)
		})

		this.$todoUL.appendChild(this.$todoLI)
		
		this.$totalItems = document.querySelector(".total")
		this.$totalItems.textContent = this.todoItems.length
	}
}

let $todoUL = document.querySelector(`.todo ul`)


class TodoItem {
	constructor(text) {
		// this.$text = text
		// this.done = false
		
		// this.$todoLI = document.createElement("li");
		// this.$todoUL = document.querySelector("ul");

		// this.$doneButton = document.createElement("button")
		// this.$doneButton.textContent = "Done"
		// this.$doneButton.classList.add("done")
		// this.$todoLI.textContent = this.$text
		// this.$todoLI.appendChild(this.$doneButton)
		// this.$todoUL.appendChild(this.$todoLI)

		// this.$doneButton.addEventListener(`click`, this.toggleChangeStatus.bind(this))
		
	}

	toggleChangeStatus(){
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