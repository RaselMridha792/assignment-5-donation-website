document.getElementById('donate-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('donate button clicked');
    // get inputs and innertext by calling function 
    const donatedInput = getInputFromUser('donation-amount');
    const totalFunds = getInputFromDiv('increment-amount');
    const accountBalance = getInputFromDiv('available-balance');
    if(donatedInput > 0){

        // check the donated amount less or grater then the donated amount 
        if(donatedInput< accountBalance){
            const newFunds = totalFunds + donatedInput;
            document.getElementById('increment-amount').innerText = newFunds;
    
            // dcrease the acount balance 
    
            const availableBalance = accountBalance - donatedInput;
            document.getElementById('available-balance').innerText = availableBalance;
            // added modal when click button 
            my_modal_1.showModal();
            // update the modal amount balance 
            document.getElementById('modal-updated-amount').innerText = `${donatedInput} BDT`;
            const currentDate = new Date();
            donationHistory(donatedInput, currentDate);

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


document.getElementById('donation-page').addEventListener('click', function(){
    // go to the page 
    buttonAction('card-section');
    // change the bg color of donation page btn 
    changeBtnColor('donation-page', 'history-page');
})
document.getElementById('history-page').addEventListener('click', function(){
    // go to the page 
    buttonAction('history-section');
    changeBtnColor('history-page', 'donation-page');

})