document.getElementById('donate-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate button clicked');
    // get inputs and innertext by calling function 
    const donatedInput = getInputFromUser('donation-amount');
    const totalFunds = getInputFromDiv('increment-amount');
    if(donatedInput > 0){
        const newFunds = totalFunds + donatedInput;
        document.getElementById('increment-amount').innerText = newFunds;

        // dcrease the acount balance 

        const accountBalance = getInputFromDiv('available-balance');
        const availableBalance = accountBalance - donatedInput;
        document.getElementById('available-balance').innerText = availableBalance;
    }
    else{
        alert('sorry! you negative number can not be donated');
    }
    
})