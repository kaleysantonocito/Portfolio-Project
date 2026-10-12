const copyEmailButton = document.getElementById('copy-email'); // find the button element with the ID 'copy-email' in html and creates variable

if (copyEmailButton) { // check if the button exists before adding event listener
    copyEmailButton.addEventListener('click', async function() { // add click event listener to the button
        try {
            await navigator.clipboard.writeText('kaleysant@gmail.com'); // copy email to clipboard 
            copyEmailButton.textContent = 'Copied!'; // change button text to indicate success
        } catch (err) { 
            console.error('Failed to copy email: ', err); // log error if copying fails
        }
    });
}