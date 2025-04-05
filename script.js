let expenses = []; // Array that holds expenses of users
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expensesTableBody = document.getElementById("expenses-table-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener("click", function() {
    // Getting user input
    const category = categorySelect.value;
    const amount = Number(amountInput.value);//Number function converts the amount input to a number
    const date = dateInput.value;
// Input validation
    if (category === '') {
        alert("please enter category")
        return;
    }
    if(isNaN(amount) || amount <=0) {
        alert("Please enter a valid amount")
        return;
    }
    if (date === '') {
        alert("Please enter a valid date")
    }
    
})
