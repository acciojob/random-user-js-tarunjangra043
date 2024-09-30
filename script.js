let user;

function getRandomUser() {
    const API = 'https://randomuser.me/api/';
    
    fetch(API)
        .then(response => response.json())
        .then(data => {
            user = data.results[0];
            displayUserInfo(user);
        })
        .catch(error => console.error('Error fetching user:', error));
}

function displayUserInfo(user) {
    const fullName = `${user.name.first} ${user.name.last}`;
    const largeImage = user.picture.large;

    document.getElementById('user-name').textContent = fullName;
    document.getElementById('user-image').src = largeImage;

    document.getElementById('info-text').textContent = 'Click a button to display additional info';
}

function displayAdditionalInfo(infoType) {
    let info;

    if (infoType === 'age') {
        info = user.dob.age;
    } else if (infoType === 'email') {
        info = user.email;
    } else if (infoType === 'phone') {
        info = user.phone;
    }

    document.getElementById('info-text').textContent = info;
}

document.getElementById('age-btn').addEventListener('click', () => displayAdditionalInfo('age'));
document.getElementById('email-btn').addEventListener('click', () => displayAdditionalInfo('email'));
document.getElementById('phone-btn').addEventListener('click', () => displayAdditionalInfo('phone'));

document.getElementById('getUser').addEventListener('click', getRandomUser);

window.onload = getRandomUser;
