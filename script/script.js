//Реализуйте форму добавления карточек пользователей. В форме должны быть поля (Имя, Фамилия и Возраст). При отправке формы должна формироваться карточка с данными пользователя в интерфейсе. Дизайн страницы и расположение элементов могут быть произвольными.
const formNode = document.querySelector("#addCard");
const cards = [];

const container = document.querySelector('#cardsContainer');
container.classList.add("cards");
const bgColor = "#1abc9c";

formNode.addEventListener("submit", event => {
    event.preventDefault();
    const {name, surname, age} = event.target;
    const card ={
        name: name.value,
        surname: surname.value,
        age: +age.value
    }
    cards.push(card);
    rerender();
    event.target.reset();
})

function rerender(){
    container.style.backgroundColor = bgColor;
    container.innerText = '';
    cards.forEach(({name, surname, age})=> container.append(getCardNode(name, surname, age)))
}

function getCardNode(name, surname, age){
    const cardNode = document.createElement('div');
    const nameNode = document.createElement('p'); 
    const surnameNode = document.createElement('p');
    const ageNode = document.createElement('p');
    nameNode.innerText = name;
    surnameNode.innerText = surname;
    ageNode.innerText = age;
    cardNode.append(nameNode, surnameNode, ageNode);
    return cardNode;
}