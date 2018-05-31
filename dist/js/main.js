"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function TodoList() {
	_classCallCheck(this, TodoList);
};

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
		this.$todoLI.innerHTML = this.$text;
		this.$todoLI.appendChild(this.$doneButton);
		this.$todoUL.appendChild(this.$todoLI);
	}

	_createClass(TodoItem, [{
		key: "updateView",
		value: function updateView() {}
	}]);

	return TodoItem;
}();

var todoList = new TodoList();
var todoItem1 = new TodoItem("Milk");
var todoItem2 = new TodoItem("Eggs");
var todoItem3 = new TodoItem("Diapers");
//# sourceMappingURL=main.js.map
