document.getElementById('donate-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate button clicked');
    // get inputs and innertext by calling function 
    const donatedInput = donationAmountInput('donation-amount');
    const totalFunds = donationIncrementAmount('increment-amount');
    if(donatedInput > 0){
        const newFunds = totalFunds + donatedInput;
        document.getElementById('increment-amount').innerText = newFunds;

        // drease the acount balance 
    }
    else{
        alert('sorry! you negative number can not be donated');
    }
    
})