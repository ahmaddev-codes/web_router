'use strict'

function submitForm() {
    const search = document.getElementById('search').value;
    // send data to the backend
    // change the URL to the backend URL
    fetch('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search: search
        })
    }).then(response => response.json())
        .then(data => {
            // handle response from the backend
            console.log(data);
            document.getElementById('search').value = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}