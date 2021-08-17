function updateCase(product, price, parameter) {
    const inputText = document.getElementById(product + '-input');
    let inputValue = inputText.value;
    if (parameter == true) {
        inputValue = parseInt(inputValue) + 1;
    }
    else if (parameter == false && inputValue > 0) {
        inputValue = parseInt(inputValue) - 1;
    }
    inputText.value = inputValue;
    const cost = document.getElementById(product + '-price');
    const priceIs = inputValue * price;
    cost.innerText = priceIs;
    totalCost()
}
function priceText(price) {
    let thePrice = document.getElementById(price).innerText;
    thePrice = parseInt(thePrice);
    return thePrice;
}
function totalCost() {
    const subTotal = priceText('phone-price') + priceText('case-price');
    const taxTotal = (subTotal * 5) / 100;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total').innerText = taxTotal + subTotal;
}