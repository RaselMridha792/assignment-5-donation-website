// where we include these function who apply in multiple place by called his name  
function getInputFromUser(id){
        const donationAmount = document.getElementById(id).value;
        if(!isNaN(donationAmount)){
            alert('congratulation its a number');
            const donationAmountNumber = parseFloat(donationAmount);
            return donationAmountNumber;
        }
        else{
            alert('sorry! your entry is not a number. please enter the amount do you want to donate');
            return 0;
        }
}

function getInputFromDiv(id){
    const incrementAmount = document.getElementById(id).innerText;
    const incrementAmountNumber = parseFloat(incrementAmount);
    return incrementAmountNumber;
}