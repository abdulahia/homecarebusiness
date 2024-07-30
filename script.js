document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset(); // Clear the form
        } else {
            alert('There was a problem sending your message. Please try again.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again.');
    });
});
