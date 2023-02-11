// Step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step-2:get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    if(isNaN(newDepositAmount)){
        alert('Please Enter Valid number of amount');
        return;
    }
    // Step-3:get the total current deposit amount
    const depositElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step-4:add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the total deposit amount;
     depositElement.innerText = currentDepositTotal;
    //Step-5: get current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Step-6:Calculate Total Current Total Balance;
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set The Balance Total balance
    balanceTotalElement.innerText = currentBalanceTotal;



    // Step-7;clear the deposit field;
    depositField.value = '';

})