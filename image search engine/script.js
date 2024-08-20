document.addEventListener('DOMContentLoaded', function () {
    const fruitItems = document.querySelectorAll('.fruit-item');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const searchInput = document.getElementById('searchInput');

    let currentSet = 1;
    const itemsPerSet = 8;

    function updateFruitList() {
        fruitItems.forEach((item, index) => {
            if (index >= (currentSet - 1) * itemsPerSet && index < currentSet * itemsPerSet) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    prevButton.addEventListener('click', function () {
        if (currentSet > 1) {
            currentSet--;
            updateFruitList();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentSet < Math.ceil(fruitItems.length / itemsPerSet)) {
            currentSet++;
            updateFruitList();
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();
        fruitItems.forEach(item => {
            const fruitName = item.querySelector('p').textContent.toLowerCase();
            if (fruitName.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    updateFruitList(); // Initial display
});
