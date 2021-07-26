


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        console.log(posts);

        for (const post of posts) {
            const divPost = document.createElement('div');
            divPost.classList.add('box-post')
            const title = document.createElement('h3');
            title.classList.add('title');
            title.innerText = `${post.id} - ${post.title}`;
            divPost.appendChild(title);
            const postContent = document.createElement('p');
            postContent.innerText = `${post.body}`;
            divPost.appendChild(postContent);
            const button = document.createElement('button');
            button.innerText = 'View comments';
            button.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        console.log(comments);
                    })
            }
            divPost.appendChild(button);
            const wrap = document.getElementsByClassName('wrap')[0];
            wrap.appendChild(divPost);
        }
    })






