let sum = 0;
function addNumber(number) {
    sum += number;
}
function showResult() {
    alert("Сумма цифр: " + sum);
}

function enlargeText() {
    const textElement = document.querySelector(".text");
    const currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);
    const enlargedFontSize = currentFontSize * 1.5;
    textElement.style.fontSize = enlargedFontSize + "px";
  }
  
  function resetText() {
    const textElement = document.querySelector(".text");
    textElement.style.fontSize = "16px";
  }




