

fetch('https://jsonplaceholder.typicode.com/posts')
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
                button.addEventListener('click', () => {
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
                                const wrapCom = document.getElementsByClassName('wrapCom')[0];
                                wrapCom.appendChild(divComment);
                                divPost.appendChild(wrapCom)
                            }
                        })
                })
                // button.addEventListener('click', () => {
                //     location.href('http://localhost:63342/JavaScript_homeWork/classWork6/comments.html?_ijt=1tfuc2ddf40jrqrfvp02rsfmr8&_ij_reload')
                // })
                divPost.appendChild(button);
                const wrap = document.getElementsByClassName("wrap")[0];
                wrap.appendChild(divPost);
            }
        })