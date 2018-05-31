"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function TodoList() {
	_classCallCheck(this, TodoList);
};

var TodoItem = function TodoItem(text) {
	_classCallCheck(this, TodoItem);

	this.$text = text;

	this.$todoUL = document.createElement("ul");
	this.$todoLI = document.createElement("li");
	this.$todoLI.innerHTML = this.$text;
	this.$todoUL.appendChild(this.$todoLI);
};

var todoList = new TodoList();
var todoItem1 = new TodoItem("Milk");
var todoItem2 = new TodoItem("Eggs");
var todoItem3 = new TodoItem("Diapers");
//# sourceMappingURL=main.js.map
