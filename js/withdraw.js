// 
// 1.Add Event Handler with withdraw button 
// 2.Get the withdraw amount from the withdraw input field
// 2.5. Also Make sure to convert the string into a number
// 3. get the current withdraw total 
// 4. Calculate Total Withdraw amount 
// 5. Get The previous balance Total
// 6. Calculate New balance Total
// 6.5 Set The new Balance Total 
// 7. Clear The input Field

// step -1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step -2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step- 7
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a Number');
        return;
    }
    
    // step -3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // step- 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e Ato Taka nai');
        return;
    }
    // step -4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // step- 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step- 7
    withdrawField.value = '';
})