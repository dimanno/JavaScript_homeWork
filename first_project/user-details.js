console.log(location.href);

const url = new URL(location);
console.log(url);
const jsonUser = url.searchParams.get('user');
console.log(jsonUser);
const user = JSON.parse(jsonUser);
const wrap = document.getElementById('wrap-user');

const name = document.createElement('h1');
name.innerText = user.name;
wrap.appendChild(name);

const title = document.createElement('h2');
title.innerText = `User Name - ${user.username}: Email - ${user.email}`;
wrap.appendChild(title);

const address = document.createElement('ul');
address.innerText = 'Address';
const city = document.createElement('li');
city.innerText = user.address.city;
address.appendChild(city);
const street = document.createElement('li');
street.innerText = user.address.street;
address.appendChild(street);
const suite = document.createElement('li');
street.innerText = user.address.suite;
address.appendChild(suite);
const zipcode = document.createElement('li');
zipcode.innerText = user.address.zipcode;
address.appendChild(zipcode);
const geo = document.createElement('li');
geo.innerText = `lat - ${user.address.geo.lat}; lng - ${user.address.geo.lng}`;
address.appendChild(geo);

wrap.appendChild(address);

const wrapButton = document.createElement('div');
wrapButton.classList.add('wrButton');
wrap.appendChild(wrapButton);
const button = document.createElement('button');
button.innerText = 'Post of current user';
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
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
                wrap.appendChild(divPost)
            }
        })
}
    wrapButton.appendChild(button);





// const address = document.createElement('ul');
// address.innerText = 'Address';
// for (const addressKey in user.address) {
//     const addressitem = document.createElement('li');
//     addressitem.innerText = object.value(user.address);
//     address.appendChild(addressitem);
// }
// wrap.appendChild(address);

// allInfo.innerText = `City - ${user.address.city}, Street - ${user.address.street}`;
//
// wrap.appendChild(allInfo);

