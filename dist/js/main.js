"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function () {
	function TodoList() {
		var _this = this;

		_classCallCheck(this, TodoList);

		this.todoItem = [];
		this.$field = document.querySelector('input[name="new-item"]');

		this.$field.addEventListener("keypress", function (e) {
			if (e.keyCode === 13) {
				_this.addNewItem();
			}
		});
	}

	_createClass(TodoList, [{
		key: "addNewItem",
		value: function addNewItem() {
			this.$field.value = "";
			console.log("hello");
		}
	}]);

	return TodoList;
}();

var $todoUL = document.querySelector(".todo ul");

var TodoItem = function () {
	function TodoItem(text) {
		_classCallCheck(this, TodoItem);

		this.$text = text;
		this.done = false;

		this.$todoLI = document.createElement("li");
		this.$todoUL = document.querySelector("ul");

		this.$doneButton = document.createElement("button");
		this.$doneButton.textContent = "Done";
		this.$doneButton.classList.add("done");
		this.$todoLI.textContent = this.$text;
		this.$todoLI.appendChild(this.$doneButton);
		this.$todoUL.appendChild(this.$todoLI);

		this.$doneButton.addEventListener("click", this.toggleChangeStatus.bind(this));
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
