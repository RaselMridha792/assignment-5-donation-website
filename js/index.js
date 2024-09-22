document.getElementById('donate-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate button clicked');
    const donatedInput = donationAmountInput();
    const totalFunds = donationIncrementAmount();
    const newFunds = totalFunds + donatedInput;
    console.log(newFunds);
    document.getElementById('increment-amount').innerText = newFunds;
    
})