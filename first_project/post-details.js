console.log(location.href);

const url = new URL(location);
console.log(url);
const jsonPost = url.searchParams.get('post')
console.log(jsonPost);
const post = JSON.parse(jsonPost);
const wrap = document.getElementById('wrap-post');

const id = document.createElement('h2');
id.innerText = `Post Id - ${post.id}, User Id - ${post.userId}`;
wrap.appendChild(id);