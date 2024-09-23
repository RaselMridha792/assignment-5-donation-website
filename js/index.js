document.getElementById('donate-amount-btn').addEventListener('click', function(event){
    event.preventDefault();
    // get inputs and innertext by calling function paramiter passes for every id.
    operationInputData('donation-amount', 'increment-amount', 'available-balance', 'my_modal_1', 'card-head');
    
})

document.getElementById('donate-amount-btn2').addEventListener('click', function(event){
    event.preventDefault();
    // get inputs and innertext by calling function paramiter passes for every id.
    operationInputData('donation-amount2', 'increment-amount2', 'available-balance', 'my_modal_2', 'card-head2');
    
})

document.getElementById('donate-amount-btn3').addEventListener('click', function(event){
    event.preventDefault();
    // get inputs and innertext by calling function paramiter passes for every id.
    operationInputData('donation-amount3', 'increment-amount3', 'available-balance', 'my_modal_3', 'card-head3');
    
})





document.getElementById('donation-page').addEventListener('click', function(){
    // go to the page 
    buttonAction('card-section');
    // change the bg color of donation page btn 
    changeBtnColor('donation-page', 'history-page');
    document.getElementById('footer-section').classList.remove('hidden');
})
document.getElementById('history-page').addEventListener('click', function(){
    // go to the page 
    buttonAction('history-section');
    changeBtnColor('history-page', 'donation-page');
    document.getElementById('footer-section').classList.add('hidden');

})


// for going to blog page 
document.getElementById('blog-page').addEventListener('click', function(){
    window.location.href = 'blog.html';
})