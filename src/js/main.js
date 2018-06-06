class TodoList {

	constructor() {
		this.$field = document.querySelector('input[name="new-item"]')
		this.todoItems = []
		this.$field.addEventListener(`keypress`, (e) => {
			if (e.keyCode === 13){
				this.addNewItem()
			}
		});

		window.addEventListener(`toggleChangeStatus`, this.updateView.bind(this));
	}

	addNewItem(){
		this.todoItems.push(new TodoItem(this.$field.value))
		
		this.$field.value = ""
		this.updateView()
	}

	updateView(){
		this.todoItems.forEach((item) => {
			$todoUL.appendChild(item.$todoLI)
		})
		
		this.$totalItemsCounter = document.querySelector("span.total")
		this.$doneItemsCounter = document.querySelector("span.done")
		
		this.$totalItemsCounter.textContent = this.todoItems.length;
		
		this.$doneItems = document.querySelectorAll("li.done");
		console.log(this.$doneItems);
		this.$doneItemsCounter.textContent = this.$doneItems.length
	}
	
}

let $todoUL = document.querySelector(`.todo ul`)


class TodoItem {
	constructor(text) {
		this.$text = text
		this.done = false
		
		this.$todoLI = document.createElement("li");

		this.$doneButton = document.createElement("button")
		this.$doneButton.textContent = "Done"
		this.$doneButton.classList.add("done")
		this.$todoLI.textContent = this.$text
		this.$todoLI.appendChild(this.$doneButton)
		
		console.log(this.$doneButton)
		this.$doneButton.addEventListener(`click`, this.toggleChangeStatus.bind(this));

		// let event = new Event(`toggleChangeStatus`, {bubbles: true});
		this.$doneButton.dispatchEvent(new CustomEvent(`click`, { bubbles: true,}))
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
// let todoItem1 = new TodoItem(`Milk`);
// let todoItem2 = new TodoItem(`Eggs`);
// let todoItem3 = new TodoItem(`Diapers`);