const url = 'http://intern-2022.arpify.com/form';

const userProfile = {
    firstName : '',
    lastName : '',
    birthDay : null,
    gender : '',
    photo : null,
    pdfFile : null
}

const form = document.getElementById('form');
form.addEventListener('change', (e) => {
    const { name, value } = e.target;
    userProfile[name] = value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendRequest()
})

function sendRequest() {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type" : "multipart/form-data"
        },
        body: JSON.stringify(userProfile)
    })
    .then(response => response.json())
    .then(data => console.log(data))
}