// Step-1: add Event Listener to the Deposit Button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step-2: Get the deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3: get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4: Add Number to Depost 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: Get ballance current total 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: Calculate Current total balance 

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step -7: clear the deposit field 
    depositField.value = '';
})