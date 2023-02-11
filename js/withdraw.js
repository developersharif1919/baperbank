// Step-1:add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step-2:get the withdraw amount from the input field
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide valid number of amount');
        return;
    }

    // Step-3 get previous withdraw amount total
    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5:get the balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
       // Step-7: Clear withdraw field
       withdrawField.value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baaper Bank Ye Ato Taka Nai');
        return;
    }
      // Step-4:add number to set the total Withdraw Amount
      const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      // Set total withdraw Amount
             withdrawElement.innerText = currentWithdrawTotal;



    // Step-6: Calculate New Balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // Set New Balance Total
    balanceTotalElement.innerText = newBalanceTotal;


})