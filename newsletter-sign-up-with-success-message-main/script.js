const submitButton = document.getElementById('submitButton');
const emailAddress = document.getElementById('email');
const dismissButton = document.getElementById('dismissButton');
const mainContainer = document.querySelector(".mainbox")
const successContainer = document.querySelector('.successContainer');
const confirmedEmail = document.getElementById('confirmedEmail')


submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (!emailAddress) {
        console.error("Error: Could not find the email input field! Check your HTML IDs.");
        return;
    }

    if (emailAddress.checkValidity()) {
        const email = emailAddress.value; 
        confirmedEmail.textContent = email;

        mainContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
    
    } else {
        console.log("Email is invalid.");
        emailAddress.reportValidity();
    }
});


dismissButton.addEventListener('click', function () {
    successContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
});
