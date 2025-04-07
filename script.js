
let expenses = []; // Array that holds expenses of users
let totalAmount = 0;
 window.onload = function () {
     loadSetCookies();
 }

 //creates cookie
 function setCookies() {
    
    document.cookie = `expenses=${JSON.stringify(expenses)};path/=; max-age=31536000`
};

function loadSetCookies() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('expenses='))
    if (cookie) {
        expenses = JSON.parse(cookie.split('=')[1]);
        expenses = []
    }
};

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
    //creates cookie
    
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
    expenses.push({category, amount, date}); //push method adds to the expenses array

    totalAmount += amount, //adds the amount inputted to the totalAmount variable
    totalAmountCell.innerText = totalAmount;//displays the amount
    
    const newRow = expensesTableBody.insertRow(); //Adds a new row to the table

    //The new expenses
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();

    
    const deleteCell = newRow.insertCell();//the cell where the delete button is added
    const deleteBtn = document.createElement("button");//creates a button inside the table

    // The delete button removes the expense from the array, updates total amount, and removes the row from the expenses table
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        expenses.splice(expenses.indexOf(expense), 1);//removes an expense from the list

        totalAmount -= expense.amount;//Updates the total amount
        totalAmountCell.textContent = totalAmount;//displays the amount

        expensesTableBody.removeChild(newRow);//removes the row from expenses table 
    });

    //Updates the info on the expenses array
    const expense = expenses[expenses.length -1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

    
});

//Loop that wll be used to update expenses table and total amount on page load
//The loop iterates through each expense in the expenses array and adds a row to the table 
for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;
    const newRow =expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        expenses.splice(expenses.indexOf(expense), 1);//removes an expense from the list

        totalAmount -= expense.amount;//Updates the total amount
        totalAmountCell.textContent = totalAmount;//displays the amount

        expensesTableBody.removeChild(newRow);//removes the row from expenses table 
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

    setCookies();
    loadSetCookies();
};
