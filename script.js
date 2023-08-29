document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("block2");
  const calculateButton = document.getElementById("calculate-button");
  const resetButton = document.getElementById("reset-button");
  const resultDiv = document.getElementById("result");
  const incomeResult = document.getElementById("income-result");

  // Hide the result section by default
  resultDiv.classList.add("hidden");

  // Add event listeners to input fields for formatting and parsing
  const inputElements = form.querySelectorAll("input");
  inputElements.forEach(input => {
    input.addEventListener("input", function () {
      const inputValue = parseFormattedNumber(this.value);
      this.value = formatNumber(inputValue); // Format the input value for display
    });
  });

  calculateButton.addEventListener("click", function () {
    // Calculate logic...
    const monthlySales = parseFormattedNumber(document.getElementById("monthly-sales").value);
    const costs = parseFormattedNumber(document.getElementById("costs").value);
    const employeeSalaries = parseFormattedNumber(document.getElementById("employee-salaries").value);
    const rent = parseFormattedNumber(document.getElementById("rent").value);
    const adminExpenses = parseFormattedNumber(document.getElementById("admin-expenses").value);
    const salesCommissions = parseFormattedNumber(document.getElementById("sales-commissions").value);

    const totalExpenses = costs + employeeSalaries + rent + adminExpenses + salesCommissions;
    const projectedIncome = monthlySales - totalExpenses;

    // Show the result section
    resultDiv.classList.remove("hidden");
    incomeResult.textContent = formatNumber(projectedIncome); // Format the result for display
  });

  resetButton.addEventListener("click", function () {
    // Reset input fields and result...
    inputElements.forEach(input => {
      input.value = ""; // Clear input fields
    });
    resultDiv.classList.add("hidden"); // Hide the result section
    incomeResult.textContent = ""; // Reset the expected profit result
  });

  // Function to format numbers with commas and currency symbol
  function formatNumber(number) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', minimumFractionDigits: 0 }).format(number);
  }

  // Function to parse formatted numbers
  function parseFormattedNumber(value) {
    // Remove non-numeric characters and parse as float
    return parseFloat(value.replace(/[^\d.-]/g, ''));
  }
});
