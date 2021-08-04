const url = new URL(location);
const jsonUser = url.searchParams.get('user');
const user = JSON.parse(jsonUser);

const wrap = document.getElementById('wrap-user');
const list = document.createElement('div');
wrap.appendChild(list);
const getInfo = function (object, objectBox) {
    for (const proparty in object) {
        if (typeof object[proparty] === "object") {
            const objKey = document.createElement('h4');
            objKey.innerText = `${proparty}`;
            objectBox.appendChild(objKey);
            getInfo(object[proparty], objectBox);
        } else {
            const info = document.createElement('p');
            info.innerText = `${proparty} --- ${object[proparty]}`
            objectBox.appendChild(info);
        }
    }
}
getInfo(user, list);

const wrapButton = document.getElementsByClassName('buttonWrap')[0];
const button = document.getElementsByClassName('btn-click')[0];
const showDetal = document.getElementsByClassName('show-detal')[0];
button.innerText = 'Show post of current user';

button.onclick = () => {
    if (button.textContent == 'Show post of current user') {

        const postBox = document.createElement('div');
        postBox.classList.add('postBox');
        showDetal.appendChild(postBox);

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
                    postBox.appendChild(divPost);
                }
            })
        button.innerText = 'Hide post of current user';
    } else {
        button.innerText = 'Show post of current user';
       document.getElementsByClassName('postBox')[0].remove();
       
    }
};
wrapButton.appendChild(button);


