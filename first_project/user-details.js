
const url = new URL(location);
const jsonUser = url.searchParams.get('user');
const user = JSON.parse(jsonUser);
console.log(user);

const wrap = document.getElementById('wrap-user');
const list = document.createElement('ul');
wrap.appendChild(list);
const getInfo = function (object, objectBox) {
    for (const proparty in object) {
        if (typeof object[proparty]  === "object") {
            const objKey = document.createElement('h4');
            objKey.innerText = `${proparty}`;
            objectBox.appendChild(objKey);
            getInfo(object[proparty], objectBox);
            } else {
            const info = document.createElement('li');
            info.innerText = `${proparty} --- ${object[proparty]}`
            objectBox.appendChild(info);
        }
    }
}
getInfo(user, list);


// const name = document.createElement('h1');
// name.innerText = user.name;
// wrap.appendChild(name);
// const title = document.createElement('h2');
// title.innerText = `User Name - ${user.username}: Email - ${user.email}`;
// wrap.appendChild(title);
// const address = document.createElement('ul');
// address.innerText = 'Address';
// const city = document.createElement('li');
// city.innerText = user.address.city;
// address.appendChild(city);
// const street = document.createElement('li');
// street.innerText = user.address.street;
// address.appendChild(street);
// const suite = document.createElement('li');
// street.innerText = user.address.suite;
// address.appendChild(suite);
// const zipcode = document.createElement('li');
// zipcode.innerText = user.address.zipcode;
// address.appendChild(zipcode);
// const geo = document.createElement('li');
// geo.innerText = `lat - ${user.address.geo.lat}; lng - ${user.address.geo.lng}`;
// address.appendChild(geo);
// wrap.appendChild(address);


const postBox = document.getElementsByClassName('postBox')[0];
const wrapButton = document.getElementsByClassName('buttonWrap')[0];
const button = document.createElement('button');
button.innerText = 'Post of current user';
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            postBox.innerHTML = ' ';
            for (const post of posts) {
                const divPost = document.createElement('div');
                divPost.classList.add('box-post');
                const titlePost = document.createElement('h4');
                titlePost.innerText = `${post.id} - ${post.title}`;
                divPost.appendChild(titlePost);
                const detalPost = document.createElement('a');
                detalPost.innerText = 'Post-details';
                detalPost.href = `post-details.html?post=${JSON.stringify(post)}`;
                divPost.appendChild(detalPost);
                postBox.appendChild(divPost)
            }
        })
}
    wrapButton.appendChild(button);


