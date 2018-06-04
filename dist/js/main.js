"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function () {
	function TodoList() {
		var _this = this;

		_classCallCheck(this, TodoList);

		this.$field = document.querySelector('input[name="new-item"]');
		this.todoItems = [];
		this.$field.addEventListener("keypress", function (e) {
			if (e.keyCode === 13) {
				_this.addNewItem();
			}
		});
	}

	_createClass(TodoList, [{
		key: "addNewItem",
		value: function addNewItem() {
			this.newItem = this.$field.value;
			this.todoItems.push(this.newItem);
			console.log(this.todoItems);
			this.$field.value = "";
			this.updateView();
		}
	}, {
		key: "updateView",
		value: function updateView() {
			var _this2 = this;

			this.todoItems.forEach(function ($todoItem) {
				_this2.done = false;

				_this2.$todoLI = document.createElement("li");
				_this2.$todoUL = document.querySelector("ul");

				_this2.$doneButton = document.createElement("button");
				_this2.$doneButton.textContent = "Done";
				_this2.$doneButton.classList.add("done");
				_this2.$todoLI.textContent = _this2.newItem;
				_this2.$todoLI.appendChild(_this2.$doneButton);
			});

			this.$todoUL.appendChild(this.$todoLI);

			this.$totalItems = document.querySelector(".total");
			this.$totalItems.textContent = this.todoItems.length;
		}
	}]);

	return TodoList;
}();

var $todoUL = document.querySelector(".todo ul");

var TodoItem = function () {
	function TodoItem(text) {
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

		_classCallCheck(this, TodoItem);
	}

	_createClass(TodoItem, [{
		key: "toggleChangeStatus",
		value: function toggleChangeStatus() {
			this.done = !this.done;
			this.updateView();
		}
	}, {
		key: "updateView",
		value: function updateView() {
			if (this.done === true) {
				this.$todoLI.classList.add("done");
			} else {
				this.$todoLI.classList.remove("done");
			}
		}
	}]);

	return TodoItem;
}();

var todoList = new TodoList();
var todoItem1 = new TodoItem("Milk");
var todoItem2 = new TodoItem("Eggs");
var todoItem3 = new TodoItem("Diapers");
//# sourceMappingURL=main.js.map
