# Expense Tracker Web Application

A simple web-based expense tracker that allows users to record and manage their expenses with category filtering, date tracking, and persistent storage using cookies.

## Features

- Add expenses with category, amount, and date
- Delete individual expenses
- Automatic total amount calculation
- Persistent storage using browser cookies (expires after 1 year)
- Input validation to prevent invalid entries

## Technologies Used

- HTML5
- CSS
- JavaScript (Vanilla JS)

## How to Use

1. Open `index.html` in a web browser
2. Fill in the expense details:
   - Select a category from the dropdown
   - Enter the amount (must be a positive number)
   - Select a date
3. Click "Add" to record the expense
4. To delete an expense, click the "Delete" button next to the entry

## Code Structure

- `expenses` array: Stores all expense objects
- Each expense object contains:
  - `category`: The expense category
  - `amount`: The expense amount (number)
  - `date`: The date of the expense
- Cookie handling:
  - `setCookies()`: Saves expenses to a cookie
  - `loadSetCookies()`: Loads expenses from cookie on page load

## Input Validation

The application includes the following validations:
- Category must be selected
- Amount must be a positive number
- Date must be selected

## Limitations

- Data is only persisted through browser cookies (cleared if cookies are deleted)
- No multiple user support
- No data export functionality



## Author

[Ian Njogu]

## License

This project is open-source and available under the [MIT License](LICENSE.md).