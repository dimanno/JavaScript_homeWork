const divList = document.getElementById('list');
const  key = 'key';
const store = JSON.parse(localStorage.getItem(key)) || [];

const showlist = () => {
        if (!store.length) {
        const empty = document.createElement('h3');
        empty.innerText = 'list is empty';
        divList.appendChild(empty)
    }
    const buttonAll = document.createElement('button');

    for (const itemOfStore of store) {
        const productbox = document.createElement('div');
        const nameL = document.createElement('div');
        const productImg = document.createElement('img');
        const quantityL = document.createElement('div');
        const priceL = document.createElement('div');
        const button = document.createElement('button');
        nameL.innerText = `Name: ${itemOfStore.productName}`;
        productImg.src = itemOfStore.pictures;
        priceL.innerText = `Price: ${itemOfStore.price}`;
        quantityL.innerText = `Quantity: ${itemOfStore.quantityProduct}`;
        button.innerText = 'Delete';
        buttonAll.innerText = 'DeleteAll';
        button.onclick = () => {
            deleteitemOfStore(itemOfStore.id)
        };
        productbox.append(nameL, productImg, quantityL, priceL, button)
        divList.appendChild(productbox)
    };
    buttonAll.onclick = () => {
        deleteAll()
    };
    divList.appendChild(buttonAll);
}

const deleteitemOfStore = (id) => {
    store = store.filter(value => value.id !== id);
    localStorage.setItem(key, JSON.stringify(store));
    divList.innerHTML = '';
    showlist();
}

const deleteAll = () => {
    localStorage.clear()
    showlist();
    divList.innerHTML = 'List is empty';
}

showlist()