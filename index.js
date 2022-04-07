const usersProfile = [
    {
        firstName: 'Yura',
        lastName: 'Sargsyan',
        birthDay: '06.02.1994',
        gender: 'male'
    }

]

(function load() {
    fetch('http://intern-2022.arpify.com/init', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: userYura
    })
    .then(resp => resp.json())
    .then(result => console.log(result))
})()

function handleDeleteUser(userIndex) {
    const user = usersProfile[userIndex];
    const firstName = user.firstName;
    const lastName = user.lastName;

    const isDelete = confirm(`Duq cankanum eq heracnel ${firstName} ${lastName} - in ?` )
        if(isDelete) {
            usersProfile.splice(userIndex, 1)
            tableBody(usersProfile)
        }
}

function tableBody(data) {
    const tBody = document.getElementById('userTable');

    tBody.innerHTML = '';

    data.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phone}</td>
            <td>${user.gender}</td>
            <td>
                <button>Delete</button>
                <button>Edit</button>
            </td>
        `
        tr.onclick = (e) => {
            if(e.target.innerHTML === 'Delete') {
                handleDeleteUser(index)
            }
        }
        tBody.appendChild(tr)
        
    });
}