
fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value => {
    for (const user of value) {
        const userBox = document.createElement('div');
        const title = document.createElement('h2');
        title.innerText = `${user.id} - Name: ${user.name}`;
        userBox.appendChild(title);
        const button = document.createElement('button');
        button.innerText = 'Info';
        button.onclick = () => {
            location.href = `info.html?=user${JSON.stringify(user)}`
        }
        userBox.appendChild(button);
        const  wrap = document.getElementsByClassName('wrap')[0];
        wrap.appendChild(userBox);
    }
})
