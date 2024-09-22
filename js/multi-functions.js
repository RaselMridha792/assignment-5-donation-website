// where we include these function who apply in multiple place by called his name  
function donationAmountInput(){
        const donationAmount = document.getElementById('donation-amount').value;
        const donationAmountNumber = parseFloat(donationAmount);
        return donationAmountNumber;
}

function donationIncrementAmount(){
    const incrementAmount = document.getElementById('increment-amount').innerText;
    const incrementAmountNumber = parseFloat(incrementAmount);
    return incrementAmountNumber;
}