// main function for button 
function operationInputData(DonatedAmount, incrementAmount, availableBalance, myModal, cardHead){
    const donatedInput = getInputFromUser(DonatedAmount);
    const totalFunds = getInputFromDiv(incrementAmount);
    const accountBalance = getInputFromDiv( availableBalance);
    
    if(donatedInput > 0){

        // check the donated amount less or grater then the donated amount 
        if(donatedInput< accountBalance){
            const newFunds = totalFunds + donatedInput;
            document.getElementById(incrementAmount).innerText = newFunds;
    
            // dcrease the acount balance 
    
            const availableBalances = accountBalance - donatedInput;
            document.getElementById(availableBalance).innerText = availableBalances;
            // added modal when click button 
            const modal = document.getElementById(myModal);
            modal.showModal();
            // update the modal amount balance 
            // get the card name 
            const cardName = document.getElementById(cardHead).innerText;
            const currentDate = new Date();
            donationHistory(donatedInput, currentDate, cardName);

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
}