var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");
function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var cur = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, cur);
}
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial * quantity)) * 100;
    showOutput(
      `loss is ${loss} and the percentage is ${lossPercentage.toFixed(2)}%.`
    );
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;
    showOutput(
      `Profit is ${profit} and the percentage is ${profitPercentage.toFixed(
        2
      )}%.`
    );
  } else {
    showOutput("No profit no loss");
  }
}
function showOutput(message) {
  outputBox.innerHTML = message;
}
submitBtn.addEventListener("click", submitHandler);
