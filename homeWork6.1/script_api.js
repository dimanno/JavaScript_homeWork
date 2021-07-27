

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
    for (const user of users) {
        const divUser = document.createElement('div');
        divUser.classList.add('user-box');
        const userName = document.createElement('h2');
        userName.innerText = `${user.id} - Name:  ${user.name}; Username: ${user.name}`;
        divUser.appendChild(userName);
        const userEmail = document.createElement('h3');
        userEmail.innerText = `Email ${user.email}`;
        divUser.appendChild(userEmail);
        const button = document.createElement('button');
        button.innerText = 'Details';
        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {
                        const divPost = document.createElement('div');
                        divPost.classList.add('box-post');
                        const title = document.createElement('h2');
                        title.innerText = `${post.id} - ${post.title}`;
                        divPost.appendChild(title);
                        const postContent = document.createElement('p');
                        postContent.innerText = `${post.body}`;
                        divPost.appendChild(postContent);
                        const button = document.createElement('button');
                        button.innerText = 'View coments';
                        button.onclick = () => {
                            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                .then(value => value.json())
                                .then(comments => {
                                    for (const comment of comments) {
                                        const divComment = document.createElement('div');
                                        divComment.classList.add('box-comment');
                                        const nameComment = document.createElement('h3')
                                        nameComment.innerText = `${comment.id} - ${comment.name}`;
                                        divComment.appendChild(nameComment);
                                        const emailComment = document.createElement('h4');
                                        emailComment.innerText = `${comment.email}`;
                                        divComment.appendChild(emailComment);
                                        const bodyComment = document.createElement('p');
                                        bodyComment.innerText = `${comment.body}`;
                                        divComment.appendChild(bodyComment);
                                        const wrapCom = document.getElementsByClassName('wrap_comments')[0];
                                        wrapCom.appendChild(divComment);
                                        divPost.appendChild(wrapCom)
                                    }
                                })
                        }
                        divPost.appendChild(button);
                        const wrap = document.getElementsByClassName("wrap_posts")[0];
                        wrap.appendChild(divPost);
                    }
                })
        }
        divUser.appendChild(button);
        const wrap = document.getElementsByClassName('wrap-users')[0];
        wrap.appendChild(divUser);
    }
})