// Step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: Get the email address inside the email field
    // Always remember to use .value to get text to input field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // Step-3: Get Password
    // 3.a:set id on the html element
    // 3.b:get the element 
    // 3.c:get the value from the element
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // Step-5:Verify email and password
    if(userEmail === 'developersharif1919@gmail.com' && userPassword === 'Suborna19'){
        window.location.href = 'bank.html';
    }else{
        alert('Tui Email Or Password Vule Gesos!! Toke Ami Tejjo Sontan Ghosona Korlam.');
    }
})