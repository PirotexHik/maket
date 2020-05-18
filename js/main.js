let element = document.getElementById('bring');

console.dir(element);

element.addEventListener('mouseover', function (event) {
    event.target.textContent = 'Изменили на это!';
});
element.addEventListener('mouseout', function (event) {
    event.target.textContent = 'Двигаться к мечте!'; 
});