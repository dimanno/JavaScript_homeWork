
fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(users => {
    for (const user of users) {
        const userBox = document.createElement('div');
        userBox.classList.add('user_box');
        const title = document.createElement('h2');
        title.innerText = `${user.id} - Name: ${user.name}`;
        userBox.appendChild(title);
        const button = document.createElement('button');
        button.innerText = 'Details';
        button.onclick = () => {
            location.href = `user-details.html?user=${JSON.stringify(user)}`;
        }
        userBox.appendChild(button);
        const  wrap = document.getElementsByClassName('wrap')[0];
        wrap.appendChild(userBox);
    }
})

function crDiv(el, cl) {
    document.createElement(el);
}

const div = crDiv(div);
console.log(div);