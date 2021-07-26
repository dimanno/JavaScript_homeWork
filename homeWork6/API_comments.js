
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        console.log(comments);

        for (const comment of comments) {

            if (comment.id %2 === 0) {
                const divComments = document.createElement('div')
                divComments.classList.add('divCom')
                const title = document.createElement("h3");
                title.innerText = `${comment.id} - ${comment.name}`;
                divComments.appendChild(title);
                const email = document.createElement('h4')
                email.innerText = `${comment.email}`;
                divComments.appendChild(email);
                const bodyComent = document.createElement('p');
                bodyComent.innerText = `${comment.body}`;
                divComments.appendChild(bodyComent);

                const wrapComments = document.getElementsByClassName('wrap_comments')[0];
                wrapComments.appendChild(divComments)
            }
        }
    })
