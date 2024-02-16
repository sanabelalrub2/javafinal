function increment(plusElement) {
    let numberElement = plusElement.previousElementSibling; // Get the number span
    let currentVal = parseInt(numberElement.innerText);
    numberElement.innerText = currentVal + 1;
  }