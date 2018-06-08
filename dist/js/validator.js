"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
    function Validator(selector) {
        _classCallCheck(this, Validator);

        this.$field = document.querySelector(selector);

        if (!this.$field) {
            console.warn("couldn't find selector: ", selector);
            return false;
        }

        this.$errorContainer = document.createElement("div");
        this.$errorContainer.classList.add('error-message');
        this.$field.parentElement.appendChild(this.$errorContainer);

        this.errors = [];

        this.$field.addEventListener("keyup", this.validate.bind(this));
        this.$field.addEventListener("blur", this.validate.bind(this));
    }

    _createClass(Validator, [{
        key: "validate",
        value: function validate() {
            console.log(this.$field.value);

            this.errors = [];

            if (!this.$field.value) {
                this.errors.push("You must fill out the field");
            }

            //this is a hack
            // putting a settimeout will run after everything 
            setTimeout(this.showErrors.bind(this), 0);
        }
    }, {
        key: "showErrors",
        value: function showErrors() {
            var _this = this;

            if (this.errors.length) {
                this.$field.style.borderColor = "red";
                this.$errorContainer.innerHTML = "";
                this.errors.forEach(function (error) {
                    _this.$errorContainer.innerHTML += "<p>" + error + "</p>";
                });
            } else {
                this.$field.style.borderColor = "green";
                this.$errorContainer.innerHTML = "";
            }
        }
    }]);

    return Validator;
}();
//# sourceMappingURL=validator.js.map
