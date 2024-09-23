// where we include these function who apply in multiple place by called his name  
function getInputFromUser(id){
        const donationAmount = document.getElementById(id).value;
        if(!isNaN(donationAmount)){
            const donationAmountNumber = parseFloat(donationAmount);
            return donationAmountNumber;
        }
        else{
            alert('sorry! your entry is not a number. please enter the amount do you want to donate');
            return null;
        }
}

function getInputFromDiv(id){
    const incrementAmount = document.getElementById(id).innerText;
    const incrementAmountNumber = parseFloat(incrementAmount);
    return incrementAmountNumber;
}
// for adding history section 

// show or hidden pages 
function buttonAction(id){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}



function donationHistory(id, date, places) {
    const historyOfDonation = document.createElement('div'); // Use 'div' as a valid HTML element
    historyOfDonation.innerHTML = `
<div class="border rounded-xl shadow-lg p-8 my-10">
    <h1 class="font-bold text-2xl mb-2">${id}. BDT ${places}</h1>
    <p class="text-gray-500 font-normal text-lg">Date : ${date}</p>
</div>
`;
    document.getElementById('donation-history').appendChild(historyOfDonation);
}


function changeBtnColor(firstBtn, secondBtn){
    document.getElementById(firstBtn).classList.add('bg-[#B4F461]');
    document.getElementById(firstBtn).classList.remove('bg-white');
    
    // reset the bg color in history page btn 
    document.getElementById(secondBtn).classList.remove('bg-[#B4F461]');
    document.getElementById(secondBtn).classList.add('bg-white');
}