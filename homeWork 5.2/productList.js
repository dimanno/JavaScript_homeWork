const divList = document.getElementById('list');
const  key = 'key';

const showlist = () => {
    if (!store.length) {
        const empty = document.createElement('h3');
        empty.innerText = 'list is empty';
        divList.appendChild(empty)
    }
const battotAll = document.createElement('button');
for (const itemOfStore of store) {
    const productbox = document.createElement('div');
    const name = document.createElement('div');
    const productImg = document.createElement('img');
    const quantity = document.createElement('div');
    const price = document.createElement('div');
    const butoon = document.createElement('button');
        name.innerText = 'Name: ${item.name'
        productImg.src = item.img
        price.innerText = 'Price; ${item.prace'
        button.innerText = 'Delete'
        buttonAll.innerText = 'DeleteAll'
        butoon.onclick = () => {
            deleteitemOfStore(item.id)
        }
    productbox.append(name, productImg, price, butoon)
    divList.appendChild(productbox)
}
buttonAll.onclick = () => {
    deleteAll()
}
divList.appendChild(battotAll);
}

const deleteIOtem = (id) => {
    store = store.filter(value => value.id === id)
    localStorage.setItem(key, JSON.stringify(store))
    divList.innerHTML = ''
    showlist
}
