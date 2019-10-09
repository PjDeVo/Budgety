//Budget Controller






var budgetController = (function () {
    //Some Code
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;


    }


    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;


    }

    var data = {

        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1] + 1
            } else {
                ID = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            data.allItems[type].push(newItem);
            return newItem;

        },
        testing: function () {
            console.log(data);
        }
    }

})()



//UI Controller
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }


        },
        getDOMStrings: function () {
            return DOMstrings;
        }

    }

})();



//Global App Controller 
var controller = (function (budgetCtrl, UICtrl) {
    var getStrings = UICtrl.getDOMStrings();

    var ctrlAddItem = function () {
        var input, newItem;
        //1. Get the field Input Data
        var input = UICtrl.getInput();
        console.log(input)
        //2. Add the item to the budget controller.
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //3. Add the new item to the UI.

        //4. Calculate budget

        //5. Display the budget to the UI
    }

    var setUpEventListeners = function () {
        document.querySelector(getStrings.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        })

    }


    return {
        init: function () {
            console.log('Application has started')
            setUpEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();


