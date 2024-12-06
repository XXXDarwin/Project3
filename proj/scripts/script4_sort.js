document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('#sort-buttons button');
    const blocksContainer = document.querySelector('.blocks');
    let sortDirection = {}; // Хранит состояние направления сортировки для каждой кнопки

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sortType = button.getAttribute('data-sort');
            
            // Определяем направление сортировки: если уже сортировано, то меняем направление
            sortDirection[sortType] = !(sortDirection[sortType] || false);

            // Получаем карточки и преобразуем в массив
            const cards = Array.from(blocksContainer.children);

            // Сортируем карточки
            cards.sort((a, b) => {
                const valueA = parseInt(a.getAttribute(`data-${sortType}`), 10);
                const valueB = parseInt(b.getAttribute(`data-${sortType}`), 10);

                if (sortDirection[sortType]) {
                    return valueA - valueB; // По возрастанию
                } else {
                    return valueB - valueA; // По убыванию
                }
            });

            // Очищаем контейнер и добавляем отсортированные элементы
            blocksContainer.innerHTML = '';
            cards.forEach(card => blocksContainer.appendChild(card));
        });
    });
});
