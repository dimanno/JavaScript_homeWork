
const url = new URL(location);
const jsonPost = url.searchParams.get('post')
const post = JSON.parse(jsonPost);

const wrap = document.getElementById('wrap-post');
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
getInfo(post, list);

const commentBox = document.getElementsByClassName('commentBox')[0];
const wrapButton = document.getElementsByClassName('buttonWrap')[0];
const button = document.createElement('button');
button.innerText = 'Comments of post';
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            commentBox.innerHTML= ' ';
            for (const comment of comments) {
                const divComment = document.createElement('div');
                divComment.classList.add('box-comment');
                const emailCommment = document.createElement('h4');
                emailCommment.innerText = `Email - ${comment.email}`;
                divComment.appendChild(emailCommment);
                const bodyComment = document.createElement('p');
                bodyComment.innerText = comment.body;
                divComment.appendChild(bodyComment);
                commentBox.appendChild(divComment);
            }
        })
}
wrapButton.appendChild(button);
