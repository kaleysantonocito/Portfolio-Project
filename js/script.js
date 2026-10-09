const copyEmailButton = document.getElementById('copy-email');

if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText('kaleysant@gmail.com');
            copyEmailButton.textContent = 'Copied!';
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    });
}