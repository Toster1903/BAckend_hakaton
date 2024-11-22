// Функция для переключения вкладок
function openTab(tabName) {
    console.log(`Открытие вкладки: ${tabName}`);

    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Убираем класс 'active' со всех кнопок вкладок
    const tabButtons = document.querySelectorAll('.tabs .btn');
    tabButtons.forEach((button) => {
        button.classList.remove('active');
    });

    // Показываем выбранную вкладку и добавляем класс 'active'
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.style.display = 'block';
        tabContent.classList.add('active');
    }

    // Добавляем класс 'active' к соответствующей кнопке вкладки
    const activeButton = document.querySelector(`.tabs .btn#${tabName}Tab`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM полностью загружен и разобран");

    // Добавление обработчиков на кнопки вкладок
    const galleryTabButton = document.getElementById('galleryTab');
    const uploadTabButton = document.getElementById('uploadTab');

    if (galleryTabButton) {
        galleryTabButton.addEventListener('click', () => openTab('gallery'));
    }
    if (uploadTabButton) {
        uploadTabButton.addEventListener('click', () => openTab('upload'));
    }

    // Показать вкладку галереи по умолчанию
    openTab('gallery');

    // Добавляем обработчик на клик по кнопке загрузки фото
    const uploadButton = document.getElementById('uploadButton');
    if (uploadButton) {
        console.log("Кнопка загрузки найдена");
        uploadButton.addEventListener('click', () => {
            console.log("Кнопка загрузки нажата");

            const fileInput = document.getElementById('file');
            if (fileInput) {
                fileInput.click(); // Инициируем клик по скрытому инпуту
            } else {
                console.error("Не удалось найти элемент с id 'file'");
            }
        });
    } else {
        console.error("Не удалось найти кнопку с id 'uploadButton'");
    }

    // Обработчик изменения файла (выбор файла)
    const fileInput = document.getElementById('file');
    if (fileInput) {
        console.log("Инпут файла найден");
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                alert(`Вы загрузили файл: ${file.name}`);
                console.log(`Файл выбран: ${file.name}`);
            } else {
                alert('Пожалуйста, выберите файл.');
                console.warn("Файл не был выбран");
            }
        });
    } else {
        console.error("Не удалось найти элемент с id 'file'");
    }
});
