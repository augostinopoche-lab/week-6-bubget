
// 1. Store budget and expenses
let budget = 0;
let expenses = [];

// 2. Get HTML elements
const budgetInput = document.getElementById("budgetInput");
const setBudgetBtn = document.getElementById("setBudgetBtn");
const expenseForm = document.getElementById("expenseForm");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetDisplay = document.getElementById("budgetDisplay");
const totalDisplay = document.getElementById("totalDisplay");
const remainingDisplay = document.getElementById("remainingDisplay");

const expenseList = document.getElementById("expenseList");
const message = document.getElementById("message");


// 3. Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// 4. Calculate remaining balance
function calculateRemainingBalance() {
    return budget - calculateTotalExpenses();
}


// 5. Update dashboard using DOM manipulation
function updateDashboard() {
    const total = calculateTotalExpenses();
    const remaining = calculateRemainingBalance();

    budgetDisplay.textContent =
        "Ksh. " + budget.toFixed(2);

    totalDisplay.textContent =
        "Ksh. " + total.toFixed(2);

    remainingDisplay.textContent =
        "Ksh. " + remaining.toFixed(2);

    // Conditional statements
    if (budget === 0) {
        message.textContent = "Please set your monthly budget.";
        message.style.color = "orange";

    } else if (remaining < 0) {
        message.textContent = "Warning! You have exceeded your budget.";
        message.style.color = "red";

    } else if (remaining === 0) {
        message.textContent = "Your budget has been fully used.";
        message.style.color = "orange";

    } else {
        message.textContent = "Good job! You are within your budget.";
        message.style.color = "green";
    }

    displayExpenses();
}


// 6. Display expenses using a loop
function displayExpenses() {
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const amountCell = document.createElement("td");
        amountCell.textContent =
            "Ksh. " + expense.amount.toFixed(2);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        // Event listener for deleting expenses
        deleteButton.addEventListener("click", function() {
            expenses.splice(i, 1);
            updateDashboard();
        });

        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);
        row.appendChild(actionCell);

        expenseList.appendChild(row);
    }
}


// 7. Set monthly budget using an event listener
setBudgetBtn.addEventListener("click", function() {
    const enteredBudget = Number(budgetInput.value);

    if (budgetInput.value.trim() === "" ||
        !Number.isFinite(enteredBudget) ||
        enteredBudget <= 0) {

        message.textContent = "Please enter a valid budget.";
        message.style.color = "red";

    } else {
        budget = enteredBudget;
        updateDashboard();
        budgetInput.value = "";
    }
});


// 8. Add expenses using form submission
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Validate user input with conditionals
    if (name === "" || category === "" ||
        expenseAmount.value.trim() === "" ||
        !Number.isFinite(amount) || amount <= 0) {

        message.textContent = "Please enter valid expense details.";
        message.style.color = "red";
        return;
    }

    // Store expense as an object inside the array
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    // Update dashboard
    updateDashboard();

    // Clear form fields
    expenseForm.reset();

    message.textContent = "Expense added successfully!";
    message.style.color = "green";
});


// 9. Display the initial dashboard
updateDashboard();
