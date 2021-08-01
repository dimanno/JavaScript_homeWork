
console.log(location.href);

const  url = new URL(location);


const jsonUser = url.searchParams.get('user');

console.log(jsonUser);
const user = JSON.parse(jsonUser)

console.log(url);

document.body.innerText = user.name;