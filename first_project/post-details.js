console.log(location.href);

const url = new URL(location);
console.log(url);
const jsonPost = url.searchParams.get('post')
console.log(jsonPost);
const post = JSON.parse(jsonPost);

const wrap = document.getElementById('wrap-post');
const boxInfo = document.createElement('div');
boxInfo.classList.add('boxInfo');
const id = document.createElement('h2');
id.innerText = `Post Id - ${post.id}, User Id - ${post.userId}`;
boxInfo.appendChild(id);
const title = document.createElement('h3');
title.innerText = `Titel of Post - ${post.title}`;
boxInfo.appendChild(title);
const bodyPost = document.createElement('p');
bodyPost.innerText = post.body;
boxInfo.appendChild(bodyPost);
wrap.appendChild(boxInfo);

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
