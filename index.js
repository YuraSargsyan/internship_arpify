const myData = {
    firstName: 'Yura',
    lastName: 'Sargsyan',
    birthDay: '1994-02-06',
    gender: 'male'
}

const usersData = [];

function sendRequest() {
    return fetch('http://intern-2022.arpify.com/init', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(myData)
    })
    .then(response => response.json())
    .then(data => usersData.push(data))
    .then(result => tableBody(usersData))
}


(sendRequest)()

function tableBody(data) {
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = '';

    data.forEach(usersData => {
        usersData.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.birthDay}</td>
                <td>${user.gender}</td>
            `
            userTable.appendChild(tr)
        }); 
    });
}