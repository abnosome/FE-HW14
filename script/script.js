//Реализуйте форму добавления карточек пользователей. В форме должны быть поля (Имя, Фамилия и Возраст). При отправке формы должна формироваться карточка с данными пользователя в интерфейсе. Дизайн страницы и расположение элементов могут быть произвольными.
const formNode = document.querySelector("#addCard");
const cards = [];
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
    const container =document.querySelector('#cardsContainer');
    container.innerText = '';
    cards.forEach(({name, surname, age})=> container.append(getCardNode(name, surname, age)))
    
}
function getCardNode(name, surname, age){
    const container =document.createElement('div');
    const nameNode = document.createElement('p'); 
    const surnameNode = document.createElement('p');
    const ageNode = document.createElement('p');
    nameNode.innerText = name;
    surnameNode.innerText = surname;
    ageNode.innerText = age;
    container.append(nameNode,surnameNode,ageNode);
    return container;
}
