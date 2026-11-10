
# SpendWise - Budget Tracker

## Project Description

SpendWise is a simple budget tracking application that helps users manage their monthly budget, record expenses, and monitor their remaining balance.

## Improvements Made This Week

The following improvements were made:

- Added JavaScript functionality to the dashboard.
- Added the ability to set a monthly budget.
- Added an expense form.
- Added the ability to add and delete expenses.
- Added automatic calculation of total expenses.
- Added automatic calculation of the remaining balance.
- Added budget warning messages.
- Improved the dashboard using DOM manipulation.

## How Conditionals Are Used

Conditionals such as if, else if, and else are used to validate user input and check the budget.

For example:
- If the budget is zero, the application asks the user to set a budget.
- If expenses exceed the budget, a warning is displayed.
- If the remaining balance is positive, a success message is displayed.

## How Arrays Are Used

An array called expenses stores all expense records.

Each expense is stored as an object containing:
- Expense name
- Amount
- Category

The push() method adds new expenses, while splice() removes expenses.

## How the DOM Is Updated

DOM manipulation is used to update the dashboard without refreshing the page.

The application uses:
- getElementById()
- createElement()
- appendChild()
- textContent
- innerHTML

These methods update budget figures, expense history, and feedback messages.

## How User Interactions Are Handled Through Events

Event listeners are used to respond to user actions.

Examples include:
- Clicking the Set Budget button.
- Submitting the Add Expense form.
- Clicking the Delete button.

The application updates the dashboard whenever a user performs these actions.

## Challenges Encountered and Solutions

1. Challenge: Calculating total expenses.
   Solution: Used a for loop to calculate all expenses stored in the array.

2. Challenge: Updating the dashboard automatically.
   Solution: Created an updateDashboard() function using DOM manipulation.

3. Challenge: Validating user input.
   Solution: Used conditional statements to prevent invalid entries.

4. Challenge: Removing expenses.
   Solution: Used the splice() method to delete expense records.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git and GitHub

## Conclusion

SpendWise is now an interactive budget tracker that allows users to manage budgets and expenses using JavaScript.
