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
function totalCost() {
    let phonePrice = document.getElementById('phone-price').innerText;
    phonePrice = parseInt(phonePrice);
    let casePrice = document.getElementById('case-price').innerText;
    casePrice = parseInt(casePrice);
    const subTotal = phonePrice + casePrice;
    const subTotalText = document.getElementById('sub-total');
    subTotalText.innerText = subTotal;
    const taxText = document.getElementById('tax-total')
    const taxTotal = (subTotal * 5) / 100;
    taxText.innerText = taxTotal;
    const total = document.getElementById('total');
    total.innerText = taxTotal + subTotal;
}