

document.getElementById('myTable').addEventListener('click', function(event) {
    // Проверяем, кликнули ли по td
    if (event.target.tagName === 'TD') {
        let content = event.target.textContent.trim();
        if (content) {
            alert('Значение: ' + content); // Показать значение ячейки
        } else {
            alert('Ячейка пуста');
        }
    }
});
