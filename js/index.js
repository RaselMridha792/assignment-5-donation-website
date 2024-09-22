document.getElementById('donate-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate button clicked');
    // get inputs and innertext by calling function 
    const donatedInput = getInputFromUser('donation-amount');
    const totalFunds = getInputFromDiv('increment-amount');
    const accountBalance = getInputFromDiv('available-balance');
    if(donatedInput > 0){
        if(donatedInput< accountBalance){
            const newFunds = totalFunds + donatedInput;
            document.getElementById('increment-amount').innerText = newFunds;
    
            // dcrease the acount balance 
    
            const availableBalance = accountBalance - donatedInput;
            document.getElementById('available-balance').innerText = availableBalance;
        }
        else{
            alert('sorry! not enough money in your account. please contact your bank');
        }

    }
    else if(donatedInput === null){
        return;
    }
    else{
        alert('sorry! negative number. please enter the right amount for the donation.');
    }
    
})