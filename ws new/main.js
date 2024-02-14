const table = document.querySelector('table');

table.addEventListener('click', function(e) {
    if (e.target.tagName !== 'TD') return;

    const cell = e.target;
    const cellText = cell.textContent;

    // Создаем textarea и кнопки
    const textarea = document.createElement('textarea');
    textarea.value = cellText;
    textarea.style.width = cell.offsetWidth + 'px';
    textarea.style.height = cell.offsetHeight + 'px';

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', function() {
    cell.textContent = textarea.value;
    cell.removeAttribute('contenteditable');
    textarea.remove();
    okButton.remove();
    cancelButton.remove();
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Отмена';
    cancelButton.addEventListener('click', function() {
    cell.textContent = cellText;
    cell.removeAttribute('contenteditable');
    textarea.remove();
    okButton.remove();
    cancelButton.remove();
    });

    // Добавляем элементы в DOM
    cell.appendChild(textarea);
    cell.appendChild(okButton);
    cell.appendChild(cancelButton);

    // Делаем ячейку редактируемой
    cell.setAttribute('contenteditable', true);

    // Отключаем изменение размера ячейки
    cell.style.resize = 'none';
});